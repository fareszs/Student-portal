window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.9;
      if (sectionTop < triggerPoint) {
        section.classList.add("active");
      }
    });
  }
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});

const pass = document.getElementById("password");
const btn = document.getElementById("btn-eye");
const icon = document.querySelector(".icon");
btn.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    pass.type = "password";
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
  }
});
function checklogin(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log('Email:', email);
  console.log('Password:', password);
  alert('Login successful!');
  if (/\.admin\b/i.test(email)) {
    window.location.href = "admin-main-page.html";
} else {
    window.location.href = "student-main-page.html";
}

}