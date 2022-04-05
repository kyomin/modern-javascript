// 자바스크립트 클래스 - 다형성(Polymorphism)

// [1]: 개념
// 다형성 --> 다양한 형태를 가지는 성질
// 문법적 --> 어떤 기능이나 동작을 구현시 --> 설계적인 부분(상위 클래스)과 구현(동작/기능)되는 부분(하위 클래스)을 분리 --> 객체별로 다양하게 사용할 수 있게 하는 것
// 부모(super) 클래스를 상속받은 자식(sub) 클래스의 인스턴스(객체) 별로 적절한 메서드를 사용하게 하는 것
// 즉, 이렇게 되면 '설계 부분'과 '구현 부분'은 --> 1:N 관계가 성립
// 즉, 부모가 잘 설계해놓은 것을 자식이 받아서 설계대로 구현한 후, 각 인스턴스(객체)별로 다양하게 사용하는 것

// 다른 전통적인 언어들의 클래스와 ES6 클래스의 차이점
// 이러한 다형성을 지원할 수 있는 문법적인 기반이 안되어 있음 --> 인터페이스, 추상클래스, 타입에 대한 개념
// 따라서, ES6 클래스에서는 다형성을 전통적인 언어들에서와 같이 문법적인 측면에서 구현하기는 조금 어렵다 --> 흉내를 낸다.
// 설계 부분 --> 인터페이스, 추상클래스 --> 보통은 강제하고 구현하게 함 --> ES6는 그런 부분에서 지원하지도, 강제하지도 않는다. --> 흉내를 낸다.
// '흉내'라고 무시하면 안된다 --> 다형성 개념을 적용 --> 보다 편리하고 쉽게 코딩 --> 다른 언어의 OOP를 이해하는 데에도 도움이 된다.

/* ---------------------------------------- */

// [2]: for .. of
// 1. 다양한 자료구조에서 사용할 수 있다. --> 반복 가능한 객체(Array, String, Map, Set)
// 2. 반복문 내에서 배열이나 문자열에서 동작하는 --> 특정 인터페이스가 지원되는 자료구조를 사용하기 때문!
// 3. 컬렉션 객체가 [Symbol.iterator] 속성을 가지고 있어야만 한다.
// 4. 이 말은 내가 만든 사용자 정의 객체의 경우에도 --> 이러한 특정 인터페이스 규격을 맞춰준다면 사용이 가능하다는 것이다!

// Array
const fruits = ['appple', 'banana', 'pear', 'watermelon', 'orange'];

// Array 객체는 이러한 규격을 지켜주고 있기 때문에 for .. of를 이용해 반복이 가능한 것이다.
for (let value of fruits) {
	console.log(value);
}

console.log('----------------------------------------');

// String
const str = 'KOREA';

for (let value of str) {
	console.log(value);
}

// Number --> 반복 가능한 것이 아니므로 Error!
const num = 12345;

// num is not iterable
// for (let i of num) {
// 	console.log(i);
// }

console.log('----------------------------------------');

// Map
const map1 = new Map([
	['seoul', 1],
	['pusan', 2],
	['jeju', 3],
]);

for (let city of map1) {
	console.log(city);
}
console.log('----------------------------------------');

// 구조분해 할당
for (let [key, value] of map1) {
	console.log(key, value);
}
console.log('----------------------------------------');

/* ---------------------------------------- */

// [3]: toString() 메서드
// 모든 객체에는 객체를 텍스트 형식으로 출력시키고자 할 때 자동으로 호출되는 toString() 메서드가 존재한다.
// 즉, 객체를 나타내는 문자열을 반환 --> Object에서 파생된 모든 객체에 상속
// 이 메서드가 사용자 정의 객체에서 재정의되면 --> 해당 재정의된 toString() 메서드가 적용!
// 재정의 없이 그냥 사용하면 --> [object Object]

// Date
const dateObj = new Date(2030, 5, 25, 20, 40, 8);
const strObj = dateObj.toString();
console.log(strObj);
console.log(typeof strObj);
console.log('----------------------------------------');

// Array
const arrObj = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrObj.toString()); // join(',')처럼 출력!
console.log(typeof arrObj.toString());
console.log('----------------------------------------');

// Object
const obj = new Object();
console.log(obj.toString()); // [object Object]
console.log('----------------------------------------');

// toString() 메서드 재정의 --> 목적 --> 보다 객체의 정보를 잘 보여주기 위해서
function Person(name, age, hp, gender) {
	this.name = name;
	this.age = age;
	this.hp = hp;
	this.gender = gender;
}

