const body = document.querySelector('body');
const container = document.querySelector('.container');
const button = document.createElement('button');

button.textContent = 'Choose box size';
body.insertBefore(button, body.firstChild).className = 'button';
button.addEventListener('click', () => {
    let input = prompt('How many squares do you want on each side of the box?');
    if (input > 100){
        alert('Square is too big! Choose a smalller number!')
    } else {
        createGrid(input, input);
        sketch();
    }
});

function createGrid(rows, cols){
    let amount = rows * cols;
    for(i = 0; i < amount; i++){
        const div = document.createElement('div');
        container.appendChild(div).className = 'grid-box';
        let size = 960 / rows;
        div.setAttribute('style', `height: ${size}px; width: ${size}px;`)
    }
}


function sketch(){
    const box = document.querySelectorAll('.grid-box');
    const square = document.querySelector('.grid-box');
    box.forEach(square => square.addEventListener('mouseover', () =>{
        let att = square.getAttribute('style');
        square.setAttribute('style', `${att} background-color: black;`);
    }));
}