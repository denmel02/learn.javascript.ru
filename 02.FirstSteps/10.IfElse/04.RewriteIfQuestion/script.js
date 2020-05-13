/*
    Перепишите if с использованием условного оператора '?':

    if (a + b < 4) {
    result = 'Мало';
    } else {
    result = 'Много';
    }
*/

const a = +prompt('Введи число а', '');
const b = +prompt('Введи число b', '');
const result  = (a + b < 4) ? 'Мало' : 'Много';

alert(result);
