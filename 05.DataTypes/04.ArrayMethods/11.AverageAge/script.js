/*
    Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

    Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
*/

function getAverageAge(arr) {
    return arr.length ? arr.reduce((sum, item) => sum + item.age, 0) / arr.length : NaN;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
