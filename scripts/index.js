const form = document.querySelector('form');
const list = document.querySelector('.list-group');
const input = document.querySelector('.mainInput');
const addBtn = document.querySelector('.addBtn');

//"Store" Items like in DB
const randomID = () => Math.floor(Math.random() * 1000);
let items = [
  {
    id: randomID(),
    text: 'Item 1',
  },
];

//Track Form Submission
let formStatus = 'add';

//Item HTML
const generateItem = (item) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center');
  div.id = item.id;
  const span = document.createElement('span');
  span.setAttribute('class', 'text');
  span.innerText = item.text;
  const div2 = document.createElement('div');
  const editButton = document.createElement('button');
  editButton.setAttribute('class', 'btn btn-dark editBtn btn-sm mr-1');
  editButton.innerText = 'Edit';
  const delButton = document.createElement('button');
  delButton.setAttribute('class', 'btn btn-danger delBtn btn-sm');
  delButton.innerText = 'Delete';
  div2.appendChild(editButton);
  div2.appendChild(delButton);
  div.appendChild(span);
  div.appendChild(div2);
  return div;
}

//Read
function showItems() {
  list.innerHTML = '';
  items.forEach(item => {
    list.appendChild(generateItem(item));
  });
}
showItems();