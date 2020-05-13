/*
    Создайте функцию truncate(str, maxLength), которая проверяет длину строки str и, если она превосходит maxLength, заменяет конец str на "…", так,
    чтобы её длина стала равна maxLength.

    Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
*/

function truncate(str, maxLength) {
    return str.length <= maxLength ? str : str.slice(0, maxLength - 1) + '…';
}

alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
alert( truncate("Всем привет!", 20) );
