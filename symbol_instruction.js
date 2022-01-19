// 심볼(Symbol) 사용법

// [1]: 심볼(Symbol) 사용법(생성법)
// 1. 심볼은 new 연산자를 사용하지 않는다. --> Symbol() 함수를 사용하여 생성.
let symbol = Symbol();

// 2. 괄호 안은 비어두고 생성해도 되고, 문자열을 넣어서 생성해도 된다.
// 보통 이때의 문자열(description 인자)은 단순 디버깅 용도이거나 단순 설명일 뿐, 고유한 값을 가지는데 있어서 어떤 영향을 끼치거나 하지는 않는다.
// 따라서, description 인자는 심볼의 고유값을 구분하지 못한다. --> 심볼은 매번 심볼함수 호출 시, 새로운 심볼 값을 생성해내기 때문이다.
let symbol2 = Symbol('personName');
let symbol3 = Symbol('personName');
console.log(symbol2 === symbol3); // false
console.log(symbol2 == symbol3); // false

// [2]: 심볼의 출력 형태
// 이때, 심볼 값은 문자열 형태로 변환할 수 없기 때문에 출력은 console.log로 콘솔에 출력
let symbol4 = Symbol('age');
console.log(symbol4); // Symbol(age) <-- 이와 같은 형태로 출력

// [3]: 심볼형은 for .. in 구문으로 반복 시 출력되지 않는다. --> 은닉성을 보장한다.
// 배열 객체에 속성을 추가하면 --> for .. in 반복문으로 출력 시 해당 속성도 같이 출력이 된다.
let arr = [1, 2, 3, 4, 5];
arr.someProperty = 10;

for (let i in arr) {
	console.log(i); // 0, 1, 2, 3, 4, someProperty
}

console.log('----------------------------------------');

// 심볼형을 사용하면
let arr_ = [1, 2, 3, 4, 5];
let someProperty = Symbol('someProperty');
arr_[someProperty] = 10;

for (let i in arr_) {
	console.log(i); // 0, 1, 2, 3, 4 --> someProperty 속성이 나타나보이지 않고 인덱스만 출력 됨
}
console.log(arr_[someProperty]); // 10

// 정리
// 배열 객체에 어떤 속성을 넣고자 한다면, 그리고 동시에 반복문에서 속성이 나타나지 않게 하고자 한다면 --> 즉, 속성을 은닉화 하고자 한다면
// 심볼을 사용할 수 있다.
