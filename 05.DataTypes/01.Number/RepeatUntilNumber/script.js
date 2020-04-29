function readNumber() {
    let a;

    do {
        a = prompt('Введи число');
    } while (!isFinite(a));

    return a === null || a === '' ? null : +a;
}

alert( readNumber() );
