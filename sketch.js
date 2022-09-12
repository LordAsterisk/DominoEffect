var domino;
var numFallen = 0;
var pushed = false;
var countStart;

function preload() {
  domino = loadImage("images/domino.png");
  hand = loadImage("images/point.png"); 
}

function setup() {
  createCanvas(600, 400);
  rectMode(CORNERS);
}

function draw() {
  background(63, 140, 2);
  fill(255);
  arc(40, 40, 80, 80, 0, HALF_PI);
  arc(width-40, 40, 80, 80, HALF_PI, PI);
  arc(width-40, height-40, 80, 80, PI, PI + HALF_PI);
  arc(40, height-40, 80, 80, PI + HALF_PI, QUARTER_PI + 50);

  strokeWeight(20);
  stroke(255);
  noFill();
  rect(30, 30, width - 30, height - 30)
  var max = 25;
  if ((countStart + frameCount/2)%10 == 0) {numFallen++}
  noStroke();
  fill(255);
  rect(width/2-10, 60, width/2 + 10, 340)
  
  translate(80, 40);
    
  createDomino(265-15*10.5, 185, 24);
  createDomino(265-15*9, 195, 23);
  createDomino(265-15*7.5, 195, 22);
  createDomino(265-15*6, 195, 21);
  createDomino(265-15*5, 185, 19);
  createDomino(265-15*5, 185, 18);
  createDomino(265-15*4.5, 175, 17);
  createDomino(265-15*4.5, 160, 16);
  createDomino(265-15*5, 140, 15);
  createDomino(265-15*6, 130, 14);
  createDomino(265-15*7, 125, 13);
  createDomino(265-15*9, 110, 12);
  createDomino(265-15*10, 95, 11);
  createDomino(265-15*11, 80, 10);
  createDomino(265-15*11, 60, 9);
  createDomino(265-15*11, 40, 8);
  createDomino(265-15*11, 30, 7);
  createDomino(265-15*11, 20, 6);
  createDomino(265-15*10, 10, 5);
  createDomino(265-15*9, 10, 4);
  createDomino(265-15*8, 0, 3);
  createDomino(265-15*7, 0, 2);
  createDomino(265-15*6, 0, 1);
  createDomino(265-15*5, 0, 0);
  
  if (mouseIsPressed) {
    pushed = true;
    image(hand, 260, 15, 105, 120);
    countStart = frameCount;
    
  }
  else {
    image(hand, 290, 20, 85, 100);  
  }
  fill(0)
  if (numFallen > 24) {
    textSize(15)
    text("Kidding, you just got scammed.", width/2 - 50, height/2 - 60);
  }
  else {
    textSize(20);
    text("Click for quick cash!", width/2 - 50, height/2 - 60);
  }
}


function createDomino(xpos, ypos, i) {
  if ((pushed == true) && (numFallen >= i)) {
    fall(xpos, ypos);
  }
  else {
    push();
    translate(xpos, ypos);
    image(domino, 60, 40, 25, 40);
    pop();
  }
}
  

function fall(xpos, ypos) {
  push();
  translate(xpos, ypos);
  translate(40, 60);
  rotate(-PI/3);
  image(domino, 0, 0, 25, 40);
  pop();
}
