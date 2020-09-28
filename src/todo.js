const todoTask = (data) => {
  let title = data.title;
  let description = data.description;
  let date = data.date;
  let priority = data.priority;
  let finished = data.finished !== null ? data.finished : false;
  let coords = [];

  const getTitle = () => {return title};
  const getDescription = () => {
    if (description != undefined && description != "") {
      return description
    } else {return ""};
  };
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
    title, description, date, priority, finished, coords,
    getTitle, getDescription, getPriority, getDate, getCoords,
    editTitle, editDescription, editPriority, editDate, editCoords,
    toggleFinished, isFinished
  }
};

const todoList = (data) => {
  let title = data.title;
  let description = data.description;
  let tasks = data.tasks;
  let index;

  const getTitle = () => {return title};
  const getDescription = () => {
    if (description != undefined && description != "") {
      return description
    } else {return ""};
  };
  const getTasks = () => {return tasks};
  const getIndex = () => {return index};
  const setIndex = (newIndex) => {index = newIndex};
  const editTitle = (newTitle) => {title = newTitle};
  const editDescription = (newDescription) => {description = newDescription};
  const addTask = (task) => {tasks.unshift(task)};
  const removeTask = (task) => {
    let index = tasks.indexOf(task);
    tasks.splice(index, 1);
  };
  return {
    title, description, tasks, getTitle, getTasks, getDescription, getIndex, setIndex, editTitle, editDescription, addTask, removeTask
  }
};

export {todoTask, todoList};
