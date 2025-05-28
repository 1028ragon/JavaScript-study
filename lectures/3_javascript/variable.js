// let teacher = "짐코딩";
// teacher = "홍길동";

// const username = "유소영";
// 상수는 한 번 선언한 값 변경불가

// {
//   let a = '변수1';
//   console.log('a : ', a);
//   {
//     let c = 'c 변수';
//     let a = '변수2'
//     console.log('c : ', c)
//     console.log('c블록 안의 a : ', a)
//   }
//   // console.log('a : ', a) <- 에러
// }
// console.log('a : ', a) <- 에러

// function sum(a, b) {
//   let result = a + b;
//   return result;
// }

console.log(sum(1, 2));
// 함수 호이스팅

function sum(num1, num2) {
  return num1 + num2;
}

'use strict'; // 최상단에 쓰고 시작
number = 2;
console.log(number);
