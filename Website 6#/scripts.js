// Three.js - Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("three-canvas-container").appendChild(renderer.domElement);

// Add 3D particles
const particleGeometry = new THREE.BufferGeometry();
const particleCount = 5000;
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 1000;
}

particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
);

const particleMaterial = new THREE.PointsMaterial({
    color: 0xff1aff,
    size: 2,
});

const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

camera.position.z = 100;

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();

// GSAP - Scroll-triggered animations
gsap.from(".neon", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".neon",
        start: "top 80%",
    },
});
