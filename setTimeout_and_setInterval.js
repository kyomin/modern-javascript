// setTimeout vs setInterval
// 비동기 처리에는 다양한 방법들이 존재 --> Promise와 Generator 함수를 이용한 비동기 처리

// [-]: 호출 스케쥴링 함수 --> setTimeout(), setInterval()
// setTimeout                                             setInterval
// 일정 시간 '후에' 함수를 한 번만 실행                    일정 시간 '마다' 함수를 주기적으로 실행
// clearTimeout                                           clearInterval

// setTimeout 예1
// function testHello1() {
// 	console.log('Hello');
// }
// testHello1(); // 그냥 호출
// setTimeout(testHello1, 2000); // 지연 호출 --> 시간 단위는 밀리세컨드(1000 = 1초), 기본값은 0

// setTimeout 예2
// function testHello2(t) {
// 	console.log(t);
// }
// setTimeout(testHello2, 3000, 'Hello World!'); // 주의! --> 함수를 호출하지 말고 함수명만 기재. --> 기본적으로 setTimeout의 3번째 파라미터부터는 setTimeout에서 호출하는 function의 파라미터로 전달된다.

// setTimeout 예3
// const tid = setTimeout((a) => console.log(a), 4000, '안녕하세요');
// console.log('setTimeout 예3 tid 값 = ', tid); // 3

// 호출 스케줄링 취소 --> clearTimeout
// setTimeout 호출 --> 타이머 식별자 반환 --> 숫자(number)

// const ti = setTimeout((a) => console.log(a), 2000, 'aaa');
// console.log(ti);

// const ti2 = setTimeout((b) => console.log(b), 4000, 'bbb');
// console.log(ti2);

// clearTimeout(ti); // 2초 뒤에 실행될 ti의 스케줄을 취소하므로 ti2 스케줄만 실행되어 4초 뒤에 'bbb'만 찍힘

// setInterval
// setTimeout과의 차이점 --> setTimeout은 함수를 한 번만 실행 --> setInterval은 함수를 주기적으로 실행
// 주기적인 실행을 중단 --> clearInterval 사용

// 1초 간격으로 문자열 출력
// const tid = setInterval(() => console.log('korea'), 1000);
// console.log(tid);

// 위와 같은 상황에서 주기적인 실행을 중지
// const myStop = (tid) => {
// 	clearInterval(tid);
// };
// setTimeout(myStop, 5000, tid);

// 계속 증가하는 값을 clearInterval 사용하여 중지

// [1]: 실습 --> 10까지 1초 단위로 카운팅 하기
// let cnt = 0;
// let tid = setInterval(() => {
// 	cnt++;
// 	console.log(cnt);

// 	if (cnt === 10) {
// 		clearInterval(tid);
// 	}
// }, 1000);

// [2]: 실습 --> 2초 단위로 흘러가는 시계를 출력하시오.
function myClock() {
	let d = new Date();

	// 월 return 값 --> number, 월 0~11, 0부터 시작 --> 주의!
	const text = `현재 시각은 ${d.getFullYear()}년 ${
		d.getMonth() + 1
	}월 ${d.getDate()}일 ${d.getHours()}시 ${d.getMinutes()}분 ${d.getSeconds()}초입니다.`;

	console.log(text);
}
setInterval(() => myClock(), 2000);
