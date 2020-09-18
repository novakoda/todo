import {todoTasks, todoLists, currentList} from './index.js'
import {todoTask} from './todo.js'

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
    itemDiv.innerHTML = `
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input task-checkbox" type="checkbox" value="" id="list${listIndex}-task${i}">
          <a class="task-name" id="list${listIndex}-task${i}-name" href="#">${item.getTitle()}</a>
        </label>
      </div>

      <button type="button" id="list${listIndex}-task${i}-del" class="task-delete-btn hidden">X</button>
    `;
    listContainer.appendChild(itemDiv);
  });
  todoContainer.appendChild(listContainer);
  checkBoxes();
  deleteButtons();
};

function clearTasks() {
  todoContainer.innerHTML = "";
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
  clearTasks();
  listTasks(currentList);
};

function checkBoxes() {
  let boxes = Array.from(document.getElementsByClassName('task-checkbox'));

  boxes.forEach(function(box) {
    let coords = box.id.replace(/\D/g,'');
    box.addEventListener('click', function() {
      let checkList = todoLists[coords[0]];
      let checkTask = checkList.tasks[coords[1]];
      checkTask.toggleFinished();
      let checkName = document.getElementById(box.id + '-name');
      checkName.classList.toggle('done');
      let checkDel = document.getElementById(box.id + '-del');
      checkDel.classList.toggle('hidden');
    });
  });
};

function deleteButtons() {
  let deleteBtns = document.getElementsByClassName('task-delete-btn');

  for (var i = 0; i < deleteBtns.length; i++) {
    let j = i;
    deleteBtns[i].addEventListener('click', function() {
      currentList.tasks.splice(j, 1);
      clearTasks();
      listTasks(currentList);
    });
  };
};

export {todoContainer, listTasks, clearTasks, addTask, deleteButtons}
