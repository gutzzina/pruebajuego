//falta colocar instrucciones
//falta color sonido


let imagenes = [];
let juego; 
let interacciones; 

function preload() {
    imagenes = [ 
        loadImage('data/fotoAang.png'), //0
        loadImage('data/corazon.png'), //1
        loadImage('data/fondo.png'), //2
        loadImage('data/obstaculo.png'), //3
        loadImage('data/perdiste.png'), //4
        loadImage('data/hudCorazon.png'), //5
        loadImage('data/hudObstaculo.png'), //6
        loadImage('data/ganaste.png'), //7
        loadImage('data/portada.png'), //8
        loadImage('data/botonJugar.png'), //9
        loadImage('data/botonReiniciarDos.png'), //10
        loadImage('data/botonCreditos.png'), //11
        loadImage('data/botonVolver.png'), //12
        loadImage('data/creditos.png'), //13
        loadImage('data/botonReiniciarDos.png'), //14
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
