import './css/style.css';

const headerContent = () =>{

    const header = document.querySelector("#header");

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('menus');
    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.setAttribute('id','home');
    homeButton.classList.add('menubtns');
    homeDiv.appendChild(homeButton);
    header.appendChild(homeDiv);


   const menuDiv = document.createElement('div');
    menuDiv.classList.add('menus');
    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.setAttribute('id','menu');
    menuButton.classList.add('menubtns');
    menuDiv.appendChild(menuButton);
    header.appendChild(menuDiv);


    const contactDiv = document.createElement('div');
    contactDiv.classList.add('menus');
    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact Us";
    contactButton.setAttribute('id','contactus');
    contactButton.classList.add('menubtns');
    contactDiv.appendChild(contactButton);
    header.appendChild(contactDiv);
};

export {headerContent}; 