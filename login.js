document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple login logic (Replace this with actual authentication if needed)
    if (username === "user" && password === "password") {
        alert("Login successful");
        window.location.href = "garbage-request.html"; // Redirect to the garbage request page
    } else {
        alert("Invalid credentials");
    }
});
