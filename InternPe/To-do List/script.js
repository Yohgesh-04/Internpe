document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      addTodoItem(todoInput.value);
      todoInput.value = '';
    });
  
    function addTodoItem(task) {
      if (task.trim() === '') return;
  
      const li = document.createElement('li');
  
      const taskText = document.createElement('span');
      taskText.textContent = task;
  
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'button-container';
  
      const doneButton = document.createElement('button');
      doneButton.textContent = 'Done';
      doneButton.className = 'done-button';
      doneButton.addEventListener('click', () => {
        taskText.classList.toggle('completed');
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        todoList.removeChild(li);
      });
  
      buttonContainer.appendChild(doneButton);
      buttonContainer.appendChild(deleteButton);
  
      li.appendChild(taskText);
      li.appendChild(buttonContainer);
  
      todoList.appendChild(li);
    }
  });
  