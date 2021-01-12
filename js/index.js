// Your code goes here

const contentPara = document.querySelector('.content-section .text-content p');
const contentPara2 = contentPara.nextSibling.nextSibling;
const inverseContentPara = document.querySelector('.inverse-content .text-content p');
const inverseContentPara2 = inverseContentPara.nextSibling.nextSibling;
const topNav = document.querySelector('.nav-container');
const getH2 = document.querySelectorAll('h2');
const getH2Array = Array.from(getH2);
const buttons = document.querySelectorAll('.btn');
const buttonsArray = Array.from(buttons);
const homeButton = document.querySelector('.nav-link');
const getBody = document.querySelector('body');
const getLogo = document.querySelector('.logo-heading');
const navItems = document.querySelectorAll('.nav .nav-link');
const navItemsArray = Array.from(navItems);


// Hovering over the 'lets go' text changes the color of the text!

contentPara.addEventListener('mouseover', (e) => {
    contentPara.style.color = 'blue';
});
contentPara.addEventListener('mouseleave', (e) => {
    contentPara.style.color = null;
});

contentPara2.addEventListener('mouseover', (e) => {
    contentPara2.style.color = 'blue';
});
contentPara2.addEventListener('mouseleave', (e) => {
    contentPara2.style.color = null;
});

// Hovering over the 'adventure awaits' text changes the color of the text!

inverseContentPara.addEventListener('mouseover', (e) => {
    inverseContentPara.style.color = 'red';
});
inverseContentPara.addEventListener('mouseleave', (e) => {
    inverseContentPara.style.color = null;
});
inverseContentPara2.addEventListener('mouseover', (e) => {
    inverseContentPara2.style.color = 'red';
});
inverseContentPara2.addEventListener('mouseleave', (e) => {
    inverseContentPara2.style.color = null;
});

// If you're on the site and press 'F', an alert pops up telling you you're going to have a great time

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 70) {
    alert(`You're about to have a great time!`);
    }
});

//When scrolling, the nav bar stays at the top of the screen!

topNav.addEventListener('scroll', (e) => {
    topNav.style.position = 'fixed';
    topNav.style.top = '0';
    topNav.style.zIndex = '99';
});

// All the h2 tags change to orange when the page is resized!

window.addEventListener('resize', (e) => {
    getH2Array.forEach(element => {
        element.style.color = 'orange';
    });
});

// When the window loads, the hover animation on the buttons transition slower!

window.addEventListener('load', (e) => {
    buttonsArray.forEach(element => {
        element.style.transition = '.3s';
    });
});

// When the home button is double clicked, the body of the page turns gray!

homeButton.addEventListener('dblclick', (e) => {
    getBody.style.backgroundColor = 'lightGray';
});

// When the G key is unpressed, the logo toggles between green and black!

window.addEventListener('keyup', (e) => {
    if (e.keyCode === 71) {
        getLogo.classList.toggle('green');
    };
});

// The logo will rotate around 360 degrees each time it is clicked!

getLogo.addEventListener('mousedown', (e) => {
    getLogo.classList.toggle('rotate');
});

getLogo.addEventListener('transitionend', (e) => {
    getLogo.classList.toggle('rotate');
});

// Task 2 prevent event propagation

function listener (event) {
    console.log(event.target);
};

window.addEventListener('click', listener);

document.addEventListener('click', e => e.stopPropagation());

document.body.addEventListener('click', listener);

// Task 2 navigation items

navItemsArray.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Prevented!');
    });
});



