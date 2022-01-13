class Montreal {
  constructor(mapMTL){
    this.x = 0; // windowWidth/1.85,
    this.y = 0; // windowHeight/3.6,
    this.width = 1920; // 1920px
    this.height = 1702;
    this.img = mapMTL;
  }

  display(){
    push();
    // RATIO
    // this.height = this.width/1.13;

    // DISPLAY MAP MONTREAL
    image(this.img,this.x,this.y,this.width,this.height);
    pop();

  }

  // move(mx,my){
  //   //TRY TO DRAG MAP
  //   if(this.dragging) {
  //     this.x = mx + this.offsetX;
  //     this.y = my + this.offsetY;
  //   };
  // }

  // pressed(mx,my) {
  //   this.dragging = true;
  //   this.offsetX = this.x-mx;
  //   this.offsety = this.y-my;
  // }
  //
  // notPressed(){
  //   this.dragging = false;
  // }
}