const p1 = new Person('홍길동', 20, '010-1234-5678', '남성');
console.log(p1.toString()); // [object Object]
console.log('----------------------------------------');

// toString 오버라이딩
Person.prototype.toString = function () {
	let result = `객체 정보 --> 이름: ${this.name}, 나이: ${this.age}, 핸드폰: ${this.hp}, 성별: ${this.gender}`;
	return result;
};
console.log(p1.toString());
console.log('----------------------------------------');

// String.prototype.toString 재정의
String.prototype.getLength = function () {
	return this.length;
};
String.prototype.toString = function () {
	return '나의 좌우명 --> ' + this.valueOf();
};

let testObj = '일단 해보고 안되면 다시 또 해보자!';
console.log(testObj.getLength()); // 20
console.log(testObj); // 일단 해보고 안되면 다시 또 해보자!
console.log(testObj.toString()); // 나의 좌우명 --> 일단 해보고 안되면 다시 또 해보자!
console.log('----------------------------------------');

/* ---------------------------------------- */

// [4]: 이터러블 규약과 이터레이터 규약
// 이터러블 규약
// for .. of 반복 구문을 사용하여 객체(반복 가능한 객체)를 반복할 때 --> 값이 열거되고 --> 내부에는 --> @@iterator 메서드가 구현되어 있어야 한다!
// Symbol.iterator() == @@iterator이다.
// 자바스크립트 내장 객체 --> Array, String, Map, Set, arguments 등이 이 이터러블 규약을 따른다.
// 이를 '반복 가능한 객체', '이터러블 객체' 등으로 부른다.

// 결국, 이터러블 객체라면 for .. of 구문으로 반복시키면서 값의 열거가 가능! --> 이때, 각 객체별로 열거되는 방식에는 차이가 있다.
// 예를 들면,
// - 문자열(String)의 경우 --> 한 글자씩 따로 열거
// - 배열(Array)의 경우 --> 요소 단위로 하나씩 열거를 수행

// 결국, 이러한 차이를 공통화하기 위해서 --> 이터러블 객체는 --> 내부적으로 @@iterator 메서드를 구현한다.
// 이때, @@iterator 메서드는 객체의 속성이나 또는 체이닝상의 객체 중 하나가 속성으로 Symbol.iterator 키를 가져야만 한다.

/* ---------------------------------------- */

// [5]: 이터러블 객체의 생성
// 기본적으로 이터러블 객체(반복 가능한 객체)라면 Symbol.iterator 키를 가진다.
const str1 = 'KOREA';
const iterator = str1[Symbol.iterator]();

// 이터레이터 객체는 --> '이터레이터 규약'에 따라 --> 내부의 next() 메서드를 통해 '하나씩의 값을 순차적으로 열거'!
// 이때, 열거는 객체이며 --> 속성으로 --> value, done 2가지 속성을 가짐
// value: 값
// done: 열거 완료 여부. 열거가 끝이면 ture이고, 이때 value는 undefined, 반대로 끝이 아니면 false
console.log(iterator);
console.log(iterator.next()); // { value: 'K', done: false }
console.log(iterator.next()); // { value: 'O', done: false }
console.log(iterator.next()); // { value: 'R', done: false }
console.log(iterator.next()); // { value: 'E', done: false }
console.log(iterator.next()); // { value: 'A', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.next()); // { value: undefined, done: true }
console.log('----------------------------------------');

for (let value of str1) {
	console.log(value);
}

// 위와 같은 결과 출력!
// 다만 이 예제에서는 위에서 이미 iterator.next()로 열거가 끝났기 때문에 출력되지 않는다.
for (let value of iterator) {
	console.log(value);
}
console.log('----------------------------------------');

// Array
const arr1 = ['seoul', 'pusan', 'kwangju', 'jeju', 'dokdo'];
const iter = arr1[Symbol.iterator]();
console.log(iter);
console.log(iter.next()); // { value: 'seoul', done: false }
console.log(iter.next()); // { value: 'pusan', done: false }
console.log(iter.next()); // { value: 'kwangju', done: false }
console.log(iter.next()); // { value: 'jeju', done: false }
console.log(iter.next()); // { value: 'dokdo', done: false }
console.log(iter.next()); // { value: 'undefined', done: true }
console.log('----------------------------------------');

/* ---------------------------------------- */

