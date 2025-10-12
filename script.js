let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
let pratos = document.getElementById("pratos");
let indice = 0;
let arrayPratos = pratos.querySelectorAll(".prato");
let arrayTextos = document.querySelectorAll(".texto");

nextButton.onclick = () => {
    if(indice < 3){
        indice += 1;
        trocarActive();
        passarSlide();
    }else{
        indice = 0;
        trocarActive();
        passarSlide();
    }
}

prevButton.onclick = () => {
    if(indice >  0){
        indice -= 1;
        trocarActive();
        passarSlide();
    }else{
        indice = 3;
        trocarActive();
        passarSlide();
    }
}

function passarSlide(){
    pratos.style.transform = `translatex(calc(${indice} * -25%))`;
}

function trocarActive(){
    //prato
    let pratroAtivo = document.querySelector(".prato.active");
    pratroAtivo.classList.remove("active");
    arrayPratos[indice].classList.add("active");

    //texto
    let textoAtivo = document.querySelector(".texto.active");
    textoAtivo.classList.remove("active");
    arrayTextos[indice].classList.add("active");
}

