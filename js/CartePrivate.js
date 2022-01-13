class CartePrivate{
  constructor (x,y,mapPNG) {
    // BLUE GEOMETRY ICONS LOCATIONS AND SIZE
    this.x = x;
    this.y = y;
    this.size = montreal.width/200;
    this.growRate = 4;
    this.minSize = 9;
    this.maxSize = 17;
    this.color = {
      r: 79,
      g: 255,
      b: 255
    };
    // IMAGES
    this.imgx = 0;
    this.imgy = 0;
    this.imgwidth  = 1920;
    this.imgheight  = 1080//986.1;
    this.imgdisplayed = false;
    this.img = mapPNG;
  }

  bg(){
    if(this.imgdisplayed) {
      push();
      image(this.img,this.imgx,this.imgy,this.imgwidth,this.imgheight);
      pop();
    }
  }


  display() {
    push();
    // DISPLAY RECT CYAN ICON
    fill(this.color.r, this.color.g, this.color.b);
    rectMode(CENTER);
    rect(this.x, this.y,this.size);
    // DISPLAY MAP IMAGE WHEN ICON CLICKED ON (change state)
    // if (this.imgdisplayed) {
    //   // image(this.map,0,0,this.width,this.height);
    // }

    // LARGER ICON WHEN MOUSE OVER
    let d = dist(this.x,this.y,mouseX-centre.x,mouseY-centre.y)
      if (d < this.size/2) {
        this.size += this.growRate;
        // SIZE CONSTRAIN
        this.size = constrain(this.size, this.minSize, this.maxSize);
      }
      else {
        this.size = 9;
      }
      pop();
  }



  mousePressed(){
    let d = dist(this.x,this.y,mouseX-centre.x,mouseY-centre.y)
      if (d < this.size/2) {
        state = `privateMap`;
        // CHANGEMENT POINT TRANSLATION POUR CENTRER PRIVATE MAP
        centre.x = 0;
        centre.y = -height/30;
        this.imgdisplayed = true;

    }
  }

}
