let slider = document.querySelector(".slider-container")
let sliderIndividual = document.querySelectorAll(".conteudo-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize",function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    sliders();
},intervalo);

function sliders(){
slider.style.transform = "translate("+(-width*contador)+"px)";
slider.style.transition = "trasform .10s";
contador++;

if(contador == sliderIndividual.length){
    setTimeout(function(){
        slider.style.transform = "translate(0px)";
        slider.style.transition = "trasform .0s";
        contador = 1;
    },1500)
}
}