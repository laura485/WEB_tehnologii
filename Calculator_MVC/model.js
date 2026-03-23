class CalculatorModel {
    constructor() {
        this.reset();
    }

    reset() {
        this.operand1 = null;
        this.operand2 = null;
        this.operator = null;
        this.displayValue = '0';
        this.expression = '';
        this.shouldResetDisplay = false;
    }

    updateValue(digit) {
        if (this.displayValue.length >= 16 && !this.shouldResetDisplay) {
            return; 
        }

        if (this.displayValue === '0' || this.shouldResetDisplay) {
            this.displayValue = digit;
            this.shouldResetDisplay = false;
        } else {
            this.displayValue += digit;
        }
    }

    setOperator(op) {
        if (this.operator && !this.shouldResetDisplay) {
            this.calculate();
        }
        this.operand1 = parseFloat(this.displayValue);
        this.operator = op; 
        this.expression = `${this.operand1} ${op}`;
        this.shouldResetDisplay = true;
    }

    calculate() {
        if (this.operator === null || this.shouldResetDisplay) return;
        
        this.operand2 = parseFloat(this.displayValue); 
        let result;

        switch (this.operator) {
            case '+': result = this.operand1 + this.operand2; break;
            case '-': result = this.operand1 - this.operand2; break;
            case '*': result = this.operand1 * this.operand2; break;
            case '/': 
                if (this.operand2 === 0) {
                    this.displayValue = "Eroare: /0";
                    this.shouldResetDisplay = true;
                    return;
                }
                result = this.operand1 / this.operand2; 
                break;
        }

        this.expression = `${this.operand1} ${this.operator} ${this.operand2} =`;

        if (typeof result === 'number') {
            if (Math.abs(result) > 1e12) {
                this.displayValue = result.toExponential(5);
            } else {
                this.displayValue = Number(result.toFixed(8)).toString();
            }
            this.operand1 = result;
        } else {
            this.displayValue = result; 
        }

        this.operator = null;
        this.shouldResetDisplay = true;
    }
}