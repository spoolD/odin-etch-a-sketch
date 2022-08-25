function grid(size){
    const container = document.querySelector('.grid-container');
    container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`)
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            let newDiv = document.createElement('div');
            newDiv.textContent='-';
            container.appendChild(newDiv);
        }
            
    }
}

grid(16)