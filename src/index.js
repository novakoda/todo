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

let todoLists = [];
let currentList;
let editedTask;
let editedList;

function changeLists(newLists) {
  todoLists = newLists;
};

function changeEditedTask(task) {
  editedTask = task;
};

function changeEditedList(list) {
  editedList = list;
};


if (window.localStorage.getItem('lists') != null && window.localStorage.getItem('lists') != undefined && window.localStorage.getItem('lists') != "") {
  let storedLists = JSON.parse(window.localStorage.getItem('lists'));
  storedLists.forEach(list => {
    let tasks = [];
    list.tasks.forEach(task => {
      tasks.push(todoTask({
        'title': task.title,
        'description': task.description,
        'priority': task.priority,
        'date': task.date,
        'finished': task.finished
      }));
    });

    todoLists.push(todoList({
      'title': list.title,
      'description': list.description,
      'tasks': tasks
    }));
  });

  console.log(todoLists);
};


if (todoLists == null || todoLists == undefined || todoLists == "") {
  exampleLists();
}

console.log(JSON.parse(window.localStorage.getItem('lists')));


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
});

document.getElementById('delTaskBtn').addEventListener('click', function() {
  formTaskDelete(editedTask);
  closeForm();
});

document.getElementById('editListBtn').addEventListener('click', function() {
  editList(editedList);
});

document.getElementById('delListBtn').addEventListener('click', function() {
  formListDelete(editedList);
  closeForm();
});

export {currentList, todoLists, editedTask, editedList, changeLists, changeEditedTask, changeEditedList}
