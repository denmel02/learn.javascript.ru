const a = +prompt('Введи число а', '');
const b = +prompt('Введи число b', '');
let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

result = (a + b < 4) ? 'Мало' : 'Много';

alert(result);
