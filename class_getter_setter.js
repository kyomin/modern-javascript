// 자바스크립트 클래스 - getter, setter

// [1]: getter
// getter --> 클래스 속성에 접근하여 값을 가져오고자 할 때 사용
// getter는 메서드명 앞에 get 키워드를 붙여서 사용
// [주의!] getter 메서드 사용시 마치 속성처럼 사용 --> 즉, getter는 호출 X --> 끝에 괄호를 생략
// 기본적으로 값을 가져오는 용도 --> 반드시 어떤 값을 return
class Person {
	constructor(id, name, email) {
		this._id = id;
		this._name = name;
		this._email = email;
	}
	// getter
	get id() {
		return this._id;
	}
	get name() {
		return this._name;
	}
	get email() {
		return this._email;
	}

	// setter
	set id(value) {
		this._id = value;
	}
	set name(value) {
		this._name = value;
	}
	set email(value) {
		this._email = value;
	}

	info() {
		return `ID: ${this.id}, NAME: ${this.name}, EMAIL: ${this.email}`;
	}
}

const p1 = new Person('batman', '배트맨', 'batman@gmail.com');
// console.log(p1.name()); // Error
console.log(p1.name); // 배트맨

console.log(p1.info());
p1._name = '슈퍼맨';
console.log(p1.info());

console.log('----------------------------------------');

// [2]: setter
// setter --> 클래스 속성에 값을 할당할 때 사용
// setter는 메서드명 앞에 set 키워드를 붙여서 사용 --> getter와 마찬가지로 메서드명을 속성처럼 사용
// getter는 값을 취할시 --> 해당 get 메서드 호출
// setter는 값을 할당시 --> 해당 set 메서드 호출
const a1 = new Person('antman', '앤트맨', 'antman@gmail.com');
console.log(a1.id); // antman
a1.id = 'aaantman'; // setter 호출! --> 마치 속성처럼 사용
console.log(a1.id); // aaantman

console.log(a1.info());
