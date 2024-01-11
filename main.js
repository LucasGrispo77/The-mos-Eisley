const choices = ['cuarzo', 'papiro', 'navaja'];

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const userChoice = this.getAttribute('data-choice');
            playGame(userChoice);
        });
    });

    
    getWeather();
});

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    
    getWeather();

    displayResult(result, userChoice, computerChoice);
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    return userChoice === computerChoice
        ? 'Empate'
        : (userChoice === 'cuarzo' && computerChoice === 'navaja') ||
          (userChoice === 'papiro' && computerChoice === 'cuarzo') ||
          (userChoice === 'navaja' && computerChoice === 'papiro')
        ? '¡Ganaste!'
        : '¡Perdiste!';
}

function displayResult(result, userChoice, computerChoice) {
    Swal.fire({
        title: result,
        text: 'Elegiste ${userChoice}, la computadora eligió ${computerChoice}',
        icon: result.toLowerCase() === 'ganaste' ? 'success' : 'error',
        confirmButtonText:'Aceptar'
    }
    );}