'use strict';

// 1. 숫자
let number1 = 12;        // number type
const number2 = 1.2;     // number type

const infinity = 1 / 0;             // Infinity 값 할당
const negativeInfinity = 1 / 0;     // -Infinity 값 할당
const nAn = 'not a number' / 0;     // NaN 값 할당i

// 2. 문자
const name1 = '홍길동';     // 싱글쿼터 표현
const name2 = "한길동";      // 더블쿼터 표현
const name3 = `김길동`;    // 백틱 표현

const name = '홍길동';
const age = 25;
console.log('내 이름은 ' + name + ' 입니다. 그리고 나이는 ' + age + '살 입니다.');
// 결과 => 내 이름은 홍길동 입니다. 그리고 나이는 25살 입니다.
console.log(`내 이름은 ${name} 입니다. 그리고 나이는 ${age}살 입니다.`);
// 결과 => 내 이름은 홍길동 입니다. 그리고 나이는 25살 입니다.

// 3. 불리언
const isProgramer = true;
const idDesigner = false;

// 4. 심볼
const TOM_JOB = Symbol('My Job is Programer');
const KIM_JOB = Symbol('My Job is Programer');
console.log(TOM_JOB === KIM_JOB); // false: 심볼은 모두 서로 다릅니다.

// 출력시
console.log(KIM_JOB.description)

// 5. null, undefined
// let message = null;  값이 빈 상태를 의도적으로 표현
// let message;  값을 할당하지 않은 상태

// 6. 객체
const person = {
  name: '홍길동',
  age: 25,
  isProgramer: true,
  say() {
    console.log('안녕하세요.')
  }
};