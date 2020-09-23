import {todoLists} from './index.js';

function clearTaskForm() {
  document.getElementById('addTaskName').value = '';
  document.getElementById('addTaskDescription').value = '';
  document.getElementById('addTaskPriority').value = '';
  document.getElementById('addTaskDate').value = '';
  document.getElementById('selectList').innerHTML = "";
  document.getElementById('selectList').value = 'Select a list to add the task to';
};

function clearListForm() {
  document.getElementById('addListName').value = '';
  document.getElementById('addListDescription').value = '';
};

function addListsToForm() {
  let pH = document.createElement('option');
  pH.selected = true;
  pH.innerHTML = 'Select a list to add the task to';
  document.getElementById('selectList').appendChild(pH);

  for (var i = 0; i < todoLists.length; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = todoLists[i].title;
    document.getElementById('selectList').appendChild(option);
  };
}

export {clearTaskForm, clearListForm, addListsToForm}
