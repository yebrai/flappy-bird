class Game {
  constructor() {
    //todas nuestras propiedades o elementos del juego
    // fondo
    this.fondo = new Image();
    this.fondo.src = "./images/bg.png";
    // pollo
    this.polloObj = new Pollo(); // creando nuevo objeto de la clase pollo
    // tubo
   // this.tuboObj = new Tubo(); // prueba
    this.tubeArr = []

    this.frames = 0

    // suelo (bonus)
  }

  // todos nuestro metodos o acciones del juego.

 // collision del pollo conm los tubos
 polloTuboCollision = () => {

  //this.polloOb
  // this.tubeArr

  this.tubeArr.forEach((eachTubo) => {
 
    //this.polloObj
    //eachTubo
    if (
      this.polloObj.x < eachTubo.x + eachTubo.w &&
      this.polloObj.x + this.polloObj.w > eachTubo.x &&
      this.polloObj.y < eachTubo.y + eachTubo.h &&
      this.polloObj.h + this.polloObj.y > eachTubo.y
    ) {
      // Collision detected!
      console.log("Colision")
    }

  })

 }
  // aumento de score (bonus)

  addTubo = () => {
    if (this.frames % 240 === 0) {
        //al inicio, si el array esta vacio agrega un elemento
        //tubo de arriba

        // cual es la posicion de arriba

        let randomNum = Math.floor(Math.random() * -200)

        let nuevoTubo = new Tubo(randomNum, "arriba")
        this.tubeArr.push(nuevoTubo)

        //cual es la posicion de abajo
        //el tubo de abajo
        let randomYint2 = randomNum + nuevoTubo.h + 100
        let tuboAbajo = new Tubo(randomYint2, "abajo")
        this.tubeArr.push(tuboAbajo)

      }
  }

  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  // recursion
  gameLoop = () => {
    this.frames = this.frames + 1
    //console.log("ejecutando el juegos")
    //1. limpiar canvas para generar la animacion y no dejar el rastro de esta
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //2 acciones y movimientos de elementos
    this.polloObj.gravityPollo();
    //this.tuboObj.moveTubo()
    this.tubeArr.forEach((eachTubo) => {
        eachTubo.moveTubo()
    })
    this.addTubo()
    this.polloTuboCollision()
    // 3 fibujado de los elementos
    this.drawFondo();
    this.polloObj.drawPollo();
   // this.tuboObj.drawTubo();
    this.tubeArr.forEach((eachTubo) => {
        eachTubo.drawTubo()
    })

    //4 control de la recursion

    requestAnimationFrame(this.gameLoop);
  };
}
