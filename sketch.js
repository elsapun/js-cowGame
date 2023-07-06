function setup() {
  createCanvas(500, 400);
  sounds1.loop();
}

function draw() {
  background(road);
  showCar();
  showCow();
  moveCar();
  moveCow();
  loopCar();
  verifyCollision();
  showPoints();
  setPoints();
  myPoints();
}



