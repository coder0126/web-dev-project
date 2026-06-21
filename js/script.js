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
    var nameInput = document.getElementById("nameInput");
    var name = nameInput ? nameInput.value.trim() : '';
    var today = new Date();
    var message = greetings(name, today);
    var greetingEl = document.getElementById("greetingMessage");
    if (greetingEl) {
        greetingEl.innerHTML = message;
    }
}


function themeToggle() {
    var body = document.body;
    body.classList.toggle("dark-theme");
    const themeToggleBtn = document.getElementById("themeTogglebtn") || document.getElementById("themeToggleBtn");  
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        if (themeToggleBtn) {
            themeToggleBtn.textContent = "Light";
        }
    } else {
        localStorage.setItem("theme", "light");
        if (themeToggleBtn) {
            themeToggleBtn.textContent = "Dark";
        }
    }
}


function toggleMenu() {
    const nav = document.querySelector("nav ul");  
    nav.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }
    
    const themeToggleBtn = document.getElementById("themeTogglebtn") || document.getElementById("themeToggleBtn");
    if (themeToggleBtn) {
        if (document.body.classList.contains("dark-theme")) {
            themeToggleBtn.textContent = "Light";
        } else {
            themeToggleBtn.textContent = "Dark";
        }
        themeToggleBtn.addEventListener("click", themeToggle);
    }
    
    const menuToggleBtn = document.getElementById("menu");
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener("click", toggleMenu);
    }

    const greetBtn = document.getElementById("greetBtn");
    if (greetBtn) {
        greetBtn.addEventListener("click", function (event) {
            event.preventDefault();
            displayGreeting();
        });
    }

    displayGreeting();
});

console.log("Script loaded successfully.");
