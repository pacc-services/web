import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.164/build/three.module.js'
import { createRenderer, createCamera, handleResize, createParticleField, createNeonGrid, createLowPolyPrism } from '../shared/three-utils.js'

const canvas = document.getElementById('radical-canvas')
const scene = new THREE.Scene()
scene.fog = new THREE.FogExp2(0x030a12, 0.006)

const camera = createCamera(canvas, 70, 0.1, 2000)
camera.position.set(0, 0, 140)
const renderer = createRenderer(canvas)
handleResize(renderer, camera, canvas)

const particles = createParticleField(1600, 260, 0x5cb85c)
scene.add(particles)

const grid = createNeonGrid(220, 90, 0x0066a6)
grid.position.z = -40
grid.rotation.x = Math.PI / 2
scene.add(grid)

const prism = createLowPolyPrism(26, 70, 0x00497a)
prism.position.z = -10
scene.add(prism)

const rings = new THREE.Group()
for (let i = 0; i < 5; i++) {
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(24 + i * 8, 0.7 + i * 0.2, 16, 150),
    new THREE.MeshStandardMaterial({ color: 0x5cb85c, emissive: 0x1c532d, metalness: 0.6, roughness: 0.25, transparent: true, opacity: 0.7 }),
  )
  ring.rotation.x = Math.PI / 2
  rings.add(ring)
}
rings.position.z = -60
scene.add(rings)

const glow = new THREE.PointLight(0x5cb85c, 2, 260)
glow.position.set(0, 50, 40)
scene.add(glow)
scene.add(new THREE.AmbientLight(0x7bb6ff, 0.5))

const sections = Array.from(document.querySelectorAll('.chapter'))
const maxDepth = Math.max(...sections.map((s) => Number(s.dataset.depth)))
let targetDepth = 0
let scrollY = 0

function updateDepth() {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = docHeight === 0 ? 0 : window.scrollY / docHeight
  scrollY = progress
  const exact = progress * maxDepth
  targetDepth = exact
}

window.addEventListener('scroll', updateDepth)
updateDepth()

function animate(time) {
  requestAnimationFrame(animate)
  const t = time * 0.001

  particles.rotation.y -= 0.0005
  particles.rotation.x = Math.sin(t * 0.3) * 0.15
  grid.rotation.z = Math.sin(t * 0.2) * 0.4
  prism.rotation.y += 0.003
  prism.rotation.x = Math.sin(t * 0.4) * 0.4
  rings.rotation.z += 0.0008

  const depthLerp = targetDepth / Math.max(maxDepth, 1)
  const targetZ = 140 - depthLerp * 90
  const targetY = Math.sin(depthLerp * Math.PI) * 16
  camera.position.z += (targetZ - camera.position.z) * 0.08
  camera.position.y += (targetY - camera.position.y) * 0.08
  camera.lookAt(0, 0, -40)

  renderer.render(scene, camera)
}

animate(0)
