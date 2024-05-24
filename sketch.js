function setup() {
    createCanvas(400, 400);
    background("orange");
  }
  
  function draw() { 
    stroke("black");
    fill("green");
  
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 30, 40);
    }
  }
  