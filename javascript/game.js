class Game {

    constructor() {
        //todas nuestras propiedades o elementos del juego
        // fondo
        this.fondo = new Image()
        this.fondo.src = "./images/bg.png"
        // pollo
        this.polloObj = new pollo() // creando nuevo objeto de la clase pollo

        // tubo
        // suelo (bonus)

    }



    // todos nuestro metodos o acciones del juego.

    // colision con los tubos
    // movimiento de los tubos
    // aumento de score (bonus)

    drawFondo = () => {
        ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height)
    }

    // recursion
    gameLoop = () => {

        //console.log("ejecutando el juegos")
        //1. limpiar canvas para generar la animacion y no dejar el rastro de esta
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        //2 acciones y movimientos de elementos
        this.polloObj.gravityPollo()
        // 3 fibujado de los elementos
        this.drawFondo()
        this.polloObj.drawPollo()

        //4 control de la recursion

        requestAnimationFrame(this.gameLoop)

    }

}