
// MENU MOBILE


// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    const menuAberto = navLinks.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", menuAberto);
  });

  // FECHAR MENU AO CLICAR EM UM LINK

  const links = document.querySelectorAll(".nav-links a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ANO AUTOMÁTICO NO RODAPÉ

const anoAtual = document.getElementById("current-year");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

