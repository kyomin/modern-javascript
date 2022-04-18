// DOM - 이미지 노드

// [1]: 이미지 노드
// 1. 제일 먼저 생성하고자 하는 엘리먼트 요소를 생성 --> img
// 2. 생성한 이미지 엘리먼트에 속성을 추가 --> 2가지 방식 --> .  &  setAttribute()
// 3. 해당 객체에 붙여준다. --> appendChild()

/* .을 이용하여 속성 추가 코드 */
// window.onload = () => {
// 	// img 엘리먼트 생성
// 	const imgNode = document.createElement('img');

// 	// 생성한 이미지 엘리먼트(태그)에 속성 추가
// 	imgNode.src = 'https://placeimg.com/200/100/any';
// 	imgNode.width = 400;
// 	imgNode.height = 300;

// 	// body에 붙이기
// 	document.body.appendChild(imgNode);
// };

/* ---------------------------------------- */

// [2]: 이미지 노드 --> 메서드를 이용하여 속성을 추가 --> setAttribute()
// setAttribute() 메서드를 이용하여 속성을 추가하면 어떤 장점? --> 사용자 정의 속성을 직접 만들어서 추가하는 것이 가능

/* setAttribute() 메서드를 이용하여 속성 추가 코드 */
window.onload = () => {
	// img 엘리먼트 생성
	const imgNode = document.createElement('img');

	// 생성한 이미지 엘리먼트(태그)에 속성 추가
	// arg1: 속성명
	// arg2: 속성값
	imgNode.setAttribute('src', 'https://placeimg.com/200/100/any');
	imgNode.setAttribute('width', 400);
	imgNode.setAttribute('height', 400);
	imgNode.setAttribute('addProperty', 'obj1'); // 사용자 임의 정의 속성 추가

	// body에 붙이기
	document.body.appendChild(imgNode);
};
