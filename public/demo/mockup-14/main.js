import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 5, 30);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000);
container.appendChild(renderer.domElement);

camera.position.set(0, 3, 12);
camera.lookAt(0, 0, 0);

// Lighting
const ambientLight = new THREE.AmbientLight(0x0a1929, 0.2);
scene.add(ambientLight);

// Spotlight on podium
const spotLight = new THREE.SpotLight(0x00d9ff, 3, 20, Math.PI / 6, 0.5);
spotLight.position.set(0, 10, 0);
spotLight.target.position.set(0, 0, 0);
scene.add(spotLight);
scene.add(spotLight.target);

// Key light
const keyLight = new THREE.PointLight(0x00b894, 1.5, 30);
keyLight.position.set(5, 8, 5);
scene.add(keyLight);

// Rim light
const rimLight = new THREE.PointLight(0x00d9ff, 1, 25);
rimLight.position.set(-5, 2, -5);
scene.add(rimLight);

// Fill light
const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
fillLight.position.set(0, 5, 10);
scene.add(fillLight);

// Crystal chamber crystals
const crystals = [];
const crystalCount = 40;

const crystalMaterial = new THREE.MeshPhysicalMaterial({
color: 0x00d9ff,
transparent: true,
opacity: 0.4,
metalness: 0.1,
roughness: 0.1,
transmission: 0.95,
thickness: 1.5,
clearcoat: 1,
clearcoatRoughness: 0.1,
envMapIntensity: 1
});

for (let i = 0; i < crystalCount; i++) {
const size = 0.3 + Math.random() * 0.8;
const crystalGeometry = new THREE.OctahedronGeometry(size, 0);

const crystal = new THREE.Mesh(crystalGeometry, crystalMaterial.clone());

// Position in chamber
const angle = Math.random() * Math.PI * 2;
const radius = 5 + Math.random() * 8;
const height = -3 + Math.random() * 10;

crystal.position.x = Math.cos(angle) * radius;
crystal.position.y = height;
crystal.position.z = Math.sin(angle) * radius;

crystal.rotation.x = Math.random() * Math.PI;
crystal.rotation.y = Math.random() * Math.PI;
crystal.rotation.z = Math.random() * Math.PI;

crystal.userData = {
rotationSpeed: {
x: (Math.random() - 0.5) * 0.01,
y: (Math.random() - 0.5) * 0.01,
z: (Math.random() - 0.5) * 0.01
},
originalPosition: crystal.position.clone(),
floatPhase: Math.random() * Math.PI * 2
};

crystals.push(crystal);
scene.add(crystal);
}

// Central hydrogen lattice
const latticeGroup = new THREE.Group();

// Core structure
const coreGeometry = new THREE.IcosahedronGeometry(1.5, 1);
const coreMaterial = new THREE.MeshPhysicalMaterial({
color: 0x00d9ff,
transparent: true,
opacity: 0.5,
metalness: 0.2,
roughness: 0.1,
transmission: 0.9,
thickness: 2,
clearcoat: 1,
clearcoatRoughness: 0.1,
emissive: 0x00d9ff,
emissiveIntensity: 0.3
});
const core = new THREE.Mesh(coreGeometry, coreMaterial);
latticeGroup.add(core);

// Lattice connections
const nodePositions = [
new THREE.Vector3(1.5, 0, 0),
new THREE.Vector3(-1.5, 0, 0),
new THREE.Vector3(0, 1.5, 0),
new THREE.Vector3(0, -1.5, 0),
new THREE.Vector3(0, 0, 1.5),
new THREE.Vector3(0, 0, -1.5)
];

nodePositions.forEach(pos => {
const nodeGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const node = new THREE.Mesh(nodeGeometry, coreMaterial.clone());
node.position.copy(pos);
latticeGroup.add(node);

// Connection rod
const rodGeometry = new THREE.CylinderGeometry(0.05, 0.05, pos.length(), 8);
const rodMaterial = new THREE.MeshStandardMaterial({
color: 0xffffff,
transparent: true,
opacity: 0.6,
emissive: 0x00d9ff,
emissiveIntensity: 0.5
});
const rod = new THREE.Mesh(rodGeometry, rodMaterial);

rod.position.copy(pos.clone().multiplyScalar(0.5));
rod.lookAt(pos);
rod.rotateX(Math.PI / 2);

latticeGroup.add(rod);
});

latticeGroup.position.y = 2;
scene.add(latticeGroup);

// Podium / spotlight platform
const podiumGeometry = new THREE.CylinderGeometry(1.5, 1.8, 0.3, 32);
const podiumMaterial = new THREE.MeshStandardMaterial({
color: 0x2c3e50,
metalness: 0.8,
roughness: 0.2,
emissive: 0x00b894,
emissiveIntensity: 0.2
});
const podium = new THREE.Mesh(podiumGeometry, podiumMaterial);
podium.position.y = 0;
scene.add(podium);

// Holographic founder portrait removed - using actual images in HTML instead
// Portrait and scanline effects removed - using actual images in HTML instead

// Dust/fog particles
const dustCount = 800;
const dustGeometry = new THREE.BufferGeometry();
const dustPositions = new Float32Array(dustCount * 3);
const dustVelocities = [];

for (let i = 0; i < dustCount; i++) {
dustPositions[i * 3] = (Math.random() - 0.5) * 30;
dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 30;

dustVelocities.push({
x: (Math.random() - 0.5) * 0.01,
y: Math.random() * 0.01,
z: (Math.random() - 0.5) * 0.01
});
}

dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));

const dustMaterial = new THREE.PointsMaterial({
color: 0x00d9ff,
size: 0.08,
transparent: true,
opacity: 0.4,
blending: THREE.AdditiveBlending
});

const dust = new THREE.Points(dustGeometry, dustMaterial);
scene.add(dust);

// Particle wave for crystal dissolution
const waveParticles = [];
const waveParticleCount = 200;

for (let i = 0; i < waveParticleCount; i++) {
const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
const particleMaterial = new THREE.MeshBasicMaterial({
color: 0x00d9ff,
transparent: true,
opacity: 0
});
const particle = new THREE.Mesh(particleGeometry, particleMaterial);

particle.position.copy(latticeGroup.position);
particle.userData = {
velocity: new THREE.Vector3(
(Math.random() - 0.5) * 0.2,
(Math.random() - 0.5) * 0.2,
(Math.random() - 0.5) * 0.2
),
active: false
};

waveParticles.push(particle);
scene.add(particle);
}

// Mouse interaction
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
mouseX = (event.clientX / window.innerWidth) * 2 - 1;
mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Scroll interaction
let scrollProgress = 0;
window.addEventListener('scroll', () => {
scrollProgress = Math.min(window.scrollY / window.innerHeight, 1);
});

// Animation loop
let time = 0;

function animate() {
requestAnimationFrame(animate);
time += 0.01;

// Camera parallax
camera.position.x += (mouseX * 2 - camera.position.x) * 0.03;
camera.position.y += (3 + mouseY * 2 - camera.position.y) * 0.03;
camera.lookAt(0, 2, 0);

// Rotate and float crystals
crystals.forEach((crystal, i) => {
crystal.rotation.x += crystal.userData.rotationSpeed.x;
crystal.rotation.y += crystal.userData.rotationSpeed.y;
crystal.rotation.z += crystal.userData.rotationSpeed.z;

// Float motion
crystal.position.y = crystal.userData.originalPosition.y + 
Math.sin(time + crystal.userData.floatPhase) * 0.3;

// Emissive pulse
crystal.material.emissiveIntensity = 0.2 + Math.sin(time * 2 + i * 0.5) * 0.15;

// Edge glow based on camera
const distance = crystal.position.distanceTo(camera.position);
crystal.material.opacity = 0.4 + (1 - distance / 20) * 0.3;
});

// Rotate lattice
latticeGroup.rotation.y += 0.005;
latticeGroup.rotation.x = Math.sin(time * 0.5) * 0.1;

// Pulse lattice
const latticeScale = 1 + Math.sin(time * 1.5) * 0.05;
latticeGroup.scale.setScalar(latticeScale);

core.material.emissiveIntensity = 0.3 + Math.sin(time * 3) * 0.2;

      // Portrait and scanline animation removed - using actual images in HTML instead

// Animate dust
const dustPositionsArray = dust.geometry.attributes.position.array;
for (let i = 0; i < dustCount; i++) {
dustPositionsArray[i * 3] += dustVelocities[i].x;
dustPositionsArray[i * 3 + 1] += dustVelocities[i].y;
dustPositionsArray[i * 3 + 2] += dustVelocities[i].z;

// Bounds check
if (Math.abs(dustPositionsArray[i * 3]) > 15) dustVelocities[i].x *= -1;
if (dustPositionsArray[i * 3 + 1] > 10) dustPositionsArray[i * 3 + 1] = -10;
if (Math.abs(dustPositionsArray[i * 3 + 2]) > 15) dustVelocities[i].z *= -1;
}
dust.geometry.attributes.position.needsUpdate = true;

// Scroll effect - dissolve lattice into particle wave
if (scrollProgress > 0) {
// Fade out lattice
latticeGroup.children.forEach(child => {
if (child.material) {
child.material.opacity = Math.max(0, 1 - scrollProgress * 2);
}
});

// Activate wave particles
waveParticles.forEach((particle, i) => {
if (scrollProgress > i / waveParticleCount) {
particle.userData.active = true;
particle.material.opacity = Math.min(0.8, scrollProgress * 2);

particle.position.add(particle.userData.velocity);

// Expand outward
const distance = particle.position.distanceTo(latticeGroup.position);
if (distance < 10) {
const direction = particle.position.clone()
.sub(latticeGroup.position)
.normalize()
.multiplyScalar(0.05);
particle.position.add(direction);
}
}
});

// Scatter crystals
crystals.forEach(crystal => {
const scatterDir = crystal.position.clone().normalize().multiplyScalar(0.05);
crystal.position.add(scatterDir.multiplyScalar(scrollProgress));
crystal.material.opacity = Math.max(0, 0.4 - scrollProgress * 0.5);
});
} else {
// Reset wave particles
waveParticles.forEach(particle => {
if (particle.userData.active) {
particle.position.copy(latticeGroup.position);
particle.material.opacity = 0;
particle.userData.active = false;
}
});
}

// Pulse lights
spotLight.intensity = 2.5 + Math.sin(time * 2) * 0.5;
keyLight.intensity = 1.5 + Math.sin(time * 1.5) * 0.3;
rimLight.position.x = Math.cos(time * 0.5) * 5;
rimLight.position.z = Math.sin(time * 0.5) * 5;

renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();