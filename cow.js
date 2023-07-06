let yCow = 366;
let xCow = 100;
let colid = false;
let points = 0;

function showCow(){
    image(cowImage, xCow, yCow, 30, 30);
}



function moveCow(){
  if(keyIsDown(UP_ARROW)){
     yCow -= 3
  }  
   if(keyIsDown(DOWN_ARROW)){
     if(canToMove()){
     yCow += 3
     }
     }  
   if(keyIsDown(LEFT_ARROW)){
     xCow -= 3
   }
  if(keyIsDown(RIGHT_ARROW)){
     xCow += 3
   }
     }

function verifyCollision(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < carsImage.length; i += 1){
    colid = collideRectCircle(xCars[i], yCars[i], w, h, xCow, yCow, 15)
    if(colid){
      resetCow();
      sounds2.play();
    if(myPoints())
      points -= 1;
    }
  }
  
  
  
}

function resetCow(){
  yCow = 366;
  xCow = 100;
}

function showPoints(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 123, 123))
  text(points, width /2, 27)
}

function setPoints(){
  if(yCow < 6){
    points += 1
    sounds3.play();
    resetCow();
  }
}

function myPoints(){
  return points > 0;
}

function canToMove(){
  return yCow < 366;
}




