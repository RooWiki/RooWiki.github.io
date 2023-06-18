import * as THREE from './asd/three.js-master/build/three.module.js'
import {
   GLTFLoader
} from './asd/three.js-master/examples/jsm/loaders/GLTFLoader.js'
let giro11, giro22, giro33;
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()
const logoCV = document.getElementById('logoCV');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const loader = new GLTFLoader();
let clickCount = 0; // Contador de clics

loader.load('assets/logo.glb', function (glb) {
   const root = glb.scene;

   // Posicion y escala del objeto importado
   root.position.set(0, 1.1, 0)
   root.scale.set(0.1, 0.1, 0.1)

   //Sombras del Objeto Importado
   root.traverse(function (node) {
      if (node.isMesh)
         node.castShadow = true;
      node.receiveShadow = true;
   });

   scene.add(root);


   // Alerta de importacion

}, function (xhr) {
   console.log((xhr.loaded / xhr.total * 100) + "% loaded")
}, function (error) {
   console.log('An error ocurred')
})


loader.load('assets/giro1.glb', function (glb) {
   const giro1 = glb.scene;
   giro11 = glb.scene;

   giro1.position.set(0, 4, 0)
   giro1.scale.set(0.1, 0.1, 0.1)

   //Sombras del Objeto Importado
   giro1.traverse(function (node) {
      if (node.isMesh)
         node.castShadow = true;
      node.receiveShadow = true;
   });

   scene.add(giro1);

})
loader.load('assets/giro2.glb', function (glb) {
   const giro2 = glb.scene;
   giro22 = glb.scene;

   giro2.position.set(0, 4, 0)
   giro2.scale.set(0.1, 0.1, 0.1)

   giro2.traverse(function (node) {
      if (node.isMesh)
         node.castShadow = true;
      node.receiveShadow = true;
   });

   scene.add(giro2);
})

loader.load('assets/giro3.glb', function (glb) {
   const giro3 = glb.scene;
   giro33 = glb.scene;

   giro3.position.set(0, 4, 0)
   giro3.scale.set(0.1, 0.1, 0.1)

   giro3.traverse(function (node) {
      if (node.isMesh)
         node.castShadow = true;
      node.receiveShadow = true;
   });

   scene.add(giro3);
})
let rotationSpeed = 0.03


// Iluminacion general de la escena

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight)

// Luz giroscopio

const giroscopio = new THREE.PointLight(0xFFF300, 100, 2);
giroscopio.position.set(0, 4, 0);
giroscopio.castShadow = false
scene.add(giroscopio);


// Luces del Arbol
// Naranja
const ArbolPointLight5 = new THREE.PointLight(0xFF7100, 30, 2);
ArbolPointLight5.position.set(-1.5, 2.1, 2.5);
ArbolPointLight5.castShadow = false
scene.add(ArbolPointLight5);

// Naranja
const ArbolPointLight3 = new THREE.PointLight(0xFF4D00, 20, 3);
ArbolPointLight3.position.set(-2.2, 2.3, 0);
ArbolPointLight3.castShadow = false
scene.add(ArbolPointLight3);

// Azul
const ArbolPointLight4 = new THREE.PointLight(0x00C5FF, 20, 3);
ArbolPointLight4.position.set(-2.8, 2.1, 1.5);
ArbolPointLight4.castShadow = false
scene.add(ArbolPointLight4);


// Farol
// Naranja
const Farol2 = new THREE.PointLight(0xFF4D00, 50, 3);
Farol2.position.set(-2, 1, -2);
Farol2.castShadow = false
scene.add(Farol2);


// Esmeraldas
// verde 
const Esmeraldas1 = new THREE.PointLight(0x1FFF00, 50, 2);
Esmeraldas1.position.set(-3, 2.5, -3.5);
Esmeraldas1.castShadow = false
scene.add(Esmeraldas1);
// verde 

// Puerta principal
// Azul 
const Puerta = new THREE.PointLight(0x00C5FF, 30, 1);
Puerta.position.set(0, 1, 1.5);
Puerta.castShadow = false
scene.add(Puerta);

const cartel = new THREE.PointLight(0xFF4D00, 10, 10);
cartel.position.set(0, 0.3, 2);
cartel.castShadow = false
scene.add(cartel);

// Puerta Trasera
// azul 
const Trasera1 = new THREE.PointLight(0x1FFF00, 30, 4);
Trasera1.position.set(3, 1.5, -4);
Trasera1.castShadow = false
scene.add(Trasera1);

