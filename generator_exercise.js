// 제너레이터(Generator) 함수 바깥의 외부에서 데이터 받아보기

// [1]: 이게 가능한 이유?
// next() 메서드와 yield가 중간에서 번갈아가며 데이터를 주고 받기 때문
// next() 메서드 호출 --> yield 키워드까지 실행하고(stop) --> 제어권을 함수 외부로 양도(yield) --> 이때, yield 뒤의 값이 반환

function* testGen() {
	const a = yield 1;
	const b = yield a * 1;
	const c = yield b + 2;

	return a * b * c;
}

const iter = testGen();
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next(100)); // a = 100 --> { value: 100, done: false }
console.log(iter.next(48)); // b = 48 --> { value: 50, done: false }
console.log(iter.next(2)); // c = 2 --> { value: 9600, done: true }

// 정리
// 위 코드에서 알 수 있듯이, 제너레이터 함수와 이터레이터 객체의 next() 메서드는 서로 데이터를 주고 받을 수 있다.
