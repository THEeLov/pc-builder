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
  

app.post('/register', async (req, res) => {
    const username: string = req.body.username;
    const email: string = req.body.email;
    const password: string = req.body.password;
    if ( ( username == undefined ) || ( email == undefined ) || ( password == undefined ) ) {
        return res.status(400).json({ message: "Invalid data post." })
    }
    try {
        await prisma.user.create(
            {
                data: {
                    username: username,
                    email: email,
                    password: await hashPassword(password),
                    userType: "USER"
                },
            }
        );
        return res.status(200).json( { message: "Success" } );
    }
    catch (error) {
        console.log("error at register", error);
        return res.status(500).json( { message: "Internal server error" } )
    }
    finally {
        prisma.$disconnect();
    }
});
