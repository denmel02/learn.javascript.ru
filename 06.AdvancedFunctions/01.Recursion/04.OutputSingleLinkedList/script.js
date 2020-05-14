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
    Напишите функцию printList(list), которая выводит элементы списка по одному.

    Сделайте два варианта решения: используя цикл и через рекурсию.
*/

function printListCycle(list) {
    let currentList = list;

    while(currentList) {
        alert(currentList.value);
        currentList = currentList.next;
    }
}

function printListRecursion(list) {
    alert(list.value);

    if (list.next) {
        printListRecursion(list.next);
    }
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

printListCycle(list);
printListRecursion(list);
