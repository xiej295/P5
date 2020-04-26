var img = [];

function preload() {
  for (var i=0; i<10; i++) {
    img[i] = loadImage("img"+i+".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noCursor();
}

function draw() {
  // stroke(255);
  // line(mouseX, 0, mouseX, height);
  // line(0, mouseY, width, mouseY);

  // for (var i=0; i<5; i++) {
    let number = random([1, 2, 3, 4, 0, 5, 6, 7, 8, 9]);
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
