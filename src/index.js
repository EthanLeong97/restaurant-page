import loadHome from "./loadhome";
import loadMenu from "./loadmenu";
import loadAbout from "./loadabout";

const content = document.getElementById("content");

function clearContent () {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}

function loadButtons () {
    const tabs = document.createElement('div');
    const home = document.createElement('button');
    home.textContent = 'Home';
    home.id = 'home';
    tabs.appendChild(home);
    const menu = document.createElement('button');
    menu.textContent = 'Menu';
    tabs.appendChild(menu);
    menu.id = 'menu';
    const about = document.createElement('button');
    about.textContent = 'About';
    tabs.appendChild(about);
    about.id = 'about';
    content.before(tabs);
};

loadHome();
loadButtons();

const buttons = document.querySelectorAll('button');
// add an event listener to each button
buttons.forEach((button) => button.addEventListener('click', () => {
    clearContent()
    if (button.id === 'home'){
        loadHome();
    }
    else if (button.id === 'menu'){
        loadMenu();
    }
    else if (button.id === 'about'){
        loadAbout();
    }
}));