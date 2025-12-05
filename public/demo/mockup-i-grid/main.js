// Energy Grid Visualization Hero - Grid pulse animation
const canvas = document.getElementById('grid-canvas')
const ctx = canvas.getContext('2d')

let width, height
const gridSize = 60
const pulses = []
const nodes = []

function resize() {
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight

  // Reinitialize nodes on resize
  initNodes()
}

class GridNode {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.baseSize = 3
    this.size = this.baseSize
    this.brightness = Math.random() * 0.5 + 0.3
    this.pulsePhase = Math.random() * Math.PI * 2
  }

  update() {
    this.pulsePhase += 0.02
    this.brightness = 0.3 + Math.sin(this.pulsePhase) * 0.2
    this.size = this.baseSize + Math.sin(this.pulsePhase) * 0.5
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(0, 184, 169, ${this.brightness})`
    ctx.fill()

    // Glow
    if (this.brightness > 0.4) {
      ctx.shadowBlur = 8
      ctx.shadowColor = 'rgba(0, 184, 169, 0.6)'
      ctx.fill()
      ctx.shadowBlur = 0
    }
  }
}

class Pulse {
  constructor(startNode, endNode) {
    this.start = startNode
    this.end = endNode
    this.progress = 0
    this.speed = 0.01 + Math.random() * 0.015
    this.size = 4
    this.color = Math.random() > 0.3 ? 'rgba(0, 217, 255, 0.8)' : 'rgba(255, 215, 0, 0.9)'
  }

  update() {
    this.progress += this.speed
    if (this.progress >= 1) {
      // Find new random end node
      const randomNode = nodes[Math.floor(Math.random() * nodes.length)]
      this.start = this.end
      this.end = randomNode
      this.progress = 0
    }
  }

  draw() {
    const x = this.start.x + (this.end.x - this.start.x) * this.progress
    const y = this.start.y + (this.end.y - this.start.y) * this.progress

    // Draw line from start to current position
    ctx.beginPath()
    ctx.moveTo(this.start.x, this.start.y)
    ctx.lineTo(x, y)
    ctx.strokeStyle = this.color.replace('0.8', '0.2').replace('0.9', '0.3')
    ctx.lineWidth = 1
    ctx.stroke()

    // Draw moving pulse
    ctx.beginPath()
    ctx.arc(x, y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()

    // Glow effect
    ctx.shadowBlur = 12
    ctx.shadowColor = this.color
    ctx.fill()
    ctx.shadowBlur = 0
  }
}

function initNodes() {
  nodes.length = 0

  const cols = Math.ceil(width / gridSize)
  const rows = Math.ceil(height / gridSize)

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Only add some nodes randomly for sparse grid
      if (Math.random() > 0.7) {
        const x = col * gridSize + gridSize / 2
        const y = row * gridSize + gridSize / 2
        nodes.push(new GridNode(x, y))
      }
    }
  }
}

function init() {
  resize()

  // Create initial pulses
  for (let i = 0; i < 8; i++) {
    if (nodes.length > 1) {
      const start = nodes[Math.floor(Math.random() * nodes.length)]
      const end = nodes[Math.floor(Math.random() * nodes.length)]
      pulses.push(new Pulse(start, end))
    }
  }
}

function animate() {
  // Clear with fade effect
  ctx.fillStyle = 'rgba(10, 15, 30, 0.1)'
  ctx.fillRect(0, 0, width, height)

  // Update and draw nodes
  nodes.forEach((node) => {
    node.update()
    node.draw()
  })

  // Draw connections between nearby nodes
  ctx.strokeStyle = 'rgba(0, 184, 169, 0.08)'
  ctx.lineWidth = 1

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[j].x - nodes[i].x
      const dy = nodes[j].y - nodes[i].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < gridSize * 3) {
        ctx.beginPath()
        ctx.moveTo(nodes[i].x, nodes[i].y)
        ctx.lineTo(nodes[j].x, nodes[j].y)
        ctx.stroke()
      }
    }
  }

  // Update and draw pulses
  pulses.forEach((pulse) => {
    pulse.update()
    pulse.draw()
  })

  requestAnimationFrame(animate)
}

window.addEventListener('resize', resize)

init()
animate()

// Mouse interaction - create temporary pulse on click
canvas.addEventListener('click', (e) => {
  const mouseX = e.clientX
  const mouseY = e.clientY

  // Find nearest node
  let nearest = nodes[0]
  let minDist = Infinity

  nodes.forEach((node) => {
    const dx = mouseX - node.x
    const dy = mouseY - node.y
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist < minDist) {
      minDist = dist
      nearest = node
    }
  })

  // Create pulse from nearest node
  if (nodes.length > 1) {
    const randomEnd = nodes[Math.floor(Math.random() * nodes.length)]
    pulses.push(new Pulse(nearest, randomEnd))

    // Remove oldest pulse if too many
    if (pulses.length > 15) {
      pulses.shift()
    }
  }
})
