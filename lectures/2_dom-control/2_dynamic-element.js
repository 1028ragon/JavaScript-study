let addBtn = document.getElementById('button');
let inputBox = document.querySelector('input');

addBtn.addEventListener('click', function() {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;
  ul.appendChild(li);
});
