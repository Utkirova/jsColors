let ground = document.querySelector('.ground');
const amountOfBoxes = 725;



// append() - указывает что появится внутри элемента к которому вы обращаетесь

for(let i = 0; i < amountOfBoxes;i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    ground.append(box)
    box.addEventListener('mouseover', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))
}

function setColor(el) {
    el.style.background = `rgb(${randColor()}, ${randColor()}, ${randColor()})`
}

function removeColor(asd) {
    asd.style.background = 'rgb(60, 60, 60)'
}

function randColor() {
    let amount = Math.floor(Math.random() * 255)
    return amount
}