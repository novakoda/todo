import _ from 'lodash';
import {todoTask, todoList} from './todo.js';
import {tasksDiv, listTasks, clearTasks, listLists, addTask, addList} from './utils.js';
import './index.css';

let todoTasks = [];
let todoLists = [];
let currentList;

let item1 = todoTask({
  "title": "I'm 1st",
  "description": "it need to be done asap",
  "date": "2020-09-22",
  "priority": "1",
  "finished": "true"
});

let item2 = todoTask({
  "title": "I'm 2nd",
  "description": "it need to be done soon",
  "date": "2020-09-17",
  "priority": "2"
});

let item3 = todoTask({
  "title": "I'm 3rd",
  "description": "it just needs to be done",
  "date": "2020-09-29",
  "priority": "3"
});

todoTasks.push(item1,item2,item3);
console.log(todoTasks.indexOf(item2));

let list1 = todoList({
  "title": "my list",
  "tasks": todoTasks
});

let list2 = todoList({
  "title": "yo list",
  "tasks": [
    todoTask({
      "title": "do dis 4 me",
      "description": "or else",
      "date": "2020-09-19",
      "priority": "1"
    }),
    todoTask({
      "title": "do dis 2",
      "description": "ILY FAM",
      "date": "2020-09-19",
      "priority": "2",
      "finished": "true"
    }),
    todoTask({
      "title": "make 3 wishes",
      "description": "you really get 33 but dont tell nobody",
      "date": "2020-09-19",
      "priority": "3"
    })
  ]
});

let list3 = todoList({
  "title": "da list",
  "tasks": [
    todoTask({
      "title": "aaaaa",
      "description": "fsdsdfsgf",
      "date": "2020-09-19",
      "priority": "1"
    }),
    todoTask({
      "title": "dsfdgsdfg2",
      "description": "ILsdfgsdfgdfM",
      "date": "2020-09-19",
      "priority": "2",
      "finished": "true"
    }),
    todoTask({
      "title": "masdfgsdfggdes",
      "description": "yosdgdfsgsdfggsfgfsgdfgdsgdfgsdfy",
      "date": "2020-09-19",
      "priority": "3"
    })
  ]
});

todoLists.push(list1,list2,list3);

console.log(list1.tasks);
currentList = list1;

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
