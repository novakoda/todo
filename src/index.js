import _ from 'lodash';
import {todoItem} from './todoItem.js'

function component() {
  const element = document.createElement('div');
  let item = todoItem({
    "title": "do dis plz",
    "description": "it need to be done asap",
    "priority": "3"
  });

  console.log(item.getTitle());
  console.log(item.getDescription());
  console.log(item.getPriority());

  element.innerHTML = _.join(['Hello', 'Nova'], ' ');

  return element;
}


document.body.appendChild(component());
