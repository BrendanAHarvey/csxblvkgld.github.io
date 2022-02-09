// import './portfolio/style.css'

import * as THREE from 'three';


// Setup the scene, camera, and renderer.
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});


// Setup the screen and camera position.
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);


// Setup the 3D Shape.
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

// Function to make the scene anaimation constantly loop.
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Initialise function.
animate()



// Element Fade in and Out Effect
function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -200;

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('...')
    sectionList.forEach(function(section) {
        if(isVisible(section)) {
            section.classList.remove('hidden');
        };
    });
}

document.addEventListener("scroll", scanDocument);