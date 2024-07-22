// script.js
console.log("Hello, World!");

// Add event listener to nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        console.log("Link clicked!");
    });
});