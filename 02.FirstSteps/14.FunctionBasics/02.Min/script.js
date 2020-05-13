// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
    return a < b ? a : b;
}

alert('min(2, 5) = ' + min(2, 5)); // 2
alert('min(3, -1) = ' + min(3, -1)); // -1
alert('min(1, 1) = ' + min(1, 1)); // 1
