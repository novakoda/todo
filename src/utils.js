import {todoLists} from './index.js';
import {listLists, clearList, fillList} from './listFncs.js';
import {addTaskFromList} from './taskFncs.js';
import {editTaskForm, editListForm} from './formFncs.js';
import {listTasks} from './taskFncs.js';

const todoContainer = document.getElementById('todoContainer');

function checkBoxes() {
  let boxes = Array.from(document.getElementsByClassName('task-checkbox'));
  boxes.forEach(function(box) {
    box.addEventListener('click', function() {
      let coords = box.id.replace(/\D/g,'');
      let daList = todoLists[coords[0]];
      let checkTask = daList.tasks[coords[1]];
      checkTask.toggleFinished();
      if (checkTask.isFinished()) {
        checkTask.finished = true;
        daList.tasks.push(daList.tasks.splice(coords[1], 1)[0]);
      } else {
        checkTask.finished = false;
        daList.addTask(daList.tasks.splice(coords[1], 1)[0]);
      };
      toggleViews(box);
      window.localStorage.setItem('lists', JSON.stringify(todoLists));
      let listCont = document.getElementById('listCont-' + coords[0]);
      clearList(listCont);
      let tasksContainer = fillList(daList, coords[0]);
      listCont.innerHTML = tasksContainer.innerHTML;
      listLists();
    });
  });
};

function toggleViews(box) {
  let checkName = document.getElementById(box.id + '-name');
  checkName.classList.toggle('done');
  priorityColors(box);
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
  links.forEach(function(link) {
    priorityColors(link);
    link.addEventListener('click', function() {
      editTaskForm(link);
    });
  });
};

function listLinks() {
  let links = Array.from(document.getElementsByClassName('list-name'));
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      editListForm(link);
    });
  });
};

function priorityColors(link) {
  let cont = document.getElementById(link.id.replace("name","cont"));

  let coords = link.id.replace(/\D/g,'');
  let task =todoLists[coords[0]].tasks[coords[1]];
  let lvl = task.getPriority();
  for (var i = 1; i < 5; i++) {
    if (link.classList.contains("lvl-"+i)) {
      link.classList.remove("lvl-"+i);
      cont.classList.remove("cont-lvl-"+i);
    };
  };

  if (!task.isFinished()) {
    switch (lvl) {
      case "1":
        link.classList.toggle("lvl-1");
        cont.classList.toggle("cont-lvl-1");
        break;
      case "2":
        link.classList.toggle("lvl-2");
        cont.classList.toggle("cont-lvl-2");
        break;
      case "3":
        link.classList.toggle("lvl-3");
        cont.classList.toggle("cont-lvl-3");
        break;
      case "4":
        link.classList.toggle("lvl-4");
        cont.classList.toggle("cont-lvl-4");
        break;
      default:
        break;
    };
  };
};

export {
  todoContainer, checkBoxes, toggleViews, deleteButtons,
  listInputs, taskLinks, listLinks, priorityColors
}
