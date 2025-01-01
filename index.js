const toggleButton = document.getElementById("toggle-mode");
      toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });

      const form = document.querySelector("form");
      form.addEventListener("submit", (e) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
          e.preventDefault();
          alert("Please fill out all fields.");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          e.preventDefault();
          alert("Please enter a valid email address.");
        }
      });

      function resetForm() {
        // Wait for the submission to process and reset the form
        setTimeout(() => {
          document.querySelector("form").reset();
        }, 1000); // Optional delay for better user experience
      }