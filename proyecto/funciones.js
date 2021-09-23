var aux = 0;

function comenzar(){

    canvas_fun();
    dragdrop();

}

function canvas_fun(){

    var boton1 = document.getElementById("can");
    var boton2 = document.getElementById("tri");
    var boton3 = document.getElementById("rec");
    var boton4 = document.getElementById("cir");
    var boton5 = document.getElementById("pin");
    var boton6 = document.getElementById("eli").addEventListener("click",suprimir,false);
    
    boton1.addEventListener("click",letras,false);
    boton2.addEventListener("click",triangulo,false);
    boton3.addEventListener("click",rectangulo,false);
    boton4.addEventListener("click",circulo,false);
    boton5.addEventListener("click",pintar,false);


}

function letras(){

    var elemento = document.getElementById("lienzo");
    var lienzo = elemento.getContext("2d");

    lienzo.clearRect(0, 0, elemento.width, elemento.height);
    lienzo.strokeStyle = "rgb(0, 102, 255)";
    lienzo.font="bold 100px monospace";
    lienzo.textAlign="center";
    lienzo.textBaseline="middle";
    lienzo.strokeText("CANVAS", 275, 192.5);
    aux = 1;

}

function triangulo(){

    var elemento = document.getElementById("lienzo");
    var lienzo = elemento.getContext("2d");

    lienzo.clearRect(0, 0, elemento.width, elemento.height);
    lienzo.strokeStyle = "rgb(0, 102, 255)";
    lienzo.beginPath();
    lienzo.moveTo(175,292.5);
    lienzo.lineTo(375,292.5);
    lienzo.lineTo(275,92.5);
    lienzo.lineTo(175,292.5);
    lienzo.stroke();
    aux = 2;

}

function rectangulo(){

    var elemento = document.getElementById("lienzo");
    var lienzo = elemento.getContext("2d");

    lienzo.clearRect(0, 0, elemento.width, elemento.height);
    lienzo.strokeStyle = "rgb(0, 102, 255)";
    lienzo.strokeRect(175,142.5,200,100);
    aux = 3;

}

function circulo(){

    var elemento = document.getElementById("lienzo");
    var lienzo = elemento.getContext("2d");

    lienzo.clearRect(0, 0, elemento.width, elemento.height);
    lienzo.strokeStyle = "rgb(0, 102, 255)";
    lienzo.beginPath();
    lienzo.arc(275,192.5,100,0,Math.PI*2,false);
    lienzo.stroke();
    aux = 4;

}

function pintar(){

    var elemento = document.getElementById("lienzo");
    var lienzo = elemento.getContext("2d");

    lienzo.clearRect(0, 0, elemento.width, elemento.height);
    switch(aux){

        case 0:
            lienzo.fillStyle = "rgb(0, 102, 255)";
            lienzo.font="40px monospace";
            lienzo.textAlign="center";
            lienzo.textBaseline="bottom";
            lienzo.fillText("No hay ninguna figura", 275, 192.5);
            lienzo.fillText("o ya relleno la anterior", 275, 237.5);
            setTimeout('suprimir()', 5000);
            break;
        
        case 1:
            lienzo.fillStyle = "rgb(0, 102, 255)";
            lienzo.font="bold 100px monospace";
            lienzo.textAlign="center";
            lienzo.textBaseline="middle";
            lienzo.fillText("CANVAS", 275, 192.5);
            aux = 0;
            break;

        case 2:
            lienzo.fillStyle = "rgb(0, 102, 255)";
            lienzo.beginPath();
            lienzo.moveTo(175,292.5);
            lienzo.lineTo(375,292.5);
            lienzo.lineTo(275,92.5);
            lienzo.lineTo(175,292.5);
            lienzo.fill();
            aux = 0;
            break;
         
        case 3:
            lienzo.fillStyle = "rgb(0, 102, 255)";
            lienzo.fillRect(175,142.5,200,100);
            aux = 0;
            break;

        case 4:
            lienzo.fillStyle = "rgb(0, 102, 255)";
            lienzo.beginPath();
            lienzo.arc(275,192.5,100,0,Math.PI*2,false);
            lienzo.fill();
            aux = 0;
            break;

    }

}

function suprimir(){

    var elemento = document.getElementById("lienzo");
    var lienzo = elemento.getContext("2d");

    lienzo.clearRect(0, 0, elemento.width, elemento.height);


}

function dragdrop(){

    var video_drag = document.getElementsByClassName("sobre");
    video_drag.addEventListener("dragstart",arrastrar,false);

}

function arrastrar(){

    var video_drag = document.getElementsByClassName("sobre");
    video_drag.play();

}

function fondo_drag(){

    var canvas = document.getElementById("lienzo");
    var lienzo = canvas.getContext("2d");

    lienzo.fillStyle = "rgb(0, 102, 255)";
    lienzo.font="bold 30px monospace";
    lienzo.textAlign="center";
    lienzo.textBaseline="bottom";
    lienzo.fillText("Presiona alguno de los botones", 275, 192.5);
    lienzo.fillText("de abajo para utilizar la API", 275, 237.5);

}

window.addEventListener("load",comenzar,false);
window.addEventListener("load",fondo_drag,false);