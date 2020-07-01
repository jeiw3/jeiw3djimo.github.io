let cards=[document.getElementById("card-1"),document.getElementById("card-2"),document.getElementById("card-3")]

cards[0].addEventListener("mouseover",inEfectoCero())

function inEfectoCero(){
    document.getElementById("card-1").className+="animated__animated animated__shakeX"
}