// 자바스크립트 클래스 - getOwnPropertyNames()

// 어떤 객체를 다룰 때 --> 그 객체의 모든 특성을 보고자 한다면 --> getOwnPropertyNames() 메서드 사용
// 정적 메서드 --> Object.getOwnPropertyNames(객체명)
//             --> Object.getPrototypeOf() --> 지정된 객체의 내부 Prototype 속성값을 반환

// [1]
const p1 = {
	eat() {},
	run() {},
	rest() {},
};

class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	eat() {}
	run() {}
	rest() {}
}

const p2 = new Person2('홍길동', 20);

// [2]
// 클래스의 메서드는 열거 대상이 아니다 --> 메서드가 보이지 않는다.
for (let i in p2) {
	console.log('p2의 멤버들 = ', i); // name, age (eat, run, rest --> 보이지 않는다)
}

console.log('----------------------------------------');
console.log(p1);
console.log(p2); // Person2 {} --> 메서드는 보이지 않는다.

// [3]
console.log('----------------------------------------');
console.log(Object.keys(p1)); // [ 'eat', 'run', 'rest' ]
console.log(Object.getPrototypeOf(p2)); // 지정된 객체의 내부 Prototype 속성값을 반환 --> 브라우저 콘솔에 { constructor, eat, run, rest }가 찍힌다.
console.log(Object.keys(Object.getPrototypeOf(p2))); // [] --> keys 메서드로는 new로 생성된 클래스 인스턴스의 내부 Prototype 속성값을 열거할 수 없다.

console.log('----------------------------------------');
console.log(Object.getOwnPropertyNames(p1)); // [ 'eat', 'run', 'rest' ]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(p2))); // [ 'constructor', 'eat', 'run', 'rest' ]
