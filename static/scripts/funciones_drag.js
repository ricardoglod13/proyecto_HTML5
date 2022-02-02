var aux = false;

function comenzar(){

    bucle = setInterval(dragdrop, 50);

}

function dragdrop(){

    var img_drag = document.getElementById("luffi");
    img_drag.addEventListener("dragstart",arrastrar,false);

    var fondo_img = document.getElementById("mar");
    fondo_img.addEventListener("dragstart",arrastrar,false);
    fondo_img.addEventListener("dragenter", function(e) {
    e.preventDefault();}, false);
    fondo_img.addEventListener("dragover", function(e) {
    e.preventDefault();}, false);
    fondo_img.addEventListener("drop",soltado,false);

    img_drag.addEventListener("drop",borrar,false);

    img_drag.addEventListener("dragend",borrar,false);

    fondo_img.addEventListener("dragleave",function(e) {
        aux = true;},true);

}

function arrastrar(e){

    var img_drag = e.target;
    var id = img_drag.getAttribute("id")
    var ruta = "<img src='" + img_drag.getAttribute("src") +"' class='fondo_img' id='" + id + "'>";
    e.dataTransfer.setData("Text", ruta);
    aux = false;
    

}

function soltado(e){

    var fondo_img = document.getElementById("fondo");
    e.preventDefault();  
    fondo_img.innerHTML = e.dataTransfer.getData("Text");

}

function borrar(e){

    var img_drag = e.target;
    img_drag.style.display="none";
    if(aux == true){

        img_drag.style.display="block";
        aux = false;

    }
    

}

window.addEventListener("load",comenzar,false);