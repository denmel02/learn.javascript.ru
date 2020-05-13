/*
    Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

    *   read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
    *   sum() возвращает сумму введённых свойств.
    *   mul() возвращает произведение введённых свойств.
*/

function Calculator() {
    this.read = function() {
        this.firstNumber = +prompt('Введи первое число');
        this.secondNumber = +prompt('Введи второе число');
    };
    this.sum = function() {
        return this.firstNumber + this.secondNumber;
    };
    this.mul = function() {
        return this.firstNumber * this.secondNumber;
    };
}

let calculator = new Calculator();

calculator.read();
alert( 'Sum = ' + calculator.sum() );
alert( 'Mul = ' + calculator.mul() );
