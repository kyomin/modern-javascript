// (문제) 아래의 코드를 '프로토타입 체인'을 이용하여 상속이 구현되도록 바꿔보시오.
// 이때, 상속을 계속해서 여러 단계까지 구현해보시오.

// [1]: 초기 주어진 객체들
// const apt = {
// 	color: 'red',
// 	rooms: 4,
// 	toilet: 1,
// 	turnon() {
// 		console.log('turn on');
// 	},
// };

// const villa = {
// 	color: 'black',
// 	rooms: 3,
// 	toilet: 1,
// 	turnon() {
// 		console.log('turn on');
// 	},
// };

// const oneroom = {
// 	color: 'blue',
// 	rooms: 1,
// 	toilet: 1,
// 	turnon() {
// 		console.log('turn on');
// 	},
// };

// [2]
// 같은 값을 가지고 있는 'toilet'과 'turnon' 속성은 공통으로 따로 뺄 수 있음
const housing = {
	toilet: 1,
	turnon() {
		console.log('turn on');
	},
};

const apt = {
	color: 'red',
	rooms: 4,
};
console.log(apt.__proto__); // __proto__ --> Object(최상위) prototype 객체
// apt.turnon() --> 불가능

apt.__proto__ = housing; // 상속 구현
console.log(apt.__proto__); // housing 객체
apt.turnon(); // 가능
console.log('----------------------------------------');

const villa = {
	color: 'black',
	rooms: 3,
};
villa.__proto__ = housing;

const oneroom = {
	color: 'blue',
	rooms: 1,
};
oneroom.__proto__ = housing;

// [3]: 여러 단계까지 상속을 구현
const rainbow = {
	name: '무지개 아파트',
	rooms: 5,
};
rainbow.__proto__ = apt; // rainbow --> apt --> housing --> Object
console.log(rainbow.name); // 무지개 아파트
console.log(rainbow.rooms); // 5 --> 부모까지 찾아가지 않고 자신의 속성에 가려짐
console.log(rainbow.color); // red
console.log(rainbow.toilet); // 1
rainbow.turnon(); // turn on

// [4]: for .. in
// 위 코드는 마지막에 생성한 객체 --> rainbow 객체를 --> for .. in 반복문으로 순회 --> 결과는?
console.log('----------------------------------------속성 순회');
for (let i in rainbow) {
	console.log(i);
}

// 위와 같이 프로토타입 체인이 연결되어 있는 원형(부모)의 멤버(속성, 메서드)들이 다 나온다.

// Object.keys() vs Object.values()
console.log('----------------------------------------');
console.log(Object.keys(rainbow)); // name, rooms
console.log(Object.values(rainbow)); // '무지개 아파트', 5

// 해당 rainbow 객체에서 만들어진 속성들의 키와 값이 배열로 반환된다.

// Object.entries() --> [key, value]를 하나로 묶은 배열을 원소로 갖는 2차원 배열로 리턴
console.log('----------------------------------------');
console.log(Object.entries(rainbow));

// [5]: if 조건문과 hasOwnProperty() 메서드를 같이 사용.
console.log('----------------------------------------');
for (let i in rainbow) {
	// console.log(i);

	// rainbow가 직접 가지고 있는 속성인가?
	if (rainbow.hasOwnProperty(i)) {
		console.log(i, ' --> ', rainbow[i]);
	} else {
		console.log(i, ' --> ', '');
	}
}

// 이를 통해서 알 수 있듯이 --> hasOwnProperty() 메서드는 해당 객체가 가지고 있는 속성에 대해서만 true를 반환
