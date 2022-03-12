// new 연산자의 내부 동작

// [1]: 내부적으로는 '빈 객체를 생성한 후'에 --> 같은 이름의 '프로토타입 객체'를 새로운 객체들의 원형(프로토타입)으로 설정
function Add(a, b) {
	this.a = a;
	this.b = b;
}

Add.prototype.plus = function () {
	return this.a + this.b;
};

// [2]: 새로운 객체 생성
const add = new Add(1, 2);
console.log(add.plus());
console.log('----------------------------------------');

// [3]: 위의 new를 이용한 새로운 객체 생성의 내부 동작
const newObj = {};
newObj.__proto__ = Add.prototype;

// Add
// +prototype --> Add 프로토타입 객체 참조

// 따라서 newObj의 __proto__에 Add.prototype 속성을 할당하면
// newObj의 __proto__는 Add 프로토타입 객체를 참조하게 된다.
console.log(newObj.__proto__); // Add 프로토타입 객체가 갖고 있는 plus 함수를 상속 받는다.

Add.apply(newObj, [1, 2]); // 인자 값들을 배열로 하나로 묶어서 적용해줘야 함 --> 내부적으로 this는 newObj를 가리키게 됨
console.log(newObj);
console.log(newObj.plus());

// 정리
// 생성자 함수와 new 연산자에 의해 새로운 객체 생성 --> 어떤 편리한 장점? --> 객체의 생성과 새로운 객체의 원형(프로토타입)을 쉽게 지정
// 뿐만 아니라, 괄호 안에 초기화 값을 생성 시에 편리하게 지정 --> 새로운 객체 인스턴스를 생성
