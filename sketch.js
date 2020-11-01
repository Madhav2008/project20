var car, car1, wall;
var speed, weight;

function preload() {
    whitecar = loadImage("white_car.png");
    redcar = loadImage("red_car.png");
    greencar = loadImage("green_car.png");
    yellowcar = loadImage("yellow_car.png");
}

function setup() {
    createCanvas(1530, 710);
    speed = random(55, 90);
    weight = random(500, 1500);
    car = createSprite(50, 350, 50, 50);
    car.addImage(whitecar);
    car.scale = 0.5;
    wall = createSprite(1450, 350, 40, height);
    wall.shapeColor = "brown";
    car.velocityX = speed;

}

function draw() {
    background("blue");
    drawSprites();
    if (wall.x - car.x < (car.width + wall.width) / 4) {
        var deformaton = 0.5 * weight * speed * speed / 22509;
        if (deformaton > 180) {
            car.visible = false;
            car1 = createSprite(car.x, car.y)
            car1.addImage(redcar);
            car1.scale = 0.5;
        }
        if (deformaton < 100 && deformation > 180) {
            car.visible = false;
            car1 = createSprite(car.x, car.y);
            car1.addImage(yellowcar);
            car1.scale = 0.5;
        }
        if (deformaton < 100) {
            car.visible = false;
            car1 = createSprite(car.x, car.y);
            car1.addImage(greencar);
            car1.scale = 0.5;
        }
        car.velocityX = 0;
    }
}