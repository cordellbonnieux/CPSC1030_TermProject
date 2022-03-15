/*
*   selectors
*/
const header = document.querySelector('heqader')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
let page = getPage()

/*
* navigation
*/
const links = [
    'home',
    'web',
    'graphics',
    'work experience',
    'education',
]

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