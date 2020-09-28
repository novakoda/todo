import {todoTask, todoList} from './todo.js';
import {todoLists} from './index.js';

function exampleLists() {
  let list1 = todoList({
    "title": "my list",
    "description": "things to do around the house",
    "tasks": [
      todoTask({
        "title": "Send e-mails to IT companies",
        "description": "sadgfdsgfe",
        "date": "2020-09-19",
        "priority": "1"
      }),
      todoTask({
        "title": "This is something else that I know that I have to do but I forgot what it is",
        "description": "IvsfM",
        "date": "2020-08-19",
        "priority": "2"
      }),
      todoTask({
        "title": "im 3rd",
        "description": "xcbsdsdody",
        "date": "2020-09-19",
        "priority": "3",
        "finished": "true"
      })
    ]
  });

  let list2 = todoList({
    "title": "yo list",
    "description": "things to at your house",
    "tasks": [
      todoTask({
        "title": "do dis 4 me",
        "description": "or else",
        "date": "2020-10-19",
        "priority": "1"
      }),
      todoTask({
        "title": "do dis 2",
        "description": "ILY FAM",
        "date": "2020-09-29",
        "priority": "2",
        "finished": "true"
      }),
      todoTask({
        "title": "make 3 wishes",
        "description": "you really get 33 but dont tell nobody",
        "date": "2020-09-19",
        "priority": "3",
        "finished": "true"
      })
    ]
  });

  let list3 = todoList({
    "title": "da list",
    "description": "things to do at yo mama house",
    "tasks": [
      todoTask({
        "title": "aaaaa",
        "description": "fsdsdfsgf",
        "date": "2020-09-19",
        "priority": "1"
      }),
      todoTask({
        "title": "dsfdgsdfg2",
        "description": "ILsdfgsdfgdfM",
        "date": "2020-09-19",
        "priority": "2"
      }),
      todoTask({
        "title": "masdfgsdfggdes",
        "description": "yosdgdfsgsdfggsfgfsgdfgdsgdfgsdfy",
        "date": "2020-09-19",
        "priority": "3",
        "finished": "true"
      })
    ]
  });
  todoLists.push(list1,list2,list3);
};

export {exampleLists}
