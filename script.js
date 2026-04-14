// ── DARK MODE ──
const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved preference
if (localStorage.getItem("theme") === "dark") body.classList.add("dark");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light",
  );
});

// ── ACTIVE NAV ON SCROLL ──
const sections = document.querySelectorAll("[id]");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach((l) => {
    l.classList.remove("active");
    if (l.getAttribute("href") === "#" + current) l.classList.add("active");
  });
});
