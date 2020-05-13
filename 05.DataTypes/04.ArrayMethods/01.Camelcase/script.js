/*
    Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

    То есть дефисы удаляются, а все слова после них получают заглавную букву.
*/

function camelize(str) {
    return str.split('-').map((item, index) => index ? item[0].toUpperCase() + item.slice(1) : item).join('');
}

alert( camelize("list-style-image") ); // 'listStyleImage';
alert( camelize("background-color") ); // 'backgroundColor';
alert( camelize("-webkit-transition") ); // 'WebkitTransition';
