class Pollo {
  constructor() {
    //propiedades pollo
    this.img = new Image();
    this.img.src = "./images/flappy.png";
    this.x = 50; //pos en eje x
    this.y = 50; //pos en eje y
    this.w = 40; //ancho
    this.h = 35; //alto
    this.gravity = 1;
    this.jump = 40;
    // this.isJumping = false
  }
  //pollo caiga gravedad
  gravityPollo = () => {
    this.y = this.y + this.gravity;
    // if(this.isJumping = true) {
    //   this.y = this.y -this.speed
    // } else {
    //   this.y =this.y + this.speed
    // }
  };
  // salto del pollo
  //metodos o acciones del pollo
  // animacion aleteo (bonus)
  drawPollo = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  jumpPollo = () => {
    this.y = this.y - this.jump;
  };
}
