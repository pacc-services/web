import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// Isometric-style camera
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xffffff, 0.8);
sunLight.position.set(10, 15, 5);
sunLight.castShadow = true;
scene.add(sunLight);

const fillLight = new THREE.DirectionalLight(0x00b894, 0.3);
fillLight.position.set(-5, 5, -5);
scene.add(fillLight);

// Island group
const island = new THREE.Group();

// Ground platform
const groundGeometry = new THREE.BoxGeometry(8, 0.5, 8);
const groundMaterial = new THREE.MeshStandardMaterial({
color: 0x2c3e50,
metalness: 0.3,
roughness: 0.7
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.position.y = -0.25;
island.add(ground);

// PACC Monolith (central structure)
const monolithGeometry = new THREE.BoxGeometry(0.8, 3, 0.8);
const monolithMaterial = new THREE.MeshStandardMaterial({
color: 0x00b894,
metalness: 0.8,
roughness: 0.2,
emissive: 0x00b894,
emissiveIntensity: 0.5
});
const monolith = new THREE.Mesh(monolithGeometry, monolithMaterial);
monolith.position.y = 1.5;
island.add(monolith);

// Hydrogen plant - tanks
const tankGeometry = new THREE.CylinderGeometry(0.4, 0.4, 1.5, 16);
const tankMaterial = new THREE.MeshStandardMaterial({
color: 0x34495e,
metalness: 0.7,
roughness: 0.3,
emissive: 0x00d9ff,
emissiveIntensity: 0.2
});

for (let i = 0; i < 3; i++) {
const tank = new THREE.Mesh(tankGeometry, tankMaterial.clone());
tank.position.set(-2 + i * 0.8, 0.75, -2);
island.add(tank);
}

// Stacks
const stackGeometry = new THREE.CylinderGeometry(0.2, 0.25, 2, 8);
const stackMaterial = new THREE.MeshStandardMaterial({
color: 0x7f8c8d,
metalness: 0.6,
roughness: 0.4
});

for (let i = 0; i < 2; i++) {
const stack = new THREE.Mesh(stackGeometry, stackMaterial);
stack.position.set(2, 1, -2 + i);
island.add(stack);
}

// Pipeline with emissive pulses
const pipelinePoints = [
new THREE.Vector3(-2, 0.2, -2),
new THREE.Vector3(0, 0.3, 0),
new THREE.Vector3(2, 0.2, 2)
];

const pipelineCurve = new THREE.CatmullRomCurve3(pipelinePoints);
const pipelineGeometry = new THREE.TubeGeometry(pipelineCurve, 20, 0.1, 8, false);
const pipelineMaterial = new THREE.MeshStandardMaterial({
color: 0x95a5a6,
metalness: 0.8,
roughness: 0.2,
emissive: 0x00d9ff,
emissiveIntensity: 0.3
});
const pipeline = new THREE.Mesh(pipelineGeometry, pipelineMaterial);
island.add(pipeline);

// Energy pulses along pipeline
const pulses = [];
for (let i = 0; i < 8; i++) {
const pulseGeometry = new THREE.SphereGeometry(0.15, 16, 16);
const pulseMaterial = new THREE.MeshBasicMaterial({
color: 0x00d9ff,
transparent: true,
opacity: 0.8
});
const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
pulse.userData.progress = i / 8;
pulse.userData.speed = 0.005;
pulses.push(pulse);
island.add(pulse);
}

// Mini trucks
const trucks = [];
const truckGeometry = new THREE.BoxGeometry(0.3, 0.2, 0.5);
const truckMaterial = new THREE.MeshStandardMaterial({
color: 0xe74c3c,
metalness: 0.5,
roughness: 0.5
});

const truckPath = [
new THREE.Vector3(-3, 0.1, -3),
new THREE.Vector3(-3, 0.1, 3),
new THREE.Vector3(3, 0.1, 3),
new THREE.Vector3(3, 0.1, -3)
];
const truckCurve = new THREE.CatmullRomCurve3(truckPath, true);

for (let i = 0; i < 3; i++) {
const truck = new THREE.Mesh(truckGeometry, truckMaterial.clone());
truck.userData.progress = i / 3;
truck.userData.speed = 0.002;
trucks.push(truck);
island.add(truck);
}

scene.add(island);

// Founder portraits in 3D carousel removed - using actual images in HTML instead
const founderCircles = [];

// Circular 3D carousel under island
const carouselItems = [];
const carouselRadius = 5;
const carouselCount = 4;

const carouselLabels = ['Production', 'Distribution', 'Storage', 'Consumption'];

for (let i = 0; i < carouselCount; i++) {
const angle = (i / carouselCount) * Math.PI * 2;

const panelGeometry = new THREE.BoxGeometry(1.5, 1, 0.1);
const panelMaterial = new THREE.MeshStandardMaterial({
color: 0x34495e,
metalness: 0.6,
roughness: 0.4,
emissive: 0x00b894,
emissiveIntensity: 0.2
});
const panel = new THREE.Mesh(panelGeometry, panelMaterial);

panel.position.x = Math.cos(angle) * carouselRadius;
panel.position.z = Math.sin(angle) * carouselRadius;
panel.position.y = -2;

panel.userData = {
angle: angle,
label: carouselLabels[i],
index: i
};

panel.lookAt(0, -2, 0);

carouselItems.push(panel);
scene.add(panel);
}

let currentCarouselIndex = 0;

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

// Carousel controls - only if elements exist
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const carouselIndex = document.getElementById('carousel-index');

if (carouselPrev) {
  carouselPrev.addEventListener('click', () => {
    currentCarouselIndex = (currentCarouselIndex - 1 + carouselCount) % carouselCount;
    updateCarousel();
  });
}

if (carouselNext) {
  carouselNext.addEventListener('click', () => {
    currentCarouselIndex = (currentCarouselIndex + 1) % carouselCount;
    updateCarousel();
  });
}

function updateCarousel() {
  if (carouselIndex) {
    carouselIndex.textContent = `${currentCarouselIndex + 1} / ${carouselCount}`;
  }

carouselItems.forEach((item, i) => {
if (i === currentCarouselIndex) {
item.material.emissiveIntensity = 0.5;
item.scale.set(1.2, 1.2, 1.2);
} else {
item.material.emissiveIntensity = 0.2;
item.scale.set(1, 1, 1);
}
});

// Change pipeline brightness
pipeline.material.emissiveIntensity = 0.3 + currentCarouselIndex * 0.1;
}

updateCarousel();

// Animation loop
let time = 0;

function animate() {
requestAnimationFrame(animate);
time += 0.01;

// Orbit camera with mouse
const targetX = 10 + mouseX * 3;
const targetZ = 10 + mouseY * 3;
camera.position.x += (targetX - camera.position.x) * 0.05;
camera.position.z += (targetZ - camera.position.z) * 0.05;
camera.lookAt(0, 0, 0);

// Rotate island slowly
island.rotation.y += 0.002;

// Pulse monolith
monolith.material.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.2;

// Animate pulses along pipeline
pulses.forEach(pulse => {
pulse.userData.progress += pulse.userData.speed;
if (pulse.userData.progress > 1) pulse.userData.progress = 0;

const point = pipelineCurve.getPoint(pulse.userData.progress);
pulse.position.copy(point);
pulse.scale.setScalar(1 + Math.sin(time * 3 + pulse.userData.progress * 10) * 0.3);
});

// Animate trucks along path
trucks.forEach(truck => {
truck.userData.progress += truck.userData.speed;
if (truck.userData.progress > 1) truck.userData.progress = 0;

const point = truckCurve.getPoint(truck.userData.progress);
const nextPoint = truckCurve.getPoint((truck.userData.progress + 0.01) % 1);

truck.position.copy(point);
truck.lookAt(nextPoint);
});

// Founder circles animation removed - using actual images in HTML instead

// Rotate carousel
carouselItems.forEach((item, i) => {
item.userData.angle += 0.005;
item.position.x = Math.cos(item.userData.angle) * carouselRadius;
item.position.z = Math.sin(item.userData.angle) * carouselRadius;
item.lookAt(0, -2, 0);
});

// Scroll effects
island.position.y = -scrollProgress * 3;
trucks.forEach(truck => {
truck.userData.speed = 0.002 + scrollProgress * 0.003;
});

renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();