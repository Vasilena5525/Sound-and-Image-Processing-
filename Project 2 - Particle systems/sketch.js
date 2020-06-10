class Particle {
  constructor(){
    this.x = random(200,width/2);
    this.y = random(200,height/2);
    this.r = random(10,8);
    this.xSpeed = random(-1,1);
    this.ySpeed = random(-1,0.5);
  }


  createParticle() {
    noStroke();
    fill(random(255),random(255),random(255));
    circle(this.x,this.y,this.r);
  }


  moveParticle() {
    if(this.x < 4 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 4 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

  joinParticles(paraticles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<155) {
        stroke(random(255),random(255),random(255));
        line(this.x,this.y,element.x,element.y);
         }
    });
  }
}

let particles = [];

function setup() {
  createCanvas(400, 400);
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
}

function draw() {
  background('#0f0f0f');
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
   particles[i].joinParticles(particles.slice(i));
  }
}