// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

function checkAgeFirstVariant(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAgeSecondVariant(age) {
    return age > 18 || confirm('Родители разрешили?');
}

const age = +prompt('Введи возраст');

alert(checkAgeFirstVariant(age));
alert(checkAgeSecondVariant(age));
