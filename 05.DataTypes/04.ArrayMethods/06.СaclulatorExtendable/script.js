/*
    Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

    Задание состоит из двух частей.

    *   Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и
        возвращает результат. Метод должен понимать плюс + и минус -.
    *   Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя
        аргументами func(a,b), которая описывает его.

    Для этой задачи не нужны скобки или сложные выражения.
    Числа и оператор разделены ровно одним пробелом.
    Не лишним будет добавить обработку ошибок.
*/

function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    };
    this.calculate = (str) => {
        const [ a, method, b] = str.split(' ');
        if (!isFinite(a) || !this.methods[method] || !isFinite(b)) {
            return NaN;
        }

        return this.methods[method](+a, +b);
    };
    this.addMethod = (name, method) => {
        this.methods[name] = method;
    };
}

let calc = new Calculator;

calc.addMethod('*', (a, b) => a * b);
calc.addMethod('/', (a, b) => a / b);
calc.addMethod('**', (a, b) => a ** b);

alert( calc.calculate('fg + 56') ); // NaN
alert( calc.calculate('3 + 7') ); // 10
alert( calc.calculate('3 - 2') ); // 1
alert( calc.calculate('3 * 7') ); // 21
alert( calc.calculate('8 / 2') ); // 4
alert( calc.calculate('2 ** 3') ); // 8
