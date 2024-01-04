
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

class MaquinaTragamonedas {
    constructor() {
        this.carretes = document.querySelectorAll('.reel');
        this.botonGirar = document.getElementById('spin-btn');
        this.resultadoMensaje = document.getElementById('result-message');

        this.botonGirar.addEventListener('click', () => this.girar());

        this.estadoJuego = this.obtenerEstadoJuego() || this.inicializarEstadoJuego();
        this.actualizarCarretes();
    }

    girar() {
        if (this.botonGirar.disabled) {
            return;
        }

        this.desactivarBotonGirar();
        this.resultadoMensaje.textContent = '';

        this.carretes.forEach((carrete) => {
            const simboloAleatorio = symbols[Math.floor(Math.random() * symbols.length)];
            carrete.textContent = simboloAleatorio;
        });

        this.estadoJuego.carretes = Array.from(this.carretes).map((carrete) => carrete.textContent);
        this.guardarEstadoJuego();

        setTimeout(() => {
            this.verificarGanancia();
            this.activarBotonGirar();
        }, 1000);
    }

    verificarGanancia() {
        const arrayDeSimbolos = this.estadoJuego.carretes;

        const combinacionGanadora = combinations.find((combinacion) => {
            return combinacion.symbols.every((simbolo, indice) => simbolo === arrayDeSimbolos[indice]);
        });

        if (combinacionGanadora) {
            this.resultadoMensaje.textContent = combinacionGanadora.winMessage;
            this.resetearEstadoJuego();
        } else {
            this.resultadoMensaje.textContent = 'Intenta de nuevo';
        }
    }

    guardarEstadoJuego() {
        localStorage.setItem('estadoJuego', JSON.stringify(this.estadoJuego));
    }

    obtenerEstadoJuego() {
        const estadoGuardado = localStorage.getItem('estadoJuego');
        return estadoGuardado ? JSON.parse(estadoGuardado) : null;
    }

    inicializarEstadoJuego() {
        return {
            carretes: Array.from(this.carretes).map(() => symbols[0]) // Inicializar con el primer símbolo
        };
    }

    resetearEstadoJuego() {
        this.estadoJuego = this.inicializarEstadoJuego();
        this.actualizarCarretes();
        this.guardarEstadoJuego();
    }

    actualizarCarretes() {
        this.carretes.forEach((carrete, index) => {
            carrete.textContent = this.estadoJuego.carretes[index];
        });
    }

    activarBotonGirar() {
        this.botonGirar.disabled = false;
    }

    desactivarBotonGirar() {
        this.botonGirar.disabled = true;
    }
}

const maquinaTragamonedas = new MaquinaTragamonedas();
