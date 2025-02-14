function openModal() {
  document.getElementById("applyModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("applyModal").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let address = document.getElementById("address").value.trim();

      let nameError = document.getElementById("nameError");
      let emailError = document.getElementById("emailError");
      let phoneError = document.getElementById("phoneError");
      let addressError = document.getElementById("addressError");

      nameError.textContent = "";
      emailError.textContent = "";
      phoneError.textContent = "";
      addressError.textContent = "";

      let isValid = true;

      if (name === "") {
        nameError.textContent = "Full Name is required";
        isValid = false;
      }

      if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email";
        isValid = false;
      }

      if (phone === "" || !/^\d{10}$/.test(phone)) {
        phoneError.textContent = "Please enter a valid mobile number";
        isValid = false;
      }

      if (address === "") {
        addressError.textContent = "Please enter your address";
        isValid = false;
      }

      if (isValid) {
        alert("Form Submitted Successfully");
        document.getElementById("contactForm").reset();
      }
    });
});
