import axios from "axios";

const baseUrl = "http://localhost:3000"

const newUser = {
    username: "Simon",
    email: "simonko@someemail.com",
    password: "somepassword5"
}

async function reg() 
{
    const response = await axios.post(baseUrl+"/users/register", newUser)
    console.log(response.data)
}

reg()