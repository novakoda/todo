import {todoTasks, todoLists, currentList} from './index.js'
import {todoTask, todoList} from './todo.js'

const todoContainer = document.getElementById('todoContainer');

function listTasks(list) {
  const listContainer = document.createElement('div');
  listContainer.className = "listCont";

  const listTitle = document.createElement('h2');
  listTitle.innerHTML = list.title;
  listContainer.appendChild(listTitle);

  let listIndex = todoLists.indexOf(list);

  list.getTasks().forEach((item, i) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = "task-item"
    if (item.isFinished()) {
      itemDiv.innerHTML = `
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input task-checkbox" type="checkbox" value="" id="list${listIndex}-task${i}" checked>
            <a class="task-name done" id="list${listIndex}-task${i}-name" href="#">${item.getTitle()}</a>
          </label>
        </div>

        <button type="button" id="list${listIndex}-task${i}-del" class="task-delete-btn">X</button>
      `;
    } else {
      itemDiv.innerHTML = `
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input task-checkbox" type="checkbox" value="" id="list${listIndex}-task${i}">
            <a class="task-name" id="list${listIndex}-task${i}-name" href="#">${item.getTitle()}</a>
          </label>
        </div>

        <button type="button" id="list${listIndex}-task${i}-del" class="task-delete-btn hidden">X</button>
      `;
    }

    listContainer.appendChild(itemDiv);
  });
  todoContainer.appendChild(listContainer);
};

function clearTasks() {
  todoContainer.innerHTML = "";
};

function listLists() {
  clearTasks();
  todoLists.forEach((list, i) => {
    listTasks(list);
  });
  checkBoxes();
  deleteButtons();
};

function addTask() {
  let title = document.getElementById('addTaskName').value;
  let description = document.getElementById('addTaskDescription').value;
  let priority = document.getElementById('addTaskPriority').value;
  let date = document.getElementById('addTaskDate').value;

  let task = todoTask({
    "title": title,
    "description": description,
    "date": date,
    "priority": priority
  });

  currentList.tasks.push(task);
  listLists();
};

function addList() {
  let title = document.getElementById('addListName').value;
  let description = document.getElementById('addListDescription').value;

  let list = todoList({
    "title": title,
    "tasks": []
  });

  todoLists.push(list);
  listLists();
}

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
  console.log(box.id);
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

export {todoContainer, listTasks, clearTasks, addTask, addList, listLists, deleteButtons}
