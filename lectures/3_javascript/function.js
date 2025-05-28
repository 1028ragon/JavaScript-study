// 함수 선언식 : 호이스팅 영향 받음
function sayHello() {
	console.log('이름과 나이를 출력합니다.');
	console.log('name: 홍길동, age: 20세');
}
sayHello();

// 함수 표현식
let sayHello = function() {
	console.log('이름과 나이를 출력합니다.');
	console.log('name: 홍길동, age: 20세');
};
sayHello();

// 반환 값
function sum(number1, number2) {
	return number1 + number2;
}
let result = sum(5, 3);
console.log('result: ', result); // result: 8

function aFunc() {
	let name = '짐코딩';
	let age = 20;
	function bFunc() {
		let job = '개발자';
    console.log('name: ', name);
    console.log('age: ', age);
    console.log('job: ', job)
	}
  bFunc();
  console.log('name: ', name);
  console.log('age: ', age);
  console.log('job: ', job)
}
aFunc();