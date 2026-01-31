const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos') || '[]');

function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, idx) => {
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';
    li.innerHTML = `
      <span>${todo.text}</span>
      <span class="todo-actions">
        <button onclick="editTodo(${idx})" title="Edit">✏️</button>
        <button onclick="toggleTodo(${idx})" title="Complete">✔️</button>
        <button onclick="deleteTodo(${idx})" title="Delete">🗑️</button>
      </span>
    `;
    list.appendChild(li);
  });
}

form.onsubmit = function(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    todos.push({ text, completed: false });
    input.value = '';
    saveTodos();
  }
};

window.editTodo = function(idx) {
  const newText = prompt('Edit task:', todos[idx].text);
  if (newText !== null && newText.trim() !== '') {
    todos[idx].text = newText.trim();
    saveTodos();
  }
};

window.toggleTodo = function(idx) {
  todos[idx].completed = !todos[idx].completed;
  saveTodos();
};

window.deleteTodo = function(idx) {
  if (confirm('Delete this task?')) {
    todos.splice(idx, 1);
    saveTodos();
  }
};

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

renderTodos(); 