const slideImage = document.getElementById('slideImage')
const numberText = document.querySelector('.numbertext')
const dot = document.querySelectorAll('.dot')
let currentImage = 1;

function currentSlide(page) {
    currentImage = page
    slideImage.src = `./img/dietary-planner/dp-img${page}.png`
    changeNumberText(page)
    changeDotColor(page)
}

function plusSlides(direction) {
    currentImage += direction
    if (currentImage < 1) {
        currentImage = 1
    } else if (currentImage > 5) {
        currentImage = 5
    }
    changeNumberText(currentImage)
    changeDotColor(currentImage)
    slideImage.src = `./img/dietary-planner/dp-img${currentImage}.png`
}

function changeNumberText(number) {
    numberText.innerText = `${number} / 5`
}

function changeDotColor(number) {
    dot.forEach(dot => {
        dot.classList.remove('active')
    })
    dot[number - 1].classList.add('active')
}
