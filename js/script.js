function resultclear() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function appendSymbol(symbol) {
    document.getElementById('result').value += symbol;
}

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function calculateResult() {
    let result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
