function unique(arr) {
    const uniqueArr = [];

    arr.forEach((item) => {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item)
        }
    });

    return uniqueArr;
}

let strings = [ 'кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-O' ];

alert( unique(strings) ); // кришна, харе,
