import {todoTasks, todoLists, currentList} from './index.js'
import {todoTask} from './todo.js'

const tasksDiv = document.getElementById('tasks');

function listTasks(list) {
  const listTitle = document.createElement('h2');
  listTitle.innerHTML = list.title;
  tasksDiv.appendChild(listTitle);

  list.getTasks().forEach((item, i) => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <h4 class="task-title">${item.getTitle()}</h4>
      <p class="task-priority">${item.getPriority()}</p>
      <p class="task-description">${item.getDescription()}</p>
      <p class="task-date">${item.getDate()}</p>
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
  let date = document.getElementById('addTaskDate').value;

  let task = todoTask({
    "title": title,
    "description": description,
    "date": date,
    "priority": priority
  });

  currentList.tasks.push(task);
  clearTasks();
  listTasks(currentList);
};


function deleteButtons() {
  let deleteBtns = document.getElementsByClassName('task-delete-btn');

  for (var i = 0; i < deleteBtns.length; i++) {
    let j = i;
    deleteBtns[i].addEventListener('click', function() {
      currentList.tasks.splice(j, 1);
      clearTasks();
      listTasks(currentList);
    });
  };
}

export {tasksDiv, listTasks, clearTasks, addTask, deleteButtons}
