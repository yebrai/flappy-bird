// * GLOBAL VARIABLES
const canvas = document.querySelector("#my-canvas");
const startScreen = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");
const ctx = canvas.getContext("2d");
const gameOverScreen = document.querySelector("#gameover-screen")
const restartButton = document.querySelector("#restart-btn")

let gameObj; // se crea global pero el juego no ha iniciado

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  console.log("arrancando");
  //ocular pantalla de inicio
  startScreen.style.display = "none";

  //mostrar el canvas
  canvas.style.display = "block";
  //"block" toma todo el ancho de la pantalla

  //crear nueva version del juego
  gameObj = new Game();
  //iniciara el juego
  //ejecutar el metodo gameLoop
 //en esta seccion se agregarian setTimeout o setIntervals
  
  gameObj.gameLoop();
};

const restartGame = () => {
  startScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  canvas.style.display = "block";
  gameObj = new Game();
  gameObj.gameLoop();
}

// * ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
restartButton.addEventListener("click",restartGame)

window.addEventListener("keydown", (event) => {
    if (gameObj !== undefined) {
  if (event.code === "Space") {
    gameObj.polloObj.jumpPollo();

    // gameObj.opolloObj.isJumping = true
  }
}
});

// window.addEventListener("keyup", (event) =>{
//   if (event.code == "space") {
//     gameObj.opolloObj.isJumping = false
//   }
// })