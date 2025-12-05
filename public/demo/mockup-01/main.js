import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.164/build/three.module.js'
import { createRenderer, createCamera, handleResize, createParticleField, pulseMaterial } from '../shared/three-utils.js'

const canvas = document.getElementById('hero-canvas')
if (!canvas) return

const scene = new THREE.Scene()
scene.fog = new THREE.FogExp2(0x003355, 0.005)

const camera = createCamera(canvas, 65, 0.1, 500)
const renderer = createRenderer(canvas)

const particles = createParticleField(800, 180, 0x5cb85c)
scene.add(particles)

const geometry = new THREE.TorusKnotGeometry(16, 4, 200, 16)
const material = new THREE.MeshStandardMaterial({
  color: 0x00497a,
  emissive: 0x003355,
  metalness: 0.6,
  roughness: 0.2,
  transparent: true,
  opacity: 0.92,
})
const torus = new THREE.Mesh(geometry, material)
torus.position.set(0, 0, -30)
scene.add(torus)

const light = new THREE.PointLight(0x5cb85c, 2, 200)
light.position.set(30, 20, 40)
scene.add(light)
scene.add(new THREE.AmbientLight(0x0066a6, 0.6))

handleResize(renderer, camera, canvas)

let mouseX = 0
let mouseY = 0
let animationId = null
let isPageVisible = true

document.addEventListener('pointermove', (event) => {
  const x = (event.clientX / window.innerWidth) * 2 - 1
  const y = (event.clientY / window.innerHeight) * 2 - 1
  mouseX = x
  mouseY = y
})

// Pause animation when tab is not visible
document.addEventListener('visibilitychange', () => {
  isPageVisible = !document.hidden
  if (!isPageVisible && animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  } else if (isPageVisible && !animationId) {
    animate(performance.now())
  }
})

function animate(time) {
  if (!isPageVisible) return
  
  animationId = requestAnimationFrame(animate)
  const t = time * 0.001
  torus.rotation.x += 0.002
  torus.rotation.y += 0.003
  particles.rotation.y -= 0.0008
  particles.rotation.x = Math.sin(t * 0.2) * 0.2
  torus.position.x = mouseX * 6
  torus.position.y = -mouseY * 4
  pulseMaterial(material, t, 1.5)
  renderer.render(scene, camera)
}

animate(0)
