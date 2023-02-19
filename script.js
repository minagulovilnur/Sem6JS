/*1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
[]()*/

const superLink = document.getElementById("super_link");
console.log(`1 задание`, superLink);

/*2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
[]()*/

const cardLink = document.querySelectorAll('.card-link');
cardLink.forEach(function (cardLink1) {
  cardLink1.textContent = "ссылка";
});
console.log(`2 задание`, cardLink);

/*3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.*/

const cardLink2 = document.querySelector(".card-body");
console.log(`3 задание`, cardLink2);

/*4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.*/

const dataNumber = document.querySelector('[data-number="50"]');
console.log(`4 задание`, dataNumber);
/*
5. Выведите содержимое тега title в консоль.*/

const title = document.querySelector("title");
console.log(`5 задание`, title.textContent);

/*[]()
6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.*/

const cardTitle = document.querySelector(".card-title");
console.log(`6 задание`, cardTitle.parentElement);

/*[]()
7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".*/

const newCard = document.querySelector(".card");
const newPar = document.createElement("p");
newPar.textContent = "Привет";
console.log(`7 задание`, newCard.prepend(newPar));
// метод "препенд" позволяет вставить в начало какого-либо элемента другой элемент

/*8. Удалите тег h6 на странице.*/

const deleteTag = document.querySelector("h6");
console.log(`8 задание`, deleteTag.remove()); // удаление тега H6
