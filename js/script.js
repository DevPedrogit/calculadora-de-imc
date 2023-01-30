function calculatorImc (inputPeso, inputAltura) {
    inputPeso = document.getElementById('inputPeso').value;
    inputAltura = document.getElementById('inputAltura').value;
    
    let resultado = document.querySelector('.resultado');
    let soma = (inputPeso / (inputAltura * inputAltura)).toFixed(2);
    
    if (soma < 18.5) {
        resultado.innerHTML = `${soma} - Abaixo do Peso`;
        resultado.style.backgroundColor = '#d0d007';
    } else if (soma > 18.5 && soma < 24.99) {
        resultado.innerHTML = `${soma} - Peso Normal`;
        resultado.style.backgroundColor = '#008000';
    } else if (soma > 25 && soma < 29.99) {
        resultado.innerHTML = `${soma} - Sobrepeso`;
        resultado.style.backgroundColor = '#fca500';
    } else if (soma > 30) {
        resultado.innerHTML = `${soma} - Obesidade`;
        resultado.style.backgroundColor = '#ff0000';
    }
}
