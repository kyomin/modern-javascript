// 객체 생성시 생성자 안에서 메서드를 정의하면 안되는 이유

// [1]: 실습
function Add(a, b) {
	this.a = a;
	this.b = b;
	this.plus = function () {
		return this.a + this.b;
	};
}

let add1 = new Add(100, 20);
console.log(add1.plus()); // 120
console.log(add1); // plus 함수를 add1 객체가 포함하고 있다. 객체 생성 시마다 Plus를 포함하게 되므로 메모리 낭비이다.

// 이렇게 객체를 생성할 때마다 같은 내용의 함수를 포함하게 되므로 메모리 낭비이다.
let add2 = new Add(200, 30);
console.log(add2);

let add3 = new Add(300, 40);
console.log(add3);

let add4 = new Add(400, 50);
console.log(add4);
console.log('----------------------------------------');

// [2]: 실습 --> Add 프로토타입 객체
function Add2(a, b) {
	this.a = a;
	this.b = b;
}

// 공통으로 쓰는 plus 메서드를 따로 프로토타입 객체에 정의하여 객체들이 참조할 수 있도록 한다.
Add2.prototype.plus = function () {
	return this.a + this.b;
};

let newAdd1 = new Add2(100, 20);
console.log(newAdd1.plus());
console.log(newAdd1);

let newAdd2 = new Add2(200, 30);
console.log(newAdd2);

let newAdd3 = new Add2(300, 40);
console.log(newAdd3);

let newAdd4 = new Add2(400, 50);
console.log(newAdd4);
