const form = document.getElementById('numeric-form');
const primeiroNumero = document.getElementById('primeiro-numero');
const segundoNumero = document.getElementById('segundo-numero');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorPrimeiroNumero = parseFloat(primeiroNumero.value);
    const valorSegundoNumero = parseFloat(segundoNumero.value);
    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');

    if (valorSegundoNumero > valorPrimeiroNumero) {
        successMessage.innerHTML = `Parabéns! O segundo número (<b>${valorSegundoNumero}</b>) é maior que o primeiro (<b>${valorPrimeiroNumero}</b>).`;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.innerHTML = `Tente novamente! O segundo número (<b>${valorSegundoNumero}</b>) deve ser maior que o primeiro (<b>${valorPrimeiroNumero}</b>).`;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});