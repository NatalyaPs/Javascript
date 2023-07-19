const youAge = Number(prompt('Какой ваш возраст?', 'Введите число')); // или вместо number поставить +
alert(youAge);
console.log(typeof youAge);  // string, но ввели число. Поэтому оборачиваем в number. NaN, infinity, -infinity и т.д.относятся к типу намбер

const youName = String(prompt('как вас зовут?'), '');
alert(youName)

// 4 основных метода преобразователей:
Number()
String()
Boolean()

console.log(typeof ('5'));  // string
console.log(typeof (Number('5')));  // number
console.log(typeof (new Number('5')));  // object
console.log(typeof (String('5')));  // string
console.log(typeof ( new String('5')));  // string
console.log(typeof ( new toString('5')));  // ???

console.log(Boolean ('5'));  // true
console.log(Boolean ('')); // false
console.log(Boolean (NaN)); // false


let a1;
console.log(a1);  // undefined

console.log('abc' * 3); // NaN
console.log('abc' + 3); // abc3

console.log(1 / 0);  // infinity

console.log('5' * '3');  // 15

console.log(15 % 5);  //0 
console.log(15 % 7);  //1

let a = 13;
let b = 5;
let c = a % b;
console.log(c);

let aa;
console.log(aa);  // undefined

{
    let aaa;
}
console.log(aaa);  // ошибка

{
    let aaa;
    console.log(aaa);    // undefined
}

let n = '2';
let m = '3';
console.log(`сумма ${n + m}
            разность ${n - m}
            прозведение ${n * m}
            частное ${n / m}
            остаток от деления ${n % m}`);     

console.log(+n + +m);

console.log(true + true);  // 2
console.log(('ba' + (9 * 'abc')));


// Пользователь с клавиатуры вводит число, Необходимо создать условный оператор который
// a. Выводит в консоль “Число больше 5”
// b. Выводит в консоль “Число меньше 5”
// c. Выводит в консоль “Число равно 5”

const num = 9;
if (num > 15) {
    console.log('число больше 15');
} else if ( num < 15) {
    console.log('число меньше 15');
} else {
    console.log('число равно 15');
}

const num1 = 9;
switch (true) {
    case num1 > 15:
        console.log('число больше 15');
        break;
    case num1 < 15:
        console.log('число меньше 15');
        break;

    default:
        console.log('число равно 15');
        break;
}

// const num3 = 8;
// console.log((num3 > 15) ? `${num3} больше 15` 
//         :(num3 < 15) `${num3} меньше 15` 
//         : ${num3} `равно 15`);

const d = '15.35866';
console.log(parseInt(d));  // 15
console.log(parseFloat(d));  // 15.35866

const k = '15.35xbckj';
console.log(parseInt(d));  // 15

const l = '15.355555555';
console.log(typeof l.toFixed(l));  // 
