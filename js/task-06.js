// Задание 6 - Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// 6.1 - Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// 6.2 - Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (
    Number(textInput.getAttribute("data-length")) !== textInput.value.length
  ) {
    return textInput.classList.add("invalid");
  }
  textInput.classList.replace("invalid", "valid");
});
