document.getElementById("convert").addEventListener("click", function () {
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");

    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultElement.textContent = "Please enter a valid temperature in Celsius.";
    }
});