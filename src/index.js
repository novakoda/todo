import _ from 'lodash';
import {todoTask, todoList} from './todo.js';
import {tasksDiv, clearList, addList} from './utils.js';
import {listLists} from './listFncs.js';
import {listTasks, addTask} from './taskFncs.js';
import {exampleLists} from './example.js';
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

document.getElementById('newTaskBtn').addEventListener('click', function() {
  newTaskForm.style.display = "block";
  formsArea.style.display = "block";
});

document.getElementById('newListBtn').addEventListener('click', function() {
  newListForm.style.display = "block";
  formsArea.style.display = "block";
});

document.getElementById('formCloseBtn').addEventListener('click', function() {
  newTaskForm.style.display = "none";
  newListForm.style.display = "none";
  formsArea.style.display = "none";
});


document.getElementById('addTaskBtn').addEventListener('click', function() {
  addTask();
  newTaskForm.style.display = "none";
  formsArea.style.display = "none";
});

document.getElementById('addListBtn').addEventListener('click', function() {
  addList();
  newListForm.style.display = "none";
  formsArea.style.display = "none";
});


export {todoTasks, currentList, todoLists}
