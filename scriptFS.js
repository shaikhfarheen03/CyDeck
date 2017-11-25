var w = 800;
var h = 400;
var cWidth= w/6;
var cHeight= h/4;
var plateWidth = cWidth*0.85;
var plateHeight = cHeight*0.85;
var counter = 0;
var A2;
var A3;
var A4;
var A5;
var B2;
var B3;
var B4;
var B5;
var C2;
var C3;
var C4;
var C5;
var D2;
var D3;
var D4;
var D5;
var RBRS = [];
var sel;



// Variables for plate loaction ono the deck
function platePosition(){
  A2 = createVector(cWidth*2,0);
  A3 = createVector(cWidth*3,0);
  A4 = createVector(cWidth*4,0);
  A5 = createVector(cWidth*5,0);
  B2 = createVector(cWidth*2,cHeight);
  B3 = createVector(cWidth*3,cHeight);
  B4 = createVector(cWidth*4,cHeight);
  B5 = createVector(cWidth*5,cHeight);
  C2 = createVector(cWidth*2,cHeight*2);
  C3 = createVector(cWidth*3,cHeight*2);
  C4 = createVector(cWidth*4,cHeight*2);
  C5 = createVector(cWidth*5,cHeight*2);
  D2 = createVector(cWidth*2,cHeight*3);
  D3 = createVector(cWidth*3,cHeight*3);
  D4 = createVector(cWidth*4,cHeight*3);
  D5 = createVector(cWidth*5,cHeight*3);
}



function setup (){
  createP("KAPA Total Stranded RNA RiboErase");
  createCanvas (w,h);
  sel = createSelect();
  sel.position(w/2.5, h+50);
  sel.option('Broadcast Reagents');
  sel.option('Hybridization and rRNA Depletion');
  sel.option('Depletion Cleanup');
  sel.changed(mySelectEvent);

  button1 = createButton('Next step');
  button2 = createButton('Previous step');

  button1.position(w-75, h+50);
  button1.mousePressed(count);
  button2.position(0, h+50);
  button2.mousePressed(backCount);

  noStroke();
  platePosition();


  function count (){
    counter++
  }

  function backCount(){
    counter--
  }

}

function mySelectEvent() {
  var item = sel.value();
  if (item === 'Broadcast Reagents'){
    counter = 1;
  }
  else if(item === 'Hybridization and rRNA Depletion'){
    counter = 19;
  }
  // else if (item === 'Depletion Cleanup'){
  //   counter = 19;
  // }
}








