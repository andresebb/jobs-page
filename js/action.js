const $arrowLeft = document.getElementById("arrow-left");
const $arrowRight = document.getElementById("arrow-right");
const $firstElement = document.getElementById("elemento-first");
const $lastElement = document.getElementById("elemento-last");
const $categorias = document.getElementById("hero__categories__images");

$arrowRight.addEventListener("click", (event) => {
    $categorias.classList.add("active");
    $categorias.classList.remove("noactive");
})

$arrowLeft.addEventListener("click", (evento) => {
    $categorias.classList.toggle("noactive");
})

