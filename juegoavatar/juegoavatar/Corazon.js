class Corazon {
    constructor() {
        this.size = 30;
        this.posX = width;
        this.posY = random(height - 200, height - this.size);
        this.velocidad = 3;
        this.miColor = color(255, 100, 100);
    }
    avance() {
        this.posX -= this.velocidad;
    }
    dibujar() {
        image(imagenes[1], this.posX, this.posY, this.size, this.size);
    }
    fueraDePantalla() {
        return this.posX < -this.size;
    }
    recolectar(personaje) { 
        return (
            personaje.posX < this.posX + this.size &&
            personaje.posX + personaje.size > this.posX &&
            personaje.posY < this.posY + this.size &&
            personaje.posY + personaje.size > this.posY
        );
    }
}
