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

// 파라미터

function sayHello(name, age) {
	console.log('이름과 나이를 출력합니.');
	console.log(`name: ${name}, age: ${age}세`);
}
sayHello('짐코딩', 20);


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
  console.log('job: ', job);
}
aFunc();

// 즉시실행함수 
(function() {
  console.log('hello')
})()

(function hello() {
  console.log('hello')
})()

// 화살표 표기법
// 1. function 예약어 생략 가능
// 2. 함수에 매개변수가 하나라면 괄호도 셍략 가능
// 3. 함수 바디가 표현식 하나라면 중괄호와 return 문도 생략 가능
const hello = (name) => {
	console.log(`Hello ${name}`);
};
hello('홍갈동')

// const f3 = function() { return "hello"; }
// 또는
const f3 = () => "hello";

// const f4 = function(name) { return `Hello, ${name}`; }
// 또는
const f4 = name => `Hello, ${name}`;

// const f5 = function(a, b) { return a + b; }
// 또는
const f5 = (a, b) => a + b;

const sum = (number1, number2) => number1 + number2;
let result1 = sum(5, 3);
console.log('result: ', result); // result: 8


