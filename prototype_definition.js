// 자바스크립트 프로토타입(Prototype)

// [1]: 프로토타입이란 무엇인가?
// 자바스크립트를 공부하는 과정에서 흔히 들어보게 되는 용어중 하나 --> 이 말은 다른 언어를 공부할 때 들어볼 일이 별로 없다는 뜻이다.
// 자바스크립트는 프로토타입 기반의 언어이다 --> 이를 기반으로 확장과 재사용성을 높일 수 있다.
// 사전적 의미 --> '원형'이라는 뜻 --> 이러한 사전적 의미와 같은 개념으로 자바스크립트에서도 사용.
// 쉽게 말해, 객체의 '프로토타입(원형)'을 가지고 '새로운 객체'를 생성해가는 프로그래밍 방식이다.
// 즉, 생성된 객체는 자기자신의 '프로토타입'을 갖는다. --> 즉, 자기자신이 만들어지게된 '원형'을 안다.
// 다소 생소 --> 조금 어려운 개념이다.

// [2]: Prototype vs Class
// 지금은 자바스크립트도 Class를 문법적으로 지원하기 시작했지만, 원래 자바스크립트는 '프로토타입 기반의 언어'이다.
// 즉, 기존에는 CLass라는게 없었다.
// 그래서 객체의 원형인 프로토타입을 이용하여 객체의 '확장'과 '재사용', '상속' 등을 구현해 나갔다.
// Prototype 객체는 new 연산자에 의해서 생성된 객체 --> 공유 프로퍼티, 메서드 등을 제공하기 위해서 사용된다.

// [3]: 예
const fruit = { name: 'apple' };
console.log(fruit.name); // apple

// 속성 추가
fruit.expiration = '20241231';
console.log(fruit.expiration); // 20241231

// 속성이 있는지 없는지 체크 --> hasOwnProperty() 메서드 사용
console.log(fruit.hasOwnProperty('expiration')); // true
console.log(fruit.hasOwnProperty('country')); // false

// 따로 정의하지 않은 hasOwnProperty() 메서드는 fruit 객체가 어떻게 호출할 수 있을까?
console.log(fruit); // 객체가 생성될 때, __proto__를 기본적으로 가지고 있고, 그 내부에서 정의된 hasOwnProperty를 호출하는 것이다!

// hasOwnProperty() --> fruit 객체에서 정의해버리면? -->  자식이 정의한 내용에 가려진다. --> 자신부터 시작해 부모까지 해당 속성이 있나 따라 올라가는 과정에서 가장 먼저 캐치한 것을 따른다.
const fruit2 = {
	name: 'apple',
	expiration: '20241231',
	hasOwnProperty: function () {
		console.log('hasOwnProperty in fruit2 Object');
	},
};

fruit2.hasOwnProperty(); // hasOwnProperty in fruit2 Object
