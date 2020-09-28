import {listLists} from './listFncs.js';
import {todoLists, editedTask, editedList, changeEditedTask, changeEditedList} from './index.js';

const formsArea = document.getElementById('formsArea');
const newTaskForm = document.getElementById('newTaskForm');
const newListForm = document.getElementById('newListForm');

const errorMsg = document.getElementById('error');

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
  addListBtn.style.display = "none";
  editListBtn.style.display = "none";
  delListBtn.style.display = "none";
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

  if (edit) {
    editListBtn.style.display = "inline-block";
    delListBtn.style.display = "inline-block";
  } else {
    addListBtn.style.display = "inline-block";
  };
}

function clearTaskForm() {
  errorMsg.classList.add('hidden');
  addTaskName.value = '';
  addTaskDescription.value = '';
  addTaskPriority.value = '';
  addTaskDate.value = '';
  selectList.innerHTML = "";
  selectList.value = 'Select a list to add the task to';
};

function clearListsForm() {
  errorMsg.classList.add('hidden');
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
  changeEditedTask(todoLists[coords[0]].tasks[coords[1]]);
  errorMsg.classList.add('hidden');

  addTaskName.value = editedTask.getTitle();
  addTaskDescription.value = editedTask.getDescription();
  addTaskPriority.value = editedTask.getPriority();
  addTaskDate.value = editedTask.getDate();
  selectList.innerHTML = "";
  addListsToForm();
  selectList.value = coords[0];
  showTaskForm(true);
};

function editListForm(link) {
  let index = link.id.replace(/\D/g,'');
  changeEditedList(todoLists[index]);
  errorMsg.classList.add('hidden');

  addListName.value = editedList.getTitle();
  addListDescription.value = editedList.getDescription();
  showListForm(true);
};

function editTask(task) {
  let selectedList = todoLists[selectList.value];
  let coords = task.getCoords();

  if (addTaskName.value == undefined || addTaskName.value == "") {
    errorMsg.classList.remove('hidden');
  } else {
    task.editTitle(addTaskName.value);
    task.editDescription(addTaskDescription.value);
    task.editPriority(addTaskPriority.value);
    task.editDate(addTaskDate.value);

    if (selectedList !== todoLists[coords[0]]) {
      todoLists[coords[0]].removeTask(task);
      selectedList.addTask(task);
    };
    listLists();
    closeForm();
  };
};

function editList(list) {
  if (addListName.value == undefined || addListName.value == "") {
    errorMsg.classList.remove('hidden');
  } else {
    list.editTitle(addListName.value);
    list.editDescription(addListDescription.value);
    listLists();
    closeForm();
  };
};

function formTaskDelete(task) {
  let coords = task.getCoords();
  todoLists[coords[0]].tasks.splice(coords[1], 1);
  listLists();
}

function formListDelete(list) {
  let index = list.getIndex();
  todoLists.splice(index, 1);
  listLists();
}

export {
  editTask, editList, closeForm, clearTaskForm, clearListsForm,
  addListsToForm, editTaskForm, editListForm, showTaskForm,
  showListForm, formTaskDelete, formListDelete
}
