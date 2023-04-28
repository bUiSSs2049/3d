import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Create a new scene
const scene = new THREE.Scene();

// Create a new camera with default position and lookAt
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 5);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// Create a new renderer and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a new cube with a basic material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0xb3dcff });
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Create an infinite grid helper with custom colors
const gridHelper = new THREE.GridHelper(10, 10, 0xb3ffbc, 0xffd067);
gridHelper.position.y = -0.5;
scene.add(gridHelper);

// Create a new OrbitControls instance for seamless camera movement
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 0.1;
controls.maxDistance = 1000;

// Create three buttons to toggle the 2D projection on the X, Y, and Z axes
const buttonX = document.createElement("button");
buttonX.textContent = "Project on X axis";
buttonX.onclick = () => {
  camera.position.set(5, 0, 0);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
};
document.body.appendChild(buttonX);

const buttonY = document.createElement("button");
buttonY.textContent = "Project on Y axis";
buttonY.onclick = () => {
  camera.position.set(0, 5, 0);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
};
document.body.appendChild(buttonY);

const buttonZ = document.createElement("button");
buttonZ.textContent = "Project on Z axis";
buttonZ.onclick = () => {
  camera.position.set(0, 0, 5);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
};
document.body.appendChild(buttonZ);

// Render the scene with the camera and controls
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
