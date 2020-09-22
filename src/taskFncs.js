import {todoContainer} from './utils.js';
import {todoTask} from './todo.js';
import {clearList, listLists, addList} from './listFncs.js';
import {todoLists} from './index.js';

function listTasks(list) {
  const listContainer = document.createElement('div');
  listContainer.className = "listCont";

  const listTitle = document.createElement('h2');
  listTitle.innerHTML = list.title;
  listContainer.appendChild(listTitle);

  let listIndex = todoLists.indexOf(list);

  list.getTasks().forEach((item, i) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = "task-item"
    if (item.isFinished()) {
      itemDiv.innerHTML = `
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input task-checkbox" type="checkbox" value="" id="list${listIndex}-task${i}" checked>
            <a class="task-name done" id="list${listIndex}-task${i}-name" href="#">${item.getTitle()}</a>
          </label>
        </div>

        <button type="button" id="list${listIndex}-task${i}-del" class="task-delete-btn">X</button>
      `;
    } else {
      itemDiv.innerHTML = `
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input task-checkbox" type="checkbox" value="" id="list${listIndex}-task${i}">
            <a class="task-name" id="list${listIndex}-task${i}-name" href="#">${item.getTitle()}</a>
          </label>
        </div>

        <button type="button" id="list${listIndex}-task${i}-del" class="task-delete-btn hidden">X</button>
      `;
    }

    listContainer.appendChild(itemDiv);
  });
  let taskForm = document.createElement('form');
  taskForm.className = "taskInputForm";
  taskForm.innerHTML = `
    <input class="form-control taskInputText" type="text" placeholder="Add a new task" value="" class="taskInput" id="addTaskInput${listIndex}">
    <button type="button" class="taskInputBtn" id="addTaskBtn${listIndex}">Add</button>
    `;
  listContainer.appendChild(taskForm);
  todoContainer.appendChild(listContainer);
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
