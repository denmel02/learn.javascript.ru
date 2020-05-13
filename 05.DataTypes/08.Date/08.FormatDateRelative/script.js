/*
    Напишите функцию formatDate(date), форматирующую date по следующему принципу:

    *   Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
    *   В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
    *   В противном случае, если меньше часа, вывести "m мин. назад".
    *   В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/

function formatDate(date) {
    const milliseconds = new Date() - date;

    if (milliseconds < 1000) {
        return 'Прямо сейчас';
    }

    if (milliseconds < 60 * 1000) {
        return `${ Math.round(milliseconds / 1000) } сек. назад`;
    }

    if (milliseconds < 60 * 60 * 1000) {
        return `${ Math.round(milliseconds / 60000) } мин. назад`;
    }

    const dateParams = [
        '0' + date.getDate(),
        '0' + (date.getMonth() + 1),
        '' + date.getFullYear(),
        '0' + date.getHours(),
        '0' + date.getMinutes()
    ].map((item) => item.slice(-2));

    return dateParams.slice(0, 3).join('.') + ' ' + dateParams.slice(3).join(':');
}


alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата
