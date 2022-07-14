let img;
let cnv;

function preload(){
 img =  loadImage('assets/DSC05827.JPG')
}


function setup() {
  img.resize(422, 750)
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth -img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  
  for(let col=0; col<img.width; col+=10){
    for(let row=0; row<img.height; row+=10){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos, yPos);
      push();
      translate(xPos, yPos);
      //rotate(radians(random(360)))
      noFill();
      stroke(color(c))
      strokeWeight(random((5)));
      point(xPos, yPos);
      strokeWeight(random(3))
      curve(xPos, yPos, sin(xPos)*random(70), sin(yPos)*random(40), cos(xPos)*random(40), cos(yPos)*random(40), sin(xPos)*cos(yPos)*random(10), sin(yPos)*cos(xPos)*random(10))
      pop();
    }
  }
}