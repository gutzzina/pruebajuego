class Personaje {
    constructor() {
        this.size = 75;
        this.posX = 50;
        this.posY = height - this.size;
        this.velocidad = 0;
        this.saltando = false;
        this.miColor = color(255, 0, 0);
    }
    dibujar() {
        image(imgAang, this.posX, this.posY, this.size, this.size);
    }
    salta() {
        if (!this.saltando) {
            this.velocidad = -15;
            this.saltando = true;
        }
    }
    movimiento() {
        let gravedad = 0.6;
        this.velocidad += gravedad;
        this.posY += this.velocidad;
        if (this.posY >= height - this.size) {
            this.posY = height - this.size;
            this.velocidad = 0;
            this.saltando = false;
        }
    }
}
