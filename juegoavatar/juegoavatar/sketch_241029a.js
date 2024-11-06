//falta colocar instrucciones

let song, songPlaying = false;
let imagenes = [];
let juego; 
let interacciones; 

function preload() {
    song = loadSound('/data/sound.mp3');
    imagenes = [ 
        loadImage('data/fotoAang.png'), 
        loadImage('data/corazon.png'),
        loadImage('data/fondo.png'),
        loadImage('data/obstaculo.png'), 
        loadImage('data/perdiste.png'), 
        loadImage('data/hudCorazon.png'), 
        loadImage('data/hudObstaculo.png'), 
        loadImage('data/ganaste.png'),
        loadImage('data/portada.png'), 
        loadImage('data/botonJugar.png'), 
        loadImage('data/botonReiniciarDos.png'), 
        loadImage('data/botonCreditos.png'), 
        loadImage('data/botonVolver.png'), 
        loadImage('data/creditos.png'), 
        loadImage('data/botonReiniciarDos.png'), 
    ];
}

function setup() {
    createCanvas(640, 480);
    juego = new Juego();
    interacciones = new Interacciones(juego); 
}

function draw() {
    juego.dibujar();
}

function mousePressed() {
    interacciones.detectarClick(mouseX, mouseY); 
}

function keyPressed() {
    if (key === ' ') {
        juego.personaje.salta(); 
    }
}
