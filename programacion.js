function calcularEdad() {
    var hoy = new Date();
    hoy = hoy.getFullYear();
    var edad = hoy - 1987;
    var labelEdad = document.getElementById("f1");
    labelEdad.innerHTML = edad;
}

function cambiarFondo() {
    var fondo=document.getElementById("body");
    fondo.style.backgroundImage =  `url(${"./fondo2.avif"})`;
}

function agrandarTextos() {
    var letra=document.getElementById("body");
    letra.style.fontSize="25px";
}