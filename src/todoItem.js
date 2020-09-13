const todoItem = (data) => {
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
}

export {todoItem};
