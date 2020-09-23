function clearTaskForm() {
  document.getElementById('addTaskName').value = '';
  document.getElementById('addTaskDescription').value = '';
  document.getElementById('addTaskPriority').value = '';
  document.getElementById('addTaskDate').value = '';
  document.getElementById('selectList').value = 'Select a list to add the task to';
};

function clearListForm() {
  document.getElementById('addListName').value = '';
  document.getElementById('addListDescription').value = '';
};

export {clearTaskForm, clearListForm}
