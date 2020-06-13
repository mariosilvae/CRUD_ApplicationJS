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