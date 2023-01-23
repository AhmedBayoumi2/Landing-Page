/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

 /* Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


/**
 * Define Global Variables
 * 
*/
// first we'll create a fragment contains what we want to add to decrease the repaint and reflow.
const fragContainer = document.createDocumentFragment();
// I'll define some variables
const navList = document.getElementById('navbar__list');
const allSections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// building li and anchors by using forEach method

allSections.forEach(section => {
    // adding li elements to sections and anchor tags
    const elementId = section.id;
    const liElement = document.createElement('li');
    const liAnchor = document.createElement('a');
    const elementData = section.getAttribute('data-nav');
    // adding hrefs to anchors to work 
    liAnchor.href =`#${elementId}`;
    liAnchor.innerText= elementData;
    liAnchor.classList.add('menu__link');
// Scroll to anchor ID using scrollTO event
liAnchor.addEventListener('click', event =>{
event.preventDefault();
section.scrollIntoView({
    behavior: 'smooth'
});
});
liElement.appendChild(liAnchor);
fragContainer.appendChild(liElement);
});
navList.appendChild(fragContainer);

// Add class 'active' to section when near top of viewport
const anchors = document.querySelectorAll('a.menue__link');
const callback = (activing) => {
let section = activing[0];
section.target.classList.remove('your-active-class');
if (section.isIntersecting){
    section.target.classList.add('your-active-class');
    anchors.forEach(anchor =>{
        if(anchor.textContent === section.target.dataset.nav){
            anchor.classList.add('active-anchor');
        }else {
            anchor.classList.remove('active-ancor')
        }
    })
} else{
    section.target.classList.remove('your-active-class')
}
// section.isIntersecting ? section.target.classList.add('your-active-class') : section.target.classList.remove('your-active-class');
};
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
}


const interSection = new IntersectionObserver(callback, options);

window.addEventListener('scroll', event =>{
    allSections.forEach(section =>{
        interSection.observe(section);
    });
});
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


