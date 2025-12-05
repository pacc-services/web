import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.164/build/three.module.js'
import {
  createRenderer,
  createCamera,
  handleResize,
  createParticleField,
  createNeonGrid,
  createLowPolyPrism,
  pulseMaterial,
} from './three-utils.js'

function createBaseScene(container, options = {}) {
  const canvas = document.createElement('canvas')
  canvas.className = options.canvasClass || 'viz-canvas'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  container.appendChild(canvas)

  const renderer = createRenderer(canvas)
  const camera = createCamera(canvas, options.fov ?? 62, options.near ?? 0.1, options.far ?? 2000)
  const scene = new THREE.Scene()
  if (options.background) scene.background = new THREE.Color(options.background)
  if (options.fogColor && options.fogDensity) scene.fog = new THREE.FogExp2(options.fogColor, options.fogDensity)

  const disposeResize = handleResize(renderer, camera, canvas)

  return {
    scene,
    camera,
    renderer,
    canvas,
    cleanup: () => {
      disposeResize()
      renderer.dispose()
      canvas.remove()
    },
  }
}

function startLoop(update) {
  let frame = 0
  const loop = (time) => {
    frame = requestAnimationFrame(loop)
    update(time * 0.001)
  }
  frame = requestAnimationFrame(loop)
  return () => cancelAnimationFrame(frame)
}

function addBasicLights(scene, colors) {
  const ambient = new THREE.AmbientLight(colors.ambient || 0xffffff, 0.6)
  const key = new THREE.DirectionalLight(colors.key || 0xffffff, 0.8)
  key.position.set(6, 10, 6)
  const rim = new THREE.PointLight(colors.rim || 0xffffff, 0.8, 400)
  rim.position.set(-14, 8, -10)
  scene.add(ambient, key, rim)
}

function disposeObjects(...objects) {
  objects.forEach((obj) => {
    if (!obj) return
    if (obj.geometry) obj.geometry.dispose()
    if (obj.material) {
      if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose())
      else obj.material.dispose()
    }
  })
}

function createParticleGalaxy(preset, container) {
  const { scene, camera, renderer, cleanup } = createBaseScene(container, {
    background: preset.background || 0x02060d,
    fogColor: preset.fogColor || 0x02060d,
    fogDensity: preset.fogDensity || 0.002,
  })
  camera.position.set(0, 0, preset.cameraZ || 140)
  const cloud = createParticleField(preset.count || 900, preset.spread || 260, preset.color || 0x5cb85c)
  scene.add(cloud)
  addBasicLights(scene, { ambient: preset.ambient || 0x7bb6ff, key: preset.key || 0xffffff, rim: preset.rim || 0x5cb85c })

  const stop = startLoop((time) => {
    cloud.rotation.y += preset.rotateY || 0.0008
    cloud.rotation.x = Math.sin(time * (preset.wobbleSpeed || 0.25)) * (preset.wobble || 0.18)
    renderer.render(scene, camera)
  })

  return () => {
    stop()
    disposeObjects(cloud)
    cleanup()
  }
}

function createRibbonWave(preset, container) {
  const { scene, camera, renderer, cleanup } = createBaseScene(container, {
    background: preset.background || 0x010305,
    fov: preset.fov || 70,
  })
  camera.position.set(0, 10, 70)
  addBasicLights(scene, { ambient: preset.ambient || 0x0f7bdb, key: preset.key || 0x5cb85c })

  const geometry = new THREE.PlaneGeometry(140, 70, 120, 60)
  const material = new THREE.MeshStandardMaterial({
    color: preset.color || 0x0066a6,
    emissive: preset.emissive || 0x0f7bdb,
    metalness: 0.2,
    roughness: 0.35,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: preset.opacity || 0.85,
    wireframe: !!preset.wireframe,
  })
  const ribbon = new THREE.Mesh(geometry, material)
  ribbon.rotation.x = -Math.PI / 2.1
  scene.add(ribbon)

  const stop = startLoop((time) => {
    const positions = ribbon.geometry.attributes.position
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i)
      const y = positions.getY(i)
      const wave = Math.sin(x * 0.08 + time * (preset.speed || 0.9)) * 4
      const ridge = Math.cos(y * 0.08 + time * (preset.speed || 0.9)) * (preset.amplitude || 2.8)
      positions.setZ(i, wave + ridge)
    }
    positions.needsUpdate = true
    ribbon.rotation.z = Math.sin(time * (preset.rollSpeed || 0.2)) * (preset.roll || 0.2)
    renderer.render(scene, camera)
  })

  return () => {
    stop()
    disposeObjects(ribbon)
    cleanup()
  }
}

