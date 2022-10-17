// Задание 4 - Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// 4.1 - Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// 4.2 - Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// 4.3 - Обновляй интерфейс новым значением переменной counterValue.

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn);

const counter = document.querySelector("#value");
console.log(counter);

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
