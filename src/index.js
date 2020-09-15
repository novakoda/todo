import _ from 'lodash';
import {todoTask} from './todoTask.js'
import {tasksDiv, listTasks, clearTasks, addTask} from './utils.js'

let taskItems = [];

let item1 = todoTask({
  "title": "I'm 1st",
  "description": "it need to be done asap",
  "priority": "1"
});

let item2 = todoTask({
  "title": "I'm 2nd",
  "description": "it need to be done soon",
  "priority": "2"
});

let item3 = todoTask({
  "title": "I'm 3rd",
  "description": "it just needs to be done",
  "priority": "3"
});

taskItems.push(item1,item2,item3)


listTasks(taskItems);

document.getElementById('newTaskBtn').addEventListener('click', function() {
    // show new task menu
});





document.getElementById('addTaskBtn').addEventListener('click', function() {
  addTask();
});


export {taskItems}
