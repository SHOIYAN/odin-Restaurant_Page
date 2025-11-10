import initLoad from "./homePage";
import loadAbout from "./about";
import loadMenu from "./menu";

document.addEventListener("DOMContentLoaded", () => {
  initLoad();

  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const about = document.getElementById('about');

  function setActiveButton(button) {
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }

  home.addEventListener('click', () => { setActiveButton(home); initLoad(); });
  menu.addEventListener('click', () => { setActiveButton(menu); loadMenu(); });
  about.addEventListener('click', () => { setActiveButton(about); loadAbout(); });
});
