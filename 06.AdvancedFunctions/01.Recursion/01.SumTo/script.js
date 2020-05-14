/*
    Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

    Сделайте три варианта решения:

    *   С использованием цикла.
    *   Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
    *   С использованием формулы арифметической прогрессии.
*/

function sumToCircle(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

function sumToRecursion(n) {
    return n === 1 ? 1 : n + sumToRecursion(n - 1);
}

function sumToFormula(n) {
    return (n + 1) * n / 2;
}

alert( sumToCircle(100) );
alert( sumToRecursion(100) );
alert( sumToFormula(100) );
