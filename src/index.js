import _ from 'lodash';
import {todoTask, todoList} from './todo.js';
import {tasksDiv, clearList} from './utils.js';
import {listLists, addList} from './listFncs.js';
import {listTasks, addTask} from './taskFncs.js';
import {exampleLists} from './example.js';
import {clearTaskForm, clearListForm} from './formFncs.js';
import './index.css';

let todoTasks = [];
let todoLists = [];
let currentList;

exampleLists();
listLists();

//listTasks(currentList);
const formsArea = document.getElementById('formsArea');
const newTaskForm = document.getElementById('newTaskForm');
const newListForm = document.getElementById('newListForm');

function closeForm() {
  newTaskForm.style.display = "none";
  newListForm.style.display = "none";
  formsArea.style.display = "none";
}

document.getElementById('newTaskBtn').addEventListener('click', function() {
  clearTaskForm();
  newTaskForm.style.display = "block";
  formsArea.style.display = "block";
});

document.getElementById('newListBtn').addEventListener('click', function() {
  clearListForm();
  newListForm.style.display = "block";
  formsArea.style.display = "block";
});

document.getElementById('formCloseBtn').addEventListener('click', function() {
  closeForm();
});


document.getElementById('addTaskBtn').addEventListener('click', function() {
  addTask();
  closeForm();
});

document.getElementById('addListBtn').addEventListener('click', function() {
  addList();
  closeForm();
});

for (var i = 0; i < todoLists.length; i++) {
  let option = document.createElement('option');
  option.value = i;
  option.innerHTML = todoLists[i].title;
  document.getElementById('selectList').appendChild(option);
};


export {todoTasks, currentList, todoLists}
