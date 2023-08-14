// function buttonClick(element) {
//   element.classList.toggle('css-mod');
// }

function buttonClick(elemento) {
  const allClass = document.querySelectorAll('.js-primeiro, .js-segundo, .js-terceiro, .js-quarto');

  allClass.forEach(button => {
    if (button === elemento) {
      button.classList.toggle('css-mod');
    } else {
      button.classList.remove('css-mod');
    }
  });
}