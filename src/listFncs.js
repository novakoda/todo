import {todoContainer, checkBoxes, deleteButtons, listInputs} from './utils.js';
import {listTasks} from './taskFncs.js';
import {todoLists} from './index.js';
import {todoList} from './todo.js';

function clearList() {
  todoContainer.innerHTML = "";
};

function listLists() {
  clearList();
  todoLists.forEach((list, i) => {
    listTasks(list);
  });
  checkBoxes();
  deleteButtons();
  listInputs();
};


function addList() {
  let title = document.getElementById('addListName').value;
  let description = document.getElementById('addListDescription').value;

  let list = todoList({
    "title": title,
    "tasks": []
  });

  todoLists.push(list);
  listLists();
}

export {clearList, addList, listLists}
