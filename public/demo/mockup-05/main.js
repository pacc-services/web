import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.164/build/three.module.js'
import {
  createRenderer,
  createCamera,
  handleResize,
  createParticleField,
  createNeonGrid,
} from '../shared/three-utils.js'

const canvas = document.getElementById('h2-canvas')
const scene = new THREE.Scene()
scene.fog = new THREE.FogExp2(0x003355, 0.0035)

const camera = createCamera(canvas, 55, 0.1, 800)
camera.position.set(0, 10, 90)
const renderer = createRenderer(canvas)

const particleField = createParticleField(1000, 220, 0x5cb85c)
scene.add(particleField)

const grid = createNeonGrid(140, 28, 0x0066a6)
grid.position.z = -40
scene.add(grid)

const hydrogenGroup = new THREE.Group()

const sphereMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x5cb85c,
  transmission: 0.5,
  roughness: 0.05,
  metalness: 0.2,
  clearcoat: 0.6,
  clearcoatRoughness: 0.15,
  emissive: 0x003355,
  emissiveIntensity: 0.8,
})

const hydrogen1 = new THREE.Mesh(new THREE.SphereGeometry(18, 56, 56), sphereMaterial)
hydrogen1.position.x = -26
const hydrogen2 = new THREE.Mesh(new THREE.SphereGeometry(18, 56, 56), sphereMaterial)
hydrogen2.position.x = 26

const bondGeometry = new THREE.CylinderGeometry(4, 4, 52, 32)
bondGeometry.translate(0, 0, 0)
const bondMaterial = new THREE.MeshStandardMaterial({
  color: 0x0066a6,
  metalness: 0.7,
  roughness: 0.25,
  emissive: 0x003355,
  emissiveIntensity: 0.9,
})
const bond = new THREE.Mesh(bondGeometry, bondMaterial)
bond.rotation.z = Math.PI / 2

const labelMaterial = new THREE.SpriteMaterial({
  map: createTextTexture('H₂'),
  transparent: true,
})
const label1 = new THREE.Sprite(labelMaterial)
label1.scale.set(18, 12, 1)
label1.position.set(-26, 28, 0)
const label2 = label1.clone()
label2.position.set(26, -28, 0)

hydrogenGroup.add(hydrogen1, hydrogen2, bond, label1, label2)
scene.add(hydrogenGroup)

const keyLight = new THREE.PointLight(0x5cb85c, 12, 180)
keyLight.position.set(50, 40, 80)
scene.add(keyLight)
scene.add(new THREE.AmbientLight(0x5cb85c, 0.2))

handleResize(renderer, camera, canvas)

let mouseX = 0
let mouseY = 0
document.addEventListener('pointermove', (event) => {
  mouseX = (event.clientX / window.innerWidth - 0.5) * 2
  mouseY = (event.clientY / window.innerHeight - 0.5) * 2
})

function createTextTexture(text) {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, size, size)
  ctx.font = 'bold 160px Inter'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = 'rgba(255,255,255,0.92)'
  ctx.fillText(text, size / 2, size / 2)
  return new THREE.CanvasTexture(canvas)
}

const dots = document.querySelector('.dots')
const track = document.querySelector('.carousel-track')
const slides = Array.from(track.children)
let activeSlide = 0

function buildDots() {
  slides.forEach((_, idx) => {
    const button = document.createElement('button')
    if (idx === 0) button.classList.add('active')
    button.addEventListener('click', () => goToSlide(idx))
    dots.appendChild(button)
  })
}

function goToSlide(index) {
  activeSlide = index
  const offset = index * (slides[0].getBoundingClientRect().width + 18)
  track.style.transform = `translateX(-${offset}px)`
  dots.querySelectorAll('button').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index)
  })
}

buildDots()
let auto = setInterval(() => goToSlide((activeSlide + 1) % slides.length), 4200)
track.addEventListener('pointerdown', () => {
  clearInterval(auto)
})

let animationId = null
let isPageVisible = true

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
  hydrogenGroup.rotation.y = 0.4 * Math.sin(t * 0.6) + mouseX * 0.6
  hydrogenGroup.rotation.x = 0.25 * Math.sin(t * 0.7) - mouseY * 0.4
  hydrogenGroup.position.y = Math.sin(t * 0.8) * 6
  particleField.rotation.y -= 0.0006
  renderer.render(scene, camera)
}

animate(0)
