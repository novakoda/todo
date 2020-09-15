const todoTask = (data) => {
  let title = data.title;
  let description = data.description;
  let priority = data.priority;
  let finished = false;

  const getTitle = () => {return title};
  const getDescription = () => {return description};
  const getPriority = () => {return priority};
  const editTitle = (newTitle) => {title = newTitle};
  const editDescription = (newDescription) => {description = newDescription};
  const editPriority = (newPriority) => {editPriority = newPriority};
  const toggleFinished = () => {finished = !finished};
  const isFinished = () => finished;

  return {
    getTitle, getDescription, getPriority, editTitle, editDescription, editPriority, toggleFinished, isFinished
  }
};

const todoList = (data) => {
  let title = data.title;
  let tasks = data.tasks;

  const getTitle = () => {return title};
  const getTasks = () => {return tasks};
  const editTitle = (newTitle) => {return title};
  const addTask = (task) => {tasks.push(task)};
  const removeTask = (task) => {
    let index = tasks.indexOf(task);
    tasks.splice(index, 1);
  };
  return {
    title, tasks, getTitle, getTasks, editTitle, addTask, removeTask
  }
};

export {todoTask, todoList};
