
function calcularEdad() {
    console.log('Calculando...');
    var hoy = new Date();
    hoy = hoy.getFullYear();
    var edad = hoy - 1987;
    var labelEdad = document.getElementById("f1");
    labelEdad.innerHTML = edad;
}

function cambiarFondo() {
    var fondo=document.getElementById("body");
    console.log(fondo.style.backgroundImage);
    if (fondo.style.backgroundImage == 'url("./fondo2.avif")'){
        fondo.style.backgroundImage= `url(${"./fondo.jpeg"})`;

    }
    else{
        fondo.style.backgroundImage =  `url(${"./fondo2.avif"})`;

    }
}

function modificarTextos() {
    var letra=document.getElementById("body");
    if (letra.style.fontSize=="25px"){
        letra.style.fontSize="12px";    
    }
    else{
        letra.style.fontSize="25px";
    }
    
}


