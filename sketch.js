// Canvas
var canvas;

// Blocks
var block1, block2, block3, block4;

// Ball
var ball;

// Music
var music;

// Edges
var edges;

// preload function
function preload(){
    // load sound here

    // loading music sound
    music = loadSound("music.mp3");
}

// setup function
function setup(){
    // creating canvas
    canvas = createCanvas(800, 600);

    // creating block1 sprite
    block1 = createSprite(0, 580, 360, 30);
    block1.shapeColor = "blue";
    //block1.debug = true;
    block1.debug = false;

    // creating block2 sprite
    block2 = createSprite(295, 580, 200, 30);
    block2.shapeColor = "orange";
    //block2.debug = true;
    block2.debug = false;

    // create two more blocks i.e. block3 and block4 here

    // creating block3 sprite
    block3 = createSprite(510, 580, 200, 30);
    block3.shapeColor = "red";
    //block3.debug = true;
    block3.debug = false;

    // creating block4 sprite
    block4 = createSprite(805, 580, 360, 30);
    block4.shapeColor = "green";
    //block4.debug = true;
    block4.debug = false;

    // creating ball sprite
    ball = createSprite(random(20, 750), 100, 40, 40);
    ball.shapeColor = rgb(255,255,255);
    //ball.debug = true;
    ball.debug = false;
    // write code to add velocityX and velocityY
    ball.velocityX = +3;
    ball.velocityY = -5;

    // creating edges as createEdgeSprites function
    edges = createEdgeSprites();
}

// draw function
function draw() {
    // setting background color of the canvas
    background(rgb(169,169,169));

    ball.bounceOff(edges);
    
    // write code to bounce off ball from the block1
    // writing code to bounce off ball from block1 and changing its color to blue and playing the music
    if (block1.isTouching(ball) && ball.bounceOff(block1)) {
        ball.shapeColor = "blue";
        music.play();
        console.info("The ball has touched block1, changed its color to blue and bounced away from it.");
    }

    /* writing code to not bouncing off the ball from block2 and changing its color to orange and stopping the music and setting the x
    and y velocity of the ball to 0 */
    if (block2.isTouching(ball)) {
        ball.shapeColor = "orange";
        // write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        // write code to stop music
        music.stop();
        console.warn("The ball has touched block2, changed its color to orange and has stopped.");
    }

    // write code to bounce off ball from the block3
    // writing code to bounce off ball from block3
    if (block3.isTouching(ball) && ball.bounceOff(block3)) {
        ball.shapeColor = "red";
        music.play();
        console.info("The ball has touched block3, changed its color to red and bounced away from it.");
    }

    // write code to bounce off ball from the block4
    if (block4.isTouching(ball) && ball.bounceOff(block4)) {
        ball.shapeColor = "green";
        music.play();
        console.info("The ball has touched block4, changed its color to green and bounced away from it.");
    }

    // write code to bounce off ball from the block3

    // write code to bounce off ball from the block4

    // drawSprites function to draw sprites(display sprites)
    drawSprites();

    // Logging mouse's x in the console
    //console.log(mouseX);

    // Logging the differences of the blocks's x value in the console
    //console.log(block2.x - block1.x);
    //console.log(block3.x - block2.x);
    //console.log(block4.x - block3.x);

    // Logging ball's x, y, x velocity and y velocity in the console
    console.log(ball.x, ball.y, ball.velocityX, ball.velocityY);
}
