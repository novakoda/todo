import {todoTask, todoList} from './todo.js';
import {todoLists} from './index.js';

function exampleLists() {
  let list1 = todoList({
    "title": "Personal",
    "description": "things I probably should do",
    "tasks": [
      todoTask({
        "title": "Workout",
        "description": "Pushups and cardio",
        "date": "2020-10-02",
        "priority": "2"
      }),
      todoTask({
        "title": "Shopping",
        "description": "Buy t-shirt and jeans",
        "date": "2020-10-01",
        "priority": "4"
      }),
      todoTask({
        "title": "This is something else that I know that I have to do but I forgot what it is",
        "description": "Oh well",
        "finished": "true"
      })
    ]
  });

  let list2 = todoList({
    "title": "Work",
    "tasks": [
      todoTask({
        "title": "Send e-mails to IT companies",
        "description": "make sure to attach resume",
        "date": "2020-09-29",
        "priority": "1"
      }),
      todoTask({
        "title": "learn webpack",
        "priority": "2"
      }),
      todoTask({
        "title": "Finish JS project",
        "description": "todo list app",
        "date": "2020-09-19",
        "priority": "3",
        "finished": "true"
      })
    ]
  });

  let list3 = todoList({
    "title": "Shopping",
    "description": "things to grab from the store",
    "tasks": [
      todoTask({
        "title": "grape juice",
        "description": "welch's",
        "priority": "3"
      }),
      todoTask({
        "title": "water",
        "priority": "1"
      }),
      todoTask({
        "title": "king crabs",
        "description": "2 lbs",
        "priority": "2"
      }),
      todoTask({
        "title": "steak",
        "description": "ribeye",
        "priority": "4"
      }),
      todoTask({
        "title": "ground beef",
        "description": "1 lb",
        "priority": "1"
      }),
      todoTask({
        "title": "oatmeal",
        "description": "cinn & brown sugar",
        "priority": "4"
      }),
      todoTask({
        "title": "bacon",
        "description": "maple smoked",
        "priority": "1",
        "finished": "true"
      }),
      todoTask({
        "title": "toilet paper",
        "description": "charmin ultra soft",
        "finished": "true"
      })
    ]
  });
  todoLists.push(list1,list2,list3);
};

export {exampleLists}
