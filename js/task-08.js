// Задание 8 - Напиши скрипт управления формой логина.
// 8.1 - Обработка отправки формы form.login-form должна быть по событию submit.
// 8.2 - При отправке формы страница не должна перезагружаться.
// 8.3 - Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 8.4 - Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// 8.5 - Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log("formData object:", formData);
  event.currentTarget.reset();
}
