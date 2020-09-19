import _ from 'lodash';
import {todoTask, todoList} from './todo.js';
import {tasksDiv, listTasks, clearTasks, addTask} from './utils.js';
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

todoLists.push(list1);

console.log(list1.tasks);
currentList = list1;

listTasks(currentList);

document.getElementById('newTaskBtn').addEventListener('click', function() {
  document.getElementById('newTaskForm').style.display = "block";
});

document.getElementById('formCloseBtn').addEventListener('click', function() {
  document.getElementById('newTaskForm').style.display = "none";
});


document.getElementById('addTaskBtn').addEventListener('click', function() {
  addTask();
});


export {todoTasks, currentList, todoLists}
