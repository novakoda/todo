import {todoContainer} from './utils.js';
import {todoTask} from './todo.js';
import {clearLists, clearList, listLists, addList} from './listFncs.js';
import {todoLists} from './index.js';
import {formatDistance} from 'date-fns';

function listTasks(list, listIndex) {
  let tasksContainer = document.createElement('div');
  tasksContainer.className = "tasks-container";

  list.getTasks().forEach((item, i) => {
    const itemDiv = document.createElement('div');
    let itemDate;
    let itemDesc;

    if (item.getDate() != undefined && item.getDate() != "") {
       itemDate = formatDistance(
        new Date(item.getDate()),
        Date.now(),
        {addSuffix: true}
      );
    } else {itemDate = ""};

    if (item.getDescription() != undefined && item.getDescription() != "") {
      itemDesc = item.getDescription();
    } else {itemDesc = ""};

    itemDiv.className = "task-item";
    itemDiv.id = `list${listIndex}-task${i}-cont`;
    item.editCoords([listIndex, i]);

    if (item.isFinished()) {
      itemDiv.innerHTML = `
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input task-checkbox" type="checkbox" value="" id="list${listIndex}-task${i}" checked>
            <a class="task-name done" id="list${listIndex}-task${i}-name" href="#">${item.getTitle()}</a>
          </label>
        </div>
        <div class="task-date hidden" id="list${listIndex}-task${i}-date">${itemDate}</div>
        <button type="button" id="list${listIndex}-task${i}-del" class="task-delete-btn"><i class="far fa-times-circle task-delete-icon"></i></button>
      `;
    } else {
      itemDiv.innerHTML = `
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input task-checkbox" type="checkbox" value="" id="list${listIndex}-task${i}">
            <a class="task-name" id="list${listIndex}-task${i}-name" href="#">${item.getTitle()}</a>
          </label>
          <p class="task-desc" id="list${listIndex}-task${i}-desc">${itemDesc}</p>
        </div>
        <div class="task-date" id="list${listIndex}-task${i}-date">${itemDate}</div>
        <button type="button" id="list${listIndex}-task${i}-del" class="task-delete-btn hidden"><i class="far fa-times-circle task-delete-icon"></i></button>
      `;
    };
    tasksContainer.appendChild(itemDiv);
  });

  return tasksContainer;
};

function addTask() {
  let title = document.getElementById('addTaskName').value;
  let description = document.getElementById('addTaskDescription').value;
  let priority = document.getElementById('addTaskPriority').value;
  let date = document.getElementById('addTaskDate').value;
  let listIndex = document.getElementById('selectList').value;
  console.log(date);

  let task = todoTask({
    "title": title,
    "description": description,
    "date": date,
    "priority": priority
  });
  todoLists[listIndex].addTask(task);
  listLists();
};

function addTaskFromList(btn) {
  let listIndex = btn.id.replace(/\D/g,'');
  let title = document.getElementById('addTaskInput' + listIndex).value;
  let task = todoTask({
    "title": title
  });
  todoLists[listIndex].addTask(task);
  listLists();
};

export {listTasks, addTask, addTaskFromList}
