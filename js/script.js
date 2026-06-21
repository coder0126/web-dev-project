

function greetings(fname, today) {
    var hour = today.getHours();

    if (hour < 12) {
        var greeting = "Good Morning!";
    } else if (hour < 18) {
        var greeting = "Good Afternoon!";
    } else {
        var greeting = "Good Evening!";
    }
    return greeting + " " + fname + " " + "<br>Welcome to my website!";
}

function displayGreeting() {
    var name = document.getElementById("nameInput").value;
    var today = new Date();
    var message = greetings(name, today);
    document.getElementById("greetingMessage").innerHTML = message;
}


function themeToggle() {
    var body = document.body;
    body.classList.toggle("dark-theme");
    const themeToggleBtn = document.getElementById("themeTogglebtn");  
    if (body.classList.contains("dark-theme")) {
        themeToggleBtn.textContent = "light";  
    } else {
        themeToggleBtn.textContent = "dark";  
    }
}


function toggleMenu() {
    const nav = document.querySelector("nav ul");  
    nav.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function() {
    
    const themeToggleBtn = document.getElementById("themeTogglebtn");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", themeToggle);
    }
    
    const menuToggleBtn = document.getElementById("menu");
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener("click", toggleMenu);
    }
});

console.log("Script loaded successfully.");