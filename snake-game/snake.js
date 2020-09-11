import { getInputDirection } from "./snake-input.js"

//this js file constains all the snake functions and variables
export const snakeSpeed = 5

//number of additional segments to the snake
let newSegments = 0

//create snake in the middle of the screen
const snakeBody = [
    {x:11, y:11}
]

export function update() {
    console.log('update snake')
    addSegments()
    const inputDirection = getInputDirection()
    //loop through the length of the snake and move the element to the previous position
    //last piece disappears
    for (let i = snakeBody.length -2; i >=0; i--){
        //shift entire snake up one position and create a duplicate
        snakeBody[i + 1] = { ...snakeBody[i]}
    }

    //update the head of the snake position
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw (gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)

    })
    console.log('draw snake')
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, {ignoreHead = false} = {} ) {
    //if any part of the snake body is equal the food position, return true
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false 
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    //first position 
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead:true})
}

function equalPositions(pos1, pos2) {
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}

function addSegments() {
    for (let i = 0; i < newSegments; i++){
        //grab the last element of the snake, duplicate and append to the snake
        snakeBody.push ({...snakeBody[snakeBody.length-1]})
    }

    newSegments = 0

}