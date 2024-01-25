// 'use strict';

//manages light/dark themes
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    document.documentElement.classList.toggle('light-theme')
    document.documentElement.classList.toggle('dark-theme')

const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark Mode";
    } else {
        this.textContent = "Light Mode";
    }

    console.log('current class name: ' + className);
});

 //manages mobile nav 
 function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}   