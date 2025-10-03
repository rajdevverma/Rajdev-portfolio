
// Dark Mode Toggle
function toggleMode() {
  document.body.classList.toggle("dark");
  const btn = document.querySelector(".toggle-btn");
  btn.textContent = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
}

// Scrollspy
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a:not(.resume-btn)");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
});
