import express from 'express';
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt, { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import cookieParser from 'cookie-parser';


const app = express();
const port = 3000;
app.use(cookieParser());
app.use(express.json());
app.use(cors(
    {
      origin: 'http://localhost:5173',
      credentials: true,
    }
));
//Middleware JSON parser
app.use(bodyParser.json());
const prisma = new PrismaClient();


async function hashPassword(password: string) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}
 
async function createSession(userId: number) {
    const creation = new Date();
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 24);
    try {
        const newSession = await prisma.session.create({
            data: {
                createdAt: creation,
                expiresAt: expiration,
                userId: userId
            }
        });
        return newSession;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}


app.post('/register', async (req, res) => {
    const username: string = req.body.username;
    const email: string = req.body.email;
    const password: string = req.body.password;
    if ( ( username == undefined ) || ( email == undefined ) || ( password == undefined ) ) {
        return res.status(400).json({ message: "Invalid data post." })
    }
    try {
        const newUser = await prisma.user.create(
            {
                data: {
                    username: username,
                    email: email,
                    password: await hashPassword(password),
                    userType: "USER"
                },
            }
        );
        const session = await createSession(newUser.id);
        if (session == null) {
            return res.status(503).json( { message: "User created, but unable to create session" } );
        }
        res.set('Access-Control-Allow-Credentials', "true");
        return res.status(200).cookie("session", session.id, {maxAge:24*60*60*1000, sameSite:'none'}).json( { message: "Succeess", id: newUser.id } );
    }
    catch (error) {
        console.log("error at register", error);
        return res.status(500).json( { message: "Internal server error" } )
    }
    finally {
        prisma.$disconnect();
    }
});

app.post('/login', async (req, res) => {
    try {
        const email: string = req.body.email;
        const password: string = req.body.password;
      if (email == undefined || password == undefined) {
        return res.status(400).json( { message: "Bad request" } );
      }
  
      // Find the user by email
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
  
      if (!user) {
        // User not found
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Compare the entered password with the stored hash
      const isPasswordMatch = await bcrypt.compare(password, user.password);
  
      if (isPasswordMatch) {
        // Passwords match, authentication successful
        const session = await createSession(user.id);
        if (!session) {
          return res.status(500).json( {message: "Server error"} );
        }
        res.set('Access-Control-Allow-Credentials', "true");
        res.cookie('session', session.id, {maxAge:24*60*60*1000, sameSite:'none'});
        return res.status(200).json({ message: 'Authentication successful', id: user.id });
      } else {
        // Passwords do not match
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    } finally {
      await prisma.$disconnect();
    }
  });
