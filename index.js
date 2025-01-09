const toggleButton = document.getElementById("toggle-mode");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Check for saved theme in localStorage or default to dark mode
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || !savedTheme) {
  body.classList.add("dark-mode");
  themeIcon.src = "./assets/images/sun-icon.png";
} else {
  themeIcon.src = "./assets/images/moon-icon.png";
}

// Event listener for theme toggle
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change icon based on the current theme
  if (body.classList.contains("dark-mode")) {
    themeIcon.src = "./assets/images/sun-icon.png";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.src = "./assets/images/moon-icon.png";
    localStorage.setItem("theme", "light");
  }
});


      function resetForm() {
        // Wait for the submission to process and reset the form
        setTimeout(() => {
          document.querySelector("form").reset();
        }, 1000); // Optional delay for better user experience
      }