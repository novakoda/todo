import {todoLists} from './index.js';
import {listLists} from './listFncs.js';
import {addTaskFromList} from './taskFncs.js';
import {editTaskForm, editListForm} from './formFncs.js';

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
  priorityColors(checkName);
  let checkDate = document.getElementById(box.id + '-date');
  checkDate.classList.toggle('hidden');
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
    priorityColors(link);
    link.addEventListener('click', function() {
      editTaskForm(link);
    });
  });
};

function listLinks() {
  let links = Array.from(document.getElementsByClassName('list-name'));
  console.log(links);
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      console.log(link);
      editListForm(link);
    });
  });
};

function priorityColors(link) {
  let coords = link.id.replace(/\D/g,'');
  let task =todoLists[coords[0]].tasks[coords[1]];
  let lvl = task.getPriority();
  for (var i = 1; i < 5; i++) {
    if (link.classList.contains("lvl-"+i)) {
      link.classList.remove("lvl-"+i);
    };
  };

  if (!task.isFinished()) {
    switch (lvl) {
      case "1":
        link.classList.toggle("lvl-1");
        break;
      case "2":
        link.classList.toggle("lvl-2");
        break;
      case "3":
        link.classList.toggle("lvl-3");
        break;
      case "4":
        link.classList.toggle("lvl-4");
        break;
    };
  };
};

export {
  todoContainer, checkBoxes, toggleViews, deleteButtons,
  listInputs, taskLinks, listLinks, priorityColors
}
