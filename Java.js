// Show Location Options
function showLocationOptions() {
    alert("Find nearby locations for recycling and eco-friendly disposal.");
}

// Show Rewards
function showRewards() {
    alert("Earn rewards by participating in eco-friendly events!");
}

// Show Info on Icons
function showInfo(iconType) {
    alert(iconType + " information and resources.");
}

// Show Login Modal
document.getElementById('login-btn').onclick = function() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Close Modal on Background Click
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Login Functionality (for demo purposes)
function login() {
    alert("Login successful!");
    document.getElementById('loginModal').style.display = 'none';
}

// Show Signup Message
function showSignup() {
    alert("Redirecting to signup page...");
}
