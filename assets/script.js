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
const socials = document.createElement('div')
const wrap = document.createElement('div')
wrap.id = 'wrap'
socials.id = 'socials'
title.textContent = 'Cordell Bonnieux\'s Resume'
socials.textContent = 'socials go here'
header.appendChild(wrap)
wrap.appendChild(title)
wrap.appendChild(socials)

/*
* navigation
*/
const nav = document.createElement('nav')
const navList = document.createElement('ul')
nav.appendChild(navList)
header.appendChild(nav)
const links = [
    'home',
    'web',
    'graphics',
    'work experience',
    'education',
]
links.forEach((link) => {
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
    navList.appendChild(li)
})


/*
* helper functions
*/
function getPage() {
    const body = document.querySelector('body')
    switch (body.id) {
        case 'home' : return 'home'
        case 'web' : return 'web'
        default : return 'something went wrong'
    }
}   