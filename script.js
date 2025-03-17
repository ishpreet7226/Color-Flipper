const body  = document.getElementsByTagName('body')[0];

function setColor(colorname){
    body.style.backgroundColor = colorname;
} 

function randomColor(){
    const red = Math.abs(Math.random() *255);
    const green = Math.abs(Math.random() *255);
    const blue = Math.abs(Math.random() *255);
    const color = `rgb(${red}, ${green}, ${blue})`;
    setColor(color);
}