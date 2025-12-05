// Hydrogen Reactor Core Hero - Particle animation
const canvas = document.getElementById('reactor-canvas')
const ctx = canvas.getContext('2d')

let width, height
const particles = []
const particleCount = 100

function resize() {
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
}

class Particle {
  constructor() {
    this.reset()
  }

  reset() {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.size = Math.random() * 2 + 1
    this.life = Math.random()
    this.decay = Math.random() * 0.01 + 0.001
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.life -= this.decay

    // Reset if out of bounds or dead
    if (this.life <= 0 || this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.reset()
    }
  }

  draw() {
    const alpha = this.life * 0.6
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(0, 217, 255, ${alpha})`
    ctx.fill()

    // Glow effect
    ctx.shadowBlur = 10
    ctx.shadowColor = 'rgba(0, 217, 255, 0.8)'
    ctx.fill()
    ctx.shadowBlur = 0
  }
}

function init() {
  resize()
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }
}

function animate() {
  ctx.fillStyle = 'rgba(0, 8, 20, 0.05)'
  ctx.fillRect(0, 0, width, height)

  particles.forEach((particle) => {
    particle.update()
    particle.draw()
  })

  requestAnimationFrame(animate)
}

window.addEventListener('resize', resize)
init()
animate()

// Mouse interaction
let mouseX = width / 2
let mouseY = height / 2

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY

  // Attract nearby particles
  particles.forEach((particle) => {
    const dx = mouseX - particle.x
    const dy = mouseY - particle.y
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < 150) {
      particle.vx += dx * 0.0001
      particle.vy += dy * 0.0001
    }
  })
})