function createGridCity(preset, container) {
  const { scene, camera, renderer, cleanup } = createBaseScene(container, {
    background: preset.background || 0x01040a,
    fogColor: preset.fogColor || 0x01040a,
    fogDensity: preset.fogDensity || 0.006,
  })
  camera.position.set(20, 28, 70)
  camera.lookAt(0, 0, 0)
  addBasicLights(scene, { ambient: preset.ambient || 0x5cb85c, rim: preset.rim || 0x00d9ff })

  const gridHelper = createNeonGrid(120, 60, preset.gridColor || 0x0f7bdb)
  scene.add(gridHelper)

  const columns = new THREE.InstancedMesh(
    new THREE.BoxGeometry(2.2, 1, 2.2),
    new THREE.MeshStandardMaterial({ color: preset.color || 0x00497a, emissive: preset.emissive || 0x0066a6, roughness: 0.25, metalness: 0.6, transparent: true, opacity: 0.95 }),
    preset.count || 180,
  )

  const dummy = new THREE.Object3D()
  for (let i = 0; i < columns.count; i++) {
    const x = (i % 15) * 6 - 40 + Math.random() * 1.2
    const z = Math.floor(i / 15) * 6 - 30 + Math.random() * 1.2
    const height = Math.random() * (preset.maxHeight || 20) + (preset.minHeight || 6)
    dummy.position.set(x, height / 2, z)
    dummy.scale.set(1, height, 1)
    dummy.updateMatrix()
    columns.setMatrixAt(i, dummy.matrix)
    columns.setColorAt(i, new THREE.Color(preset.color || 0x00497a).offsetHSL(Math.random() * 0.04, 0.06, 0.1))
  }
  columns.instanceMatrix.needsUpdate = true
  scene.add(columns)

  const stop = startLoop((time) => {
    columns.rotation.y = Math.sin(time * (preset.rotateSpeed || 0.12)) * 0.25
    renderer.render(scene, camera)
  })

  return () => {
    stop()
    disposeObjects(columns)
    cleanup()
  }
}

function createOrbitalShowcase(preset, container) {
  const { scene, camera, renderer, cleanup } = createBaseScene(container, { background: preset.background || 0x020812 })
  camera.position.set(0, 0, preset.cameraZ || 90)
  addBasicLights(scene, { ambient: preset.ambient || 0x7bb6ff })

  const nucleus = createLowPolyPrism(preset.radius || 14, preset.height || 26, preset.color || 0x5cb85c)
  scene.add(nucleus)

  const rings = new THREE.Group()
  for (let i = 0; i < (preset.ringCount || 4); i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(20 + i * 8, 0.8 + i * 0.25, 16, 120),
      new THREE.MeshStandardMaterial({ color: preset.ringColor || 0x00d9ff, emissive: preset.ringEmissive || 0x0f7bdb, metalness: 0.5, roughness: 0.2, transparent: true, opacity: 0.7 }),
    )
    ring.rotation.x = Math.PI / 2
    ring.rotation.y = (i / (preset.ringCount || 4)) * Math.PI * 0.6
    rings.add(ring)
  }
  scene.add(rings)

  const orbs = []
  for (let i = 0; i < (preset.orbCount || 8); i++) {
    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(2.4, 24, 24),
      new THREE.MeshStandardMaterial({ color: preset.orbColor || 0xffffff, emissive: preset.orbEmissive || 0x5cb85c }),
    )
    orb.userData.radius = 18 + i * 4
    orb.userData.speed = 0.3 + i * 0.05
    orb.userData.offset = Math.random() * Math.PI * 2
    orbs.push(orb)
    scene.add(orb)
  }

  const stop = startLoop((time) => {
    rings.rotation.z += preset.ringSpin || 0.001
    nucleus.rotation.y += 0.002
    orbs.forEach((orb) => {
      const angle = time * orb.userData.speed + orb.userData.offset
      orb.position.set(Math.cos(angle) * orb.userData.radius, Math.sin(angle * 0.7) * 6, Math.sin(angle) * orb.userData.radius)
    })
    renderer.render(scene, camera)
  })

  return () => {
    stop()
    disposeObjects(nucleus, ...rings.children, ...orbs)
    cleanup()
  }
}

