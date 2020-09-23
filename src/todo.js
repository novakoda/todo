const todoTask = (data) => {
  let title = data.title;
  let description = data.description;
  let date = data.date;
  let priority = data.priority;
  let finished = data.finished !== null ? data.finished : false;
  let coords = [];

  const getTitle = () => {return title};
  const getDescription = () => {return description};
  const getPriority = () => {return priority};
  const getDate = () => {return date};
  const getCoords = () => {return coords};
  const editTitle = (newTitle) => {title = newTitle};
  const editDescription = (newDescription) => {description = newDescription};
  const editPriority = (newPriority) => {priority = newPriority};
  const editDate = (newDate) => {date = newDate};
  const editCoords = (newCoords) => {coords = newCoords};
  const toggleFinished = () => {finished = !finished};
  const isFinished = () => finished;

  return {
    getTitle, getDescription, getPriority, getDate, getCoords,
    editTitle, editDescription, editPriority, editDate, editCoords,
    toggleFinished, isFinished
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