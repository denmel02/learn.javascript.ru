/*
    Допустим, у нас есть односвязный список:

    let list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    };

    Выведите его в обратном порядке.

    Сделайте два решения: с использованием цикла и через рекурсию.
*/

function printListReverseCycle(list) {
    let currentList = list;
    const values = [];

    while(currentList) {
        values.push(currentList.value);
        currentList = currentList.next;
    }

    values.reverse().forEach((value) => alert(value));
}

function printListReverseRecursion(list) {
    if (list.next) {
        printListReverseRecursion(list.next);
    }

    alert(list.value);
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printListReverseCycle(list);
printListReverseRecursion(list);