function createHelixGarden(preset, container) {
  const { scene, camera, renderer, cleanup } = createBaseScene(container, { background: preset.background || 0x050b10 })
  camera.position.set(0, 0, 90)
  addBasicLights(scene, { ambient: preset.ambient || 0x5cb85c, rim: preset.rim || 0x00d9ff })

  const helix = new THREE.Group()
  const colors = [preset.colorA || 0x5cb85c, preset.colorB || 0x00d9ff, preset.colorC || 0xffffff]
  for (let i = 0; i < (preset.count || 80); i++) {
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.2 + Math.random() * 0.8, 16, 16),
      new THREE.MeshStandardMaterial({ color: colors[i % colors.length], emissive: colors[(i + 1) % colors.length], emissiveIntensity: 0.5 }),
    )
    const angle = i * 0.25
    const radius = 18 + Math.sin(i * 0.2) * 6
    sphere.position.set(Math.cos(angle) * radius, (i - (preset.count || 80) / 2) * 0.7, Math.sin(angle) * radius)
    helix.add(sphere)
  }
  scene.add(helix)

  const stop = startLoop((time) => {
    helix.rotation.y = time * 0.25
    helix.rotation.x = Math.sin(time * 0.5) * 0.2
    renderer.render(scene, camera)
  })

  return () => {
    stop()
    disposeObjects(...helix.children)
    cleanup()
  }
}

function createBeamTunnel(preset, container) {
  const { scene, camera, renderer, cleanup } = createBaseScene(container, {
    background: preset.background || 0x000000,
    fogColor: preset.fogColor || 0x000000,
    fogDensity: preset.fogDensity || 0.012,
    fov: preset.fov || 72,
  })
  camera.position.set(0, 0, 30)
  addBasicLights(scene, { ambient: preset.ambient || 0x0066a6, rim: preset.rim || 0x00d9ff })

  const tunnel = new THREE.Group()
  for (let i = 0; i < (preset.segmentCount || 22); i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(18 + i * 0.35, 0.3 + (i % 3) * 0.1, 12, 90),
      new THREE.MeshStandardMaterial({ color: preset.color || 0x00d9ff, emissive: preset.emissive || 0x5cb85c, transparent: true, opacity: 0.7, roughness: 0.1 }),
    )
    ring.position.z = -i * 4
    ring.rotation.x = Math.PI / 2
    tunnel.add(ring)
  }
  scene.add(tunnel)

  const streakGeometry = new THREE.CylinderGeometry(0.04, 0.04, 10, 6)
  const streakMaterial = new THREE.MeshStandardMaterial({ color: preset.streakColor || 0xffffff, emissive: preset.streakEmissive || 0x00d9ff })
  const streaks = []
  for (let i = 0; i < (preset.streakCount || 24); i++) {
    const streak = new THREE.Mesh(streakGeometry, streakMaterial.clone())
    streak.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, -Math.random() * 80)
    streak.userData.speed = 0.5 + Math.random() * 1.2
    streaks.push(streak)
    scene.add(streak)
  }

  const stop = startLoop((time) => {
    tunnel.rotation.z = Math.sin(time * 0.5) * 0.1
    streaks.forEach((streak) => {
      streak.position.z += streak.userData.speed
      if (streak.position.z > 8) streak.position.z = -80
    })
    renderer.render(scene, camera)
  })

  return () => {
    stop()
    disposeObjects(...tunnel.children, ...streaks)
    cleanup()
  }
}

