grid(16);
setPixels();


let gridSize = document.getElementById('grid-size');
gridSize.onchange = () => {
    reset();
    let oldPixels = document.querySelectorAll('.pixel')
    oldPixels.forEach((pixel) => pixel.remove());
    grid(gridSize.value);
    setPixels();
}

// Reset Grid with Button
const resetButton = document.getElementById('reset');
resetButton.addEventListener("click", reset);


function grid(size){
    // Get grid container
    const container = document.querySelector('.grid-container');
    
    // Set size and number of pixels using CSS Grid. The size of the container is held constant
    container.setAttribute('style', `grid-template-rows: repeat(${size}, ${container.clientHeight/size}px); grid-template-columns: repeat(${size}, ${container.clientWidth/size}px);`)
    
    // Create a div for each pixel
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            let newDiv = document.createElement('div');
            newDiv.classList.add('pixel');

            container.appendChild(newDiv);
        }     
    }
}

function color(event){

    //Only change color if left mouse button is pressed during hover
    if (event.buttons===1){
        event.srcElement.className = 'pixel-colored';
    }  
}

function reset(){
    let colorPixels = document.querySelectorAll('.pixel-colored');
    colorPixels.forEach((pixel) => {
        pixel.classList.remove('pixel-colored');
        pixel.classList.add('pixel');
    })
}

function setPixels(){
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel)=> {
    pixel.addEventListener("mouseenter", color);
})
}