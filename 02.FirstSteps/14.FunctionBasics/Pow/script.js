function pow(x, n) {
    let result = 1;

    for(let i = 1; i <= n; i++) {
        result *= x;
    }

    return result
}

alert('pow(3, 2) = ' + pow(3, 2)); // 9
alert('pow(3, 3) = ' + pow(3, 3)); // 27
alert('pow(1, 100) = ' + pow(1, 100)); // 1
