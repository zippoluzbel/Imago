const carrusel = document.querySelector("#carrusel");
let carruselelem = document.querySelectorAll(".carrusel-elem");
let carruselelemult = carruselelem[carruselelem.length -1];

const botonder = document.querySelector("#boton-der");
const botonizq = document.querySelector("#boton-izq");

carrusel.insertAdjacentElement('afterbegin', carruselelemult);

function siguiente() {
    let carruselelempri = document.querySelectorAll(".carrusel-elem")[0]
    carrusel.style.marginleft = "-200%";
    carrusel.style.transition = "all 0.6s";
    setTimeout(function(){
        carrusel.style.transition = "none";
        carrusel.insertAdjacentElement('beforeend', sliderSectionFirst)
        carrusel.style.marginleft = "-100%";
    }, 600);
    
    botonder.addEventListener('click',function(){
        next();
    });

}