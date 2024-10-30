let imagenes = [];
let objJuego; 

function preload() {
  imagenes = [ 
  loadImage('data/fotoAang.png'),
  loadImage('data/corazon.png'),
  loadImage('data/fondo.png'),
  loadImage('data/obstaculo.png'),
  loadImage('data/perdiste.png'),
  loadImage('data/hudCorazon.png'),
  loadImage('data/hudObstaculo.png')
];

}

function setup() {
    createCanvas(640, 480);
    objJuego = new Juego();
}

function draw() {
    image(imagenes[2], 0, 0, width, height);
    objJuego.dibujar();
}

function keyPressed() {
    if (key === ' ') {
        objJuego.personaje.salta();
    }
}
