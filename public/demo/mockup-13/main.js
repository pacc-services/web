import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000000, 0.015);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000);
container.appendChild(renderer.domElement);

camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

const keyLight = new THREE.PointLight(0x00d9ff, 2, 50);
keyLight.position.set(0, 0, 10);
scene.add(keyLight);

const backLight = new THREE.PointLight(0x00b894, 1.5, 30);
backLight.position.set(0, 0, -20);
scene.add(backLight);

// Tunnel structure - metallic rings
const tunnel = new THREE.Group();
const ringCount = 30;
const ringSpacing = 3;

for (let i = 0; i < ringCount; i++) {
const ringGeometry = new THREE.TorusGeometry(
4 + Math.sin(i * 0.5) * 0.3,
0.15,
16,
64
);

const ringMaterial = new THREE.MeshStandardMaterial({
color: 0x34495e,
metalness: 0.9,
roughness: 0.1,
emissive: 0x00d9ff,
emissiveIntensity: 0.2 + (i % 5 === 0 ? 0.3 : 0)
});

const ring = new THREE.Mesh(ringGeometry, ringMaterial);
ring.position.z = -i * ringSpacing;
ring.rotation.x = Math.PI / 2;
ring.rotation.z = i * 0.1;

ring.userData = {
index: i,
originalZ: -i * ringSpacing
};

tunnel.add(ring);
}

scene.add(tunnel);

// Streaking particles
const particleCount = 500;
const particlesGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const velocities = [];

