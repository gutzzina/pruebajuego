class Juego {
    constructor() {
        this.personaje = new Personaje();
        this.enemigos = [];
        this.corazones = [];
        this.puntaje = 0;
        this.corazonesAgarrados = 0;
        this.frameCounter = 0;
    }

    dibujar() { 
    this.personaje.dibujar(); this.personaje.movimiento(); this.frameCounter++;
    if (this.frameCounter % 90 === 0) this.enemigos.push(new Enemigo()); 
    if (this.frameCounter % 120 === 0) this.corazones.push(new Corazon());

//-------------dibuja enemigos
        for (let i = this.enemigos.length - 1; i >= 0; i--) {
            this.enemigos[i].avance();
            this.enemigos[i].dibujar();
            if (this.enemigos[i].fueraDePantalla()) {
                this.enemigos.splice(i, 1);
                this.puntaje++;
            }
//---------------verifica colisiones de enemigos con el personaje
            this.enemigos[i].colision(this.personaje);
        }

//-------------dibuja corazones
        for (let i = this.corazones.length - 1; i >= 0; i--) {
            this.corazones[i].avance();
            this.corazones[i].dibujar();
            if (this.corazones[i].fueraDePantalla()) {
                this.corazones.splice(i, 1);
            }
            if (this.corazones[i].recolectar(this.personaje)) {
                this.corazones.splice(i, 1);
                this.corazonesAgarrados++;
            }
        }
        this.mostrarPuntaje();
      }   
      mostrarPuntaje() {
        fill(255);
        textSize(20);
        text("Puntaje: " + this.puntaje, 10, 30);
        text("Corazones: " + this.corazonesAgarrados, 10, 60); 
    }
}
