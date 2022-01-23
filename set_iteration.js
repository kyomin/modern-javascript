// ES6 set() 자료구조 - 반복

// [!]
let arr = ['a', 'b', 'c', 'd', 'e'];

// [1]: 전통적인 for 반복문
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
console.log('----------------------------------------');

// [2]: forEach() 메서드를 사용한 반복
arr.forEach((val) => console.log(val));
console.log('----------------------------------------');

// [3]: Set의 다양한 메서드 --> keys(), values() --> 거의 똑같이 동작한다
let testSet = new Set(['tiger', 'lion', 'dog', 'cat']);
testSet.add('hippo');
console.log(testSet); // { 'tiger', 'lion', 'dog', 'cat', 'hippo' }
console.log(testSet[0]); // tiger --> undefined

let testArr = [...testSet];
console.log(testArr[0]); // tiger
console.log(testArr[4]); // hippo
console.log('----------------------------------------keys()');

// keys() 메서드 --> Iterator(반복자) 객체를 반환 --> next() 메서드 사용
const key_iter = testSet.keys();
console.log(key_iter.next().value); // tiger
console.log(key_iter.next().value); // lion
console.log(key_iter.next().value); // dog
console.log(key_iter.next().value); // cat
console.log(key_iter.next().value); // hippo
console.log(key_iter.next().value); // undefined --> 포인터의 마지막 끝
console.log('----------------------------------------values()');

// values() 메서드 --> Iterator(반복자) 객체를 반환 --> next() 메서드
const val_iter = testSet.values();
console.log(val_iter.next().value); // tiger
console.log(val_iter.next().value); // lion
console.log(val_iter.next().value); // dog
console.log(val_iter.next().value); // cat
console.log(val_iter.next().value); // hippo
console.log(val_iter.next().value); // undefined --> 포인터의 마지막 끝
console.log('----------------------------------------');

// [4]: for .. of 반복문으로 출력 --> in이 아니라 of임에 주의!
for (let i of testSet) {
	console.log(i);
}
console.log('----------------------------------------');

// [5]: entries() 메서드
let testSet2 = new Set();

testSet2.add('홍길동');
testSet2.add('이순신');
testSet2.add('강감찬');

const entries = testSet2.entries();
console.log('set entries : ', entries);

// [ '홍길동', '홍길동' ]
// [ '이순신', '이순신' ]
// [ '강감찬', '강감찬' ]
for (let i of entries) {
	console.log(i);
}

// 삽입 순으로 Set 요소 각각에 대해서 [value, value] 배열 형식으로 새로운 객체를 반환
