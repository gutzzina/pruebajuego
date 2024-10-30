class Enemigo {
    constructor() {
        this.size = 90;
        this.hitbox = 30;
        this.posX = width;
        this.posY = height - this.size;
        this.velocidad = 6;
        this.miColor = color(150, 0, 0);
    }
    
    avance() {
        this.posX -= this.velocidad;
    }
    
    dibujar() {
        image(imgObstaculo, this.posX, this.posY, this.size, this.size);
    }

    fueraDePantalla() {
        return this.posX < -this.size;
    }

    golpe(personaje) {
        return (
            personaje.posX < this.posX + this.hitbox &&
            personaje.posX + personaje.size > this.posX &&
            personaje.posY < this.posY + this.hitbox &&
            personaje.posY + personaje.size > this.posY
        );
    }

  colision(personaje) {
        if (this.golpe(personaje)) { 
            noLoop(); 
            image(imgPerdiste, width / 2 - imgPerdiste.width / 2, height / 2 - imgPerdiste.height / 2)
        }
    }
}
