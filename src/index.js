import { headerContent } from './header';
import { homeContent } from './home';
import { menuContent } from './menu';
import { contactUsContent } from './contactus';
import background from './images/background.jpg';

document.body.classList.add('body');

headerContent();
homeContent();

let buttons = document.querySelectorAll('button');

buttons.forEach(currentbutton => {
    currentbutton.addEventListener('click', (e) => {
        //console.log(currentbutton.id == 'home');
        if(currentbutton.id == 'home'){
            homeContent();
        }
        if(currentbutton.id == 'menu'){
            menuContent();
        }
        if(currentbutton.id == 'contactus'){
            contactUsContent();
        }
    });
});

