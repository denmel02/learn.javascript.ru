let calculator = {
    firstNumber: 0,
    secondNumber: 0,
    read() {
        this.firstNumber = +prompt('Введи первое число');
        this.secondNumber = +prompt('Введи второе число');
    },
    sum() {
        return this.firstNumber + this.secondNumber;
    },
    mul() {
        return this.firstNumber * this.secondNumber;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
