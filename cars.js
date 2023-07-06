let xCars = [600, 600, 600,600,600,600]
let yCars = [40, 96, 150, 210, 270, 318]
let vCars = [2, 2.5, 3.2, 5, 2.1, 2.8]
let w = 50;
let h = 40;


function showCar(){
  for(let i = 0; i < carsImage.length; i += 1){
    image(carsImage[i], xCars[i], yCars[i], 50, 40)
}
}

function moveCar(){
  for(let i = 0; i < carsImage.length; i += 1)
    xCars[i] -= vCars[i]  
}

function loopCar(){
  for(let i = 0; i < carsImage.length; i += 1)
    if(resetCars(xCars[i])){
      xCars[i] = 600;
  }
}

function resetCars(xCar){
  return xCar < - 50
}
