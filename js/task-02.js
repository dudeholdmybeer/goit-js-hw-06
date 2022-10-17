// Задание 2 - Напиши скрипт, который для каждого элемента массива ingredients:
// 2.1 - Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2.2 - Добавит название ингредиента как его текстовое содержимое.
// 2.3 - Добавит элементу класс item.
// 2.4 - После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul");

const listElements = [];

const markup = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  listElements.push(listItem);
});

list.append(...listElements);
