function getMaxSubSum(arr) {
    let maxSum = 0;
    let sum = 0;

    for (let item of arr) {
        sum += item;

        if (sum < 0) {
            sum = 0;
        }

        if (maxSum < sum) {
            maxSum = sum;
        }
    }

    return maxSum;
}

alert( getMaxSubSum([ -1, 2, 3, -9 ]) ) // 5
alert( getMaxSubSum([ 2, -1, 2, 3, -9 ]) ) // 6
alert( getMaxSubSum([ -1, 2, 3, -9, 11 ]) ) // 11
alert( getMaxSubSum([ -2, -1, 1, 2] ) ) // 3
alert( getMaxSubSum([ 100, -9, 2, -3, 5 ]) ) // 100
alert( getMaxSubSum([ 1, 2, 3 ]) ) // 6
alert( getMaxSubSum([ -1, -2, -3 ]) ); // 0
