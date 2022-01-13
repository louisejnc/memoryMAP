class RecPublic{
  constructor (x,y,vidname) {
    // RED DOTS ICONS LOCATIONS AND SIZE
    this.x = x;
    this.y = y;
    this.size = montreal.width/320;
    this.color = {
      r: 255,
      g: 79,
      b: 79
    };
    this.growRate = 2;
    this.minSize = 6;
    this.maxSize = 14;
    // VIDEO FORMATS
    this.vidwidth  =  350;
    this.vidheight  =  680;
    this.viddisplayed = false;
    this.vid = undefined;
    this.vidx = width*3/4;
    this.vidy = height*1/7;
    this.vidname = vidname ;
  }


  displayRec() {
    push();
    // DISPLAY RECT RED ICON
    fill(this.color.r, this.color.g, this.color.b);
    ellipse(this.x, this.y, this.size);

    // LARGER ICON WHEN MOUSE OVER
    let d1 = dist(this.x,this.y,mouseX-centre.x,mouseY-centre.y)
      if (d1 < this.size/2) {
        this.size += this.growRate;
        // SIZE CONSTRAIN
        this.size = constrain(this.size, this.minSize, this.maxSize);
      }
      else {
        this.size = 6;
      }
  }

  displayVideo() {
    // TRY TO LOAD AND DISPLAY VIDEO CORRESPONDING TO THE REC ICON CLICKED ON
    try {
      if(this.viddisplayed) {
        let img = this.vid.get();
        push();
        translate(-centre.x,-centre.y);
        image(img,this.vidx,this.vidy);
        pop();
      }
    }

    catch {
      push();
      translate(-centre.x,-centre.y);
      fill(255,255,255);
      rect(width*2/3,height*1/4,this.vidwidth,this.vidheight);
      pop();
    }
    pop();
  }

// TRIGGERS THE VIDEO POP UP
  mousePressed(){
    if (this.viddisplayed){
      this.viddisplayed = false
      this.vid.volume(0);
      this.vid.loop(false);
    }

    let d = dist(this.x,this.y,mouseX-centre.x,mouseY-centre.y)
      if (d < this.size/2) {
        this.viddisplayed = true;
    }
    // DISPLAY VIDEO WHEN DOT PRESSED
    if (this.viddisplayed) {
      this.vid = createVideo(['assets/videos/public/'+this.vidname+'.mp4']);
      this.vid.size(this.vidwidth, this.vidheight);
      this.vid.volume(0.6);
      this.vid.loop(true);
      this.vid.hide();
      this.vid.position(0.0);
    }
  }
}
