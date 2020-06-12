const $arrowLeft = document.getElementById("arrow-left");
const $arrowRight = document.getElementById("arrow-right");
const $firstElement = document.getElementById("elemento-first");
const $lastElement = document.getElementById("elemento-last");
const $categorias = document.getElementById("hero__categories__images");

var numerito = "-800px";

$arrowRight.addEventListener("click", (event)=> {
    $firstElement.style.marginLeft = "-400px"
});

$arrowLeft.addEventListener("click", () => {
        $firstElement.style.marginLeft = "10px";
});