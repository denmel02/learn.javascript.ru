/*
    Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

    Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToday() {
    const today = new Date();

    return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
}

alert( getSecondsToday() );
