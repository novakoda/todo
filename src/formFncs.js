import {todoLists} from './index.js';

const formsArea = document.getElementById('formsArea');
const newTaskForm = document.getElementById('newTaskForm');
const newListForm = document.getElementById('newListForm');

const addTaskName = document.getElementById('addTaskName');
const addTaskDescription = document.getElementById('addTaskDescription');
const addTaskPriority = document.getElementById('addTaskPriority');
const addTaskDate = document.getElementById('addTaskDate');
const selectList = document.getElementById('selectList');

const addListName = document.getElementById('addListName');
const addListDescription = document.getElementById('addListDescription');

const addTaskBtn = document.getElementById('addTaskBtn');
const editTaskBtn = document.getElementById('editTaskBtn');
const delTaskBtn = document.getElementById('delTaskBtn');

const addListBtn = document.getElementById('addListBtn');
const editListBtn = document.getElementById('editListBtn');
const delListBtn = document.getElementById('delListBtn');

function closeForm() {
  newTaskForm.style.display = "none";
  newListForm.style.display = "none";
  formsArea.style.display = "none";
  addTaskBtn.style.display = "none";
  editTaskBtn.style.display = "none";
  delTaskBtn.style.display = "none";
};

function showTaskForm(edit) {
  newTaskForm.style.display = "block";
  formsArea.style.display = "block";

  if (edit) {
    editTaskBtn.style.display = "inline-block";
    delTaskBtn.style.display = "inline-block";
  } else {
    addTaskBtn.style.display = "inline-block";
  };
};

function showListForm(edit) {
  newListForm.style.display = "block";
  formsArea.style.display = "block";
  addListBtn.innerHTML = btnText;

  if (edit) {
    editTaskBtn.style.display = "inline-block";
    delTaskBtn.style.display = "inline-block";
  } else {
    addTaskBtn.style.display = "inline-block";
  };
}

function clearTaskForm() {
  addTaskName.value = '';
  addTaskDescription.value = '';
  addTaskPriority.value = '';
  addTaskDate.value = '';
  selectList.innerHTML = "";
  selectList.value = 'Select a list to add the task to';
};

function clearListForm() {
  addListName.value = '';
  addListDescription.value = '';
};

function addListsToForm() {
  let pH = document.createElement('option');
  pH.selected = true;
  pH.innerHTML = 'Select a list to add the task to';
  selectList.appendChild(pH);

  for (var i = 0; i < todoLists.length; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = todoLists[i].title;
    selectList.appendChild(option);
  };
};

function editTaskForm(link) {
  let coords = link.id.replace(/\D/g,'');
  let task = todoLists[coords[0]].tasks[coords[1]];

  addTaskName.value = task.getTitle();
  addTaskDescription.value = task.getDescription();
  addTaskPriority.value = task.getPriority();
  addTaskDate.value = task.getDate();
  selectList.innerHTML = "";
  addListsToForm();
  selectList.value = coords[0];
  showTaskForm(true);
}


export {closeForm, clearTaskForm, clearListForm, addListsToForm, editTaskForm, showTaskForm, showListForm}
