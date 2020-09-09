// add a variable to control the speed of the snake, the higher the slower
import { update as updateSnake, draw as drawSnake, snakeSpeed } from './snake.js' 

// add a variable to control the speed of the snake, the higher the slower
import { update as updateFood, draw as drawFood} from './snake-food.js' 

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')


//function that repeats itself at a set timeframe, game loop
function main(currentTime) {
    //recall function to create a loop
    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    if (secondsSinceLastRender < 1/snakeSpeed) return

    console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
    
}

//call the function for the first time
window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
}

function draw(){
    //clear the gameboard when the snake moves, redraws snake
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}