import {taskItems} from './index.js'
import {todoTask} from './todoTask.js'

const tasksDiv = document.getElementById('tasks');

function listTasks(tasks) {
  tasks.forEach((item, i) => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <h4 class="task-title">${item.getTitle()}</h4>
      <p class="task-priority">${item.getPriority()}</p>
      <p class="task-description">${item.getDescription()}</p>
      <button type="button" id="taskDelete${i}" class="task-delete-btn">X</button>
    `;
    tasksDiv.appendChild(itemDiv);
  });
  deleteButtons();
};

function clearTasks() {
  tasksDiv.innerHTML = "";
};

function addTask() {
  let title = document.getElementById('addTaskName').value;
  let description = document.getElementById('addTaskDescription').value;
  let priority = document.getElementById('addTaskPriority').value;

  let task = todoTask({
    "title": title,
    "description": description,
    "priority": priority
  });

  taskItems.push(task);
  clearTasks();
  listTasks(taskItems);
};


function deleteButtons() {
  let deleteBtns = document.getElementsByClassName('task-delete-btn');

  for (var i = 0; i < deleteBtns.length; i++) {
    let j = i;
    deleteBtns[i].addEventListener('click', function() {
      taskItems.splice(j, 1);
      clearTasks();
      listTasks(taskItems);
    });
  };
}

export {tasksDiv, listTasks, clearTasks, addTask, deleteButtons}
