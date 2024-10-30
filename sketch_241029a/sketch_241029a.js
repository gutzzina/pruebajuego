let imgAang, imgCorazon, fondo; // Variable para almacenar la imagen del personaje
let objJuego; // Variable para el objeto del juego

function preload() {
  imgAang = loadImage('data/fotoAang.png'); // Cargar la imagen
  imgCorazon = loadImage('data/corazon.png');
  imgFondo = loadImage('data/fondo.png');
  imgObstaculo = loadImage('data/obstaculo.png');
  imgPerdiste = loadImage('data/perdiste.png');
}

function setup() {
    createCanvas(640, 480);
    objJuego = new Juego();
}

function draw() {
    image(imgFondo, 0, 0, width, height);
    objJuego.dibujar();
}

function keyPressed() {
    if (key === ' ') {
        objJuego.personaje.salta();
    }
}
