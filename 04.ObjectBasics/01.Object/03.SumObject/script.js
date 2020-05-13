/*
    У нас есть объект, в котором хранятся зарплаты нашей команды:

    Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.

    Если объект salaries пуст, то результат должен быть 0.
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
const sum = getSumObject(salaries);

alert(sum);


function getSumObject(obj) {
    let sumObject = 0;

    for (let key in obj) {
        sumObject += obj[key];
    }

    return sumObject;
}
