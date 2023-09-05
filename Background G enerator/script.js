document.addEventListener("DOMContentLoaded", function () {
    const colorBox = document.getElementById("color-box");
    const colorCode = document.getElementById("color-code");
    const generateButton = document.getElementById("generate-button");

    generateButton.addEventListener("click", generateRandomColor);

    function generateRandomColor() {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
        colorBox.style.backgroundColor = randomColor;
        colorCode.textContent = randomColor;
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    generateRandomColor();
});