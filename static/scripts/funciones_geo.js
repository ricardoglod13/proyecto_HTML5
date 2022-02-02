
function comenzar(){

    var pin = document.getElementById("pin");
    pin.addEventListener("click",localizacion,false);

}

function localizacion(){

    var parametros = {timeout: 10000, maximumAge: 60000}

    navigator.geolocation.getCurrentPosition(mostrar, gestion, parametros);

}

function mostrar(posicion){

    Swal.fire({
        title: "Localizacion",
        text: "Tu posicion es " + posicion.coords.latitude + " Latitud, " + posicion.coords.longitude + " Longitud",
        icon: "info",
        button: "Clickeame!!!"
    });

}

function gestion(error){

    if(error.code==1){

        Swal.fire({
            title: "Error",
            text: "Debe permitir la obtencion de su localizacion en el navegador",
            icon: "error",
            button: "Clickeame!!!"
        });

    }else if(error.code==2){

        Swal.fire({
            title: "Error",
            text: "La ubicacion no esta disponible",
            icon: "error",
            button: "Clickeame!!!"
        });

    }else if(error.code==3){

        Swal.fire({
            title: "Error",
            text: "Se agoto el tiempo de espera",
            icon: "error",
            button: "Clickeame!!!"
        });

    }

}

window.addEventListener("load",comenzar,false);