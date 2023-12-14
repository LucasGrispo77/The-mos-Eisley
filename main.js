
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


    
    
    
    
    
const symbols = ['🍒', '🍊', '🍋', '🍇', '🍉'];

const combinations = [
    { symbols: ['🍒', '🍒', '🍒'], winMessage: 'Ganaste el gran premio.' },
    { symbols: ['🍊', '🍊', '🍊'], winMessage: '¡Ganaste! Tres naranjas.' },
    { symbols: ['🍋', '🍋', '🍋'], winMessage: '¡Ganaste! Tres limones.' },
    { symbols: ['🍇', '🍇', '🍇'], winMessage: '¡Ganaste! Tres uvas.' },
    { symbols: ['🍉', '🍉', '🍉'], winMessage: '¡Ganaste! Tres sandías.' }
];

class SlotMachine {
    constructor() {
        this.reels = document.querySelectorAll('.reel');
        this.spinBtn = document.getElementById('spin-btn');
        this.spinBtn.addEventListener('click', () => this.spin());
    }

    spin() {
        this.reels.forEach((reel) => {
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            reel.textContent = randomSymbol;
        });

        this.checkWin();
    }

    checkWin() {
        const symbolsArray = Array.from(this.reels).map((reel) => reel.textContent);

        const winningCombination = combinations.find((combination) => {
            return combination.symbols.every((symbol, index) => symbol === symbolsArray[index]);
        });

        if (winningCombination) {
            alert(winningCombination.winMessage);
        } else {
            alert('Intenta de nuevo');
        }
    }
}

const slotMachine = new SlotMachine();

