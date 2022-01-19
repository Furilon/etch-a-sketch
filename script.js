function makeGrid(numOfSquaresPerSide) {
    const container = document.getElementById('container');
    container.style.gridTemplate = `repeat(${numOfSquaresPerSide}, 1fr) / repeat(${numOfSquaresPerSide}, 1fr)`;
    for (i = 0; i < numOfSquaresPerSide ** 2; i++ ) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        square.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = "#" + randomColor;
        })
        container.appendChild(square);
        
    }
}

function clearGrid() {
    const container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    while (true) {
        const numOfSquaresPerSide = +prompt("How many squares would you like per side? (100 max)");
        if (numOfSquaresPerSide <= 100) {
            clearGrid();
            makeGrid(numOfSquaresPerSide);
            break;
        } else {
            continue;
        }
    }
})
