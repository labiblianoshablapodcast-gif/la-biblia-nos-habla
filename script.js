const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("prayerForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", event => {
  event.preventDefault();
  status.textContent = "El diseño del formulario está listo. Lo conectaremos al correo ministerial antes de publicar.";
});
