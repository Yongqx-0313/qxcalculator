function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSquare() {
    let display = document.getElementById('display');
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateCube() {
    let display = document.getElementById('display');
    try {
        display.value = Math.pow(eval(display.value), 3);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    let display = document.getElementById('display');
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateCubeRoot() {
    let display = document.getElementById('display');
    try {
        display.value = Math.cbrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateLog() {
    let display = document.getElementById('display');
    try {
        display.value = Math.log10(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateLn() {
    let display = document.getElementById('display');
    try {
        display.value = Math.log(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateExp() {
    let display = document.getElementById('display');
    try {
        display.value = Math.exp(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateRemainder() {
    let display = document.getElementById('display');
    try {
        let values = display.value.split('/');
        if (values.length === 2) {
            display.value = eval(values[0]) % eval(values[1]);
        } else {
            display.value = 'Error';
        }
    } catch (e) {
        display.value = 'Error';
    }
}
