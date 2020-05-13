/*
    Создайте объект calculator (калькулятор) с тремя методами:

    *   read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
    *   sum() (суммировать) возвращает сумму сохранённых значений.
    *   mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/

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
