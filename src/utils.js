import {todoLists} from './index.js';
import {listLists} from './listFncs.js';
import {addTaskFromList} from './taskFncs.js';
import {editTaskForm} from './formFncs.js';

const todoContainer = document.getElementById('todoContainer');

function checkBoxes() {
  let boxes = Array.from(document.getElementsByClassName('task-checkbox'));
  boxes.forEach(function(box) {
    box.addEventListener('click', function() {
      let coords = box.id.replace(/\D/g,'');
      let checkTask = todoLists[coords[0]].tasks[coords[1]];
      checkTask.toggleFinished();
      toggleViews(box);
    });
  });
};

function toggleViews(box) {
  let checkName = document.getElementById(box.id + '-name');
  checkName.classList.toggle('done');
  let checkDel = document.getElementById(box.id + '-del');
  checkDel.classList.toggle('hidden');
};

function deleteButtons() {
  let deleteBtns = Array.from(document.getElementsByClassName('task-delete-btn'));
  deleteBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      let coords = btn.id.replace(/\D/g,'');
      todoLists[coords[0]].tasks.splice(coords[1], 1);
      listLists();
    });
  });
};

function listInputs() {
    let addTaskBtns = Array.from(document.getElementsByClassName('taskInputBtn'));

    addTaskBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        addTaskFromList(btn);
      });
    });
};

function taskLinks() {
  let links = Array.from(document.getElementsByClassName('task-name'));
  console.log(links);
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      console.log(link);
      editTaskForm(link);
    });
  });
};

export {todoContainer, checkBoxes, toggleViews, deleteButtons, listInputs, taskLinks}
