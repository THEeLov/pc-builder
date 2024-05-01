const axios = require('axios');

const baseUrl = "http://localhost:3000";

const newUser = {
    username: "Simon",
    email: "simonkooo@someemail.com",
    password: "somepassword5"
};

async function reg() {
    try {
        const response = await axios.post(baseUrl + "/users/register", newUser);
        console.log(response.data);
    } catch (error) {
        console.error('Registration failed:', error.response.data);
    }
}

reg();
