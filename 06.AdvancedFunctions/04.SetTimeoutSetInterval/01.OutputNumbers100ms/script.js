/*
    Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

    Сделайте два варианта решения.

    *   Используя рекурсивный setTimeout.
    *   Используя setInterval.
*/

function printNumbersTimeout(from, to) {
    let number = from;

    setTimeout(function tick() {
        console.log(number++);

        if (number <= to) {
            setTimeout(tick(), 1000);
        }
    }, 1000)
}

function printNumbersInterval(from, to) {
    let number = from;

    let interval = setInterval(() => {
        console.log(number++);

        if (number > to) {
            clearInterval(interval)
        }
    }, 1000)
}

printNumbersTimeout(2, 6)
printNumbersInterval(3, 10);
