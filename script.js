// script.js
console.log("Hello, World!");

// Add event listener to nav links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Link clicked!");
  });
});

// Get the button and container elements
const changeBackgroundBtn = document.getElementById("change-background-btn");
const backgroundContainer = document.getElementById("background-container");

// Define an array of background images
const backgroundImages = [
  'url("image1.jpg")',
  'url("image2.png")',
  'url("image3.jpg")',
  'url("image4.jpg")',
  'url("image5.jpg")',
  'url("image6.jpg")',
  'url("image7.jpg")',
  'url("image8.jpg")'
  // Add more images to the array as needed
];

// Set the initial background image
backgroundContainer.style.backgroundImage = backgroundImages[0];

// Add an event listener to the button
changeBackgroundBtn.addEventListener("click", () => {
  // Get the current background image index
  let currentIndex = backgroundImages.indexOf(
    backgroundContainer.style.backgroundImage
  );

  // Increment the index and wrap around to 0 if necessary
  currentIndex = (currentIndex + 1) % backgroundImages.length;

  // Set the new background image
  backgroundContainer.style.backgroundImage = backgroundImages[currentIndex];
});
