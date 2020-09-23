import _ from 'lodash';
import {todoTask, todoList} from './todo.js';
import {tasksDiv, clearList} from './utils.js';
import {listLists, addList} from './listFncs.js';
import {listTasks, addTask} from './taskFncs.js';
import {exampleLists} from './example.js';
import {clearTaskForm, closeForm, clearListForm, addListsToForm, showTaskForm, showListForm, editTask} from './formFncs.js';
import './index.css';

let todoTasks = [];
let todoLists = [];
let currentList;
let editedTask;

function changeEditedTask(task) {
  editedTask = task;
}

exampleLists();
listLists();

//listTasks(currentList);


document.getElementById('newTaskBtn').addEventListener('click', function() {
  clearTaskForm();
  addListsToForm();
  showTaskForm();
});

document.getElementById('newListBtn').addEventListener('click', function() {
  clearListForm();
  showListForm();
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

document.getElementById('editTaskBtn').addEventListener('click', function() {
  editTask(editedTask);
  closeForm();
});


export {todoTasks, currentList, todoLists, editedTask, changeEditedTask}
