var img;

function preload() {
	img = loadImage("stat.png"); 
}

function setup() {
	createCanvas(400, 400); 
	background(0); 
}

function draw() {
	background(0); 
	
	
	img.loadPixels(); 
	

	for (var y = 0; y < img.height; y += 5) { 
		for (var x = 0; x < img.width; x += 5) {
			
      var pixel = img.pixels[(y*img.width+x)*4]; 
			
			fill(pixel);
			stroke(255-pixel);
			
			rectMode(CENTER); 
			
			var a = map(pixel, 0, 255, 0, PI); 
			
			push();  
			translate(x, y);
			rotate(a); 
			rect(0, 0, 10, 10); 
			pop(); 
			
		}
	}
}

