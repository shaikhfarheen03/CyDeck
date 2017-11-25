var w = 800;
var h = 400;
var cWidth = w / 6;
var cHeight = h / 4;
var plateWidth = cWidth * 0.85;
var plateHeight = cHeight * 0.85;
var counter = 0;
var A2 = [];
var A3 = [];
var A4 = [];
var A5 = [];
var B2 = [];
var B3 = [];
var B4 = [];
var B5 = [];
var C2 = [];
var C3 = [];
var C4 = [];
var C5 = [];
var D2 = [];
var D3 = [];
var D4 = [];
var D5 = [];
// var RBD = [];
// var sel;
var st1;
var st2;
var st3;
var st4;

// Variables for plate loaction ono the deck
function platePosition() {
    b1 = new Biorad(cWidth * 2, 0);
    A2.push(b1);
    b2 = new Plate384(cWidth * 3, 0);
    A3.push(b2);
    l1 = new Lid(cWidth * 3, 0);
    A3.push(l1);
    b3 = new Biorad(cWidth * 4, 0);
    A4.push(b3);
    l2 = new Lid(cWidth * 4, 0);
    A4.push(l2);
    b4 = new WasteCont(cWidth * 5, 0);
    A5.push(b4);

    b5 = new Biorad(cWidth * 2, cHeight);
    B2.push(b5);
    b6 = createVector(cWidth * 3, cHeight);
    B3.push(b6);
    b7 = new Biorad(cWidth * 4, cHeight);
    B4.push(b7);
    b8 = createVector(cWidth * 5, cHeight);
    B5.push(b8);
    l3 = new Lid(cWidth * 5, cHeight);
    B5.push(l3);


    b9 = new Biorad(cWidth * 2, cHeight * 2);
    C2.push(b9);
    C2.push(b9);
    l4 = new Lid(cWidth * 2, cHeight * 2);
    C2.push(l4);
    b10 = createVector(cWidth * 3, cHeight * 2);
    C3.push(b10);
    b11 = createVector(cWidth * 4, cHeight * 2);
    C4.push(b11);
    b12 = createVector(cWidth * 5, cHeight * 2);
    C5.push(b12);


    b13 = createVector(cWidth * 2, cHeight * 3);
    D2.push(b13);
    b14 = createVector(cWidth * 3, cHeight * 3);
    D3.push(b14);
    b15 = createVector(cWidth * 4, cHeight * 3);
    D4.push(b15);
    b16 = createVector(cWidth * 5, cHeight * 3);
    D5.push(b16);


}



function setup() {
    method = createP("KAPA Total Stranded RNA RiboErase");
    far = createP("Select method to view step details");
    far.position(5, h + 75);

    createCanvas(w, h);
    sel = createSelect();
    sel.position(w / 2.5, h + 50);
    sel.option('Broadcast Reagents');
    sel.option('Hybridization and rRNA Depletion');
    sel.option('Depletion Cleanup');
    sel.option('DNAse digestion');
    sel.option('DNAse digestion cleanup');
    sel.changed(mySelectEvent);

    download = createSelect();
    download.position(250, h + 90);
    download.option('RiboErase and cDNA step details');
    download.option('Library Prep and Post PCR SPRI');
    download.changed(downloadPdf);

    button1 = createButton('Next step');
    button2 = createButton('Previous step');

    button1.position(w - 75, h + 50);
    button1.mousePressed(count);
    button2.position(0, h + 50);
    button2.mousePressed(backCount);

    noStroke();
    platePosition();


    function count() {
        counter++
    }

    function backCount() {
        counter--
    }

}

function mySelectEvent() {
    var item = sel.value();
    if (item === 'Broadcast Reagents') {
        counter = 1;
    } else if (item === 'Hybridization and rRNA Depletion') {
        counter = 23;
    } else if (item === 'Depletion Cleanup') {
        counter = 52;
    } else if (item === 'DNAse digestion') {
        counter = 108;
    } else if (item === 'DNAse digestion cleanup') {
        counter = 135;
    }
}

function downloadPdf() {
    var item = download.value();
    if (item === "RiboErase and cDNA step details") {
        lkn = createA('/Users/fshaikh/NYGC/KAPA_str_RNA_RiboErase_Automation/Automated_method_out_of_the_box/Automated_KAPA_Stranded_RNA_method_(Out_of_the_Box)_04182017Test.html', 'Click here', '_blank');
        lkn.position(500, h + 90);
    } else if (item === 'Library Prep and Post PCR SPRI') {
        lkn = createA('/Users/fshaikh/NYGC/KAPA_str_RNA_RiboErase_Automation/Automated_method_out_of_the_box/Day2/DAY2–KAPA_RNA_LibraryPrep_and_PostPCRSPRI_ Updated_07182017Test.html', 'Click here', '_blank');
        lkn.position(500, h + 90);
    }
}





