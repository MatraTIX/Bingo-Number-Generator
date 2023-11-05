const numbers = [];
const max = 100;

document.getElementById('generate').addEventListener('click', () => {
    if (numbers.length >= max) {
        alert('All numbers between 1 and 100 have been generated.');
        return;
    }

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * max) + 1;
    } while (numbers.includes(randomNumber));

    numbers.push(randomNumber);
    displayNumbers();
});

document.getElementById('check').addEventListener('click', () => {
    const checkNumberInput = document.getElementById('checkNumber');
    const checkResultDiv = document.getElementById('checkResult');
    const checkNumber = parseInt(checkNumberInput.value);

    if (!checkNumber || checkNumber < 1 || checkNumber > 100) {
        checkResultDiv.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    if (numbers.includes(checkNumber)) {
        checkResultDiv.textContent = `${checkNumber} is in the generated sequence.`;
    } else {
        checkResultDiv.textContent = `${checkNumber} is not in the generated sequence.`;
    }
});

function displayNumbers() {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = 'Generated Numbers: ' + numbers.join(', ');
}
