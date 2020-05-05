var img = [];
var img2;

function preload() {
  img2 = loadImage('outline_1.png');
  for (var i=0; i<15; i++) {
    img[i] = loadImage("img"+i+".png");
  }
}

function setup() {
  createCanvas(1440, 810);
  background(0);
  noCursor();
  frameRate(5);
}

function draw() {
  image(img2, 0, 0, 1440, 810)
  // stroke(255);
  // line(mouseX, 0, mouseX, height);
  // line(0, mouseY, width, mouseY);

  // for (var i=0; i<5; i++) {
    let number = random([1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    image(img[number], 0, mouseY, windowWidth, img[number].height*windowWidth/img[number].width);
  // }

}

function mousePressed() {
  // noStroke();
  // fill(255, 100);
  // ellipse(mouseX, mouseY, 40, 40);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
