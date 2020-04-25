let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

alert(getSumObject(salaries));


function getSumObject(obj) {
    let sumObject = 0;

    for (let key in obj) {
        sumObject += obj[key];
    }

    return sumObject;
}
