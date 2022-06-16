const container = document.querySelector('.container');

function createGrid(rows, cols){
    let amount = rows * cols;
    for(i = 0; i < amount; i++){
        const box = document.createElement('div');
        container.appendChild(box).className = 'grid-box';
    }
}

createGrid(16, 16)

const colorBoxes = document.querySelectorAll('.grid-box');
const colorBox = document.querySelector('.grid-box')

colorBoxes.forEach(colorBox => colorBox.addEventListener('mouseover', () =>{
    colorBox.setAttribute('style', 'background-color: black;');
}));

// function hover() {
//     box.addEventListener('mouseover', () => {
//     console.log('div hovered');
//     box.setAttribute('style', 'backgroud-coior: black;')
// })};