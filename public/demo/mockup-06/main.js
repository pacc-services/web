const track = document.querySelector('.track')
const dots = document.querySelector('.dots')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slides = Array.from(track.children)
let active = 0

function buildDots() {
  slides.forEach((_, idx) => {
    const button = document.createElement('button')
    if (idx === 0) button.classList.add('active')
    button.addEventListener('click', () => goTo(idx))
    dots.appendChild(button)
  })
}

function goTo(index) {
  active = (index + slides.length) % slides.length
  const offset = active * slides[0].getBoundingClientRect().width
  track.style.transform = `translateX(-${offset}px)`
  dots
    .querySelectorAll('button')
    .forEach((dot, idx) => dot.classList.toggle('active', idx === active))
}

prev.addEventListener('click', () => goTo(active - 1))
next.addEventListener('click', () => goTo(active + 1))
buildDots()
let timer = setInterval(() => goTo(active + 1), 4000)
track.addEventListener('pointerdown', () => clearInterval(timer))
