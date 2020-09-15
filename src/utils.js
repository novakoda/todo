const tasksDiv = document.getElementById('tasks');

function listTasks(taskItems) {
  taskItems.forEach((item, i) => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <h4 class="item-title">${item.getTitle()}</h4>
      <p class="item-priority">${item.getPriority()}</p>
      <p class="item-description">${item.getDescription()}</p>
    `;
    tasksDiv.appendChild(itemDiv);
  });
};

function clearTasks() {
  tasksDiv.innerHTML = "";
};

export {tasksDiv, listTasks, clearTasks}
