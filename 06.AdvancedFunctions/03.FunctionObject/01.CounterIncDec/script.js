/*
    Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

    *   counter() должен возвращать следующее значение (как и раньше).
    *   counter.set(value) должен устанавливать счётчику значение value.
    *   counter.decrease() должен уменьшать значение счётчика на 1.

    Посмотрите код из песочницы с полным примером использования.

    P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.
*/

function makeCounter() {
    function counter() {
        return ++counter.count;
    };

    counter.count = 0;
    counter.set = function(value) {
        counter.count = value;
    };
    counter.decrease = function() {
        counter.count--;
    };

    return counter;
}

const counter = makeCounter();

alert(counter.count);   // 0
alert(counter());       // 1

counter.set(5);
alert(counter.count);   // 5

counter.decrease();
alert(counter.count);   // 4