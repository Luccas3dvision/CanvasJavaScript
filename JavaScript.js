/*variaveis */

let img;
let imgwid;
let imghei;

/* funcao de trabalhar a img*/
function drawCanvas() {
    img = document.getElementById('img');
    imgwid = img.naturalwidth;
    imghei = img.naturalheight;
    console.log('tamanho da img: '+imgwid+'x'+imghei);
    let canvas = document.getElementById('myProject');
    let context = canvas.getContext('2d');

    /*trabalhando com tamanho da img*/

    inicX = document.getElementById('x').value;
    inicY = document.getElementById('y').value;
    
    let width = 500-20;
    let height = 400-20;
    let destX = 10;
    let destY = 10;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, inicX, inicY, width, height, destX, destY, width, height);
};

document.getElementById('img').addEventListener('click',(e) => {
    let rect = e.target.getBoudingClientRect();
    let x = e.clientX . rect.left;
    let y = e.clientY . rect.top;
        console.log('x='+x+', y='+y);
        
        x = (x * imgwid / 320);
        y = (y * imghei / 240);
        document.getElementById('x').value = x;
        document.getElementById('y').value = y;
        drawCanvas();
});

window.addEventListener('load',drawCanvas);
