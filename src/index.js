import _ from 'lodash';
import {todoTask, todoList} from './todo.js';
import {tasksDiv, clearLists} from './utils.js';
import {listLists, addList} from './listFncs.js';
import {listTasks, addTask} from './taskFncs.js';
import {exampleLists} from './example.js';
import {
  clearTaskForm, closeForm, clearListsForm, addListsToForm, showTaskForm,
  showListForm, editTask, editList, formTaskDelete, formListDelete
} from './formFncs.js';
import './index.css';

let todoTasks = [];
let todoLists = [];
let currentList;
let editedTask;
let editedList;

function changeEditedTask(task) {
  editedTask = task;
}

function changeEditedList(list) {
  editedList = list;
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
  clearListsForm();
  showListForm();
});

document.getElementById('formCloseBtn').addEventListener('click', function() {
  closeForm();
});

document.getElementById('addTaskBtn').addEventListener('click', function() {
  addTask();
});

document.getElementById('addListBtn').addEventListener('click', function() {
  addList();
});

document.getElementById('editTaskBtn').addEventListener('click', function() {
  editTask(editedTask);
  closeForm();
});

document.getElementById('delTaskBtn').addEventListener('click', function() {
  formTaskDelete(editedTask);
  closeForm();
});

document.getElementById('editListBtn').addEventListener('click', function() {
  editList(editedList);
  closeForm();
});

document.getElementById('delListBtn').addEventListener('click', function() {
  formListDelete(editedList);
  closeForm();
});

export {todoTasks, currentList, todoLists, editedTask, editedList, changeEditedTask, changeEditedList}
