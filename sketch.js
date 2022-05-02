//inspired by code train...
let ys = [];
let angle = 0;
let radius = 100;
function setup() {
  createCanvas(1000, 900);

}

function draw() {
  background(0);
  strokeWeight(2);
  
  let arr = drawFor(1);
  ys.unshift(arr[1])
  line(arr[0], arr[1], 300, arr[1]);
  translate(300, 0)
  beginShape();
  noFill();
  for(var i = 0; i < ys.length; i++){
    stroke('red')
    vertex(i, ys[i])
  }
  endShape();
  if(ys.length > 250)ys.pop();
  //noStroke();
  //ellipse(0, y, 5);
  angle -= 0.016;
}

function drawFor(f, xprev = 0, yprev = 0){
  radiusp = radius * 4/((Math.PI) * f);
  let x = xprev +radiusp * cos(f * angle);
  let y = yprev + radiusp * sin(f * angle);
  if(xprev == 0 && yprev == 0)translate(300, 300);
  noFill();
  stroke(255, 23);
  ellipse(xprev, yprev, 2 * radiusp);
  stroke(255);
  line(xprev, yprev,  x, y);
  fill(255)
  //ellipse(x, y, 5, 5);
  if(f > 100)return [x, y];
  return drawFor(f + 2, x, y);
  
}
