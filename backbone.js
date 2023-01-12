// get the container
const container = document.getElementById('container');

// get the button
let btn = document.getElementById('button');

// get the span
const hex = document.getElementById('hex');

// event 
btn.addEventListener('click', random);

function random(){

    //generates a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    //stitches the button to the container to change color on click

    container.style.background = randomColor;
    hex.innerHTML = randomColor;


}