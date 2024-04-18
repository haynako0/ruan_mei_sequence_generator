document.getElementById('calculateBtn').addEventListener('click', function() {
    const firstNumber = document.querySelector('#firstNumberInput').value.trim();
    const range = document.querySelector('#rangeInput').value.trim();
    const commonDifference = document.querySelector('#commonDifferenceInput').value.trim();
    const sequenceType = document.querySelector('#sequenceType').value;

    if (firstNumber !== '' && range !== '' && commonDifference !== '' && sequenceType !== 'Choose...') {
        const firstNumberValue = parseInt(firstNumber);
        const rangeValue = parseInt(range);
        const commonDifferenceValue = parseInt(commonDifference);

        if (!isNaN(firstNumberValue) && !isNaN(rangeValue) && !isNaN(commonDifferenceValue)) {
            let result = '';
            switch(sequenceType) {
                case 'arithmetic':
                    result = generateArithmeticSequence(firstNumberValue, rangeValue, commonDifferenceValue);
                    break;
                case 'geometric':
                    result = generateGeometricSequence(firstNumberValue, rangeValue, commonDifferenceValue);
                    break;
                case 'fibonacci':
                    result = generateFibonacciSequence(firstNumberValue, rangeValue);
                    break;
            }
            alert(result);
        } else {
            alert('Please enter valid numbers.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

function generateArithmeticSequence(firstNumber, range, commonDifference) {
    let sequence = '';
    for (let i = 0; i < range; i++) {
        sequence += (firstNumber + commonDifference * i) + ', ';
    }
    return sequence.slice(0, -2);
}

function generateGeometricSequence(firstNumber, range, commonDifference) {
    let sequence = '';
    for (let i = 0; i < range; i++) {
        sequence += (firstNumber * Math.pow(commonDifference, i)) + ', ';
    }
    return sequence.slice(0, -2);
}

function generateFibonacciSequence(firstNumber, range) {
    let sequence = '';
    let a = 0, b = 1;
    for (let i = 0; i < range; i++) {
        sequence += a + ', ';
        let temp = a;
        a = b;
        b = temp + b;
    }
    return sequence.slice(0, -2);
}
