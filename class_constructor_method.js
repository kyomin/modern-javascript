// 자바스크립트 클래스 - 생성자 메서드

// 생성자 메서드는 인스턴스(객체)를 생성할 때 제일 먼저 실행되는 메서드이다.
// 그러다보니 주로 생성되는 객체의 초기화를 담당한다.
// 클래스 내에 constructor라는 이름을 가진 생성자 메서드는 오직 하나여야만 한다. --> 2개면 Error

// [1]
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	// SyntaxError: A class may only have one constructor
	// constructor(name2, age2) {
	// 	this.name = name2;
	// 	this.age = age2;
	// }
}

const p1 = new Person('홍길동', 20);
console.log(p1.name);
console.log(p1.age);

console.log('----------------------------------------');

// [2]: 생략
// constructor는 생략이 가능 --> 그러면 클래스에 constructor() {}를 작성한 것과 동일
// 생성된 객체에 어떤 속성을 추가하려면 --> 객체를 생성한 이후에 별도로 속성을 추가
// 객체 생성시 초기화해야 한다면 --> constructor를 생략하는 것은 X
class Animal {
	// constructor() {} // 빈 생성자라면 있으나 마나
}

const ani1 = new Animal();

// 생성자가 비어있으므로 객체를 생성한 이후에 별도로 속성을 추가 --> 인스턴스 자체에 속성 추가
ani1.name = '악어';
ani1.age = 4;

console.log(ani1.name);
console.log(ani1.age);