function createCrystalCluster(preset, container) {
  const { scene, camera, renderer, cleanup } = createBaseScene(container, {
    background: preset.background || 0x040910,
    fogColor: preset.fogColor || 0x040910,
    fogDensity: preset.fogDensity || 0.004,
  })
  camera.position.set(0, 20, 80)
  camera.lookAt(0, 0, 0)
  addBasicLights(scene, { ambient: preset.ambient || 0x5cb85c, rim: preset.rim || 0x00d9ff })

  const base = createLowPolyPrism(preset.coreRadius || 10, preset.coreHeight || 20, preset.coreColor || 0x5cb85c)
  base.position.y = 8
  scene.add(base)

  const crystals = new THREE.Group()
  for (let i = 0; i < (preset.count || 30); i++) {
    const height = Math.random() * (preset.maxHeight || 18) + (preset.minHeight || 6)
    const geometry = new THREE.OctahedronGeometry(Math.random() * 2.4 + 1.2, 1)
    const material = new THREE.MeshStandardMaterial({ color: preset.color || 0x00d9ff, emissive: preset.emissive || 0x0066a6, flatShading: true, roughness: 0.35 })
    const mesh = new THREE.Mesh(geometry, material)
    const angle = Math.random() * Math.PI * 2
    const radius = Math.random() * (preset.radius || 20) + 6
    mesh.position.set(Math.cos(angle) * radius, height / 2, Math.sin(angle) * radius)
    mesh.scale.y = height * 0.15
    mesh.rotation.y = angle
    crystals.add(mesh)
  }
  scene.add(crystals)

  const stop = startLoop((time) => {
    crystals.rotation.y = Math.sin(time * 0.4) * 0.2
    base.rotation.y += 0.002
    renderer.render(scene, camera)
  })

  return () => {
    stop()
    disposeObjects(base, ...crystals.children)
    cleanup()
  }
}

function createAuroraField(preset, container) {
  const { scene, camera, renderer, cleanup } = createBaseScene(container, {
    background: preset.background || 0x020617,
    fogColor: preset.fogColor || 0x020617,
    fogDensity: preset.fogDensity || 0.0018,
    fov: preset.fov || 68,
  })
  camera.position.set(0, 12, 72)
  addBasicLights(scene, { ambient: preset.ambient || 0x5cb85c })

  const ribbons = new THREE.Group()
  for (let i = 0; i < (preset.ribbonCount || 5); i++) {
    const geo = new THREE.PlaneGeometry(180, 10, 100, 10)
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(preset.color || 0x00d9ff).offsetHSL(i * 0.04, 0.1, 0.1),
      emissive: preset.emissive || 0x0066a6,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.z = -i * 8
    ribbons.add(mesh)
  }
  scene.add(ribbons)

  const stop = startLoop((time) => {
    ribbons.children.forEach((mesh, index) => {
      const pos = mesh.geometry.attributes.position
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i)
        pos.setZ(i, Math.sin(x * 0.05 + time * 1.2 + index) * (3 + index * 0.8))
      }
      pos.needsUpdate = true
      mesh.rotation.y = Math.sin(time * 0.2 + index) * 0.2
    })
    renderer.render(scene, camera)
  })

  return () => {
    stop()
    ribbons.children.forEach((mesh) => disposeObjects(mesh))
    cleanup()
  }
}

