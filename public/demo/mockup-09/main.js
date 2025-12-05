import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

  const container = document.getElementById('canvas-container');
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0a1929, 5, 20);
  
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  camera.position.set(0, 0, 10);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0x00d9ff, 1.0);
  keyLight.position.set(5, 5, 5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x00b894, 0.5);
  fillLight.position.set(-5, 0, 3);
  scene.add(fillLight);

  const rimLight = new THREE.PointLight(0x00d9ff, 1, 20);
  rimLight.position.set(0, 0, -5);
  scene.add(rimLight);

  // H2 Molecule - two atoms with bond
  const moleculeGroup = new THREE.Group();

  // Atom material - refractive glass
  const atomMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x00d9ff,
    transparent: true,
    opacity: 0.7,
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.9,
    thickness: 2,
    envMapIntensity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.1
  });

  const atomGeometry = new THREE.SphereGeometry(1.5, 64, 64);
  
  const atom1 = new THREE.Mesh(atomGeometry, atomMaterial.clone());
  atom1.position.x = -1.5;
  moleculeGroup.add(atom1);

  const atom2 = new THREE.Mesh(atomGeometry, atomMaterial.clone());
  atom2.position.x = 1.5;
  moleculeGroup.add(atom2);

  // Bond
  const bondGeometry = new THREE.CylinderGeometry(0.2, 0.2, 3, 32);
  const bondMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5,
    metalness: 0.8,
    roughness: 0.2,
    emissive: 0x00d9ff,
    emissiveIntensity: 0.5
  });
  const bond = new THREE.Mesh(bondGeometry, bondMaterial);
  bond.rotation.z = Math.PI / 2;
  moleculeGroup.add(bond);

  scene.add(moleculeGroup);

  // Electron orbits
  const electronOrbitCount = 5;
  const electrons = [];
  const electronTrails = [];

  for (let i = 0; i < electronOrbitCount; i++) {
    const electronGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const electronMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d9ff,
      transparent: true,
      opacity: 1
    });
    const electron = new THREE.Mesh(electronGeometry, electronMaterial);
    
    electron.userData = {
      angle: (i / electronOrbitCount) * Math.PI * 2,
      speed: 0.01 + Math.random() * 0.01,
      radiusX: 4 + Math.random() * 2,
      radiusY: 3 + Math.random() * 1.5,
      radiusZ: 2 + Math.random() * 1
    };
    
    electrons.push(electron);
    scene.add(electron);

    // Trail effect
    const trailPositions = [];
    for (let j = 0; j < 20; j++) {
      trailPositions.push(0, 0, 0);
    }
    const trailGeometry = new THREE.BufferGeometry();
    trailGeometry.setAttribute('position', new THREE.Float32BufferAttribute(trailPositions, 3));
    
    const trailMaterial = new THREE.LineBasicMaterial({
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
    
    const trail = new THREE.Line(trailGeometry, trailMaterial);
    electronTrails.push(trail);
    scene.add(trail);
  }

  // Founder portraits in 3D carousel - removed, using actual images in HTML instead
  const founderPortraits = [];

  // Particle fog
  const fogParticleCount = 500;
  const fogGeometry = new THREE.BufferGeometry();
  const fogPositions = new Float32Array(fogParticleCount * 3);

  for (let i = 0; i < fogParticleCount; i++) {
    fogPositions[i * 3] = (Math.random() - 0.5) * 30;
    fogPositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    fogPositions[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }

  fogGeometry.setAttribute('position', new THREE.BufferAttribute(fogPositions, 3));

  const fogMaterial = new THREE.PointsMaterial({
    color: 0x00d9ff,
    size: 0.1,
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending
  });

  const fogParticles = new THREE.Points(fogGeometry, fogMaterial);
  scene.add(fogParticles);

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

    // Mouse parallax
    camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);

    // Rotate molecule
    moleculeGroup.rotation.y += 0.005;
    moleculeGroup.rotation.x = Math.sin(time * 0.5) * 0.1;

    // Pulse atoms
    const scale = 1 + Math.sin(time * 2) * 0.05;
    atom1.scale.setScalar(scale);
    atom2.scale.setScalar(scale);

    // Animate electrons on elliptical orbits
    electrons.forEach((electron, i) => {
      electron.userData.angle += electron.userData.speed;
      
      const x = Math.cos(electron.userData.angle) * electron.userData.radiusX;
      const y = Math.sin(electron.userData.angle * 1.3) * electron.userData.radiusY;
      const z = Math.sin(electron.userData.angle * 0.7) * electron.userData.radiusZ;
      
      electron.position.set(x, y, z);

      // Update trail
      const trailPositions = electronTrails[i].geometry.attributes.position.array;
      for (let j = trailPositions.length - 3; j >= 3; j -= 3) {
        trailPositions[j] = trailPositions[j - 3];
        trailPositions[j + 1] = trailPositions[j - 2];
        trailPositions[j + 2] = trailPositions[j - 1];
      }
      trailPositions[0] = x;
      trailPositions[1] = y;
      trailPositions[2] = z;
      electronTrails[i].geometry.attributes.position.needsUpdate = true;
    });

      // Founder carousel removed - using actual images in HTML instead

    // Scroll effect - fracture molecule
    const fracture = scrollProgress * 2;
    atom1.position.x = -1.5 - fracture;
    atom2.position.x = 1.5 + fracture;
    bond.scale.x = 1 + fracture * 0.5;
    bond.material.opacity = Math.max(0, 0.5 - scrollProgress);

    // Increase electron orbit radius
    electrons.forEach(electron => {
      electron.userData.radiusX = 4 + Math.random() * 2 + scrollProgress * 3;
      electron.userData.radiusY = 3 + Math.random() * 1.5 + scrollProgress * 2;
    });

    // Rotate fog
    fogParticles.rotation.y += 0.0005;

    renderer.render(scene, camera);
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate();