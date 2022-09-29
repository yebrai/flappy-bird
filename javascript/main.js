// * GLOBAL VARIABLES
const canvas = document.querySelector("#my-canvas")
const startScreen = document.querySelector("#splash-screen")
const startBtn = document.querySelector("#start-btn")
const ctx = canvas.getContext("2d")
let gameObj; // se crea global pero el juego no ha iniciado


// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
console.log("arrancando")
    //ocular pantalla de inicio
    startScreen.style.display = "none"

    //mostrar el canvas
    canvas.style.display = "block"
    //"block" toma todo el ancho de la pantalla

    //crear nueva version del juego
    gameObj = new Game()
    //iniciara el juego
    //ejecutar el metodo gameLoop

    gameObj.gameLoop()

}





// * ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame)

window.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        gameObj.polloObj.jumpPollo()
    }
})