const OVNI = new THREE.PointLight(0xAA00FF, 30, 5);
OVNI.position.set(4.5, 1.5, 4.5);
OVNI.castShadow = false
scene.add(OVNI);

const OVNI2 = new THREE.PointLight(0x1FFF00, 30, 6);
OVNI2.position.set(6.2, 4.5, -6);
OVNI2.castShadow = false
scene.add(OVNI2);

// Luna

const luna = new THREE.PointLight(0x1FFF00, 100, 40);
luna.position.set(-30, 25, -40);
luna.castShadow = false
scene.add(luna);

// Crear el skybox con texturas
const loaderskybox = new THREE.CubeTextureLoader();
const texture = loaderskybox.load([
   'assets/SkyBox/1.jpg',
   'assets/SkyBox/3.jpg',
   'assets/SkyBox/5.jpg',
   'assets/SkyBox/6.jpg',
   'assets/SkyBox/4.jpg',
   'assets/SkyBox/2.jpg'
]);
scene.background = texture;

const sizes = {
   width: window.innerWidth,
   height: window.innerHeight
}
// Camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2, 2.5, 7)
camera.lookAt(0,0,0)


const positions = [{
      x: 2,
      y: 2.5,
      z: 7
   },
   {
      x: 0,
      y: 1.5,
      z: 5
   },
   {
      x: -5,
      y: 1,
      z: -1.5
   },
   {
      x: 0.5,
      y: 1.1,
      z: -2.3
   },
   {
      x: 2.5,
      y: 0.6,
      z: -0.5
   }
];

const lookats = [{
   x: 0,
   y: 1.2,
   z: 0
},
{
   x: 0,
   y: 1,
   z: 0
},
{
   x: 0,
   y: 1,
   z: 0
},
{
   x: 0.5,
   y: 1,
   z: 0
},
{
   x: 3,
   y: 0.7,
   z: -2
},
];




console.log(clickCount);
logoCV.addEventListener('click', () => {
   clickCount = 0;
   console.log('Se ha hecho clic en el botón 0. clickCount =', clickCount);
   animateCamera()
});

button1.addEventListener('click', () => {
   clickCount = 1;
   console.log('Se ha hecho clic en el botón 1. clickCount =', clickCount);
   animateCamera()
});

button2.addEventListener('click', () => {
   clickCount = 2;
   console.log('Se ha hecho clic en el botón 2. clickCount =', clickCount);
   animateCamera()
});

button3.addEventListener('click', () => {
   clickCount = 3;
   console.log('Se ha hecho clic en el botón 3. clickCount =', clickCount);
   animateCamera()
});

button4.addEventListener('click', () => {
   clickCount = 4;
   console.log('Se ha hecho clic en el botón 4. clickCount =', clickCount);
   animateCamera()
});
camera.target = new THREE.Vector3();
function animateCamera() {
   if (clickCount < positions.length) {
      const position = positions[clickCount];
      const lookAt = lookats[clickCount];
      
      new TWEEN.Tween(camera.position)
         .to(position, 2000) // Duración de la animación en milisegundos
         .easing(TWEEN.Easing.Quadratic.Out)
         .start();
      
         new TWEEN.Tween(camera.target)
         .to(lookAt, 2000) // Duración de la animación en milisegundos
         .easing(TWEEN.Easing.Quadratic.Out)
         .onUpdate(() => {
            camera.lookAt(camera.target);
         })
         .start();
   } 
}

scene.add(camera);


const renderer = new THREE.WebGL1Renderer({

   canvas: canvas
})

//renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio))
renderer.setClearColor(0xA3A3A3);

window.addEventListener('resize', onWindowResize);


function onWindowResize() {
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(window.innerWidth, window.innerHeight);
}

////////////////////////////////////////////////////// Función de manejo del evento de clic en el lienzo
rotationSpeed

function animate() {
   // Actualizar los tweens en cada fotograma
   TWEEN.update();

   if (giro11) giro11.rotation.x += rotationSpeed;
   if (giro22) giro22.rotation.z += rotationSpeed;
   if (giro33) giro33.rotation.y += rotationSpeed;

   renderer.shadowMap.enabled = true
   renderer.gammaOuput = true
   requestAnimationFrame(animate);
   renderer.render(scene, camera);
}
animate()