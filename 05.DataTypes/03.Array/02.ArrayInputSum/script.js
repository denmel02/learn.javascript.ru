/*
    Напишите функцию sumInput(), которая:

    Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
    Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
    Подсчитывает и возвращает сумму элементов массива.
    P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput() {
    const arr = [];

    while(true) {
        const newNumber = prompt('Введи число');

        if (newNumber === null || newNumber === '' || !isFinite(newNumber)) break;

        arr.push(+newNumber);
    }

    let sum = 0;

    for (let item of arr) {
        sum += item;
    }

    return sum;
}

alert( sumInput() );
