class RecPrivate{
  constructor (x,y,name,path) {
    // RED DOTS ICONS LOCATIONS AND SIZE
    this.x = x;
    this.y = y;
    this.size = montreal.width/10;
    this.color = {
      r: 255,
      g: 79,
      b: 79
    };
    this.growRate = 2;
    this.minSize = 15;
    this.maxSize = 25;
    // VIDEO FORMATS
    this.width  =  350;
    this.height  =  680;
    this.displayed = false;
    this.vid = undefined;
    this.name = name ;
    this.path = path ;
  }


  displayRec() {
    push();
    // DISPLAY RECT RED ICON
    fill(this.color.r, this.color.g, this.color.b);
    ellipse(this.x, this.y, this.size);

    // LARGER ICON WHEN MOUSE OVER
    let d = dist(this.x,this.y,mouseX-centre.x,mouseY-centre.y)
      if (d < this.size/2) {
        this.size += this.growRate ;
        // SIZE CONSTRAIN
        this.size = constrain(this.size, this.minSize, this.maxSize);
      }
      else {
        this.size = this.minSize;
      }
  }

  displayVideo() {
    // TRY TO LOAD AND DISPLAY VIDEO CORRESPONDING TO THE REC ICON CLICKED ON
    try {
      if(this.displayed) {
        let img = this.vid.get();
        push();
        translate(-centre.x,-centre.y);
        image(img,width*3/4,height*1/7);
        pop();
      }
    }

    catch {
      push();
      translate(-centre.x,-centre.y);
      fill(255,255,255);
      rect(width*2/3,height*1/4,this.width,this.height);
      pop();

    }
    pop();
  }

// TRIGGERS THE VIDEO POP UP
  mousePressed(){
    if (this.displayed){
      this.displayed = false
      this.vid.volume(0);
      this.vid.loop(false);
    }

    let d = dist(this.x,this.y,mouseX-centre.x,mouseY-centre.y)
      if (d < this.size/2) {
        this.displayed = true;
    }
    // DISPLAY VIDEO WHEN DOT PRESSED
    if (this.displayed) {
      this.vid = createVideo(['assets/videos/private/'+this.path+'/'+this.name+'.mp4']);
      this.vid.size(this.width, this.height);
      this.vid.volume(0.6);
      this.vid.loop(true);
      this.vid.hide();
      this.vid.position(0.0);
    }
  }
}
