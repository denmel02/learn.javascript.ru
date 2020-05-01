const arr = [ 'Джаз', 'Блюз' ];

alert(arr); // Джаз, Блюз
arr.push('Рок-н-ролл');
alert(arr); // Джаз, Блюз, Рок-н-ролл

arr[ Math.floor(arr.length / 2) ] = 'Классика';

alert(arr); // Джаз, Классика, Рок-н-ролл
arr.shift();
alert(arr); // Классика, Рок-н-ролл
arr.unshift('Рэп', 'Регги');
alert(arr); // Рэп, Регги, Классика, Рок-н-ролл
