class Juego {
    constructor() {
        this.enJuego = false;
        this.enCreditos = false; 
        this.personaje = new Personaje();
        this.enemigos = [];
        this.corazones = [];
        this.puntaje = 0;
        this.corazonesAgarrados = 0;
        this.frameCounter = 0;
        this.haGanado = false; 
        this.perdiste = false;
    }

    dibujar() {
        if (this.enCreditos) {
            this.dibujarCreditos();
        } else if (!this.enJuego) {
            this.dibujarMenuPrincipal();
        } else {
            if (this.haGanado) {
                this.dibujarGanaste(); //imagen de ganaste
            } else {
                this.dibujarJuego();
            }
        }
    }

    dibujarCreditos() {
        image(imagenes[13], 0, 0, width, height);
        this.dibujarBoton(width / 2 - 50, height / 2 + 50, imagenes[12]);
    }

    dibujarMenuPrincipal() {
        image(imagenes[8], 0, 0, width, height); 
        this.dibujarBoton(width / 2 - 50, height / 2, imagenes[9]); 
        this.dibujarBoton(width / 2 - 50, height / 2 + 60, imagenes[11]); 
    }

    dibujarGanaste() {
        image(imagenes[7], width / 2 - imagenes[7].width / 2, height / 2 - imagenes[7].height / 2); //dibuja la imagen de ganaste en el centro

        //dibujar botón de volver
        let botonVolverX = width / 2 - 50;
        let botonVolverY = height / 2 + imagenes[7].height / 2 + 20; //espacio entre la imagen y el botón
        this.dibujarBoton(botonVolverX, botonVolverY, imagenes[12]); //botón de volver

        // boton de reiniciar
        // let botonReiniciarX = width / 2 - 50;
        // let botonReiniciarY = botonVolverY + 60; 
        // this.dibujarBoton(botonReiniciarX, botonReiniciarY, imagenes[14]); 
    }

    dibujarPerdiste() {
        image(imagenes[4], width / 2 - imagenes[4].width / 2, height / 2 - imagenes[4].height / 2);
        this.dibujarBoton(width / 2 - imagenes[10].width / 2.2, height / 2 + imagenes[4].height / 1.5, imagenes[10]);
    }

    dibujarBoton(x, y, imagen) {
        image(imagen, x, y, 100, 50);
    }

    //dibujarJuego se encarga de comenzar el juego y dibujar los elementos del juego
    dibujarJuego() {
        image(imagenes[2], 0, 0, width, height); 
        this.personaje.dibujar();
        this.personaje.movimiento();
        this.frameCounter++;
        
        if (this.frameCounter % 90 === 0) this.enemigos.push(new Enemigo()); 
        if (this.frameCounter % 120 === 0) this.corazones.push(new Corazon());
        this.actualizarYdibujarEnemigos();
        this.actualizarYdibujarCorazones();
        this.mostrarPuntaje();
    }

    actualizarYdibujarEnemigos() {
        for (let i = this.enemigos.length - 1; i >= 0; i--) {
            let enemigo = this.enemigos[i];
            enemigo.avance();
            enemigo.dibujar();
    
            if (enemigo.fueraDePantalla()) {
                this.enemigos.splice(i, 1);
                this.puntaje++;
            }
            

            if (enemigo.colision(this.personaje)) {
                this.dibujarPerdiste(); 
                noLoop()
                return true; 
            }
        }
        return false; 
    }

    dibujarPerdiste() {
        image(imagenes[4], width / 2 - imagenes[4].width / 2, height / 2 - imagenes[4].height / 2);
        this.dibujarBoton(width / 2 - imagenes[10].width / 2.2, height / 2 + imagenes[4].height / 1.5, imagenes[10]);
        //boton de regresar al menu    
        // this.dibujarBoton(width / 2 - imagenes[12].width / 2.2, height / 2 + imagenes[4].height / 1.5 + 60, imagenes[12]);

        // perdió
        this.perdiste = true;
    }
    

    actualizarYdibujarCorazones() {
        for (let i = this.corazones.length - 1; i >= 0; i--) {
            let corazon = this.corazones[i];
            corazon.avance();
            corazon.dibujar();
            if (corazon.fueraDePantalla()) {
                this.corazones.splice(i, 1);
            } else if (corazon.recolectar(this.personaje)) {
                this.corazones.splice(i, 1);
                this.corazonesAgarrados++;
                
                if (this.corazonesAgarrados >= 2) {
                    this.haGanado = true; 
                }
            }
        }
    }
    mostrarPuntaje() {
        fill(200);
        textSize(20);
        image(imagenes[6], 15, 10, 42, 50);
        text(" " + this.puntaje, 60, 40);
        image(imagenes[5], 15, 60, 42, 50); 
        text(" " + this.corazonesAgarrados, 60, 92);
    }
}
