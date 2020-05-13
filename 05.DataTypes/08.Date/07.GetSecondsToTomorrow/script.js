/*
    Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

    P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToTomorrow() {
    const today = new Date();
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    return Math.round((tomorrow - today) / 1000);
}

alert( getSecondsToTomorrow() );
