const eyeIcon = document.querySelector(".bi-eye-slash");
const password = document.querySelector("#password");
const forms = document.querySelectorAll(".needs-validation");
const darkIcon = document.querySelector(".bi-moon-fill")

eyeIcon.addEventListener("click", function () {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("bi-eye");
});

Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});

darkIcon.addEventListener('click', function() {
    const main = document.querySelector('main');
    const wrapper = document.querySelector('.wrapper');
    main.classList.toggle('dark-mode');
    wrapper.classList.toggle('dark-mode');
    this.classList.toggle("text-white")
})
