import _ from 'lodash';
import {todoItem} from './todoItem.js'

function list() {
  let item1 = todoItem({
    "title": "I'm 1st",
    "description": "it need to be done asap",
    "priority": "1"
  });

  let item2 = todoItem({
    "title": "I'm 2nd",
    "description": "it need to be done soon",
    "priority": "2"
  });

  let item3 = todoItem({
    "title": "I'm 3rd",
    "description": "it just needs to be done",
    "priority": "3"
  });

  let items = [item1, item2, item3];

  items.forEach((item, i) => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <h4 class="item-title">${item.getTitle()}</h4>
      <p class="item-priority">${item.getPriority()}</p>
      <p class="item-description">${item.getDescription()}</p>
    `;
    document.body.appendChild(itemDiv);
  });
};

list();
