function greetings(fname, today) {
    var hour = today.getHours();

    if (hour < 12) {
        var greeting = "Good Morning!";
    } else if (hour < 16) {
        var greeting = "Good Afternoon!";
    } else {
        var greeting = "Good Evening!";
    }
    if (fname) {
        return greeting + " " + fname + "<br>Welcome to my website!";
    }
    return greeting + "<br>Welcome to my website!";
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

function updateTime() {
    var timeDisplay = document.getElementById("timeDisplay");
    if (timeDisplay) {
        var now = new Date();
        timeDisplay.innerHTML = now.toLocaleTimeString();
    }
}

function startClock() {
    updateTime();
    setInterval(updateTime, 1000);
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
    if (nav) {
        nav.classList.toggle("active");
    }
}

const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. – Aristotle",
    "The only impossible journey is the one you never begin. – Tony Robbins",
    "Success is not final, failure is not fatal. – Winston Churchill",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs"
];

function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!firstName || !lastName || !email || !subject || !message || !contactForm.checkValidity()) {
                showContactAlert("failed", "Message failed. Please fill in all required fields correctly.");
                return;
            }

            showContactAlert("success", "Message sent successfully. Thank you, " + firstName + "!");
            contactForm.reset();
        });
    }
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
    startClock();
});

console.log("Script loaded successfully.");

function showContactAlert(type, message) {
    const contactAlert = document.getElementById("contactAlert");
    if (!contactAlert) {
        alert(message);
        return;
    }

    contactAlert.textContent = message;
    contactAlert.className = "contact-alert " + type;
}

document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelectorAll('.service-toggle').forEach(function(btn) {
        btn.addEventListener('click', function (e) {
            const card = btn.closest('.service-card');
            if (!card) return;
            const isOpen = card.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    });






    const sendQuoteBtn = document.getElementById('sendQuoteBtn');
    if (sendQuoteBtn) {
        sendQuoteBtn.addEventListener('click', function () {
            const name = document.getElementById('qName');
            const email = document.getElementById('qEmail');
            const message = document.getElementById('qMessage');
            const alertEl = document.getElementById('quoteAlert');

            if (!name || !email || !message) return;
            if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
                if (alertEl) { alertEl.textContent = 'Please fill all fields.'; alertEl.className = 'text-danger'; }
                return;
            }

          
            if (alertEl) { alertEl.textContent = 'Request sent — thank you! I will respond by email.'; alertEl.className = 'text-success'; }

          
            setTimeout(function () {
                const modalEl = document.getElementById('contactModal');
                if (modalEl) {
                    const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
                    modal.hide();
                }
              
                const form = document.getElementById('quoteForm');
                if (form) form.reset();
            }, 900);
        });
    }
});
