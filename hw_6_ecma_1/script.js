// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
// const minArr = Math.min(...arr);
console.log(Math.min(...arr));  // 1



// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

createCounter = () => {
    let counter = 0;
    return {
        increment () {
            return (++counter);
        },
        decrement () {
            return(--counter);
        }
    }
}

const count = createCounter();

console.log(count.increment()); // 1
console.log(count.increment()); // 2
console.log(count.increment()); // 3

console.log(count.decrement()); // 2
console.log(count.decrement()); // 1



// 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// // примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)

function factorial(number) {
    if (number === 1 || number === 0) {
        return 1;
    }
    return factorial(number - 1) * number;
}
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1

