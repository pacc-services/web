import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

camera.position.set(0, 2, 8);
camera.lookAt(0, 0, 0);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

const rimLight = new THREE.DirectionalLight(0x00d9ff, 0.5);
rimLight.position.set(-5, 3, -5);
scene.add(rimLight);

// Bridge structure
const bridgeGroup = new THREE.Group();

// Deck - glass-like material
const deckGeometry = new THREE.BoxGeometry(12, 0.2, 1.5);
const deckMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x00b894,
  transparent: true,
  opacity: 0.6,
  metalness: 0.3,
  roughness: 0.1,
  transmission: 0.5,
  thickness: 0.5
});
const deck = new THREE.Mesh(deckGeometry, deckMaterial);
deck.position.y = 0;
bridgeGroup.add(deck);

// Cables
const cableGeometry = new THREE.CylinderGeometry(0.05, 0.05, 8, 8);
const cableMaterial = new THREE.MeshStandardMaterial({
  color: 0xcccccc,
  metalness: 0.8,
  roughness: 0.2,
  emissive: 0x00d9ff,
  emissiveIntensity: 0.3
});

for (let i = -5; i <= 5; i += 2) {
  const cable = new THREE.Mesh(cableGeometry, cableMaterial);
  cable.position.set(i, 4, 0);
  cable.rotation.z = Math.PI / 6;
  bridgeGroup.add(cable);

  const cable2 = new THREE.Mesh(cableGeometry, cableMaterial);
  cable2.position.set(i, 4, 0);
  cable2.rotation.z = -Math.PI / 6;
  bridgeGroup.add(cable2);
}

// Towers
const towerGeometry = new THREE.BoxGeometry(0.4, 6, 0.4);
const towerMaterial = new THREE.MeshStandardMaterial({
  color: 0x00b894,
  metalness: 0.7,
  roughness: 0.3,
  emissive: 0x00b894,
  emissiveIntensity: 0.2
});

const tower1 = new THREE.Mesh(towerGeometry, towerMaterial);
tower1.position.set(-5, 3, 0);
bridgeGroup.add(tower1);

const tower2 = new THREE.Mesh(towerGeometry, towerMaterial);
tower2.position.set(5, 3, 0);
bridgeGroup.add(tower2);

scene.add(bridgeGroup);

// Energy pulses
const pulses = [];
const pulseGeometry = new THREE.SphereGeometry(0.15, 16, 16);
const pulseMaterial = new THREE.MeshBasicMaterial({
  color: 0x00d9ff,
  transparent: true,
  opacity: 0.8
});

for (let i = 0; i < 15; i++) {
  const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial.clone());
  pulse.position.x = -6 + (i / 15) * 12;
  pulse.position.y = 0.2;
  pulse.position.z = Math.random() * 1 - 0.5;
  pulse.userData.speed = 0.02 + Math.random() * 0.02;
  pulses.push(pulse);
  bridgeGroup.add(pulse);
}

// Hydrogen bubbles particles
const particleCount = 300;
const particlesGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const velocities = [];

for (let i = 0; i < particleCount; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 20;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
  velocities.push({
    x: (Math.random() - 0.5) * 0.01,
    y: Math.random() * 0.02 + 0.01,
    z: (Math.random() - 0.5) * 0.01
  });
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particleMaterial = new THREE.PointsMaterial({
  color: 0x00d9ff,
  size: 0.15,
  transparent: true,
  opacity: 0.6,
  blending: THREE.AdditiveBlending
});

const particles = new THREE.Points(particlesGeometry, particleMaterial);
scene.add(particles);

// Mouse interaction
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

document.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Scroll interaction
let scrollProgress = 0;
window.addEventListener('scroll', () => {
  scrollProgress = window.scrollY / window.innerHeight;
});

// Carousel functionality
const carouselCards = document.querySelectorAll('.carousel-card');
let currentIndex = 0;

function updateCarousel() {
  carouselCards.forEach((card, index) => {
    if (index === currentIndex) {
      card.style.transform = 'translateY(-5px) scale(1.05)';
      card.style.borderColor = '#00d9ff';
    } else {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    }
  });

  // Update bridge glow intensity based on carousel
  pulses.forEach((pulse, i) => {
    pulse.material.opacity = 0.5 + (currentIndex + 1) * 0.15;
  });
}

if (document.getElementById('prev')) {
  document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselCards.length) % carouselCards.length;
    updateCarousel();
  });
}

if (document.getElementById('next')) {
  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselCards.length;
    updateCarousel();
  });
}

if (carouselCards.length > 0) {
  updateCarousel();
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Smooth camera follow mouse
  targetX = mouseX * 0.5;
  targetY = mouseY * 0.3;
  camera.position.x += (targetX - camera.position.x) * 0.05;
  camera.position.y += (2 + targetY - camera.position.y) * 0.05;
  camera.lookAt(0, 0, 0);

  // Rotate bridge slightly
  bridgeGroup.rotation.y += 0.001;

  // Animate energy pulses
  pulses.forEach((pulse, i) => {
    pulse.position.x += pulse.userData.speed;
    if (pulse.position.x > 6) {
      pulse.position.x = -6;
    }
    // Pulsing glow
    pulse.scale.setScalar(1 + Math.sin(Date.now() * 0.005 + i) * 0.2);
  });

  // Animate particles
  const positionsArray = particles.geometry.attributes.position.array;
  for (let i = 0; i < particleCount; i++) {
    positionsArray[i * 3] += velocities[i].x;
    positionsArray[i * 3 + 1] += velocities[i].y;
    positionsArray[i * 3 + 2] += velocities[i].z;

    // Reset particles that float too high
    if (positionsArray[i * 3 + 1] > 5) {
      positionsArray[i * 3 + 1] = -5;
    }

    // Keep particles within bounds
    if (Math.abs(positionsArray[i * 3]) > 10) {
      velocities[i].x *= -1;
    }
    if (Math.abs(positionsArray[i * 3 + 2]) > 7) {
      velocities[i].z *= -1;
    }
  }
  particles.geometry.attributes.position.needsUpdate = true;

  // Scroll effects
  bridgeGroup.position.y = -scrollProgress * 2;
  pulses.forEach(pulse => {
    pulse.userData.speed = 0.02 + scrollProgress * 0.03;
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

