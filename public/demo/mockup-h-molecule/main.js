// Hydrogen Molecule Sculpture Hero - Electron particles
const canvas = document.getElementById('molecule-canvas')
const ctx = canvas.getContext('2d')

let width, height
const electrons = []
const electronCount = 60

function resize() {
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
}

class Electron {
  constructor() {
    this.angle = Math.random() * Math.PI * 2
    this.radius = 200 + Math.random() * 100
    this.speed = (Math.random() - 0.5) * 0.02
    this.size = Math.random() * 3 + 1
    this.centerX = width / 2
    this.centerY = height / 2 - 100
    this.opacity = Math.random() * 0.5 + 0.3
    this.orbitSpeed = Math.random() * 0.01 + 0.005
  }

  update() {
    this.angle += this.orbitSpeed
    this.x = this.centerX + Math.cos(this.angle) * this.radius
    this.y = this.centerY + Math.sin(this.angle) * this.radius * 0.5

    // Spiral effect
    this.radius += Math.sin(this.angle * 3) * 0.5
    if (this.radius < 150) this.radius = 150
    if (this.radius > 350) this.radius = 350
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)

    // Gradient color from violet to cyan
    const hue = ((this.angle * 180) / Math.PI) % 360
    ctx.fillStyle = `hsla(${260 + hue * 0.3}, 70%, 65%, ${this.opacity})`
    ctx.fill()

    // Glow effect
    ctx.shadowBlur = 15
    ctx.shadowColor = `hsla(${260 + hue * 0.3}, 80%, 65%, 0.8)`
    ctx.fill()
    ctx.shadowBlur = 0

    // Trail effect
    if (Math.random() > 0.98) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${260 + hue * 0.3}, 70%, 65%, 0.1)`
      ctx.fill()
    }
  }
}

function init() {
  resize()
  for (let i = 0; i < electronCount; i++) {
    electrons.push(new Electron())
  }
}

function animate() {
  ctx.fillStyle = 'rgba(10, 10, 15, 0.08)'
  ctx.fillRect(0, 0, width, height)

  electrons.forEach((electron) => {
    electron.update()
    electron.draw()
  })

  // Draw occasional streaks
  if (Math.random() > 0.95) {
    const streak = electrons[Math.floor(Math.random() * electrons.length)]
    ctx.beginPath()
    ctx.moveTo(streak.x, streak.y)
    ctx.lineTo(streak.x + Math.cos(streak.angle) * 50, streak.y + Math.sin(streak.angle) * 25)
    ctx.strokeStyle = `rgba(0, 217, 255, ${streak.opacity * 0.5})`
    ctx.lineWidth = 2
    ctx.stroke()
  }

  requestAnimationFrame(animate)
}

window.addEventListener('resize', () => {
  resize()
  // Recalculate electron center positions
  electrons.forEach((e) => {
    e.centerX = width / 2
    e.centerY = height / 2 - 100
  })
})

init()
animate()

// Mouse interaction - zoom effect
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX
  const mouseY = e.clientY

  electrons.forEach((electron) => {
    const dx = mouseX - electron.x
    const dy = mouseY - electron.y
    const dist = Math.sqrt(dx * dx + dy * dy)

    // Subtle attraction to mouse
    if (dist < 200) {
      electron.orbitSpeed += 0.0001
    }
  })
})
