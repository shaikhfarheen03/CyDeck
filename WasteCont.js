function WasteCont (x, y){
  this.x = x;
  this.y = y;
  this.name= "Waste"

  this.display = function(){
    fill(25,25,0,60);
    rect(this.x+2 , this.y+2 , plateWidth, plateHeight,5);
    fill(255);
    for (i=this.x+1; i<this.x+1+plateWidth; i+=plateWidth/12){
      for (j=this.y+1; j<this.y+1+plateHeight; j+=plateHeight/8){
        rect(i, j, 8, 8)
      }
    }
  }

  // this.update =function (){
  //
  // }


}
