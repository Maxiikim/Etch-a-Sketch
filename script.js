const container = document.querySelector('.container');

function createGrid(rows, cols){
    let amount = rows * cols;
    for(i = 0; i < amount; i++){
        const box = document.createElement('div');
        container.appendChild(box).className = 'grid-box';
    }
}
createGrid(16, 16)