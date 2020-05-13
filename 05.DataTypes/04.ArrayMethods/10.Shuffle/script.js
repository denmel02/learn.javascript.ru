/*
    Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

    Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
*/

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];

shuffle(arr);
alert(arr);
shuffle(arr);
alert(arr);
shuffle(arr);
alert(arr);
