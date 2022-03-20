// Promise와 Generator 함수를 이용한 비동기 처리(1)
// 비동기 처리에는 다양한 방법들이 있다.

// [1]: 콜백 함수
// 1
// setTimeout(
// 	(x) => {
// 		let result = x; // 10
// 		console.log(result); // 10 (1초 후)

// 		// 2
// 		setTimeout(
// 			(x) => {
// 				result *= x; // 10*20
// 				console.log(result); // 200 (2초 후)

// 				// 3
// 				setTimeout(
// 					(x) => {
// 						result *= x; // 200*30
// 						console.log(result); // 6000 (3초 후)

// 						// 4
// 						setTimeout(
// 							(x) => {
// 								result *= x; // 6000*40
// 								console.log(result); // 240000 (4초 후)
// 							},
// 							1000,
// 							40
// 						);
// 					},
// 					1000,
// 					30
// 				);
// 			},
// 			1000,
// 			20
// 		);
// 	},
// 	1000,
// 	10
// );

// [2]: Promise로 변환
// 1. new Promise() 호출하면 --> 대기(Pending) 상태
// 2. 이때, 콜백 함수를 선언할 수 있고 --> 인자는 resolve, reject
// 3. 콜백 함수 내에서 처리할 작업 처리한 후 --> resolve() 메서드를 호출 --> 이행 상태
// 4. 즉, 성공이면 --> 리턴 값을 --> then()이 받아서 계속 처리 수행
// new Promise((resolve, reject) => {
// 	setTimeout(
// 		(x) => {
// 			let result = x;
// 			console.log(result);

// 			// resolve 함수를 호출해 result를 담아 다음 then에게 넘긴다.
// 			resolve(result);
// 		},
// 		1000,
// 		10
// 	);
// })
// 	.then((result) => {
// 		// result = 10
// 		return new Promise((resolve, reject) => {
// 			setTimeout(
// 				(x) => {
// 					result *= x;
// 					console.log(result);
// 					resolve(result);
// 				},
// 				1000,
// 				20
// 			);
// 		});
// 	})
// 	.then((result) => {
// 		// result = 200
// 		return new Promise((resolve, reject) => {
// 			setTimeout(
// 				(x) => {
// 					result *= x;
// 					console.log(result);
// 					resolve(result);
// 				},
// 				1000,
// 				30
// 			);
// 		});
// 	})
// 	.then((result) => {
// 		// result = 6000
// 		return new Promise((resolve, reject) => {
// 			setTimeout(
// 				(x) => {
// 					result *= x;
// 					console.log(result);
// 					resolve(result);
// 				},
// 				1000,
// 				40
// 			);
// 		});
// 	});

// [3]: Generator로 변환
const calc = (x, y) => {
	setTimeout(() => {
		iter.next(x * y); // x * y의 결과를 전달하며 제너레이터의 다음 yield 포인터로 이동한다.
	}, 1000);
};

function* testGen() {
	const a = yield calc(1, 10); // 10
	console.log(a);

	const b = yield calc(a, 20); // 10*20 --> 10은 a가 들고 있다.
	console.log(b);

	const c = yield calc(b, 30); // 200*30 --> 200은 b가 들고 있다.
	console.log(c);

	const d = yield calc(c, 40); // 6000*40 --> 6000은 c가 들고 있다.
	console.log(d);
}

const iter = testGen();
iter.next();
