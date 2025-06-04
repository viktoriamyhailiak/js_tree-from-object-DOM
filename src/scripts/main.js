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

const treeContainer = document.createElement('div');

treeContainer.setAttribute('id', 'tree');
document.body.prepend(treeContainer);

const rootUl = document.createElement('ul');

treeContainer.append(rootUl);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    element.append(li);

    if (Object.keys(data[key]).length > 0) {
      const nestedUl = document.createElement('ul');

      li.append(nestedUl);
      createTree(nestedUl, data[key]);
    }
  }
}

createTree(tree, food);
