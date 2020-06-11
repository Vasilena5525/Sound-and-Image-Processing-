let t = 'ANGEL';
let angle = 0;
let font1;
let amplitude;


function preload() {
  font1 = loadFont('Babillon.ttf');
	
	
}

function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	textFont(font1);
}

function draw() {
	background(0, 0.1);
	
	textSize(150);
	let startX = (width - textWidth(t)) / 2;
	let currentX = startX;
	let a = angle;

	for (let i = 0; i < t.length; i++) {
		let chr = t.charAt(i);
		let y = height/1.3 + (sin(a) * 20);
		stroke(0, 0, 100, 0.8);
		strokeWeight(2);
		text(chr, currentX, y);
		currentX += textWidth(chr);
		 a += mouseX / 1000;
	}
  angle -= 0.06;
  translate(width/2, height/3.5);

  for (let n = 0; n < 360; n+=20) {
    let x = sin(radians(n-frameCount))*20;
    let y2 = cos(radians(n-frameCount))*20;
    for (let q = 0; q < 360; q+=10) {
      let x2 = cos(radians(q))*75;
      let y3 = sin(radians(q))*45;
      let m = sin(radians(q-n-frameCount*5))*5;
      if (m > 0) {
        ellipse(x+x2, y2+y3, m, m);
      } else {
        ellipse(x+x2, y2+y3, 1, 1);
      }
    }
  }
}