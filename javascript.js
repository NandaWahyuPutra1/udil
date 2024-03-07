class Calculator{
    udpdateDisplay(){
        document.getElementById('display').value = this.displayValue;
    }
    constructor(){
        this.displayValue= '';
    }
    appendNumber(number){
        this.displayValue += number;
        this.udpdateDisplay();
    }
    appendOperator(operator){
        if(this.displayValue !== ' '){
            this.displayValue += ' ' +operator+ ' ';
            this.udpdateDisplay();
        }
    }
    clearDisplay(){
        this.displayValue = ' ';
        this.udpdateDisplay();
    }
    backspace(){
        this.displayValue = this.displayValue.slice(0,-1);
        this.udpdateDisplay();
    }
    calculateResult(){
        try{
            const result = eval(this.displayValue);
            this.displayValue = result;
            this.udpdateDisplay();
        }catch{
            this.displayValue = 'error';
            this.udpdateDisplay();
        }
    }
}
const calculator = new Calculator();