function createGlowGrid(preset, container) {
  const { scene, camera, renderer, cleanup } = createBaseScene(container, {
    background: preset.background || 0x010203,
    fogColor: preset.fogColor || 0x010203,
    fogDensity: preset.fogDensity || 0.004,
    fov: preset.fov || 70,
  })
  camera.position.set(0, 16, 60)
  addBasicLights(scene, { ambient: preset.ambient || 0x7bb6ff })

  const grid = createNeonGrid(180, 90, preset.gridColor || 0x5cb85c)
  grid.position.z = -16
  scene.add(grid)

  const particles = createParticleField(preset.count || 600, preset.spread || 200, preset.color || 0x00d9ff)
  particles.material.size = 1.4
  particles.material.opacity = 0.72
  scene.add(particles)

  const stop = startLoop((time) => {
    particles.rotation.y += 0.0008
    particles.position.y = Math.sin(time * 0.8) * 6
    renderer.render(scene, camera)
  })

  return () => {
    stop()
    disposeObjects(grid, particles)
    cleanup()
  }
}

function createLuminousWaves(preset, container) {
  const { scene, camera, renderer, cleanup } = createBaseScene(container, { background: preset.background || 0x02040a })
  camera.position.set(0, 8, 64)
  addBasicLights(scene, { ambient: preset.ambient || 0x5cb85c })

  const surface = new THREE.PlaneGeometry(160, 70, 160, 80)
  const material = new THREE.MeshStandardMaterial({
    color: preset.color || 0x00497a,
    emissive: preset.emissive || 0x00d9ff,
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide,
  })
  const mesh = new THREE.Mesh(surface, material)
  mesh.rotation.x = -Math.PI / 2
  scene.add(mesh)

  const stop = startLoop((time) => {
    const pos = mesh.geometry.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      pos.setZ(i, Math.sin(x * 0.06 + time * 1.4) * 2.8 + Math.cos(y * 0.06 + time * 1.1) * 2.4)
    }
    pos.needsUpdate = true
    renderer.render(scene, camera)
  })

  return () => {
    stop()
    disposeObjects(mesh)
    cleanup()
  }
}

function createPulseBloom(preset, container) {
  const { scene, camera, renderer, cleanup } = createBaseScene(container, { background: preset.background || 0x000000 })
  camera.position.set(0, 0, 70)
  addBasicLights(scene, { ambient: preset.ambient || 0xffffff })

  const petals = new THREE.Group()
  for (let i = 0; i < (preset.count || 18); i++) {
    const petal = new THREE.Mesh(
      new THREE.ConeGeometry(2, 14, 16, 1, true),
      new THREE.MeshStandardMaterial({ color: preset.color || 0x5cb85c, emissive: preset.emissive || 0x00d9ff, transparent: true, opacity: 0.85 }),
    )
    petal.position.y = 6
    petal.rotation.x = Math.PI / 8
    petal.rotation.z = (i / (preset.count || 18)) * Math.PI * 2
    petals.add(petal)
  }
  scene.add(petals)

  const stop = startLoop((time) => {
    petals.children.forEach((petal, index) => {
      const pulse = 0.7 + Math.sin(time * 2 + index) * 0.2
      petal.scale.setScalar(pulse)
      pulseMaterial(petal.material, time + index * 0.3, 3)
    })
    renderer.render(scene, camera)
  })

  return () => {
    stop()
    disposeObjects(...petals.children)
    cleanup()
  }
}

function createRibbonGalaxy(preset, container) {
  const { scene, camera, renderer, cleanup } = createBaseScene(container, { background: preset.background || 0x030915 })
  camera.position.set(0, 0, 80)
  addBasicLights(scene, { ambient: preset.ambient || 0x7bb6ff })

  const ribbons = new THREE.Group()
  for (let i = 0; i < (preset.ribbonCount || 3); i++) {
    const curve = new THREE.CatmullRomCurve3(
      Array.from({ length: 6 }, (_, idx) => new THREE.Vector3(Math.cos(idx) * 20, (idx - 2.5) * 6, Math.sin(idx * 1.3) * 20)),
    )
    const geometry = new THREE.TubeGeometry(curve, 200, 1.5, 16, false)
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(preset.color || 0x00d9ff).offsetHSL(i * 0.05, 0.05, 0.05),
      emissive: preset.emissive || 0x0066a6,
      roughness: 0.25,
      metalness: 0.6,
    })
    ribbons.add(new THREE.Mesh(geometry, material))
  }
  scene.add(ribbons)

  const stop = startLoop((time) => {
    ribbons.rotation.y = time * 0.25
    ribbons.rotation.x = Math.sin(time * 0.3) * 0.3
    renderer.render(scene, camera)
  })

  return () => {
    stop()
    disposeObjects(...ribbons.children)
    cleanup()
  }
}

