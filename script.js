let images = ['i.jpg', 'about-pets.png', '143.webp']
let slider = document.querySelector('#slider')

let indicators;

let indicatorList = document.querySelector('#indicatorList')


for (let i = 0; i < images.length; i++) {
    let indicator = document.createElement('li')
    indicator.classList.add('indicator')
    indicatorList.appendChild(indicator)

}
indicators = document.querySelectorAll('.indicator')

let i = 0;
slider.src = `img/${images[0]}`
indicators[0].style.borderClor = 'red';



let left = document.querySelector('#left')
let right = document.querySelector('#right')

left.addEventListener('click', (event) => {
    event.preventDefault()
    next()
})

right.addEventListener('click', (event) => {
    event.preventDefault()
    prev()
})
function prev() {
    i--;
    if (i < 0) {
        i = images.length - 1//последня карт
    }
    slider.src = `img/${images[i]}`
    for (let i = 0; i < images.length; i++) {
        indicators[i].style.borderClor = 'transparent'
    }
    indicators[i].style.borderClor = 'red'
}


function next() {
    i++
    if (i > images.length - 1) {
        i = 0
    }
    slider.src = `img/${images[i]}`
    for (let i = 0; i < images.length; i++) {
        indicators[i].style.borderClor = 'red'
    }
    indicators[i].style.borderClor = 'red'
}
