function getWeekDay(date) {
    const weekDays = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ];

    return weekDays[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года

alert( getWeekDay(date) );        // нужно вывести "ВТ"
