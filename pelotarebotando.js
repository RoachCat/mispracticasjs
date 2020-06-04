let y = 300;
let estado = "bajando";
var arriba = y;

function comenzar(){

    let elemento = document.getElementById("lienzo");

    lienzo=elemento.getContext("2d");

    setInterval(animacion,20);

}

function animacion(){

    if (y < 850 && estado == "bajando") {
        
    lienzo.clearRect(0,0,1200,900);

    lienzo.beginPath();
    lienzo.arc(500, y, 40, 0, Math.PI*2, false);
    lienzo.fill();
    
    y+=50;   

    }  

    if (y == 850) {

        arriba+=50;
        estado = "subiendo";
        
    }

    if(y>=arriba && estado=="subiendo"){

    lienzo.clearRect(0,0,1200,900);

    lienzo.beginPath();
    lienzo.arc(500, y, 40, 0, Math.PI*2, false);
    lienzo.fill();
    
    y-=50;   

    }

    if (y == arriba) {

        estado = "bajando";
        
    }

}


window.addEventListener("load", comenzar, false);