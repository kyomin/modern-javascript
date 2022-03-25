// 자바스크립트 클래스 - 상속과 super
// Animal 클래스(부모/상위/Super)와 Mammal 클래스(자식/하위/Sub)를 만들어 상속 관계를 구현하시오.
// 이때, Mammal 클래스의 인스턴스(객체) 생성은 우측처럼 하시오. --> new Mammal('호랑이', 10, 2, 1.5);
// 이때, 부모 클래스의 constructor는 자식 클래스에서 super를 통해서 동물의 유형(예: 포유류)을 받도록 처리하시오.

// [1]
class Animal {
	constructor(group) {
		this.group = group;
	}
	// 모든 동물들이 갖고 있는 공통 기능들
	getGroup() {
		return this.group;
	}
	eat() {
		return '먹다';
	}
	sleep() {
		return '자다';
	}
	bark() {
		return '짖다';
	}
}

class Mammal extends Animal {
	constructor(name, finger, toe, eyesight) {
		// 자식 클래스는 부모 클래스의 생성자를 호출할 '의무'가 있다.
		super(Mammal.name); // 부모의 생성자를 호출 --> this보다 super가 당연히 먼저 호출되어야 함 --> 안 그러면 참조 오류 발생!
		this.name = name;
		this.finger = finger;
		this.toe = toe;
		this.eyesight = eyesight;
	}
	run() {
		return `${this.name}(${this.group}) 뛴다`;
	}
	// 재정의 --> 자식부터 해당 함수를 찾아 올라가면서 가장 먼저 찾는 함수를 호출하기 때문에 부모까지 올라가서 bark를 찾지 않는다.
	bark() {
		return '크게 짖다';
	}
	move() {
		// super 키워드를 통해 부모 클래스의 bark 메서드 호출!
		return `${this.name} 이동하면서 ${super.bark()}`;
	}
}

const mam1 = new Mammal('호랑이', 10, 10, 1.5);
console.log(mam1.getGroup());
console.log(mam1.name);
console.log(mam1.finger);
console.log(mam1.toe);
console.log(mam1.eyesight);
console.log(mam1.run());

console.log('----------------------------------------');
console.log(mam1.bark()); // override --> (1) 기각하다, 무시하다 (2) ~보다 더 우선시하다
console.log(mam1.move());

// 속성 출력
console.log('----------------------------------------');
console.log(Object.getOwnPropertyNames(mam1)); // [ 'group', 'name', 'finger', 'toe', 'eyesight' ]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(mam1))); // [ 'constructor', 'run', 'bark', 'move' ] --> mam1이 참조하는 프로트타입 객체의 속성들
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(mam1.__proto__))); // [ 'constructor', 'getGroup', 'eat', 'sleep', 'bark' ] --> mam1이 참조하는 프로트타입 객체가 참조하는 프로토타입(부모의 프로토타입) 객체의 속성들
