import _ from 'lodash';
import {todoItem} from './todoItem.js'

function component() {
  const element = document.createElement('div');
  let item = todoItem({
    "title": "do dis plz",
    "description": "it need to be done asap",
    "priority": "3"
  });

  element.innerHTML = `
    <h4 class="item-title">${item.getTitle()}</h4>
    <p class="item-priority">${item.getPriority()}</p>
    <p class="item-description">${item.getDescription()}</p>
  `;

  return element;
}




document.body.appendChild(component());
