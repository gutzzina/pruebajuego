class Interacciones {
  constructor(juego) {
    this.juego = juego;
  }

  detectarClick(mouseX, mouseY) {
    //comprobación de los créditos
    if (this.juego.enCreditos) {
      let botonVolverX = width / 2 - 50;
      let botonVolverY = height / 2 + 50;
      if (
        mouseX > botonVolverX &&
        mouseX < botonVolverX + 100 &&
        mouseY > botonVolverY &&
        mouseY < botonVolverY + 50
      ) {
        this.juego.enCreditos = false;
      }
    } else if (!this.juego.enJuego) {
      //comprobación para iniciar el juego
      let botonJugarX = width / 2 - 50;
      let botonJugarY = height / 2;
      if (
        mouseX > botonJugarX &&
        mouseX < botonJugarX + 100 &&
        mouseY > botonJugarY &&
        mouseY < botonJugarY + 50
      ) {
        this.juego.enJuego = true;
      }
      //comprobación para mostrar los créditos
      let botonCreditosX = width / 2 - 50;
      let botonCreditosY = botonJugarY + 60;
      if (
        mouseX > botonCreditosX &&
        mouseX < botonCreditosX + 100 &&
        mouseY > botonCreditosY &&
        mouseY < botonCreditosY + 50
      ) {
        this.juego.enCreditos = true;
      }
    } else if (this.juego.perdiste) {
      //lógica para los botones cuando pierdes
      let botonReiniciarX = width / 2 - imagenes[10].width / 2.2;
      let botonReiniciarY = height / 2 + imagenes[4].height / 1.5;
      if (mouseX > botonReiniciarX && mouseX < botonReiniciarX + imagenes[10].width &&
          mouseY > botonReiniciarY && mouseY < botonReiniciarY + imagenes[10].height) {
          //reiniciar el juego
          this.juego.enJuego = true;
          this.juego.perdiste = false;
          this.juego.puntaje = 0;
          this.juego.corazonesAgarrados = 0;
          this.juego.enemigos = [];
          this.juego.corazones = [];
          loop(); //reanuda el juego
      }

      // let botonVolverX = width / 2 - imagenes[12].width / 2.2;
      // let botonVolverY = height / 2 + imagenes[4].height / 1.5 + 60;
      // if (mouseX > botonVolverX && mouseX < botonVolverX + imagenes[12].width &&
      //     mouseY > botonVolverY && mouseY < botonVolverY + imagenes[12].height) {
      //     this.juego.enJuego = false;
      //     this.juego.perdiste = false;
      //     this.juego.haGanado = false;
      //     this.juego.corazonesAgarrados = 0;
      //     this.juego.puntaje = 0;
      // }
      
    } else {
      //clic en el botón de Volver cuando se gane
      if (this.juego.haGanado) {
        let botonVolverX = width / 2 - 50;
        let botonVolverY = height / 2 + imagenes[7].height / 2 + 20; // Espacio entre la imagen y el botón
        if (
          mouseX > botonVolverX &&
          mouseX < botonVolverX + 100 &&
          mouseY > botonVolverY &&
          mouseY < botonVolverY + 50
        ) {
          //regresa al menú principal
          this.juego.enJuego = false;
          this.juego.enCreditos = false;
          this.juego.haGanado = false;
          this.juego.corazonesAgarrados = 0;
          this.juego.puntaje = 0;
        }
      }
    }
  }
}
