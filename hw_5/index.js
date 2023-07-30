// Задание 1.  Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

const numValue = Object.values(numbers);
console.log(numValue);    // [ 1, 2, 3, 4, 5, 6, 7 ]
const res = numValue.filter((_, i, numValue) => numValue[i] >= 3);   // [ 3, 4, 5, 6, 7 ]
console.log(res);



// Задание 2. Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(`${post.author} ${post.comments[0].rating.dislikes} ${post.comments[1].userId} ${post.comments[1].text}`);   // John 2 5 lorem ipsum 2



// Задание 3. Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(product => product.price = product.price * 0.85);
console.log(products);   // [ { id: 3, price: 170 }, { id: 4, price: 765 }, { id: 1, price: 850 } ]



// Задание 4.
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив prods.
// 2. Необходимо отсортировать массив prods используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const prods = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
    ];

const proFiltr = prods.filter(product => 'photos' in product && product.photos.length !== 0);
console.log(proFiltr);
// [
//     { id: 3, price: 127, photos: [ '1.jpg', '2.jpg' ] },
//     { id: 10, price: 26, photos: [ '3.jpg' ] }
// ]

prods.sort((prod1, prod2) => +prod1.price - +prod2.price);
console.log(prods);
// [
//     { id: 10, price: 26, photos: [ '3.jpg' ] },
//     { id: 8, price: 78 },
//     { id: 3, price: 127, photos: [ '1.jpg', '2.jpg' ] },
//     { id: 5, price: 499, photos: [] }
// ]



// **Задание 5**
// Дано 2 массива Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const daysOfWek = {};

for (let i = 0; i < en.length; i++) {
    daysOfWek[en[i]] = ru[i];
}
console.log(daysOfWek); 
// {
//     mon: 'понедельник',
//     tue: 'вторник',
//     wed: 'среда',
//     thu: 'четверг',
//     fri: 'пятница',
//     sat: 'суббота',
//     sun: 'воскресенье'
//   }