const { createElement } = require("react");

let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let list = document.querySelector('#list');

let li = document.createElement('li');
let deleteButton = document.createElement('button')

// Getting the input typed in by the user
li.textContent = input.value

deleteButton.textContent = "❌"

li.append(deleteButton)
list.append(li)