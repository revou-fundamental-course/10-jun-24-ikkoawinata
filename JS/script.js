document.getElementById('temperature-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsius = parseFloat(celsiusInput.value);
    let result;
    let explanation;

    if (isNaN(celsius)) {
        result = 'Harap masukkan nilai suhu yang valid.';
        explanation = '';
    } else {
        const fahrenheit = (celsius * 9/5) + 32;
        result = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
        explanation = `${celsius} derajat Celsius setara dengan ${fahrenheit.toFixed(2)} derajat Fahrenheit.\nRumus: ${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;

        fahrenheitInput.value = fahrenheit.toFixed(2);
    }

    document.getElementById('result').innerText = result;
    document.getElementById('calculation-method').value = explanation;
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('temperature-form').reset();
    document.getElementById('result').innerText = '';
    document.getElementById('calculation-method').value = '';
    document.getElementById('fahrenheit').value = '';
});

document.getElementById('reverse-button').addEventListener('click', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsius = parseFloat(celsiusInput.value);
    let result;
    let explanation;

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        result = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
        explanation = `${celsius} derajat Celsius setara dengan ${fahrenheit.toFixed(2)} derajat Fahrenheit.\nRumus: ${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;

        fahrenheitInput.value = fahrenheit.toFixed(2);
    }

    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheitValue)) {
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        result = `${fahrenheitValue}°F = ${celsiusValue.toFixed(2)}°C`;
        explanation = `${fahrenheitValue} derajat Fahrenheit setara dengan ${celsiusValue.toFixed(2)} derajat Celsius.\nRumus: (${fahrenheitValue} - 32) * 5/9 = ${celsiusValue.toFixed(2)}°C`;

        celsiusInput.value = celsiusValue.toFixed(2);
    }

    document.getElementById('result').innerText = result;
    document.getElementById('calculation-method').value = explanation;
});
