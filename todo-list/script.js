const todoList = [];

function  addTodo() { 
  const inputElement = document.querySelector('.js-input-nome');
  const nome = inputElement.value


  todoList.push(nome)
  console.log(todoList)

  inputElement.value = '';
}

