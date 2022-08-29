function grid(size){
    // Get grid container
    const container = document.querySelector('.grid-container');
    
    // Set size and number of pixels using CSS Grid. The size of the container is held constant
    container.setAttribute('style', `grid-template-rows: repeat(${size}, ${container.clientHeight/size}px); grid-template-columns: repeat(${size}, ${container.clientWidth/size}px);`)
    
    // Create a div for each pixel
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            let newDiv = document.createElement('div');
            newDiv.textContent='-';
            container.appendChild(newDiv);
        }
            
    }
}

grid(16)