// [6]: 이터레이터 객체 직접 구현
// 기본적으로 이터러블 객체(반복 가능한 객체)라면 Symbol.iterator 키를 가짐을 다시 한 번 상기!
let testIterObj = {
	i: 1,
	[Symbol.iterator]: function () {
		return this;
	},
	next: function () {
		// 리턴시 next() 메서드는 객체를 리턴
		if (this.i < 5) {
			return { value: this.i++, done: false };
		} else {
			return { value: undefined, done: true };
		}
	},
};

let testIter = testIterObj[Symbol.iterator]();
// console.log(testIter.next()); // { value: 1, done: false }
// console.log(testIter.next()); // { value: 2, done: false }
// console.log(testIter.next()); // { value: 3, done: false }
// console.log(testIter.next()); // { value: 4, done: false }
// console.log(testIter.next()); // { value: undefined, done: false }

for (let value of testIter) {
	console.log(value); // 1, 2, 3, 4
}
console.log('----------------------------------------');

/* ---------------------------------------- */

// [7]: 다형성 예
// 다형성을 구현하기 위한 기본적인 OOP 문법
// 1. 부모/자식 간의 계층적인 구조 --> 상속 관계
// 2. 메서드 재정의 --> 오버라이딩
// 3. 재정의된 메서드 호출 --> 프로토타입 체이닝상에서 제일 먼저 찾게되는 메서드 호출

class Animal {
	constructor(name) {
		this._name = name;
	}
	bark() {
		return '짖다.';
	}
}

class Dog extends Animal {
	constructor(name, age) {
		super(name);
		this._age = age;
	}
	bark() {
		return `${this._age}살짜리 ${this._name}가 멍멍 짖다.`;
	}
}

class Cat extends Animal {
	constructor(name, age) {
		super(name);
		this._age = age;
	}
	bark() {
		return `${this._age}살짜리 ${this._name}가 야옹야옹 짖다.`;
	}
}

class Bull extends Animal {
	constructor(name, age) {
		super(name);
		this._age = age;
	}
	bark() {
		return `${this._age}살짜리 ${this._name}가 음메~ 짖다.`;
	}
}

// 같은 bark() 메서드라도 어떤 객체가 호출하느냐에 따라서 내용이 달라진다 --> 다형성
const d1 = new Dog('개', 2);
console.log(d1.bark());

const c1 = new Cat('고양이', 4);
console.log(c1.bark());

const b1 = new Bull('소', 8);
console.log(b1.bark());

console.log('----------------------------------------');

// 배열 사용
const animals = [new Dog('개', 2), new Cat('고양이', 4), new Bull('소', 8)];

// for .. of
for (let v of animals) {
	console.log(v.bark());
}
console.log('----------------------------------------');

/* ---------------------------------------- */

// [8]: 다형성 예 --> function + prototype 기반으로

// 8-1
// 설계 클래스(인터페이스)
// 상속을 받은 자식 클래스에서 메서드가 미구현되었다면 여기서 에러를 던져준다. --> 그럼으로써 강제하는 효과
const Animal2 = function (name) {
	this._name = name;
};
Animal2.prototype.move = function () {
	// 예외 처리!
	// 여기까지 올라왔다는 것은 Animal2를 상속하는 자식 클래스에서 구현을 하지 않았다는 것이다!
	throw new Error('move 메서드가 구현되지 않았습니다.');
};

// 8-2
// 구현 클래스(자식 클래스)
// 자식 클래스에서 move 메서드를 구현하지 않으면 부모 클래스에서 에러를 던져줌으로써 --> 구현을 강제
const DogImpl = function (name, age) {
	Animal2.call(this, name); // Class의 super 역할
	this._age = age;
};
DogImpl.prototype = Object.create(Animal2.prototype);
DogImpl.prototype.constructor = DogImpl;

// 오버리이딩!
DogImpl.prototype.move = function (args) {
	console.log(`${args}(${this._name}, ${this._age}살) 이동중...`);
	return '멍멍~';
};

// 객체 생성
const dog1 = new DogImpl('바둑이', 2);
console.log(dog1.move('개'));
console.log('----------------------------------------');

const dog2 = new DogImpl('똥개', 4);
console.log(dog2.move('개'));
console.log('----------------------------------------');

// 다형성 체크
// 객체가 특정 클래스의 인스턴스인지 여부를 확인 --> instanceof
console.log(dog1 instanceof Object); // true
console.log(dog1 instanceof Animal2); // true
console.log(dog1 instanceof DogImpl); // true
