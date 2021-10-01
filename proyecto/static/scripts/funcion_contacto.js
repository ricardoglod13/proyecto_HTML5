

function comenzar(){

    var boton = document.getElementById("enviar");
    boton.addEventListener("click", enviado, false);
    
}

function enviado() {

    Swal.fire({
        title: "GRACIAS",
        text: "Gracias por escribirme, me contactare lo antes posible por correo",
        icon: "success",
        timer: 5000,
        showCancelButton: false,
        showConfirmButton: false,
        showDenyButton: false,
        timerProgressBar: true
      });
    
}

window.addEventListener("load",comenzar, false);
