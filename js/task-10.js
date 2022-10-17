// Задание 10 - Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// 10.1 - Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
// 10.2 - Размеры самого первого <div> - 30px на 30px.
// 10.3 - Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 10.4 - Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// 10.5 - Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

let elements = [];
function createBoxes(amount) {
  const numberOfElements = input.value;
  for (let i = 0; i < numberOfElements; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.classList.add("boxItem");
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    boxes.append(...elements);
  }
}

function destroyBoxes() {
  elements = [];
  input.value = "";
  return (boxes.innerHTML = "");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
