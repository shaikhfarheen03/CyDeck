function Plate384 (x, y){
  this.x = x;
  this.y = y;
  this.name= "384 well plate"

  this.display = function(){
    fill(250,0,0,60);
    rect(this.x+2 , this.y+2 , plateWidth, plateHeight,5);
    fill(255);
    for (i=this.x+4; i<this.x+plateWidth+4; i+=plateWidth/24){
      for (j=this.y+4; j<this.y+plateHeight+4; j+=plateHeight/16){
        ellipse(i, j, 3.5, 3.5)
      }
    }
  }

  // this.update =function (){
  //
  // }


}