const presetDefinitions = [
  { id: 'aurora-sparks', label: 'Aurora Sparks', description: 'Soft particle galaxy for hero backgrounds', type: 'particle-galaxy', color: 0x5cb85c, rim: 0x00d9ff },
  { id: 'emerald-swarm', label: 'Emerald Swarm', description: 'Dense green particle fog', type: 'particle-galaxy', color: 0x00ffbb, wobble: 0.22, rotateY: 0.0012, spread: 320, count: 1400 },
  { id: 'midnight-pulse', label: 'Midnight Pulse', description: 'Dark fog with cyan pulse', type: 'particle-galaxy', color: 0x00d9ff, ambient: 0x244c73, wobbleSpeed: 0.5 },
  { id: 'stellar-ribbon', label: 'Stellar Ribbon', description: 'Flowing ribbon for page headers', type: 'ribbon-wave', color: 0x00d9ff, emissive: 0x5cb85c },
  { id: 'velvet-wave', label: 'Velvet Wave', description: 'Slow wave for calm hero banners', type: 'ribbon-wave', color: 0x5cb85c, emissive: 0x00497a, opacity: 0.92, speed: 0.6 },
  { id: 'wireframe-roll', label: 'Wireframe Roll', description: 'Wireframe ribbon for technical panels', type: 'ribbon-wave', color: 0xffffff, emissive: 0x00d9ff, wireframe: true, roll: 0.35 },
  { id: 'neon-grid-city', label: 'Neon Grid City', description: 'Rotating column grid for dashboards', type: 'grid-city', gridColor: 0x00d9ff },
  { id: 'emerald-towers', label: 'Emerald Towers', description: 'Tall crystalline skyline', type: 'grid-city', color: 0x5cb85c, emissive: 0x0f7bdb, maxHeight: 26 },
  { id: 'horizon-blocks', label: 'Horizon Blocks', description: 'Minimal block horizon', type: 'grid-city', color: 0x0099cc, minHeight: 3, maxHeight: 12, rotateSpeed: 0.05 },
  { id: 'orbital-prism', label: 'Orbital Prism', description: 'Central prism with orbiting rings', type: 'orbital-showcase', color: 0x5cb85c, ringColor: 0x00d9ff },
  { id: 'halo-reactor', label: 'Halo Reactor', description: 'Dense ring system', type: 'orbital-showcase', ringCount: 6, orbCount: 12, ringEmissive: 0xffffff, orbColor: 0x00d9ff },
  { id: 'core-guardian', label: 'Core Guardian', description: 'Slow orbit with bright sentinels', type: 'orbital-showcase', orbCount: 6, ringCount: 3, cameraZ: 110 },
  { id: 'helix-garden', label: 'Helix Garden', description: 'Triple color helix widget', type: 'helix-garden' },
  { id: 'binary-helix', label: 'Binary Helix', description: 'Two-tone spiral column', type: 'helix-garden', colorA: 0xffffff, colorB: 0x00d9ff, colorC: 0x00497a },
  { id: 'emerald-stair', label: 'Emerald Stair', description: 'Stacked helix for callouts', type: 'helix-garden', count: 120, background: 0x031012 },
  { id: 'beam-tunnel', label: 'Beam Tunnel', description: 'Motion tunnel background', type: 'beam-tunnel' },
  { id: 'ion-drive', label: 'Ion Drive', description: 'Faster streak tunnel', type: 'beam-tunnel', streakCount: 36, segmentCount: 28, fogDensity: 0.02 },
  { id: 'blue-shift', label: 'Blue Shift', description: 'Blue on black kinetic tube', type: 'beam-tunnel', color: 0x0066a6, emissive: 0x00d9ff, background: 0x000a16 },
  { id: 'crystal-bloom', label: 'Crystal Bloom', description: 'Ringed cluster centerpiece', type: 'crystal-cluster', count: 28, radius: 18 },
  { id: 'glacier-spires', label: 'Glacier Spires', description: 'Tall icy shards', type: 'crystal-cluster', color: 0x7bdfff, emissive: 0x00aaff, minHeight: 10, maxHeight: 30 },
  { id: 'ember-shards', label: 'Ember Shards', description: 'Warm glowing shards', type: 'crystal-cluster', color: 0xffa451, emissive: 0xff5500, background: 0x0b0301 },
  { id: 'cyan-valley', label: 'Cyan Valley', description: 'Slow waving aurora for headers', type: 'aurora-field', color: 0x00d9ff, emissive: 0x5cb85c, ribbonCount: 7 },
  { id: 'electric-dunes', label: 'Electric Dunes', description: 'Sand dune aurora blend', type: 'aurora-field', color: 0xffdd99, emissive: 0xff8800, background: 0x0c0600 },
  { id: 'glow-grid', label: 'Glow Grid', description: 'Floating particle grid', type: 'glow-grid' },
  { id: 'cyan-mist', label: 'Cyan Mist', description: 'Lighter particle fog with grid floor', type: 'glow-grid', color: 0x00d9ff, count: 900, spread: 180 },
  { id: 'emerald-fog', label: 'Emerald Fog', description: 'Deep green mist', type: 'glow-grid', color: 0x5cb85c, background: 0x020806 },
  { id: 'luminous-waves', label: 'Luminous Waves', description: 'Organic wave surface', type: 'luminous-waves' },
  { id: 'calm-sea', label: 'Calm Sea', description: 'Gentle wave field', type: 'luminous-waves', color: 0x00497a, emissive: 0x0f7bdb },
  { id: 'plasma-well', label: 'Plasma Well', description: 'Intense pulsating cones', type: 'pulse-bloom' },
  { id: 'ribbon-galaxy', label: 'Ribbon Galaxy', description: 'Flowing tubes in orbit', type: 'ribbon-galaxy' },
]

