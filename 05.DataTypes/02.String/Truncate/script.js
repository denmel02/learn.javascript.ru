function truncate(str, maxLength) {
    return str.length <= maxLength ? str : str.slice(0, maxLength - 1) + '…';
}


alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
alert( truncate("Всем привет!", 20) );
