import {todoContainer, checkBoxes, deleteButtons, listInputs, taskLinks, listLinks} from './utils.js';
import {listTasks} from './taskFncs.js';
import {todoLists} from './index.js';
import {todoList} from './todo.js';
import {closeForm} from './formFncs.js';

function clearLists() {
  todoContainer.innerHTML = "";
};

function clearList(container) {
  container.innerHTML = "";
};

function listLists() {
  clearLists();
  todoLists.forEach((list, i) => {
    todoContainer.appendChild(fillList(list, i));
  });
  console.log(todoLists);
  checkBoxes();
  deleteButtons();
  listInputs();
  taskLinks();
  listLinks();
};

function fillList(list, i) {
  list.setIndex(i);
  const listContainer = document.createElement('div');
  listContainer.className = "listCont";
  listContainer.id = "listCont-" + i;
  const listTitle = document.createElement('div');
  listTitle.className = "listTitleCont";
  listTitle.innerHTML = `
  <h2><a class="list-name" id="list${i}-name" href="#">${list.getTitle()}</a></h2>
  <p class="list-description" id="list${i}-desc">${list.getDescription()}</p>
  `;

  listContainer.appendChild(listTitle);
  listContainer.appendChild(listTasks(list, i));

  let taskForm = document.createElement('form');
  taskForm.className = "taskInputForm";
  taskForm.innerHTML = `
    <input class="form-control form-control-sm taskInputText" type="text" placeholder="Add a new task" value="" class="taskInput" id="addTaskInput${i}">
    <button type="button" class="taskInputBtn" id="addTaskBtn${i}"><i class="fas fa-arrow-alt-circle-up addTaskIcon"></i></button>
    `;
  listContainer.appendChild(taskForm);

  return listContainer;
};

function addList() {
  let title = document.getElementById('addListName').value;
  let description = document.getElementById('addListDescription').value;
  if (title == undefined || title == "") {
    document.getElementById('error').classList.remove('hidden');
    } else {
    let list = todoList({
      "title": title,
      "description": description,
      "tasks": []
    });

    todoLists.push(list);
    listLists();
    closeForm();
  };
};

export {clearLists, clearList, fillList, addList, listLists}
