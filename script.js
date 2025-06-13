const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = document.getElementById('task-input').value;
  const taskDate = document.getElementById('task-date').value;
  if (taskText && taskDate) {
    addTask(taskText, taskDate);
    form.reset();
  }
});

function addTask(text, dateTime) {
  const li = document.createElement('li');

  const taskContent = document.createElement('div');
  taskContent.innerHTML = `<strong>${text}</strong><br><small>${new Date(dateTime).toLocaleString()}</small>`;

  const controls = document.createElement('div');
  controls.className = 'task-controls';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const editBtn = document.createElement('button');
  editBtn.textContent = '✎';
  editBtn.onclick = () => {
    const newText = prompt('Edit task:', text);
    if (newText) taskContent.innerHTML = `<strong>${newText}</strong><br><small>${new Date(dateTime).toLocaleString()}</small>`;
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => li.remove();

  controls.appendChild(completeBtn);
  controls.appendChild(editBtn);
  controls.appendChild(deleteBtn);

  li.appendChild(taskContent);
  li.appendChild(controls);
  taskList.appendChild(li);
}
