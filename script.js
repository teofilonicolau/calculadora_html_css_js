function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}