function draw (){

  // Draw the deck
  background(100);
  fill(255);
  for (i=0; i<w; i+=cWidth){
    for (j=0; j<h; j+=cHeight){
      rect(i, j, plateWidth, plateHeight,5);
    }
  }

// Draw tip boxes in storage
  for (i=5; i<cWidth*2; i+=cWidth){
    for (j=5; j<h; j+=cHeight){
      fill(100, 250, 250, 100);
      rect(i, j, plateWidth, plateHeight,5);
      // for (m=i; m<plateWidth; m+=plateWidth/12){
      //   for (n=j; n<plateHeight; n+=plateHeight/12){
      //     fill(255,255,255)
      //     ellipse(m,n,plateWidth/12*0.85,plateHeight/12*0.856)
      //   }
      // }
    }
  }

// Draw B3 and C3 tip boxes

  rect(B3.x+5,B3.y+5 , plateWidth, plateHeight, 5);
  rect(C3.x+5,C3.y+5 , plateWidth, plateHeight, 5);




// Text for tip boxes in storage
  for (i=0; i<cWidth*2; i+=cWidth){
    for (j=0; j<h; j+=cHeight){
      fill(0);
      textAlign(CENTER, CENTER);
      text("Tip Box", i, j, plateWidth, plateHeight);
    }
  }

  // Text for tip box- B3
  fill(0);
  text("Tip Box", B3.x, B3.y, plateWidth, plateHeight);

  // Text for tip box- C3
  fill(0);
  text("Tip Box", C3.x, C3.y, plateWidth, plateHeight);

  // Text for Biorad plates- A2
  fill(0);
  text("3 Biorad plates", A2.x, A2.y, plateWidth, plateHeight);

  // Text for 384 well plate - A3
  fill(0);
  text("1 384 well on CPAC w lid", A3.x, A3.y, plateWidth, plateHeight);

  // Text for Biorad plate- A4
  fill(0);
  text("1 Biorad on CPAC w lid (Master Mix)", A4.x, A4.y, plateWidth, plateHeight);

  // Text for Waste Container- A5
  fill(0);
  text("Waste", A5.x, A5.y, plateWidth, plateHeight);

  // Text for Waste Container- B2
  fill(0);
  text("2 Biorad w lid", B2.x, B2.y, plateWidth, plateHeight);

  // Text for Waste Container- B4
  fill(0);
  text("1 Biorad on magnet no spacer (normalized RNA)", B4.x, B4.y, plateWidth, plateHeight);

  // Text for Waste Container- B5
  fill(0);
  text("EtOH w lid", B5.x, B5.y, plateWidth, plateHeight);

  // Text for Waste Container- C2
  fill(0);
  text("3 Biorad plates", C2.x, C2.y, plateWidth, plateHeight);

  // Text for Waste Container- C4
  fill(0);
  text("Magnet w spacer", C4.x, C4.y, plateWidth, plateHeight);

  // Text for Waste Container- C5
  fill(0);
  text("Empty tip box", C5.x, C5.y, plateWidth, plateHeight);

  // Text for 384 well plate - D3
  fill(0);
  text("3 Biorad plates", D3.x, D3.y, plateWidth, plateHeight);

  // Text for Waste Container- D5
  fill(0);
  text("Waste Chute", D5.x, D5.y, plateWidth, plateHeight);









// Temp setting for A3, A4, D2, D4
  if (counter === 1){
    fill(250,200,0);
    noStroke();
    rect(A3.x,A3.y , plateWidth, plateHeight, 5);
    rect(A4.x,A4.y , plateWidth, plateHeight, 5);
    rect(D2.x,D2.y , plateWidth, plateHeight, 5);
    rect(D4.x,D4.y , plateWidth, plateHeight, 5);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Set temp to 22", A3.x, A3.y, plateWidth, plateHeight);
    text("Set temp to 22", A4.x, A4.y, plateWidth, plateHeight);
    text("Set temp to 95", D2.x, D2.y, plateWidth, plateHeight);
    text("Set temp to 22", D4.x, D4.y, plateWidth, plateHeight);
  }



// Move lid from A3 to A2
  if (counter === 3){
    //	Pick lid from A3
    fill(250,200,0);
    rect(A3.x, A3.y , plateWidth, plateHeight,5);
    fill(0);
    text("Pick Lid", A3.x, A3.y, plateWidth, plateHeight);
  }
  if (counter === 4){
    //	Place lid on A2
    fill(250,200,0);
    rect(A2.x,A2.y , plateWidth, plateHeight,5);
    fill(0);
    text("Place Lid", A2.x, A2.y, plateWidth, plateHeight);
  }



// Move lid from A4 to B2
  if (counter === 5){
    //	Pick lid from A4
    fill(250,200,0);
    rect(A4.x,A4.y , plateWidth, plateHeight,5);
    fill(0);
    text("Pick Lid", A4.x, A4.y, plateWidth, plateHeight);

  }
  if (counter === 6){
    //	Place lid on B2
    fill(250,200,0);
    rect(B2.x,B2.y , plateWidth, plateHeight,5);
    fill(0);
    text("Place Lid", B2.x, B2.y, plateWidth, plateHeight);
  }


// Submethod- broadcast reagent to 384 well plate
// Broadcast vaporlock----  12ul
  if (counter === 7){
    //	Load Tips
    fill(250,200,0);
    rect(B3.x,B3.y , plateWidth, plateHeight,5);
    fill(0);
    text("Load Tips", B3.x, B3.y, plateWidth, plateHeight);
  }

  if (counter === 8){
    //	Aspirate VaporLock
    fill(250,200,0);
    rect(A4.x, A4.y , plateWidth, plateHeight,5);
    fill(0);
    text("Aspirate 12ul VaporLock", A4.x, A4.y, plateWidth, plateHeight);
  }

  if (counter === 9){
    //	Dispense VaporLock
    fill(250,200,0);
    rect(A3.x,A3.y , plateWidth, plateHeight,5);
    fill(0);
    text("Dispense 12ul VaporLock", A3.x, A3.y, plateWidth, plateHeight);
  }

  if (counter === 10){
    //	Eject Tips
    fill(250,200,0);
    rect(D5.x,D5.y , plateWidth, plateHeight,5);
    fill(0);
    text("Eject Tips", D5.x, D5.y, plateWidth, plateHeight);
  }




// Broadcast HYB MM--- 12ul
  if (counter === 11){
    //	Load Tips
    fill(250,200,0);
    rect(B3.x,B3.y , plateWidth, plateHeight,5);
    fill(0);
    text("Load Tips", B3.x, B3.y, plateWidth, plateHeight);
  }

  if (counter === 12){
    //	Aspirate Hyb MM
    fill(250,200,0);
    rect(A4.x, A4.y , plateWidth, plateHeight,5);
    fill(0);
    text("Aspirate 12ul Hyb MM", A4.x, A4.y, plateWidth, plateHeight);
  }

  if (counter === 13){
    //	Dispense Hyb MM
    fill(250,200,0);
    rect(A3.x,A3.y , plateWidth, plateHeight,5);
    fill(0);
    text("Dispense 12ul Hyb MM", A3.x, A3.y, plateWidth, plateHeight);
  }

  if (counter === 14){
    //	Eject Tips
    fill(250,200,0);
    rect(D5.x,D5.y , plateWidth, plateHeight,5);
    fill(0);
    text("Eject Tips", D5.x, D5.y, plateWidth, plateHeight);
  }





// Broadcast Depletion MM--- 7ul
  if (counter === 15){
    //	Load Tips
    fill(250,200,0);
    rect(B3.x,B3.y , plateWidth, plateHeight,5);
    fill(0);
    text("Load Tips", B3.x, B3.y, plateWidth, plateHeight);
  }

  if (counter === 16){
    //	Aspirate Depletion MM
    fill(250,200,0);
    rect(A4.x, A4.y , plateWidth, plateHeight,5);
    fill(0);
    text("Aspirate 7ul Depletion MM", A4.x, A4.y, plateWidth, plateHeight);
  }

  if (counter === 17){
    //	Dispense Depletion MM
    fill(250,200,0);
    rect(A3.x,A3.y , plateWidth, plateHeight,5);
    fill(0);
    text("Dispense 7ul Depletion MM", A3.x, A3.y, plateWidth, plateHeight);
  }

  if (counter === 18){
    //	Eject Tips
    fill(250,200,0);
    rect(D5.x,D5.y , plateWidth, plateHeight,5);
    fill(0);
    text("Eject Tips", D5.x, D5.y, plateWidth, plateHeight);
  }







// Mix HYB MM +Sample-
if (counter === 19){
  //	Load Tips
  fill(250,200,0);
  rect(B3.x,B3.y , plateWidth, plateHeight,5);
  fill(0);
  text("Load Tips", B3.x, B3.y, plateWidth, plateHeight);
}

if (counter === 20){
  //	Aspirate Hyb MM
  fill(250,200,0);
  rect(A3.x, A3.y , plateWidth, plateHeight,5);
  fill(0);
  text("Aspirate 10ul Hyb MM", A3.x, A3.y, plateWidth, plateHeight);
}

if (counter === 21){
  //	Dispense Hyb MM
  fill(250,200,0);
  rect(B4.x,B4.y , plateWidth, plateHeight,5);
  fill(0);
  text("Dispense 10ul Hyb MM and full dispense", B4.x, B4.y, plateWidth, plateHeight);
}

if (counter === 22){
  //	Mix Hyb MM + Samples
  fill(250,200,0);
  rect(B4.x,B4.y , plateWidth, plateHeight,5);
  fill(0);
  text("Mix Hyb MM + Samples", B4.x, B4.y, plateWidth, plateHeight);
}

if (counter === 23){
  //	Eject Tips
  fill(250,200,0);
  rect(D5.x,D5.y , plateWidth, plateHeight,5);
  fill(0);
  text("Eject Tips", D5.x, D5.y, plateWidth, plateHeight);
}






// Transfer VaporLock on top of Samples
if (counter === 24){
  //	Load Tips
  fill(250,200,0);
  rect(B3.x,B3.y , plateWidth, plateHeight,5);
  fill(0);
  text("Load Tips", B3.x, B3.y, plateWidth, plateHeight);
}

if (counter === 25){
  //	Aspirate VaporLock
  fill(250,200,0);
  rect(A3.x, A3.y , plateWidth, plateHeight,5);
  fill(0);
  text("Aspirate 10ul VaporLock", A3.x, A3.y, plateWidth, plateHeight);
}

if (counter === 26){
  //	Dispense VaporLock
  fill(250,200,0);
  rect(B4.x,B4.y , plateWidth, plateHeight,5);
  fill(0);
  text("Dispense 10ul VaporLock", B4.x, B4.y, plateWidth, plateHeight);
}

if (counter === 27){
  //	Eject Tips
  fill(250,200,0);
  rect(D5.x,D5.y , plateWidth, plateHeight,5);
  fill(0);
  text("Eject Tips", D5.x, D5.y, plateWidth, plateHeight);
}






// Denature Oligos:
if (counter === 28){
  //	Wait for temp at D2 to set to 95
  fill(250,200,0);
  rect(D2.x, D2.y , plateWidth, plateHeight,5);
  fill(0);
  text("Wait for temp at D2 to reach 95", D2.x, D2.y, plateWidth, plateHeight);
}

// Move samples from B4 to D2
  if (counter === 29){
    //	Pick samples from B4
    fill(250,200,0);
    rect(B4.x, B4.y , plateWidth, plateHeight,5);
    fill(0);
    text("Pick Samples", B4.x, B4.y, plateWidth, plateHeight);
  }
  if (counter === 30){
    //	Place samples at D2
    fill(250,200,0);
    rect(D2.x,D2.y , plateWidth, plateHeight,5);
    fill(0);
    text("Place Samples", D2.x, D2.y, plateWidth, plateHeight);
  }

  // Move lid from B2 to D2
    if (counter === 31){
      //	Pick lid from B2
      fill(250,200,0);
      rect(B2.x,B2.y , plateWidth, plateHeight,5);
      fill(0);
      text("Pick Lid", B2.x, B2.y, plateWidth, plateHeight);
    }
    if (counter === 32){
      //	Place lid on D2
      fill(250,200,0);
      rect(D2.x,D2.y , plateWidth, plateHeight,5);
      fill(0);
      text("Place Lid", D2.x, D2.y, plateWidth, plateHeight);
    }

    // Denature the samples
    if (counter === 33){
      //	Incubate for 2 mins at 95C
      fill(250,200,0);
      rect(D2.x,D2.y , plateWidth, plateHeight,5);
      fill(0);
      text("Incubate for 2 mins at 95C", D2.x, D2.y, plateWidth, plateHeight);
    }




// Temp setting for A3, A4, D2, D4
  if (counter === 34){
    fill(250,200,0);
    noStroke();
    rect(A3.x,A3.y , plateWidth, plateHeight, 5);
    rect(A4.x,A4.y , plateWidth, plateHeight, 5);
    rect(D2.x,D2.y , plateWidth, plateHeight, 5);
    rect(D4.x,D4.y , plateWidth, plateHeight, 5);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Set temp to 22", A3.x, A3.y, plateWidth, plateHeight);
    text("Set temp to 22", A4.x, A4.y, plateWidth, plateHeight);
    text("Set temp to 49", D2.x, D2.y, plateWidth, plateHeight);
    text("Set temp to 22", D4.x, D4.y, plateWidth, plateHeight);
  }



  // Move lid from D2 to B2
    if (counter === 35){
      //	Pick lid from D2
      fill(250,200,0);
      rect(D2.x,D2.y , plateWidth, plateHeight,5);
      fill(0);
      text("Pick Lid", D2.x, D2.y, plateWidth, plateHeight);
    }
    if (counter === 36){
      //	Place lid on B2
      fill(250,200,0);
      rect(B2.x,B2.y , plateWidth, plateHeight,5);
      fill(0);
      text("Place Lid", B2.x, B2.y, plateWidth, plateHeight);
    }


    // Move lid from A2 to A4
      if (counter === 37){
        //	Pick lid from A2
        fill(250,200,0);
        rect(A2.x,A2.y , plateWidth, plateHeight,5);
        fill(0);
        text("Pick Lid", A2.x, A2.y, plateWidth, plateHeight);
      }
      if (counter === 38){
        //	Place lid on A4
        fill(250,200,0);
        rect(A4.x,A4.y , plateWidth, plateHeight,5);
        fill(0);
        text("Place Lid", A4.x, A4.y, plateWidth, plateHeight);
      }

// Transfer Depletion MM:
if (counter === 39){
  //	Load Tips
  fill(250,200,0);
  rect(B3.x,B3.y , plateWidth, plateHeight,5);
  fill(0);
  text("Load Tips", B3.x, B3.y, plateWidth, plateHeight);
}

if (counter === 40){
  //	Aspirate Depletion MM
  fill(250,200,0);
  rect(A3.x, A3.y , plateWidth, plateHeight,5);
  fill(0);
  text("Aspirate 5ul Depletion MM", A3.x, A3.y, plateWidth, plateHeight);
}

if (counter === 41){
  //	Dispense Depletion MM
  fill(250,200,0);
  rect(D2.x,D2.y , plateWidth, plateHeight,5);
  fill(0);
  text("Dispense 5ul of Depletion MM and full dispense", D2.x, D2.y, plateWidth, plateHeight);
}

if (counter === 42){
  //	Mix Hyb MM + Samples
  fill(250,200,0);
  rect(D2.x,D2.y , plateWidth, plateHeight,5);
  fill(0);
  text("Mix Depletion MM + Samples", D2.x, D2.y, plateWidth, plateHeight);
}

if (counter === 43){
  //	Eject Tips
  fill(250,200,0);
  rect(D5.x,D5.y , plateWidth, plateHeight,5);
  fill(0);
  text("Eject Tips", D5.x, D5.y, plateWidth, plateHeight);
}





}
