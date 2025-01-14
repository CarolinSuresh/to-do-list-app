const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Add a new task
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const newTask = taskInput.value;
    if (newTask) {
        addTask(newTask);
        taskInput.value = '';
    }
});

function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
}
