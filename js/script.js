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
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    if (body.classList.contains("dark-theme")) {
        themeToggleBtn.textContent = "Light Mode";
    } else {
        themeToggleBtn.textContent = "Dark Mode";
    }

}
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}