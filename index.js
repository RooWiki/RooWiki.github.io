import * as THREE from './asd/three.js-master/build/three.module.js'
import {GLTFLoader} from './asd/three.js-master/examples/jsm/loaders/GLTFLoader.js'
let giro11, giro22, giro33;
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

const render = new THREE.WebGL1Renderer({antialias: true})
//renderer.shadowMap.enabled = true;

 

// Importar Objeto con fromato glb
const loader = new GLTFLoader();

loader.load('assets/logo.glb', function(glb){
    const root = glb.scene;

    // Posicion y escala del objeto importado
    root.position.set(0,1.1,0)
    root.scale.set(0.1, 0.1, 0.1)
    
    //Sombras del Objeto Importado
    root.traverse(function(node){
        if(node.isMesh)
            node.castShadow = true;
            node.receiveShadow = true;
    });

      scene.add(root);

    
// Alerta de importacion

}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, function (error){
    console.log('An error ocurred')
})


loader.load('assets/giro1.glb', function(glb){
    const giro1 = glb.scene;
    giro11 = glb.scene;

    // Posicion y escala del objeto importado
    //scene.position.set(0,0,0)
    giro1.position.set(0, 4, 0)
    giro1.scale.set(0.1, 0.1, 0.1)
    
    //Sombras del Objeto Importado
    giro1.traverse(function(node){
        if(node.isMesh)
            node.castShadow = true;
            node.receiveShadow = true;
    });

      scene.add(giro1);

})
loader.load('assets/giro2.glb', function(glb){
    const giro2 = glb.scene;
    giro22 = glb.scene;

    // Posicion y escala del objeto importado
    
    giro2.position.set(0, 4, 0)
    giro2.scale.set(0.1, 0.1, 0.1)
    
    //Sombras del Objeto Importado
    giro2.traverse(function(node){
        if(node.isMesh)
            node.castShadow = true;
            node.receiveShadow = true;
    });

      scene.add(giro2);
})

loader.load('assets/giro3.glb', function(glb){
    const giro3 = glb.scene;
    giro33 = glb.scene;

    // Posicion y escala del objeto importado
    giro3.position.set(0, 4, 0)
    giro3.scale.set(0.1, 0.1, 0.1)
    
    //Sombras del Objeto Importado
    giro3.traverse(function(node){
        if(node.isMesh)
            node.castShadow = true;
            node.receiveShadow = true;
    });

      scene.add(giro3);
})

let rotationSpeed = 0.03


// Iluminacion general de la escena                                     

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight)

//Pausa

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
/*
const geometry2 = new THREE.SphereGeometry(1, 32, 32); // Radio, segmentos horizontales, segmentos verticales
const material2 = new THREE.MeshPhongMaterial({ color: 0x00ff00 }); // Color verde
const sphere2 = new THREE.Mesh(geometry2, material2);
sphere2.position.set(-1.5, 2.1, 2.5)
scene.add(sphere2);
*/
// Naranja
const ArbolPointLight3 = new THREE.PointLight(0xFF4D00, 100, 3);
ArbolPointLight3.position.set(-2.2, 2.3, 0);
ArbolPointLight3.castShadow = false
scene.add(ArbolPointLight3);
/*
const geometry5 = new THREE.SphereGeometry(1, 32, 32); // Radio, segmentos horizontales, segmentos verticales
const material5 = new THREE.MeshPhongMaterial({ color: 0x00ff00 }); // Color verde
const sphere5 = new THREE.Mesh(geometry5, material5);
sphere5.position.set(-2.2, 2.3, 0)
scene.add(sphere5);
*/
// Azul
const ArbolPointLight4 = new THREE.PointLight(0x00C5FF, 100, 2);
ArbolPointLight4.position.set(-2.8, 1.1, 1.5);
ArbolPointLight4.castShadow = false
scene.add(ArbolPointLight4);
/*
const geometry6 = new THREE.SphereGeometry(1, 32, 32); // Radio, segmentos horizontales, segmentos verticales
const material6 = new THREE.MeshPhongMaterial({ color: 0x00ff00 }); // Color verde
const sphere6 = new THREE.Mesh(geometry6, material6);
sphere6.position.set(-2.8, 1.1, 1.5)
scene.add(sphere6);
*/

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
// Naranja 
const Puerta = new THREE.PointLight(0xFF4D00, 30, 3);
Puerta.position.set(0, 0.5, 1.5);
Puerta.castShadow = true
scene.add(Puerta);