function createVisualizationFromPreset(preset, container) {
  switch (preset.type) {
    case 'particle-galaxy':
      return createParticleGalaxy(preset, container)
    case 'ribbon-wave':
      return createRibbonWave(preset, container)
    case 'grid-city':
      return createGridCity(preset, container)
    case 'orbital-showcase':
      return createOrbitalShowcase(preset, container)
    case 'helix-garden':
      return createHelixGarden(preset, container)
    case 'beam-tunnel':
      return createBeamTunnel(preset, container)
    case 'crystal-cluster':
      return createCrystalCluster(preset, container)
    case 'aurora-field':
      return createAuroraField(preset, container)
    case 'glow-grid':
      return createGlowGrid(preset, container)
    case 'luminous-waves':
      return createLuminousWaves(preset, container)
    case 'pulse-bloom':
      return createPulseBloom(preset, container)
    case 'ribbon-galaxy':
      return createRibbonGalaxy(preset, container)
    default:
      throw new Error(`Unknown visualization type: ${preset.type}`)
  }
}

export const visualizationLibrary = presetDefinitions.map((preset) => ({
  ...preset,
  mount: (container) => createVisualizationFromPreset(preset, container),
}))

export function mountVisualization(id, container) {
  const preset = visualizationLibrary.find((item) => item.id === id)
  if (!preset) throw new Error(`Visualization ${id} not found`)
  return preset.mount(container)
}

export function listVisualizations() {
  return visualizationLibrary.map(({ id, label, description }) => ({ id, label, description }))
}
