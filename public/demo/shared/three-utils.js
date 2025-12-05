import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.164/build/three.module.js'

export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
  renderer.setClearColor(0x000000, 0)
  return renderer
}

export function createCamera(container, fov = 60, near = 0.1, far = 2000) {
  const camera = new THREE.PerspectiveCamera(
    fov,
    container.clientWidth / container.clientHeight,
    near,
    far,
  )
  camera.position.set(0, 0, 80)
  return camera
}

export function handleResize(renderer, camera, container) {
  const resize = () => {
    const width = container.clientWidth
    const height = container.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }
  window.addEventListener('resize', resize)
  resize()
  return () => window.removeEventListener('resize', resize)
}

export function createParticleField(count = 500, spread = 120, color = 0x5cb85c) {
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * spread
    positions[i + 1] = (Math.random() - 0.5) * spread
    positions[i + 2] = (Math.random() - 0.5) * spread
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const material = new THREE.PointsMaterial({
    color,
    size: 1.6,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.9,
  })
  return new THREE.Points(geometry, material)
}

export function createNeonGrid(size = 50, divisions = 50, color = 0x0066a6) {
  const grid = new THREE.GridHelper(size, divisions, color, color)
  grid.material.transparent = true
  grid.material.opacity = 0.35
  grid.rotation.x = Math.PI / 2
  return grid
}

export function createLowPolyPrism(radius = 18, height = 38, color = 0x00497a) {
  const geometry = new THREE.CylinderGeometry(radius, radius, height, 6, 1, true)
  const material = new THREE.MeshStandardMaterial({
    color,
    flatShading: true,
    emissive: new THREE.Color(color).multiplyScalar(0.25),
    metalness: 0.2,
    roughness: 0.6,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.castShadow = true
  mesh.receiveShadow = true
  return mesh
}

export function pulseMaterial(material, time, speed = 2) {
  const pulse = 0.5 + Math.sin(time * speed) * 0.25
  material.emissiveIntensity = pulse
  material.opacity = 0.8 + Math.sin(time * speed) * 0.1
}
