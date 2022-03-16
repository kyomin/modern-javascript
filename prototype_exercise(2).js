// 앞서의 예제(prototype_exercise(1).js)를 생성자 함수와 new 연산자를 사용하는 예제로 바꿔본다.

// [1]: 생성자 함수
const Housing = function (name, color, rooms) {
	this.name = name;
	this.color = color;
	this.rooms = rooms;
};

// [2]: (Housing) 프로토타입 객체
// 자식 객체들에서 공통으로 쓸 속성 추가
Housing.prototype.toilet = 1;
Housing.prototype.turnon = function () {
	console.log('turn on');
};

// [3]: 객체 생성 --> new
const apt = new Housing('apt', 'red', 4);
console.log(apt.name);
console.log(apt.color);
console.log(apt.rooms);
console.log(apt.toilet);
apt.turnon();

console.log('----------------------------------------');

const oneroom = new Housing('oneroom', 'white', 1);
console.log(oneroom.name);
console.log(oneroom.color);
console.log(oneroom.rooms);
console.log(oneroom.toilet);
oneroom.turnon();

console.log('----------------------------------------');

const rainbow = new Housing('무지개 아파트', 'blue', 5);
console.log(rainbow.name);
console.log(rainbow.color);
console.log(rainbow.rooms);
console.log(rainbow.toilet);
rainbow.turnon();

console.log('----------------------------------------');

// 수정
// rainbow.prototype.name = '태양 아파트'; --> Error!!
rainbow.name = '태양 아파트';
console.log(rainbow.name);

console.log('----------------------------------------');

// 수정이 위와 같이 되어진다면 외부에서 손쉽게 수정을 할 수 있다는 것인데
// --> 그렇다면 수정이 안 되게끔 하려면 어떻게 해야 하는가?
// 방법
// 1. 생성자 함수 내에서 const로 name 변수를 만든다.
// 2. 해당 값을 외부에서 불러올 수 있도록 전용 getName() 메서드를 만든다.
// 3. 기존 코드에서 name 불러오는 부분을 모두 getName() 메서드로 바꿔 호출한다.

// [4]: 읽기 전용 속성을 넣은 생성자 함수
const ReadonlyHousing = function (name_, color, rooms) {
	// this.name = name;
	const name = name_; // 이 생성자 함수의 스코프 내의 name과 구분하기 위해 파라미터에 _를 붙여준다.
	this.getName = () => {
		return name;
	};
	this.color = color;
	this.rooms = rooms;
};

// [5]: (ReadonlyHousing) 프로토타입 객체
ReadonlyHousing.prototype.toilet = 1;
ReadonlyHousing.prototype.turnon = function () {
	console.log('turn on');
};

// [6]: 객체 생성 --> new
const readonlyApt = new ReadonlyHousing('readonlyApt', 'red', 4);
// console.log(readonlyApt.name);
console.log(readonlyApt.getName());
console.log(readonlyApt.color);
console.log(readonlyApt.rooms);
console.log(readonlyApt.toilet);
readonlyApt.turnon();

console.log('----------------------------------------');

const readonlyOneroom = new ReadonlyHousing('readonlyOneroom', 'white', 1);
// console.log(oneroom.name);
console.log(readonlyOneroom.getName());
console.log(readonlyOneroom.color);
console.log(readonlyOneroom.rooms);
console.log(readonlyOneroom.toilet);
readonlyOneroom.turnon();

console.log('----------------------------------------');

const readonlyRainbow = new ReadonlyHousing(
	'읽기 전용 무지개 아파트',
	'blue',
	5
);
// console.log(rainbow.name);
console.log(readonlyRainbow.getName());
console.log(readonlyRainbow.color);
console.log(readonlyRainbow.rooms);
console.log(readonlyRainbow.toilet);
readonlyRainbow.turnon();

console.log('----------------------------------------');

console.log(readonlyRainbow); // 출력해 보면 name이란 속성이 가려져 있다. --> 외부에서 감춰 속성 변경을 불가하게 만든다.
