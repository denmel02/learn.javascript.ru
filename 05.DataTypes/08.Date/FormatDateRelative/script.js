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
