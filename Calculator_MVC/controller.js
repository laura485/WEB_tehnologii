class CalculatorController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindButtonClick(this.handleInput.bind(this));
    }

    handleInput(value) {
        if (!isNaN(value)) {
            this.model.updateValue(value);
        } else if (['+', '-', '*', '/'].includes(value)) {
            this.model.setOperator(value);
        } else if (value === '=') {
            this.model.calculate();
        } else if (value === 'AC') {
            this.model.reset();
        }

        this.view.updateDisplay(this.model.displayValue, this.model.expression);
    }
}

const app = new CalculatorController(new CalculatorModel(), new CalculatorView());