/**
 * CPSC 1030 - Term Project Demo
 * Cordell Bonnieux 100372192
 */

/*
*   selectors
*/
const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
let page = getPage()

/*
* header
*/
const title = document.createElement('h1')
const wrap = document.createElement('div')
wrap.id = 'wrap'
title.textContent = 'Cordell Bonnieux\'s Resume'
header.appendChild(wrap)
wrap.appendChild(title)


/*
* navigation
* hamburger menu icon, social links, navigation list
*/
// declare elements
const nav = document.createElement('nav')
const socials = document.createElement('div')
const navList = document.createElement('ul')
const github = new Image(32, 32)
const linkedin = new Image(32, 32)
const hamburger = document.createElement('div')
const links = [
    'home',
    'web',
    'graphics',
    'work experience',
    'education',
]

// create hamburger icon using span nodes
for (let i = 0; i < 3; i++) {
    hamburger.appendChild(document.createElement('span'))
}

// add social icons to object
github.src = '../img/github.png'
linkedin.src = '../img/linkedin.png'


// assign ids & classes
hamburger.id = 'hamburger'
socials.id = 'socials'
github.className = 'social'
linkedin.className = 'social'

// append elements
socials.appendChild(linkedin)
socials.appendChild(github)
nav.appendChild(hamburger)
nav.appendChild(socials)
nav.appendChild(navList)
header.appendChild(nav)

// append each menu link
links.forEach((link) => createMenu(link, navList))

// Handle hamburger icon clicks
let showMenu = false
navList.className = 'none'
socials.className = 'none'
hamburger.addEventListener('click', (e) => {
    // show or hide using css classes (not properties)
    if (showMenu) {
        socials.className = 'none'
        navList.className = 'none'
        showMenu = false
    } else {
        socials.className = 'block'
        navList.className = 'block'
        showMenu = true     
    }
})

/*
* footer
*/
const footerList = document.createElement('ul')
links.forEach((link => createMenu(link, footerList)))
footer.appendChild(footerList)

/*
* helper functions
*/
// get the currently loaded page
function getPage() {
    const body = document.querySelector('body')
    switch (body.id) {
        case 'home' : return 'home'
        case 'web' : return 'web'
        default : return 'the page was not recognized'
    }
}

// create a menu based on the current page
function createMenu(link, list) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    const path = link.split(' ').join('')
    a.textContent = link

    if (page == link) {
        a.href = `#${link}`
    } else if (page != 'home' && link != 'home') {
        a.href = `${path}.html`
    } else if (page != 'home' && link == 'home') {
        a.href = `../index.html`
    } else if (page == 'home' && link != 'home') {
        a.href = `pages/${path}.html`
    }

    li.appendChild(a)
    list.appendChild(li)  
}
