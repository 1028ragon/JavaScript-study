// 1. for 문
for (let i = 0; i < 5; i++) {
	console.log(i);
}
// [출력]
// 0
// 1 
// 2 
// 3 
// 4 

// 2. for ... in
const person = {
	name: '홍길동',
	age: 20,
	job: '개발자'
};
for (let key in person) {
	console.log(`key: ${key}, value: ${person[key]}`);
}
// [출력]
// key: name, value: 홍길동
// key: age, value: 20
// key: job, value: 개발자

// 3. for ... of
const array = ['a', 'b', 'c', 'd', 'e'];
for (let value of array) {
	console.log('value: ', value);
}
// [출력]
// value:  a
// value:  b
// value:  c
// value:  d
// value:  e
