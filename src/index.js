import _ from 'lodash';
import {todoItem} from './todoItem.js'

let taskItems = [];

let item1 = todoItem({
  "title": "I'm 1st",
  "description": "it need to be done asap",
  "priority": "1"
});

let item2 = todoItem({
  "title": "I'm 2nd",
  "description": "it need to be done soon",
  "priority": "2"
});

let item3 = todoItem({
  "title": "I'm 3rd",
  "description": "it just needs to be done",
  "priority": "3"
});

taskItems.push(item1,item2,item3)

function addTask() {
  let title = document.getElementById('addTaskName').value;
  let description = document.getElementById('addTaskDescription').value;
  let priority = document.getElementById('addTaskPriority').value;

  let task = todoItem({
    "title": title,
    "description": description,
    "priority": priority
  });

  taskItems.push(task);
  clearTasks();
  listTasks();
};

const tasksDiv = document.getElementById('tasks');

function listTasks() {
  taskItems.forEach((item, i) => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <h4 class="item-title">${item.getTitle()}</h4>
      <p class="item-priority">${item.getPriority()}</p>
      <p class="item-description">${item.getDescription()}</p>
    `;
    tasksDiv.appendChild(itemDiv);
  });
};

function clearTasks() {
  tasksDiv.innerHTML = "";
};

listTasks();

document.getElementById('newTaskBtn').addEventListener('click', function() {
    // show new task menu
});

document.getElementById('addTaskBtn').addEventListener('click', function() {
  addTask(this);
});
