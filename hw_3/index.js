// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cubeNumbers (number) {
    return number ** 3;
} 

console.log(cubeNumbers(2));
console.log(cubeNumbers(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"


// const salary = (money) => {
//     return (`Размер заработной платы за вычетом налогов равен ${money * 0.87}`);
// }

const salary = money => `Размер заработной платы за вычетом налогов равен ${money * 0.87}`;

const userMoney = Number(prompt('Укажите вашу заработную плату', 'Введите число'));
if (userMoney !== userMoney) {  //  isNaN(userMoney)
    console.log('Значение задано неверно');
    // alert('Значение задано неверно');
} else {
    console.log(salary(userMoney));
    // alert(salary(userMoney));
}



// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const num1 = Number(prompt('Введите первое число', 1));
const num2 = Number(prompt('Введите второе число', 1));
const num3 = Number(prompt('Введите третье число', 1));

function findMax(a, b, c) {
    return `Максимальное число из введенных: ${Math.max(a, b, c)}`;
}
console.log(findMax(num1, num2, num3));
alert(findMax(num1, num2, num3));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function sum(a, b) {
    return a + b;
}

function dif(a, b) {
    if (a > b) {
        return a - b;
    } else if (a < b) {
        return b - a;
    } else {
        return 0;
    }
}

function prod(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

console.log(sum(3, 5));

console.log(dif(3, 5));
console.log(dif(3, 10));
console.log(dif(3, 3));

console.log(prod(3, 5));
console.log(div(3, 5));














// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/isNaN