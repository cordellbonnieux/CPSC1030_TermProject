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
* header with contact
*/
const title = document.createElement('h1')
const wrap = document.createElement('div')
const contact = document.createElement('div')
const email = document.createElement('a')
email.href = 'mailto:cbonnieux00@mylangara.ca'
email.textContent = 'cbonnieux00@mylangara.ca'
wrap.id = 'wrap'
title.textContent = 'Cordell Bonnieux\'s Resume'
contact.appendChild(email)
header.appendChild(wrap)
wrap.appendChild(title)
wrap.appendChild(contact)


/*
* navigation
* hamburger menu icon, social links, navigation list
*/
// declare elements
const nav = document.createElement('nav')
const socials = document.createElement('div')
const navList = document.createElement('ul')
const githubWrap = document.createElement('a')
const linkedinWrap = document.createElement('a')
const github = new Image(32, 32)
const linkedin = new Image(32, 32)
const hamburger = document.createElement('div')
const links = [
    'home',
    'web',
    'graphics',
    'work experience',
    'volunteer experience',
    'education',
]

// create hamburger icon using span nodes
for (let i = 0; i < 3; i++) {
    hamburger.appendChild(document.createElement('span'))
}

// add social icons to object
github.src = '../img/github.png'
linkedin.src = '../img/linkedin.png'
linkedinWrap.href = 'https://www.linkedin.com/in/cordell-bonnieux-0896641b8/'
githubWrap.href = 'https://github.com/cordellbonnieux'
linkedinWrap.target = '_blank'
githubWrap.target = '_blank'

// assign ids
hamburger.id = 'hamburger'
socials.id = 'socials'
github.className = 'social'
linkedin.className = 'social'

// append elements
linkedinWrap.appendChild(linkedin)
githubWrap.appendChild(github)
socials.appendChild(linkedinWrap)
socials.appendChild(githubWrap)
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
* page - grid
*/
function createGrid(content) {
    const container = document.createElement('div')
    container.id = 'grid'
    content.forEach((object) => {
        let item = document.createElement('div')
        item.className = 'item text'

        let titleWrap = document.createElement('a')
        titleWrap.href = object.href
        titleWrap.target = '_blank'

        let title = document.createElement('h3')
        title.textContent = object.title

        let imgWrap = document.createElement('a')
        imgWrap.href = object.href
        imgWrap.target = '_blank'

        let img = document.createElement('img')
        img.src = object.img
        img.alt = object.title

        let description = document.createElement('p')
        description.textContent = object.description

        container.appendChild(item)
        item.appendChild(imgWrap)
        item.appendChild(titleWrap)
        item.appendChild(description)
        titleWrap.appendChild(title)
        imgWrap.appendChild(img)
    })
    main.appendChild(container)
}
/*
* main section
* depending on the current page, display dynamic content
*/
if (page == 'web') {
    createGrid(getWebData()) //webMockContent
} else if (page == 'graphics') {
    createGrid(getGraphicsData())
}

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
        case 'graphics' : return 'graphics'
        default : console.log('The page was not recognized by getPage() function.')
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

/**
 * Page Data Goes Here
 */
function getWebData() {
    return [
        {
            title: 'Asteroid Blaster',
            href: 'https://cordellbonnieux.github.io/CPSC2130_Lab3/',
            img: '../img/asteroids.png',
            description: 'This is a "twin-stick shooter" I built using vanilla JavaScript and the Canvas API. Embracing common game design techniques I opted for an object oriented approach in this game\'s design.'
        },
        {
            title: 'Weather App',
            href: 'https://cordellbonnieux.github.io/Weather-App/dist/',
            img: '../img/weather.png',
            description: 'This web application allows you to retrieve the current weather conditions for any city on the planet.' +
            'This app was built using Node.js, Webpack, JavaScript and REST APIs for getting the weather and relevent images.'
        },
        {
            title: 'Tic Tac Toe',
            href: 'https://cordellbonnieux.github.io/tic-tac-toe/',
            img: '../img/tic.png',
            description: 'Another vanilla JavaScript game, this classic I built playable versus the AI, or locally with a friend.'
        },
        {
            title: 'Bouncy Ball',
            href: 'https://cordellbonnieux.github.io/CPSC2130_Lab7/',
            img: '../img/ball.png',
            description: 'This JavaScript application was built using the BABYLON.js library. In this game, you are a bouncy ball,' +
            'you can move with W A S D, jump with Space-Bar and activate the animations with the shift button.'
        }
    ]
}

function getGraphicsData() {
    return [
        {
            title: 'Dance Party',
            href: '../img/dance.png',
            img: '../img/dance.png',
            description: 'A flyer I did for a dance party last year, created using GIMP2.'
        },
        {
            title: 'Fractured Concert',
            href: '../img/fractured.jpg',
            img: '../img/fractured.jpg',
            description: 'Also created using GIMP2, a flyer for an upcoming concert.'
        },
        {
            title: 'Raw War LP',
            href: '../img/rawwar.jpg',
            img: '../img/rawwar.jpg',
            description: 'The cover of a layout for a 12" record I completed recently, using Photoshop, GIMP2 and Illustrator.'
        },
        {
            title: 'Phane 7"',
            href: '../img/phane.jpg',
            img: '../img/phane.jpg',
            description: 'The cover of another record layout which I created using Photoshop.'
        }
    ]
}