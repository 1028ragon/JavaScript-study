// 1. while 문
let count = 0;
while (count < 5) {
	console.log(count + '번째 출력');
	count++;
}

// 2. do ... while 문
let count1 = 0;
do {
	console.log(count1 + '번째 출력');
	count1++;
} while (count1 < 5);

// 3. continue
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// 출력: "012456789"

// 4. break
let text1 = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text1 = text1 + i;
}

console.log(text1);
// 출력: "012"