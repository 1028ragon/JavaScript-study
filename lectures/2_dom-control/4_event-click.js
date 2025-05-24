let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn1.onclick = function () {
  alert('프로퍼티 리스너!');
};

btn2.addEventListener('click', helloEvent1);
function helloEvent1() {
  alert('addEventListner 1!');
}

btn2.addEventListener('click', function() {
  alert('addeventListner 2!');
});

btn2.removeEventListener('click', helloEvent1) // 제거하고 싶은 건 함수로 되어 있어야 함


