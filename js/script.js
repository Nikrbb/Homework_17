function mainFunction (callback) {
    const firstNum = prompt(`Первое число`);
    const secondNum = prompt(`Второе число`);
    if (firstNum === `` || firstNum === null || isNaN(firstNum)) {
        alert(`Первое число не валидно`)
    } else if (secondNum === `` || secondNum === null || isNaN(secondNum)) {
        alert(`Второе число не валидно`)
    } else {
        return callback(firstNum, secondNum);
    };
};

const exponentanion = function (a, b) {
    const calc = a ** b;
    alert(calc);
};

const multiplay = function (a, b) {
    const calc = a * b;
    alert(calc);
};

const division = (a, b) => { const calc = a / b; alert(calc); };

const modulo = (a, b) => { const calc = a % b; alert(calc); };


mainFunction(exponentanion);
