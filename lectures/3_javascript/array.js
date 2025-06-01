'use strict';

// 1. 배열 리터럴 표기법
const fruits = ['사과', '바나나', '딸기'];

// 2. 배열 생성자 표기법
// const fruits = new Array('사과', '바나나', '딸기');

console.log(fruits[0]);  // "사과"
console.log(fruits[1]);  // "바나나"
fruit[2] = '포도';
console.log(fruits[2]);  // "포도"

// 3. 자주 사용하는 배열 메서드
// length : 배열의 길이
console.log('fruits.length: ', fruits.length); // 3
console.log('last item: ', fruits[fruits.length - 1]); // last item:  딸기

// push() : 배열 끝에 항목 추가
fruits.push('포도');
fruits.push('오렌지');
console.log('fruits: ', fruits);

// foreach() : 배열의 항목을 순환하며 처리하기
fruits.forEach(function (item, index) {
  console.log(item, index)
})
// 사과 0
// 바나나 1
// 딸기 2

// pop() : 배열 끝에 항목 제거하기
// fruits.pop();
// console.log('fruits: ', fruits);   // ['사과', '바나나']

// shift() : 배열 앞에 항목 제거하기
// const fruits = ['사과', '바나나', '딸기'];
// fruits.shift();
// console.log('fruits: ', fruits);   // ['바나나', '딸기']

// unshift() : 배열 앞에 항목 추가하기
// const fruits = ['사과', '바나나', '딸기'];
// fruits.unshift('포도');
// fruits.unshift('오렌지');
// console.log('fruits: ', fruits); // ['오렌지', '포도', '사과', '바나나', '딸기']

// indexOf : 배열 안 항목의 인덱스 찾기
// const fruits = ['오렌지', '포도', '사과', '바나나', '딸기'];
// const index = fruits.indexOf('사과');
// const apple = fruits[index];
// console.log('index: ', index);  // index:  2
// console.log('apple: ', apple);  // apple:  사과

// splice() : 인덱스 위치에 있는 항목 제거하기
// const fruits = ['오렌지', '포도', '사과', '바나나', '딸기'];
// const removeIndex = fruits.indexOf('사과');
// fruits.splice(removeIndex, 1);
// console.log('fruits: ', fruits);  // ['오렌지', '포도', '바나나', '딸기']

// 4. 구조 분해 할당
// 일반 : 배열 항목을 개별 변수에 담을 때때
// const fruits = ['사과', '바나나', '딸기'];
// const apple = fruits[0];
// const banana = fruits[1];
// const strawberry = fruits[2];

// 구조 분해 할당 : 배열 항목을 개별 변수에 담을 때
// const fruits = ['사과', '바나나', '딸기'];
// const [apple, banana, strawberry]  = fruits;
// console.log(apple, banana, strawberry); // 사과 바나나 딸기

// const fruits = ['사과', '바나나', '딸기', '수박'];
// const [apple, ...others]  = fruits;
// console.log(apple);  // 사과
// console.log(others); // ['바나나', '딸기', '수박']

// 5. 전개 구문 ( Spread syntax )
let arr = [1, 'two', 3, 'four'];
let numberArr = [...arr, 5, 'six'];
console.log('numberArr: ', numberArr); // numberArr: [1, 'two', 3, 'four', 5, 'six']

// 6. 배열 복사
// 6-1. 전개 구문
// const fruits = ['오렌지', '포도', '사과', '바나나', '딸기'];
// const copy = [...fruits];
copy.pop();                        // 끝에 항목 제거
console.log('fruits: ', fruits);   // ['오렌지', '포도', '사과', '바나나', '딸기']
console.log('copyFruits: ', copy); // ['오렌지', '포도', '사과', '바나나']

// 6-2. Array.from
// const fruits = ['오렌지', '포도', '사과', '바나나', '딸기'];
// const copy = Array.from(fruits);
copy.pop();                        // 끝에 항목 제거
console.log('fruits: ', fruits);   // ['오렌지', '포도', '사과', '바나나', '딸기']
console.log('copyFruits: ', copy); // ['오렌지', '포도', '사과', '바나나']

// 6-3. slice
// const arr = [1, 2, 3, 4, 5];
const result = arr.slice(1, 4);
console.log(result); // [2, 3, 4]
