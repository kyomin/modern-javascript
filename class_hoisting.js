// 자바스크립트 클래스(Class) - 클래스 호이스팅(Hoisting)

// [1]: 함수 레벨 스코프 vs 블록 레벨 스코프
var a = 11; // 전역 변수
console.log(a); // 11

{
	var a = 33; // 전역 변수 --> var 키워드는 중복(선언)이 허용 --> 함수가 아닌 변수 선언은 모두 전역 --> 위의 a를 덮어 쓴다.
}

function myA() {
	var a = 55; // 함수 스코프 내에서는 지역 변수가 된다.
}

console.log(a); // 33

// [2]: 호이스팅이란?
// Hoisting 사전적 의미 --> 끌어 올리기(scope)
// 자바스크립트는 기본적으로 모든 선언문(var, let, const, function, class)을 호이스팅
// 호이스팅 --> 스코프 안의 어디에서든 변수 선언은 최상위에서 선언한 것과 동일
// var 키워드와 let, const 키워드로 선언한 변수는 차이가 있다.
console.log('testA 값은 =', testA); // undefined
var testA;

// console.log('testB 값은 =', testB); // Error!
let testB;

// [3]: 클래스 호이스팅
// console.log(Person);	// Error!
class Person {}
console.log(Person);

// var vs let, const == class 호이스팅 에러 비교
console.log('----------------------------------------');

var str1 = 'Hello World';

const testFunc = function () {
	// 호이스팅에 의해 다음과 같이 동작함
	// var str1;
	console.log(str1); // --> undefined
	var str1 = 'Hello Korea'; // str1 = 'Hello Korea';
};

testFunc(); // 이 함수의 실행 결과는? --> undefined

// 클래스 상속
class Parent {}
class Child extends Parent {} // 이렇게 상속하면 문제 없음

// class Child2 extends Parent2 {} // 에러 발생! --> 초기화 Reference Error(참조 에러) 발생
class Parent2 {}
