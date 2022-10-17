// Задание 5 - Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const textInput = document.querySelector("#name-input");
console.dir(textInput);
const output = document.querySelector("#name-output");
console.dir(output);

textInput.addEventListener("input", (event) => {
  if (textInput.value === "") {
    return (output.textContent = "Anonymous");
  }
  output.textContent = event.currentTarget.value;
});
