let img;
let start=3;
let start_add=9;

function setup() {
  createCanvas(400, 400);
  img = loadImage('lion.png');
  frameRate(2);
  noStroke();
  pixelDensity(1); 
}

function draw() {
  background(0);
  image(img, 50, 50);
  loadPixels();
    for(let y=0; y<height; y+=start){
      for(let x=0; x<height; x+=start){
let red  =pixels[ 4 * floor(width * y + x) + 0];
let green=pixels[ 4 * floor(width * y + x) + 1]; 
let blue =pixels[ 4 * floor(width * y + x) + 2]; 
let alpha=pixels[ 4 * floor(width * y + x) + 3]; 
        fill(red,green,blue,alpha);
        rect(x,y,x+start,y+start);
      }
    }
  start+=start_add;
  if(start>=26){
    start_add*=-1;
  }else if(start<=10){
	  start_add*=-1;
	}
}