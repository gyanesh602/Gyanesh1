document.getElementById('loginForm').addEventListener('submit', function(e) {
    // Ye line page ko refresh hone se rokegi
    e.preventDefault();

    // --- APNI DETAILS YAHAN SET KAREIN ---
    const correctID = "00";
    const correctPass = "00";

    const enteredID = document.getElementById('username').value;
    const enteredPass = document.getElementById('password').value;
    const errorMsg = document.getElementById('error'); // HTML mein p tag ki id 'error' honi chahiye

    if (enteredID === correctID && enteredPass === correctPass) {
        // Sahi password hone par redirect karein
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "admin-dashboard.html"; 
    } else {
        // Galat password hone par error dikhayein
        errorMsg.textContent = "❌ Wrong ID or Password! Please try again.";
        errorMsg.style.color = "#ff4d4d";
        errorMsg.style.marginTop = "10px";
        errorMsg.style.fontSize = "14px";
        
        // Input fields ko highlight karein
        document.getElementById('username').style.borderColor = "#ff4d4d";
        document.getElementById('password').style.borderColor = "#ff4d4d";

        // Login card ko shake karne ka effect
        const card = document.querySelector('.login-card');
        card.style.animation = "shake 0.5s";
        setTimeout(() => { card.style.animation = ""; }, 500);
    }
});