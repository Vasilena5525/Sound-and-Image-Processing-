let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(20, width / 2, 50);
}

function draw() {
  background(255, 204, 153);
  noFill();
	 stroke(200, 102, 153, 204);
	 drawSquare(width / 2, height / 2, width / 2); 
}

function drawSquare(x, y, l) {
  rectMode(CENTER);
  strokeWeight(0.03*l);
		 stroke(128, 32, 0, 40*l);
  square(x, y, l);
  if (l > slider.value()) {
    drawSquare(x-l/2, y-l/2, l/2);
    drawSquare(x+l/2, y-l/2, l/2);
    drawSquare(x-l/2, y+l/2, l/2);
    drawSquare(x+l/2, y+l/2, l/2);
  }
}
