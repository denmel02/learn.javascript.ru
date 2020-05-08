function topSalary(salaries) {
    let topSalaryKey = null;
    let topSalary = 0;

    Object.entries(salaries).forEach(([ key, value ]) => {
        if (value > topSalary) {
            topSalaryKey = key;
            topSalary = value;
        }
    });

    return topSalaryKey;
}

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
};

alert( topSalary(salaries) ); // Pete
