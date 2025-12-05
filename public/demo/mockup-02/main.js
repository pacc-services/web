import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.164/build/three.module.js'
import {
  createRenderer,
  createCamera,
  handleResize,
  createParticleField,
  createNeonGrid,
  createLowPolyPrism,
  pulseMaterial,
} from '../shared/three-utils.js'

const scenes = []

function initScene(id, builder) {
  const canvas = document.getElementById(id)
  const scene = new THREE.Scene()
  const camera = createCamera(canvas, 60, 0.1, 1000)
  camera.position.z = 90
  const renderer = createRenderer(canvas)
  handleResize(renderer, camera, canvas)
  builder(scene, camera)
  scenes.push({ scene, camera, renderer })
}

initScene('split-hero', (scene) => {
  const particles = createParticleField(1400, 220, 0x5cb85c)
  scene.add(particles)
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(24, 6, 16, 120),
    new THREE.MeshStandardMaterial({ color: 0x0066a6, emissive: 0x003355, metalness: 0.7, roughness: 0.35 }),
  )
  scene.add(torus)
  const light = new THREE.PointLight(0xffffff, 1.4, 400)
  light.position.set(40, 30, 60)
  scene.add(light)
  scene.add(new THREE.AmbientLight(0x0066a6, 0.4))
  scene.userData = { particles, torus }
})

initScene('split-approach', (scene) => {
  const grid = createNeonGrid(140, 40, 0x00497a)
  grid.position.z = -20
  scene.add(grid)
  const prism = createLowPolyPrism(20, 42, 0x5cb85c)
  prism.rotation.x = Math.PI / 5
  scene.add(prism)
  const light = new THREE.SpotLight(0x5cb85c, 2, 220, Math.PI / 6, 0.5, 1)
  light.position.set(50, 60, 70)
  scene.add(light)
  scene.add(new THREE.AmbientLight(0xffffff, 0.3))
  scene.userData = { prism }
})

initScene('split-problem', (scene) => {
  const particles = createParticleField(800, 180, 0x5cb85c)
  scene.add(particles)
  const wire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(30, 0),
    new THREE.MeshPhysicalMaterial({
      color: 0x00497a,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
      thickness: 1.2,
    }),
  )
  scene.add(wire)
  scene.add(new THREE.PointLight(0x5cb85c, 1.4, 260))
  scene.userData = { particles, wire }
})

initScene('split-leadership', (scene) => {
  const prism = createLowPolyPrism(24, 48, 0x0066a6)
  prism.rotation.y = Math.PI / 6
  scene.add(prism)
  const halo = new THREE.Mesh(
    new THREE.RingGeometry(18, 26, 64),
    new THREE.MeshBasicMaterial({ color: 0x5cb85c, side: THREE.DoubleSide, transparent: true, opacity: 0.4 }),
  )
  halo.rotation.x = Math.PI / 2
  scene.add(halo)
  scene.add(new THREE.AmbientLight(0xffffff, 0.5))
  const light = new THREE.PointLight(0x5cb85c, 1.8, 200)
  light.position.set(0, 50, 50)
  scene.add(light)
  scene.userData = { prism, halo }
})

initScene('split-news', (scene) => {
  const particles = createParticleField(700, 160, 0x5cb85c)
  scene.add(particles)
  const rings = new THREE.Group()
  for (let i = 0; i < 4; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(20 + i * 6, 0.9, 8, 80),
      new THREE.MeshStandardMaterial({ color: 0x00497a, emissive: 0x003355, metalness: 0.6, roughness: 0.2 }),
    )
    ring.rotation.x = (i * Math.PI) / 8
    ring.rotation.y = (i * Math.PI) / 10
    rings.add(ring)
  }
  scene.add(rings)
  const light = new THREE.PointLight(0xffffff, 1.2, 200)
  light.position.set(-30, 40, 60)
  scene.add(light)
  scene.userData = { particles, rings }
})

initScene('split-contact', (scene) => {
  const grid = createNeonGrid(120, 60, 0x5cb85c)
  grid.rotation.z = Math.PI / 4
  scene.add(grid)
  const nodes = new THREE.Group()
  for (let i = 0; i < 60; i++) {
    const node = new THREE.Mesh(
      new THREE.SphereGeometry(1.8, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x5cb85c, emissiveIntensity: 0.7 }),
    )
    node.position.set((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 40)
    nodes.add(node)
  }
  scene.add(nodes)
  scene.add(new THREE.AmbientLight(0xffffff, 0.6))
  const light = new THREE.PointLight(0x5cb85c, 1.5, 180)
  light.position.set(40, 40, 60)
  scene.add(light)
  scene.userData = { grid, nodes }
})

let animationId = null
let isPageVisible = true

document.addEventListener('visibilitychange', () => {
  isPageVisible = !document.hidden
  if (!isPageVisible && animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  } else if (isPageVisible && !animationId) {
    render(performance.now())
  }
})

function render(time) {
  if (!isPageVisible) return
  
  animationId = requestAnimationFrame(render)
  const t = time * 0.001
  scenes.forEach(({ scene, camera, renderer }) => {
    if (scene.userData.torus) {
      scene.userData.torus.rotation.x += 0.003
      scene.userData.torus.rotation.y += 0.004
      pulseMaterial(scene.userData.torus.material, t, 2)
    }
    if (scene.userData.particles) {
      scene.userData.particles.rotation.y -= 0.0006
    }
    if (scene.userData.prism) {
      scene.userData.prism.rotation.y += 0.0025
      scene.userData.prism.rotation.x = Math.sin(t * 0.8) * 0.3
    }
    if (scene.userData.halo) {
      scene.userData.halo.rotation.z += 0.0015
    }
    if (scene.userData.rings) {
      scene.userData.rings.rotation.z += 0.0012
      scene.userData.rings.rotation.x = Math.sin(t * 0.5) * 0.3
    }
    renderer.render(scene, camera)
  })
}

render(0)
