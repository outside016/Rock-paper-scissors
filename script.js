let input = document.querySelector('.main__input')
let input2 = document.querySelector('.main__input2')
let button = document.querySelector('.result__button')
let inputRes = document.querySelector('.result__input')

button.onclick = function () {
    if (input.value === 'Ножницы' && input2.value === 'Бумага') {
        inputRes.value = 'Игрок 1 победил'
    }
    if (input.value === 'Бумага' && input2.value === 'Камень') {
        inputRes.value = 'Игрок 1 победил'
    }
    if (input.value === 'Камень' && input2.value === 'Ножницы') {
        inputRes.value = 'Игрок 1 победил'
    }
    if (input.value === 'Бумага' && input2.value === 'Ножницы') {
        inputRes.value = 'Игрок 2 победил'
    }
    if (input.value === 'Камень' && input2.value === 'Бумага') {
        inputRes.value = 'Игрок 2 победил'
    }
    if (input.value === 'Ножницы' && input2.value === 'Камень') {
        inputRes.value = 'Игрок 2 победил'
    }
    if (input.value === 'Ножницы' && input2.value === 'Ножницы') {
        inputRes.value = 'Ничья'
    }
    if (input.value === 'Бумага' && input2.value === 'Бумага') {
        inputRes.value = 'Ничья'
    }
    if (input.value === 'Камень' && input2.value === 'Камень') {
        inputRes.value = 'Ничья'
    }
}

button.onclick(input.value, input2.value)