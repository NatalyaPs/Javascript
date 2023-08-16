/* Урок 4. Асинхронность в Javascript */

/* Задача
Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage */

const url = 'https://jsonplaceholder.typicode.com/users';

const getData2 = async (url) => {
	const res = await fetch(url);
	const data = await res.json();
	return data;
};

try {
	const users = await getData2(url);
	console.log(users);
	users.forEach(element => {
		localStorage.setItem(element.name, JSON.stringify(element))
	});
    const deleteUser = prompt('Удалить пользователя из массива', 'Укажите имя пользователя') // Leanne Graham
    const newUsers = users.filter(e => e.name !== deleteUser)
    localStorage.removeItem(deleteUser);
    console.log(newUsers);

} catch (error) {
	console.error('Что-то пошло не так!');
}


/* Необязательная задача
Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды. */

// const dogURL = 'https://dog.ceo/api/breeds/image/random/10';

