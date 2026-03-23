class CalculatorView {
    constructor() {
        this.displayElement = document.getElementById('current-value');
        this.expressionElement = document.getElementById('expression');
    }

    updateDisplay(value, expression) {
        this.displayElement.innerText = value;
        this.expressionElement.innerText = expression;
    }

    bindButtonClick(handler) {
        document.querySelector('.buttons').addEventListener('click', (e) => {
            if (e.target.classList.contains('btn')) {
                handler(e.target.innerText);
            }
        });
    }
}