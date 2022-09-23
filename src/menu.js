const menuContent = () =>{

    const content = document.getElementById("content");
    content.innerHTML = ""; 


    const div1 = document.createElement('div');
    div1.classList.add('typeofmenu');
    div1.textContent = 'pizza';

    const div2 = document.createElement('div');
    div2.classList.add('typeofmenu');
    div2.textContent = 'chicken';

    const div3 = document.createElement('div');
    div3.classList.add('typeofmenu');
    div3.textContent = 'sandwich';

    const div4 = document.createElement('div');
    div4.classList.add('typeofmenu');
    div4.textContent = 'pasta';

    const div5 = document.createElement('div');
    div5.classList.add('typeofmenu');
    div5.textContent = 'noodles';

    const div6 = document.createElement('div');
    div6.classList.add('typeofmenu');
    div6.textContent = 'ice cream';

    const div7 = document.createElement('div');
    div7.classList.add('typeofmenu');
    div7.textContent = 'cake';
    
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
    content.appendChild(div4);
    content.appendChild(div5);
    content.appendChild(div6);
    content.appendChild(div7);

};
 
 export {menuContent};