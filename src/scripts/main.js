'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const treeList = document.createElement('div');

treeList.setAttribute('id', 'tree');
document.body.prepend(treeList);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const key in data) {
    const ul =
      element.tagName === 'UL' ? element : document.createElement('ul');

    if (ul !== element) {
      element.append(ul);
    }

    const li = document.createElement('li');

    li.innerHTML = key;
    ul.append(li);

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
