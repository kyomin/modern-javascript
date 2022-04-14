// 커링(Currying)

// 커링이란 무엇인가?
// 여러 개의 인자를 가지는 함수를 단일 인자로 갖는 함수들의 계층구조(순서)로 바꾸는 것!
// 쉽게 말해, 단일 인자를 받는 함수들을 쭈우욱 연결시킨 것 --> 많아지면 메모리 문제가 발생할 수 있으므로 장/단점을 고려해야 한다.
// 계속해서 함수가 연결되어진다면 --> 콜백 지옥과 같은 경험도 할 수 있다.
// 클로저(Closure)에 대한 개념 이해가 필수적으로 필요하다.
// 학습 순서: 클로저 학습 --> 커링 학습

// 값은 언제 반환?
// 함수가 필요로 하는 인자의 갯수 만큼 충족되지 않았다면 --> 계속 함수를 반환
// 만약, 함수가 필요로 하는 인자의 갯수를 모두 충족시켰다면 --> 그때 최종적인 값을 반환

// 호출 시에 약간의 차이가 있다.
// 기존 형태 --> fn(x, y, z)
// 커링 형태 --> fn(x)(y)(z)

// [1]: 기존 함수 --> 인자를 2개 받아서 더하는 함수
function sum1(x, y) {
	return x + y;
}
console.log(sum1(3, 4));
console.log('----------------------------------------');

/* ---------------------------------------- */

// [2]: 커링 함수 --> 단일 인자만 받아서 처리
function sum(x) {
	return function (y) {
		return x + y;
	};
}
const sum2 = sum(3); // 클로저 개념에 의해 3을 받은 x는 유지가 되며 내부 함수를 반환한다.
console.log(sum2(7)); // 10
console.log(sum(4)(8)); // 12
console.log('----------------------------------------');

/* ---------------------------------------- */

// [3]: (문제) 인자를 3개 받아서 모두 더하는 기존 함수를 커링 함수로 바꾸어 본다.
// 이때, arrow function을 사용하여 한 라인으로 구현한다.
function sum3(x) {
	return function (y) {
		return function (z) {
			return x + y + z;
		};
	};
}
console.log(sum3(4)(7)(5)); // 16
console.log('----------------------------------------');

// Arrow Function으로 만들기
const sumArrowFunction = (x) => (y) => (z) => x + y + z;
console.log(sumArrowFunction(111)(222)(333)); // 666
console.log('----------------------------------------');

/* ---------------------------------------- */

// [4]: 커링과 문자열
// 동물에게 먹이를 주는 feed() 함수가 있다.
// feed() 함수는 인자를 2개 받는데, 첫 번째 인자로는 동물의 이름을 받고, 두 번째 인자로는 먹이 종류를 받는다.
// 출력 --> '동물의 이름'에게 '먹이 종류'를 주고 있다.
// 이를 커링 함수로 바꿔본다.

// 기존 함수
const feed = function (name, feed) {
	return `${name}에게 ${feed} 먹이를 주고 있다.`;
};
console.log(feed('바둑이', '생선'));
console.log('----------------------------------------');

// 커링 함수
const curriedFeed = function (name) {
	return function (feed) {
		return `${name}에게 ${feed} 먹이를 주고 있다.`;
	};
};
console.log(curriedFeed('진돗개')('생선'));
console.log('----------------------------------------');

// Arrow Function으로 만들기
const curriedFeedArrow = (name) => (feed) => {
	return `${name}에게 ${feed} 먹이를 주고 있다.`;
};
console.log(curriedFeedArrow('야옹이')('우유'));
console.log('----------------------------------------');

/* ---------------------------------------- */

// [5]: 파라미터 순서 바꾸기

// 커링 함수
const curriedFeed2 = function (name) {
	return function (separator) {
		return function (stress) {
			return function (feed) {
				return name + separator + feed + stress;
			};
		};
	};
};
const curriedFeed3 = curriedFeed2('바둑이')(' --> ')(' 먹이를 줬다.');

// 커링함수의 장점 --> 다른 문자열 내용은 고정하고 동적으로 변화하는 먹이만을 강조할 수 있다.
console.log(curriedFeed3('생선'));
console.log(curriedFeed3('돼지고기'));
console.log(curriedFeed3('뼈다귀'));
console.log('----------------------------------------');

// 부분 적용 함수
// 커링 함수의 가장 큰 장점중 하나 --> 인자를 부분 적용한 함수를 쉽게 만들어 낼 수 있다.
// 커링 함수에서는 인자의 수를 내가 마음대로 조절 --> 매개변수를 나타내는 함수의 집합을 쉽게 만든다.
const curriedFeedPart = curriedFeed2('야옹이')(', ');
console.log(curriedFeedPart(' 먹었어?')('생선'));
console.log(curriedFeedPart(' 먹었어?')('소고기'));
console.log(curriedFeedPart(' 먹었어?')('돼지고기'));
console.log('----------------------------------------');

// 먹었어? --> 먹었습니다.로 바꾸기
console.log(curriedFeedPart(' 먹었습니다.')('생선'));
