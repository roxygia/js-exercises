import { onSnake, expandSnake} from './snake.js'

//note: CSS grid starts from 1, not zero
let food = getRandomFoodPosition()

const expansionRate = 1

export function update() {
    console.log('update food')
    if (onSnake(food)) {
        expandSnake(expansionRate)
        food = getRandomFoodPosition()
    }
}

export function draw (gameBoard) {

    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
    console.log('draw food')
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

function randomGridPosition() {
    return {
        x: Math.floor(Math.random()*21) + 1,
        y: Math.floor(Math.random()*21) + 1
    }
}