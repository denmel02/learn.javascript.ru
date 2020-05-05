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
