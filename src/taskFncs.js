import {todoContainer} from './utils.js';
import {todoTask} from './todo.js';
import {clearList, listLists, addList} from './listFncs.js';
import {todoLists} from './index.js';
import {formatDistance} from 'date-fns';

function listTasks(list) {
  let listIndex = todoLists.indexOf(list);
  list.setIndex(listIndex);

  const listContainer = document.createElement('div');
  listContainer.className = "listCont";

  const listTitle = document.createElement('div');
  listTitle.className = "listTitleCont";
  listTitle.innerHTML = `
  <h2>
    <a class="list-name" id="list${listIndex}-name" href="#">${list.getTitle()}</a>
  </h2>
  <p class="list-description" id="list${listIndex}-desc">${list.getDescription()}</p>
  `;

  listContainer.appendChild(listTitle);

  list.getTasks().forEach((item, i) => {
    const itemDiv = document.createElement('div');
    let itemDate;
    if (item.getDate() != undefined) {
       itemDate = formatDistance(
        new Date(item.getDate()),
        Date.now(),
        {addSuffix: true}
      )
    } else {itemDate = ""};
    itemDiv.className = "task-item";
    item.editCoords([listIndex, i]);
    if (item.isFinished()) {
      itemDiv.innerHTML = `
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input task-checkbox" type="checkbox" value="" id="list${listIndex}-task${i}" checked>
            <a class="task-name done" id="list${listIndex}-task${i}-name" href="#">${item.getTitle()}</a>
          </label>
        </div>
        <div class="task-date" id="list${listIndex}-task${i}-date">${itemDate}</div>
        <button type="button" id="list${listIndex}-task${i}-del" class="task-delete-btn"><i class="far fa-times-circle task-delete-icon"></i></button>
      `;
    } else {
      itemDiv.innerHTML = `
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input task-checkbox" type="checkbox" value="" id="list${listIndex}-task${i}">
            <a class="task-name" id="list${listIndex}-task${i}-name" href="#">${item.getTitle()}</a>
          </label>
        </div>
        <div class="task-date" id="list${listIndex}-task${i}-date">${itemDate}</div>
        <button type="button" id="list${listIndex}-task${i}-del" class="task-delete-btn hidden"><i class="far fa-times-circle task-delete-icon"></i></button>
      `;
    }

    listContainer.appendChild(itemDiv);
  });
  let taskForm = document.createElement('form');
  taskForm.className = "taskInputForm";
  taskForm.innerHTML = `
    <input class="form-control form-control-sm taskInputText" type="text" placeholder="Add a new task" value="" class="taskInput" id="addTaskInput${listIndex}">
    <button type="button" class="taskInputBtn" id="addTaskBtn${listIndex}"><i class="fas fa-arrow-alt-circle-up addTaskIcon"></i></button>
    `;
  listContainer.appendChild(taskForm);
  todoContainer.appendChild(listContainer);
};

function addTask() {
  let title = document.getElementById('addTaskName').value;
  let description = document.getElementById('addTaskDescription').value;
  let priority = document.getElementById('addTaskPriority').value;
  let date = document.getElementById('addTaskDate').value;
  let listIndex = document.getElementById('selectList').value;

  let task = todoTask({
    "title": title,
    "description": description,
    "date": date,
    "priority": priority
  });
  todoLists[listIndex].tasks.push(task);
  listLists();
};

function addTaskFromList(btn) {
  let listIndex = btn.id.replace(/\D/g,'');
  let title = document.getElementById('addTaskInput' + listIndex).value;
  let task = todoTask({
    "title": title
  });
  todoLists[listIndex].tasks.push(task);
  listLists();
};

export {listTasks, addTask, addTaskFromList}
