/*
    Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

    Например:

    nap - pan
    ear - are - era
    cheaters - hectares - teachers

    Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

    Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

function aclean(arr) {
    const map = new Map();

    arr.forEach((item) => {
        const key = item.toLowerCase().split('').sort().join('');

        map.set(key, item);
    });

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
