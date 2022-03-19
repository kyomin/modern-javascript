// 제너레이터(Generator)

// [1]: 제너레이터란 무엇인가?
// 1. 함수다.
// 2. 조금은 이상하게(?) 동작하는 함수이다.
// ㄴ 보통 함수라 하면 값을 한 개(또는 없거나)를 반환하는데 --> 얘는 여러 개의 값을 반환한다.
// ㄴ 그것도 함수(제너레이터) 외부에서 함수가 실행되는 중간에 특정 부분에서 멈추고 값을 외부에서 받아 하나씩 반환
// 3. 외적인 특징 --> *를 함수에 붙이면 제너레이터 함수 --> function*
// 4. 함수의 실행 --> 특정 키워드(yield)에서 멈추었다가 필요한 시점에서 다시 재개 --> 왜 yield라는 단어를 썼을까?
// ㄴ 즉, 함수 중간에서 실행을 멈춘다 --> 이때, 제어권은 호출자에게 양도(yield)하게 되고 --> 호출자에 의해 다시 재개

function* testGen() {
	yield 1;
	yield 2;
	yield 3;

	return 4;
}

// 위 함수가 제너레이터 함수 얘는 호출하면 --> 바로 코드가 실행되는 것은 아니다. --> 호출하면 '이터레이터(iterator) 객체'를 반환
// iterator 반복자 객체를 반환 --> 보통 it 또는 iter라는 이름으로 받는다.
// 객체니까 내부적으로 메서드를 가지게 된다. --> next() 메서드(제너레이터의 주요 메서드)

// iterator 객체를 반환 --> 이 객체에는 next() 메서드가 존재 --> next()가 실행될 때마다
// 처음 나오는 yield 부분까지 실행하고 멈춘다(또는 제어권을 호출자에게 양도한다).
// yield에서 멈췄을 때 --> yield 뒤의 '값(value)'을 반환
// 만약, yield 키워드 뒤에 아무런 '값'이 없다면 --> undefined 반환
// 결론 --> next() 메서드 --> 항상 value, done 2개의 속성을 가진 '객체'를 반환
// 어떻게? --> { value: 1, done: false }
// value는 yield 뒤의 값, done은 함수 코드 실행이 끝났으면 true, 아니면 false를 반환
const iter = testGen();

console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 4, done: true }

// 동작
// next() --> yield --> next() --> yield 이러한 식의 순환으로 동작이 진행
// 이러한 흐름대로 해당 함수가 종료될 때까지 진행이 됨. 보통 return을 만나면서 종료
