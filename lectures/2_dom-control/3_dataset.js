let h2 = document.querySelector('h2');
h2.dataset.test = 'hello, javascript';
console.log('h2.dataset.test : ', h2.dataset.test);

let img = document.querySelector('img');
let liList = document.querySelectorAll('li');
let selectedItem = document.querySelector('.selected-item');

liList[0].addEventListener('click', function(event) {
    // 현재 event.target : 클릭한 element
    selectedItem.textContent = event.target.textContent;
    img.setAttribute('src', event.target.dataset.img);
});

liList[1].addEventListener('click', function() {
    selectedItem.textContent = event.target.textContent;
    img.setAttribute('src', event.target.dataset.img);
});
liList[2].addEventListener('click', selectItem);
    // 함수 사용
function selectItem(event) {
    selectedItem.textContent = event.target.textContent;
    img.setAttribute('src', event.target.dataset.img);
}
