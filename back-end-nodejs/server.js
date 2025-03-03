// Create endpoints with Express
const express = require('express');

// Enables cross-origin requests, allowing resources by other origins
const cors = require('cors');

// Load environment variables from .env file
require('dotenv').config()

// Import Supabase client using CommonJS
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

// Initialize express
const app = express();

// Middleware that will parse JSON bodies
app.use(express.json());

// by adding cors() to Express app, we're allowing cross-origin requests to our server's resources
app.use(cors());

async function register_new_user(_email, _password) {
    // Sign up to supabase
    const { data, error } = await supabase.auth.signUp({
        email: _email,
        password: _password,
    })

    console.log("error", error);
}

// post end-point
app.post('/register', (req, res) => {
    const {email, password} = req.body;
    const errors = [];

    // Verify email
    if (!email || email.length > 350) {
        errors.push("Email must be less than 350 characters")
    }

    // Verify password
    if (!password || password.length < 14) {
        errors.push("Password must be more than 14 characters")
    }

    // If there are erros, send back to client
    if (errors.length > 0) {
        return res.status(400).json({errors});
    }

    // Sign up to supabase
    register_new_user(email, password);

    // Send this back to user's frontend client
    res.send('User registered successfully.');
});

app.listen(3000, () => {
    console.log('Server running on http://127.0.0.1:3000');
});







