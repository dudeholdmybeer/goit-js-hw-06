// Задание 1 - Напиши скрипт который:
// 1.1 - Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 1.2 - Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

const categories = [...document.querySelectorAll(".item")];
const numberOfCategories = categories.length;

const firstMessage = `Number of categories: ${numberOfCategories}`;
console.log(firstMessage);

const secondMessage = categories.map((category) => {
  console.log(`Category: ${category.firstElementChild.innerHTML}
Elements: ${category.querySelectorAll("li").length}`);
});
