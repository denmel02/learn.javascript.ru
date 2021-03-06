/*
    Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

    Функция должна надёжно работать при значении days=365 и больших значениях.

    P.S. Функция не должна изменять переданный ей объект date.
*/

function getDateAgo(date, days) {
    const dateAgo = new Date(date);

    dateAgo.setDate(date.getDate() - days);

    return dateAgo.getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
