class Tubo {
  constructor(yParam, orientation) {
    //props de tubos
    this.img = new Image();
    if (orientation === "arriba") {
      this.img.src = "./images/obstacle_top.png";
      
    } else {
      this.img.src = "./images/obstacle_bottom.png";
    }
    this.x = canvas.width;

    this.y = yParam;
    this.w = 50;
    this.h = 250;
    this.speed = 3
  }

  //methodos o acciones de cada tubo
  drawTubo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  // colision con los tubos
  // movimiento de los tubos
  moveTubo = () => {
    this.x = this.x - this.speed
  }



}
