
//Algoritmo con un condicional 


//let hora = prompt("Ingrese la hora")

//if (hora >= 6 && hora < 12) {

//    alert ("Buenos dias")

//}  else if (hora >= 12 && hora < 20) {

///    alert ("Buenas tardes")

//}  else if (hora >=20 && hora < 00 ){

//    alert ("Buenas noches") 

//}  else {
    
//    alert ("ANDÁ A DORMIR")

//}








//Algortimo con un ciclo

//let diaDeLaSemana = Number(prompt("Ingrese dia de la semana"));

//switch (diaDeLaSemana) {
//    case 1:
//        alert("Lunes");
//        break;
    
//    case 2:
//        alert("Martes");
//        break;
//    case 3:
//        alert("Miércoles");
//        break;
        
//    case 4:
//        alert("Jueves");
//       break;
            
//    case 5:
//        alert("Viernes");
//        break;
            
//   case 6:
//        alert("Sábado");
//        break;
//    case 7:
//        alert("Domingo");
//        break;    
//    default:
//        alert("Ese día no existe");
//        break;
//}
                      
            
    
const symbols = ['🍒', '🍋', '🍇', '🍊', '🍉'];

function spin() {
    const reels = document.querySelectorAll('.reel');

    reels.forEach((reel) => {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        reel.textContent = randomSymbol;
    });
}

