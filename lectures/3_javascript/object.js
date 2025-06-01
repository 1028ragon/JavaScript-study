// 객체 리터럴 문법
const person = {
	name: '짐코딩',
	age: 25
};
// name이 키(key)이며, 
// '짐코딩'이 값(value)이다.

// 객체 생성자 문법
const person1 = new Object();
person1.name = '짐코딩';
person1.age = 40;
console.log(person1);

// 객체 프로퍼티 접근
const person5 = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'health'],
  hello: function() {
    alert('Hello!');
  },
  greeting: function() {
    alert('Hi!');
  },
	hobby: {
		name: 'programing',
		alert: function() {
			alert('programing');
		}
	},
};

// 1. 점표기법 - 객체.key
person.name
person.age
person.gender
person.hello()
person.bobby.name
person.bobby.alert()

// 2. 괄호 표기법 - 객체['key']
person['name']
person['age']
person['gender']
person['hello']()
person['hobby']['name']
person['hobby']['alert']()

// 객체 프로퍼티 동적으로 생성, 제거

// 1. 프로퍼티 생성
const person1 = {};
person1.name = '짐코딩';
person1.age = 20;

person1['hobby'] = '프로그래밍';
person1['hello'] = function() {
	alert('Hello!');
}

// 2. 프로퍼티 제거
const person1 = {};
person1.name = '짐코딩';
person1.age = 20;

delete person1.name;

// 함수 파라미터로 객체 전달
function printPerson(person1) {
  console.log(`제 이름은 ${person1.name}이며, 나이는 ${person1.age}살 입니다.그리고 취미는 ${person1.hobby} 입니다.`);
}

const person1 = {
  name: '짐코딩',
  age: 10,
  hobby: '헬스'
};
printPerson(person1);

// 구조 분해 할당 - 객체 속성을 개별 변수에 담을 때
const person1 = {
  name: '짐코딩',
  age: 10,
  hobby: '헬스'
};
const { name, age, hobby } = person1;

// 구조 분해 할당 - 함수에서 객체 개별 속성을 빋을 때
function printPerson({ name, age, hobby }) {
  console.log(`제 이름은 ${name}이며, 나이는 ${age}살 입니다.그리고 취미는 ${hobby} 입니다.`);
}

// 전개 구문
let obj = {
	name: '짐코딩',
	age: 20
};
let person6 = {
	...obj,
	hobby: '헬스'
};
console.log('person6: ', person6);
// [출력]
// person:  {name: '짐코딩', age: 20, hobby: '헬스'}