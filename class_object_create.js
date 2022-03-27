// 자바스크립트 클래스 - Object.create 상속

// class 문법 지원이 추가되기 이전에 자바스크립트에서 객체지향을 구현하기 위해 사용된 방식 --> Object.create()
// Object.create() 방식이 없던 시절에도 상당히 복잡하게 클래스적인 구현을 흉내냈었지만, 지금은 그런 방식까지 알 필요는 없다.

// [1]: Object.create()
// 1. Object.create(부모객체.prototype);
// - 첫 번째 인자(부모객체)로 들어온 해당 객체(부모)의 '프로토타입 객체'를 복제
// - 이렇게 복제된 것을 --> '자식객체.prototype'에 할당

// 2. 그러나 여전히 복제된 '프로토타입 객체'는 부모 객체를 가리키고 있기 때문에 이것을 자식 객체를 가리키도록 바꿔줘야 한다.
// - '자식객체.prototype.constructor = 자식객체'를 할당해서 연결 고리를 맞춰준다.

// 3. 마지막으로 하나 더 할게 남았는데
// - new 키워드를 통해서 인스턴스(객체)를 생성시 자식 객체의 this가 부모 객체까지 전달되도록 해줘야 한다. (super)
// - 이를 해주기 위해서 --> 부모객체.call(=apply)(this, 인자값) --> 이렇게 해줘야 한다.
// - class의 super 역할이라고 보면 된다.

// 정리
// class에서는 상속을 extends와 super를 통해서 구현하고 있다면,
// class 이전에는 위와 같이 Object.create()와 prototype, call 등을 이용해서 구현하고 있다.

// 부모 클래스
function ParentClass(name, age) {
	this.name = name;
	this.age = age;
}

ParentClass.prototype.sayHello = function () {
	console.log(`Hello, ${this.name}`);
};

// 자식 클래스
function ChildClass(name, age, power) {
	// class의 super 역할을 하게 된다.
	// call을 통해 현재 ChildClass의 this를 바인딩하며 ParentClass를 호출하기 때문에,
	// ParentClass의 this.name과 this.age의 this는 ChildClass를 가리키게 된다.
	ParentClass.call(this, name, age);

	// ParentClass 함수를 실행하면서 다음 코드로 치환된다고 생각하자 -->
	// this.name = name;
	// this.age = age;
	this.power = power;
}

// 이로써 ChildClass의 prototype은 ParentClass의 prototype 복사본을 참조하게 된다. --> 자체가 복제되는 것은 아니다.
// 그리고 ParentClass의 prototype 복사본의 __proto__는 ParentClass의 prototype 객체를 가리킨다.
// 그래서 다음의 체이닝이 형성된다.
// ChildClass.prototype --> ParentClass의 prototype 복사본 --> ParentClass의 prototype --> 최상위 Object 객체
ChildClass.prototype = Object.create(ParentClass.prototype);

// ParentClass의 prototype 복사본의 constructor가 기존에는 ParentClass의를 참조하고 있으므로
// ChildClass를 참조하도록 바꿔준다.
ChildClass.prototype.constructor = ChildClass;

ChildClass.prototype.move = function () {
	console.log(`${this.name} is moving`);
};

const c1 = new ChildClass('spiderman', 20, 900);
console.log(c1);
console.log(c1.name);
console.log(c1.age);
console.log(c1.power);
c1.sayHello();
c1.move();

console.log('----------------------------------------');

const c2 = new ChildClass('superman', 30, 1500);
console.log(c2);
console.log(c2.name);
console.log(c2.age);
console.log(c2.power);
c2.sayHello();
c2.move();

console.log('----------------------------------------');

// Tip
// prototype 객체는 함수원형과 객체(인스턴스)에 따라 접근 방식이 다르다.
// 함수원형: 함수원형명.prototype
// 객체(인스턴스): 객체명.__proto__
console.log(c1.__proto__); // ChildClass
console.log(c1.__proto__.__proto__); // ParentClass
console.log(c1.__proto__.__proto__.__proto__); // Object
console.log(c1.__proto__.__proto__.__proto__.__proto__); // null
