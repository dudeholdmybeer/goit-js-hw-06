// Задание 9 - Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color. Для генерации случайного цвета используй функцию getRandomHexColor.

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

button.addEventListener("click", buttonHandler);

function buttonHandler() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = `${body.style.backgroundColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
