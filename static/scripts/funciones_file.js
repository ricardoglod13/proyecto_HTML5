
function comenzar(){

    var archivos = document.getElementById("archivos");
    archivos.addEventListener("change",procesar,false);

    Swal.fire({
        title: "Importante",
        text: "Si desea ejecutar este apartado debe tener una imagen con un tamaño maximo de 550 x 385",
        icon: "warning",
        button: "Clickeame!!!"
    });

}

function procesar(e){

    var archivo = e.target.files;
    var lector = new FileReader();
    var mi_archivo = archivo[0];

    if (!window.FileReader) {
        
        Swal.fire({
            title: "Error",
            text: "El navegador no soporta la lectura de archivos",
            icon: "error",
            button: "Clickeame!!!"
        });

        return;
    }

    if (!(/\.(jpg|png|gif)$/i).test(mi_archivo.name)) {
        
        Swal.fire({
            title: "Error",
            text: "El archivo a adjuntar no es una imagen",
            icon: "error",
            button: "Clickeame!!!"
        });

    }else {
        var img = new Image();
        img.onload = function () {
            if (this.width.toFixed(0) > 550 && this.height.toFixed(0) > 385){
                
                Swal.fire({
                    title: "Error",
                    text: "Las medidas deben ser como maximo: 550 * 385",
                    icon: "error",
                    button: "Clickeame!!!"
                });
            
            }else if(mi_archivo.size > 20000){

                Swal.fire({
                    title: "Error",
                    text: "El peso de la imagen no puede exceder los 200kb",
                    icon: "error",
                    button: "Clickeame!!!"
                });
            
            }else{
                
                lector.readAsDataURL(mi_archivo);
                lector.addEventListener("load",mostrar, false);                
            }
        }
        img.src = URL.createObjectURL(mi_archivo);
    }
}




function mostrar(e){

    var result = e.target.result;
    var caja = document.getElementById("caja");
    var letrero = document.getElementById("letrero");

    caja.style.backgroundImage="url('" + result +"')";
    letrero.style.display="none";

}

window.addEventListener("load",comenzar,false);