const Puerta1 = new THREE.PointLight(0x0087FF, 30, 3);
Puerta1.position.set(0, 1.5, 1.5);
Puerta1.castShadow = false 
scene.add(Puerta1);

const cartel = new THREE.PointLight(0xFF4D00, 30, 0.5);
cartel.position.set(0.05, 0.3, 2);
cartel.castShadow = false
scene.add(cartel);

// Puerta Trasera
// azul 
const Trasera1 = new THREE.PointLight(0x00C5FF, 100, 4);
Trasera1.position.set(3, 1.5, -4);
Trasera1.castShadow = false
scene.add(Trasera1);

const OVNI = new THREE.PointLight(0x1FFF00, 30, 3);
OVNI.position.set(3.2, .5, 0);
OVNI.castShadow = true
scene.add(OVNI);

const OVNI2 = new THREE.PointLight(0xAA00FF, 30, 3);
OVNI2.position.set(3.2, 2.5, 0);
OVNI2.castShadow = false
scene.add(OVNI2);

/*
const Trasera2 = new THREE.PointLight(0x1FFF00, 50, 4);
Trasera2.position.set(3.5, 1.5, 0);
Trasera2.castShadow = false
scene.add(Trasera2);
*/

                                                        //__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡. // Sky Box
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

                                                        //__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l // Tamaño de la escena
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

                                                        //__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l
// Camara
const camera = new  THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);


const positions = [
    { x: 5, y: 1.5, z: 0 },
    { x: 0, y: 1.5, z: 5 },
    { x: -5, y: 1.5, z: 0 },
    { x: 0, y: 1.5, z: -5 }
  ];
  
  let clickCount = 0; // Contador de clics
  
  function animateCamera() {
    if (clickCount < positions.length) {
      const position = positions[clickCount];
      new TWEEN.Tween(camera.position)
        .to(position, 2000) // Duración de la animación en milisegundos
        .easing(TWEEN.Easing.Quadratic.Out)
        .onComplete(() => {
          // Animación completada, incrementar el contador de clics y permitir otro clic
          clickCount++;
          console.log('clickCount: ' + clickCount);
        })
        .start();
      console.log('Carga');
    } else {
      console.log('Animación completada');
      clickCount = 0
      animateCamera();
    }
  }
  
  function handleClick() {
    animateCamera();
  }
  
  // Asignar el controlador de eventos al hacer clic en el lienzo
  canvas.addEventListener('click', handleClick, false);

// Variables para controlar la rotación de la cámara


scene.add(camera);


//const renderer2 = new THREE.WebGL1Renderer({ antialias: true });  
const renderer = new THREE.WebGL1Renderer({

    canvas: canvas
})

//renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio))
renderer.setClearColor(0xA3A3A3);

window.addEventListener( 'resize', onWindowResize );


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

////////////////////////////////////////////////////// Función de manejo del evento de clic en el lienzo


function animate(){
    // Actualizar los tweens en cada fotograma
    
    function onCanvasClick(event) {
        //createCameraAnimations();
    }

    
    TWEEN.update();
      
    // Agrega un event listener al elemento del lienzo de renderizado
    renderer.domElement.addEventListener('click', onCanvasClick);
    

    if (giro11) giro11.rotation.x += rotationSpeed;
    if (giro22) giro22.rotation.z += rotationSpeed;
    if (giro33) giro33.rotation.y += rotationSpeed;

    
        // Apuntar la camara
    camera.lookAt(0.0, 1, 0.0);

    renderer.shadowMap.enabled = true
    renderer.gammaOuput = true
            
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    }
            
animate()


