// 클로저(Closure)

// 클로저란 무엇인가?
// 자바스크립트 언어만의 고유한 개념은 아니다!
// 정의 --> '외부'에 있는 변수가 '내부'에 있는 함수와 함수 호출한 후에도 종료되지 않고 계속 참조하는 것
// 즉, 외부의 변수와 내부의 함수가 끊기지 않고 연결고리가 계속 이어져 있는 것

// [1]: 클로저 코드 1 --> 바깥 쪽에 있는 함수의 변수를 내부 함수가 참조하는 것
const external = () => {
	let number = 65; // 아스키 코드 65 --> 'A'

	let internal = () => {
		let char_ = String.fromCharCode(number);

		// internal 함수 내부에서는 number가 없으므로 상위로 올라가서 number를 찾음
		console.log(char_, number++);
	};

	// inner function call!
	internal();
};

// 알파벳이 순차적으로 증가하며 출력되길 기대했지만 결과는 그렇지 않다!
external(); // A 65
external(); // A 65
external(); // A 65
console.log('----------------------------------------');

/* ---------------------------------------- */

// [2]: 클로저 코드2
const external2 = () => {
	let number = 65;

	let internal = () => {
		let char_ = String.fromCharCode(number);

		// 함수형 프로그래밍에서는 return을 자주 해주는게 좋다.
		return `${char_} ${number++}`;
	};

	return internal();
};
console.log(external2()); // A 65
console.log(external2()); // A 65
console.log(external2()); // A 65
console.log('----------------------------------------');

/* ---------------------------------------- */

// [3]: 클로저 코드3
const out = function () {
	let number = 65;

	let internal = function () {
		let char_ = String.fromCharCode(number);

		return `${char_} ${number++}`;
	};

	// 위의 코드와 다르게 함수 실행 결과가 아니라 함수 자체를 리턴한다.
	// 이로써 internal 함수가 접근하는 number 변수는 out 함수가 종료됐다 해도 소멸하지 않고 유지가 된다!
	// 즉, 외부와 연결고리가 계속 남게 된다.
	return internal;
};

// 위 경우는 함수의 종료가 깔끔하게 끝나지 않고 계속 연결고리가 남은 상태이다.
// 마치, 일상에서 어떤 비즈니스 거래를 하고나서 깔끔하게 돈 받고 거래가 끝나면 되는데, 돈이 아닌 어음을 받는 상황에 비유할 수 있다.
// 결론적으로, 연결고리가 계속 남게 함수 자체를 리턴시켜버리고, 그 함수를 받은 변수(out2)가 받아서 out2를 계속해서 재실행

// 다음 선언이 중요한 부분이다!
// out 외부함수를 실행하여 out2 변수에 할당하면 out 외부함수가 internal 내부함수를 반환하기 때문에
// out2 변수가 반환된 함수인 internal 내부함수를 계속 참조하게 됨.
// 결국, 가비지 컬렉터(Garbage Collector)는 변수가 참조하고 있는 함수는 수집을 하지 않으므로 수집 대상에서 제외
// 여전히 internal 내부함수는 out2 변수에 의해 호출될 수 있는 것이다.
const out2 = out();

console.log(out2()); // A 65
console.log(out2()); // B 66
console.log(out2()); // C 67
console.log('----------------------------------------');

/* ---------------------------------------- */

// [4]: 1초 단위로 1씩 증가하는 클로저 카운터 구현
// 이때, 자동으로 1초씩 증가하면서 콘솔에 값을 출력한다.

// 클로저 적용
const out3 = () => {
	let cnt = 0;
	let internal = () => ++cnt; // 'return ++cnt'와 같음
	return internal;
};

const out4 = out3();
setInterval(() => console.log(out4()), 1000);

/* ---------------------------------------- */

// [5]: 버튼 클릭시 클로저 카운팅
// 웹 페이지로 버튼을 만들어 구현한다.

// 클로저 카운팅
const btnView2 = document.getElementById('btnView');
const cntView2 = document.getElementById('cntView');

const out5 = () => {
	let cnt = 0;
	let internal = () => ++cnt;
	return internal;
};

const out6 = out5();

// 클릭 이벤트 등록
btnView2.onclick = () => {
	cntView2.innerText = out6();
};

/* ---------------------------------------- */

// [6]: li 리스트 태그에서의 클로저와 let

// li 태그를 html 문서 안에서 전부 가져온다.
const li = document.querySelectorAll('li');

// li 태그들을 순회하며 클릭 이벤트 등록
// for (var i = 0; i < li.length; i++) {
// 	li[i].addEventListener('click', () => console.log(`${i}번째 요소입니다.`));
// }

// 주석처리된 위의 결과: li 태그를 클릭하면 모두 같은 값(4)이 콘솔에 출력
// i 값이 이벤트 콜백함수 내에서 var로 선언되어져 있는 i를 참조하는게 문제!
// 문제해결은? --> 재할당이 가능하면서, 블록 스코프 변수인 let 사용
// var => let으로 바꾼다.
for (let i = 0; i < li.length; i++) {
	li[i].addEventListener('click', () => console.log(`${i}번째 요소입니다.`));
}

/* ---------------------------------------- */

// [7]: 리스트 함수로 만들어 자동화하기
// 전통적인 방식으로 자바스크립트 단에서 태그를 생성해 이벤트 함수를 등록해본다.
const makeList = (ar) => {
	let el = '<ul>\n';
	for (let i = 0; i < ar.length; i++) {
		el += '<li>' + ar[i] + '</li>\n';
	}
	el += '</ul>';

	return el;
};

const animals = ['사자', '호랑이', '하마', '악어', '개', '고양이', '코끼리'];
const li_items = makeList(animals);

// 작성한 li 리스트들 html에 삽입!
document.getElementById('jsList').innerHTML = li_items;

// 클릭 이벤트 등록!
const li2 = document.querySelectorAll('#jsList li'); // id로 'jsList'를 가진 요소 하위의 li 태그들을 찾는다.

for (let i = 0; i < li2.length; i++) {
	li2[i].addEventListener('click', () => console.log(`${i}번째 요소입니다.`));
}
