//inspired by codingtrain
let fourierX;
let time = 0;
let ys = [];
let x = [];
let draw = 1;

function init() {
  const skip = 6;
  for (let i = 0; i < drawing.length; i += skip ){
    x.push(new Complex(drawing[i].x - 300, drawing[i].y - 350));
  }
  fourierX = epicircle(x);

  fourierX.sort((a, b) => b.amp - a.amp);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  init();
  
}

function epicycles(x, y, rotation, fourier) {
  for (let i = 0; i < fourier.length; i++) {
    let prevx = x;
    let prevy = y;
    let freq = fourier[i].freq;
    let radius = fourier[i].amp;
    let phase = fourier[i].phase;
    x += radius * cos(freq * time + phase + rotation);
    y += radius * sin(freq * time + phase + rotation);

    stroke(90, 50);
    noFill();
    //strokeWeight(2)
    ellipse(prevx, prevy, radius * 2);
    stroke(0, 150);
    line(prevx, prevy, x, y);
  }
  return createVector(x, y);
}

function draw() {
    background("white");


    let v = epicycles(width / 2, height / 2, 0, fourierX);
    ys.unshift(v);
    beginShape();
    noFill();
    //strokeWeight(2);
    stroke(0, 100);
    for (let i = 0; draw && i < ys.length; i++) {
      vertex(ys[i].x, ys[i].y);
    }
    endShape();

    const dt = TWO_PI / fourierX.length;
    time += dt;

    if (draw && time > TWO_PI) {
      draw = 0;
     // time = 0;
  }

}


