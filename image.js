//images and sounds of the game

let road;
let cowImage;
let carImage;
let car2;
let car3;

let sounds1
let sounds2
let sounds3





function preload(){
  road = loadImage("image/estrada.png")
  cowImage = loadImage("image/ator-1.png")
  carImage = loadImage("image/carro-1.png")
  car2 = loadImage("image/carro-2.png")
  car3 = loadImage("image/carro-3.png")
  carsImage = [carImage, car2, car3, car2, carImage, car3]
  
  sounds1 = loadSound("sounds/trilha.mp3")
  sounds2 = loadSound("sounds/colidiu.mp3")
  sounds3 = loadSound("sounds/pontos.wav")
  
  
  
}