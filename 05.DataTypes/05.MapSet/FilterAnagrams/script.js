function aclean(arr) {
    const map = new Map();

    arr.forEach((item) => {
        const key = item.toLowerCase().split('').sort().join('');

        map.set(key, item);
    });

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
