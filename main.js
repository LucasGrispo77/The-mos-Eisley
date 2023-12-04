
//Algoritmo con un condicional 


let hora = prompt("Ingrese la hora")

if (hora >= 6 && hora < 12) {

    alert ("Buenos dias")

}  else if (hora >= 12 && hora < 20) {

    alert ("Buenas tardes")

}  else if (hora >=20 && hora < 00 ){

    alert ("Buenas noches") 

}  else {
    
    alert ("ANDÁ A DORMIR")

}








//Algortimo con un ciclo

let x = 0;

while (x<10) {

    console.log("Ciclo número" + x);
    alert("ahora el x vale" + x);
    x = x + 1;
    
}

                      
            
    
const symbols = ['🍒', '🍋', '🍇', '🍊', '🍉'];

function spin() {
    const reels = document.querySelectorAll('.reel');

    reels.forEach((reel) => {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        reel.textContent = randomSymbol;
    });
}

