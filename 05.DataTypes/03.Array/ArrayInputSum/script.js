function sumInput() {
    const arr = [];

    while(true) {
        const newNumber = prompt('Введи число');

        if (newNumber === null || newNumber === '' || !isFinite(newNumber)) break;

        arr.push(+newNumber);
    }

    let sum = 0;

    for (let item of arr) {
        sum += item;
    }

    return sum;
}

alert( sumInput() );
