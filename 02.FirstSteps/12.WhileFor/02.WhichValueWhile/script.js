/*
    Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

    Оба цикла выводят alert с одинаковыми значениями или нет?
*/

let i = 0;

while (++i < 5) alert(i); // 1 2 3 4

i = 0;

while (i++ < 5) alert( i ); // 1 2 3 4 5