function draw() {

    // Draw the deck
    background(100);
    fill(255);
    for (i = 0; i < w; i += cWidth) {
        for (j = 0; j < h; j += cHeight) {
            rect(i, j, plateWidth, plateHeight, 5);
        }
    }

    // Draw tip boxes in storage
    for (i = 5; i < cWidth * 2; i += cWidth) {
        for (j = 5; j < h; j += cHeight) {
            fill(100, 250, 250, 100);
            rect(i, j, plateWidth, plateHeight, 5);
            // for (m=i; m<plateWidth; m+=plateWidth/12){
            //   for (n=j; n<plateHeight; n+=plateHeight/12){
            //     fill(255,255,255)
            //     ellipse(m,n,plateWidth/12*0.85,plateHeight/12*0.856)
            //   }
            // }
        }
    }

    // Draw B3 and C3 tip boxes

    rect(B3[0].x + 5, B3[0].y + 5, plateWidth, plateHeight, 5);
    rect(C3[0].x + 5, C3[0].y + 5, plateWidth, plateHeight, 5);

    b1.display();
    // b1.update();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    // b6.display();
    b7.display();
    // b8.display();
    b9.display();
    // b10.display();
    // b11.display();
    // b12.display();
    // b13.display();
    // b14.display();
    // b15.display();
    // b16.display();



    l1.display();
    l2.display();
    l3.display();
    l4.display();







    // Text for tip boxes in storage
    for (i = 0; i < cWidth * 2; i += cWidth) {
        for (j = 0; j < h; j += cHeight) {
            fill(0);
            textAlign(CENTER, CENTER);
            text("Tip Box", i, j, plateWidth, plateHeight);
        }
    }

    // Text for tip box- B3
    fill(0);
    text("Tip Box", B3[0].x, B3[0].y, plateWidth, plateHeight);

    // Text for tip box- C3
    fill(0);
    text("Tip Box", C3[0].x, C3[0].y, plateWidth, plateHeight);

    // Text for Biorad plates- A2
    fill(0);
    text(A2[0].name, A2[0].x, A2[0].y, plateWidth, plateHeight);

    // Text for 384 well plate - A3
    fill(0);
    text(A3[0].name + A3[1].name, A3[0].x, A3[0].y, plateWidth, plateHeight);

    // Text for Biorad plate- A4
    fill(0);
    text(A4[0].name + A4[1].name, A4[0].x, A4[0].y, plateWidth, plateHeight);

    // Text for Waste Container- A5
    fill(0);
    text(A5[0].name, A5[0].x, A5[0].y, plateWidth, plateHeight);

    // Text for Waste Container- B2
    fill(0);
    text(B2[0].name, B2[0].x, B2[0].y, plateWidth, plateHeight);

    // Text for Waste Container- B4
    fill(0);
    text(B4[0].name, B4[0].x, B4[0].y, plateWidth, plateHeight);

    // Text for Waste Container- B5
    fill(0);
    text("ETOH w Lid", B5[0].x, B5[0].y, plateWidth, plateHeight);

    // Text for Waste Container- C2
    fill(0);
    text(C2.length - 1 + " " + C2[0].name + C2[2].name, C2[0].x, C2[0].y, plateWidth, plateHeight);

    // Text for Waste Container- C4
    fill(0);
    text("Magnet w spacer", C4[0].x, C4[0].y, plateWidth, plateHeight);

    // Text for Waste Container- C5
    fill(0);
    text("Empty tip box", C5[0].x, C5[0].y, plateWidth, plateHeight);

    // Text for 384 well plate - D3
    fill(0);
    text("Empty", D3[0].x, D3[0].y, plateWidth, plateHeight);

    // Text for Waste Container- D5
    fill(0);
    text("Waste Chute", D5[0].x, D5[0].y, plateWidth, plateHeight);

    for (i = 0; i < steps.length; i++) {
        // st = eval(steps[i].Dloc1)



        // Temp setting for A3, A4, D2, D4
        if (counter === i) {
            fill(250, 200, 0);
            noStroke();
            st1 = eval(steps[i].Dloc1)
            st2 = eval(steps[i].Dloc2)
            st3 = eval(steps[i].Dloc3)
            st4 = eval(steps[i].Dloc4)

            rect(st1[0].x, st1[0].y, plateWidth, plateHeight, 5);
            if (st2 === undefined) {} else rect(st2[0].x, st2[0].y, plateWidth, plateHeight, 5);
            if (st3 === undefined) {} else rect(st3[0].x, st3[0].y, plateWidth, plateHeight, 5);
            if (st4 === undefined) {} else rect(st4[0].x, st4[0].y, plateWidth, plateHeight, 5);


            fill(0);
            textAlign(CENTER, CENTER);

            text(steps[i].text, st1[0].x, st1[0].y, plateWidth, plateHeight);
            if (st2 === undefined) {} else text(steps[i].text, st2[0].x, st2[0].y, plateWidth, plateHeight);
            if (st3 === undefined) {} else text(steps[i].text, st3[0].x, st3[0].y, plateWidth, plateHeight);
            if (st4 === undefined) {} else text(steps[i].text, st4[0].x, st4[0].y, plateWidth, plateHeight);
        }
    }
}
