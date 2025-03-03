
// Send JSON post request to end-point
async function registerUser(email, password) {
    try {
        const response = await axios.post('http://127.0.0.1:3000/register', {
            email: email,
            password: password
        });
        console.log('Response from server:', response.data);
    } catch (error) {
        console.error('Error in request:', error);
    }
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function (e) {

    // Get references
    const registerBtn = document.getElementById("register-btn")
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    // Handle submit button
    registerBtn.addEventListener('click', function (event) {
        event.preventDefault()
        registerUser(email.value, password.value)
    })
})

