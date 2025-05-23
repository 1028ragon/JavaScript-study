// 짐코딩 EP_05, 06 코드 실습

let addBtn = document.getElementById('button');
let inputBox = document.querySelector('input');
let addBeforeBtn = document.getElementById('before');
let removeTargetBtn = document.querySelector('#target-remove');
let removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  // button.setAttribute('class', 'remove-btn');
  button.classList.add('remove-btn');
  button.addEventListener('click', removeParentNode)
  li.appendChild(button);
  ul.appendChild(li);
  inputBox.value = '';
  inputBox.focus();
});

addBeforeBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');
  console.log(targetLi);
  li.textContent = inputBox.value;
  // ul.appendChild(li); => 뒤에 추가
  ul.insertBefore(li, targetLi);
});

removeTargetBtn.addEventListener('click', function () {
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});

removeBtn.addEventListener('click', removeParentNode)

function removeParentNode(event) {
  event.target.parentNode.remove();
  inputBox.focus();
  inputBox.value = '';
};