for (let i = 0; i < particleCount; i++) {
const angle = Math.random() * Math.PI * 2;
const radius = Math.random() * 4;

positions[i * 3] = Math.cos(angle) * radius;
positions[i * 3 + 1] = Math.sin(angle) * radius;
positions[i * 3 + 2] = -Math.random() * 100;

velocities.push(0.5 + Math.random() * 1);
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particleMaterial = new THREE.PointsMaterial({
color: 0x00d9ff,
size: 0.2,
transparent: true,
opacity: 0.8,
blending: THREE.AdditiveBlending
});

const particles = new THREE.Points(particlesGeometry, particleMaterial);
scene.add(particles);

// Curved wall panels (carousel items)
const panels = [];
const panelCount = 4;
const panelRadius = 5;
const panelLabels = ['Hydrogen Economy', 'Clean Energy', 'Infrastructure', 'Innovation'];

for (let i = 0; i < panelCount; i++) {
const angle = (i / panelCount) * Math.PI * 2;

// Create curved panel
const panelGeometry = new THREE.PlaneGeometry(2, 1.5, 10, 1);
panelGeometry.attributes.position.array.forEach((val, idx) => {
if (idx % 3 === 2) { // z-coordinate
const x = panelGeometry.attributes.position.array[idx - 2];
panelGeometry.attributes.position.array[idx] = -Math.abs(x) * 0.3;
}
});

const panelMaterial = new THREE.MeshStandardMaterial({
color: 0x2c3e50,
metalness: 0.8,
roughness: 0.2,
emissive: 0x00b894,
emissiveIntensity: 0.2,
side: THREE.DoubleSide
});

const panel = new THREE.Mesh(panelGeometry, panelMaterial);

panel.position.x = Math.cos(angle) * panelRadius;
panel.position.y = Math.sin(angle) * panelRadius;
panel.position.z = -15;

panel.lookAt(0, 0, -15);

panel.userData = {
angle: angle,
index: i,
label: panelLabels[i]
};

panels.push(panel);
scene.add(panel);

// Add H2 glyph
const glyphGeometry = new THREE.TorusGeometry(0.3, 0.05, 16, 32);
const glyphMaterial = new THREE.MeshBasicMaterial({
color: 0x00d9ff,
transparent: true,
opacity: 0.8
});
const glyph = new THREE.Mesh(glyphGeometry, glyphMaterial);
panel.add(glyph);
}

let currentPanelIndex = 0;

// Energy streaks
const streaks = [];
for (let i = 0; i < 30; i++) {
const streakGeometry = new THREE.CylinderGeometry(0.02, 0.02, 2, 8);
const streakMaterial = new THREE.MeshBasicMaterial({
color: 0x00d9ff,
transparent: true,
opacity: 0.6
});
const streak = new THREE.Mesh(streakGeometry, streakMaterial);

const angle = Math.random() * Math.PI * 2;
const radius = 2 + Math.random() * 2;

streak.position.x = Math.cos(angle) * radius;
streak.position.y = Math.sin(angle) * radius;
streak.position.z = -Math.random() * 80;

streak.rotation.x = Math.PI / 2;

streak.userData = {
speed: 1 + Math.random() * 2
};

streaks.push(streak);
scene.add(streak);
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
let baseSpeed = 0.3;

window.addEventListener('scroll', () => {
scrollProgress = Math.min(window.scrollY / window.innerHeight, 1);
});

// Panel carousel controls
const sidebarBtns = document.querySelectorAll('.sidebar-btn');

sidebarBtns.forEach((btn, index) => {
btn.addEventListener('click', () => {
currentPanelIndex = index;
updatePanels();

sidebarBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');
});
});

function updatePanels() {
panels.forEach((panel, i) => {
if (i === currentPanelIndex) {
panel.material.emissiveIntensity = 0.6;
panel.scale.set(1.2, 1.2, 1.2);
panel.position.z = -12;
} else {
panel.material.emissiveIntensity = 0.2;
panel.scale.set(1, 1, 1);
panel.position.z = -15;
}
});

// Adjust tunnel lighting
tunnel.children.forEach(ring => {
ring.material.emissiveIntensity = 0.2 + currentPanelIndex * 0.1;
});
}

updatePanels();

// Animation loop
let time = 0;

function animate() {
requestAnimationFrame(animate);
time += 0.01;

// Calculate speed based on scroll
const currentSpeed = baseSpeed + scrollProgress * 1.5;

// Camera tilt with mouse
camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.05;
camera.position.y += (mouseY * 1.5 - camera.position.y) * 0.05;
camera.lookAt(0, 0, -20);

// FOV adjustment for acceleration feel
const targetFOV = 75 + scrollProgress * 15;
camera.fov += (targetFOV - camera.fov) * 0.05;
camera.updateProjectionMatrix();

// Move tunnel rings forward
tunnel.children.forEach(ring => {
ring.position.z += currentSpeed;

// Reset ring when it passes camera
if (ring.position.z > 10) {
ring.position.z = -ringCount * ringSpacing;
}

// Pulse emissive
ring.material.emissiveIntensity = 
0.2 + Math.sin(time * 2 + ring.userData.index * 0.5) * 0.15;

// Rotate
ring.rotation.z += 0.005;
});

// Animate particles forward
const positionsArray = particles.geometry.attributes.position.array;
for (let i = 0; i < particleCount; i++) {
positionsArray[i * 3 + 2] += velocities[i] * currentSpeed;

// Reset particle when it passes camera
if (positionsArray[i * 3 + 2] > 5) {
positionsArray[i * 3 + 2] = -100;

const angle = Math.random() * Math.PI * 2;
const radius = Math.random() * 4;
positionsArray[i * 3] = Math.cos(angle) * radius;
positionsArray[i * 3 + 1] = Math.sin(angle) * radius;
}
}
particles.geometry.attributes.position.needsUpdate = true;

// Rotate panels
panels.forEach(panel => {
panel.userData.angle += 0.003;
panel.position.x = Math.cos(panel.userData.angle) * panelRadius;
panel.position.y = Math.sin(panel.userData.angle) * panelRadius;
panel.lookAt(0, 0, panel.position.z);

// Pulse glyphs
if (panel.children.length > 0) {
panel.children[0].rotation.z += 0.02;
panel.children[0].scale.setScalar(1 + Math.sin(time * 3) * 0.1);
}
});

// Move streaks
streaks.forEach(streak => {
streak.position.z += streak.userData.speed * currentSpeed;

if (streak.position.z > 5) {
streak.position.z = -80;

const angle = Math.random() * Math.PI * 2;
const radius = 2 + Math.random() * 2;
streak.position.x = Math.cos(angle) * radius;
streak.position.y = Math.sin(angle) * radius;
}

// Pulse opacity
streak.material.opacity = 0.4 + Math.sin(time * 5 + streak.position.z * 0.1) * 0.3;
});

// Move lights
keyLight.position.z = Math.sin(time) * 5;
backLight.intensity = 1.5 + Math.sin(time * 1.5) * 0.5;

renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();