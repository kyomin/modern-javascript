// 자바스크립트 클래스 - 정적 메서드

// 중요 포인트
// 1. 어떻게 정적 메서드를 구현하는지에 대해서 알아야 한다.
// 2. 정적 메서드가 어떤 경우에 호출될 수 있고, 또 어떤 경우에는 호출이 안 되는지를 알아야 한다.
// 3. 인스턴스(객체)가 정적 메서드를 호출할 수 있는지 없는지에 대해서도 알아야 한다.

// [1]: 정적 메서드 --> Static Method
// 메서드 앞에 static 키워드를 붙여주면 --> 따로 인스턴스(객체)를 생성하지 않아도 --> 메서드 호출이 가능!
// 클래스명.정적 메서드명으로 호출할 수 있다.
// 반대로 --> 인스턴스(객체)를 통해서 호출하는 것은 불가능하다!
// 다르게 표현하면 --> 인스턴스에 따라 달라지지 않는 고정된 메서드

class Animal {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	sleep() {
		console.log('잠자다');
	}

	// 정적 메서드
	static sleep2() {
		console.log('Zzz...');
	}
}

// Animal                                                     (Animal) 프로토타입 객체
// +prototype(Animal 프로토타입 객체 참조)                     + constructor(Animal 참조)
// +sleep2                                                    + sleep

// --> new --> ani1
//             +__proto__(Animal 프로토타입 객체 참조)

const ani1 = new Animal('호랑이');
ani1.sleep();
console.log(ani1.getName());

// ani1.sleep2(); // Error! --> 인스턴스(객체)를 통해서는 정적 메서드 호출 불가
Animal.sleep2();
ani1.constructor.sleep2(); // 인스턴스를 통해서 호출이 가능하게 하려면 --> constructor 이용

// [2]: 상속 관계에서의 정적 메서드
console.log(
	'----------------------------------------상속 관계에서의 정적 메서드'
);
class Add {
	static plus(x) {
		x = x || 100;
		return x + 1000;
	}
}

class ChildAdd extends Add {
	static plus(x) {
		return super.plus(x) + super.plus(x) + super.plus(x);
	}
}

console.log(Add.plus()); // 1100
console.log(Add.plus(500)); // 1500
console.log(ChildAdd.plus()); // 3300
console.log(ChildAdd.plus(300)); // 3900

console.log('----------------------------------------');

const add1 = new Add();
// console.log(add1.plus()); // Error!
console.log(add1.constructor.plus()); // 1100

const cadd1 = new ChildAdd();
// console.log(cadd1.plus());  // Error!
console.log(cadd1.constructor.plus()); // 3300
