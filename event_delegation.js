// 이벤트 위임과 활용(Event Delegation)

window.onload = () => {
	// [1]: 아래는 기존의 요소들만 클릭 이벤트가 등록되고, 새로 등록되는 li 요소에 대해서는 클릭 이벤트가 등록되지 않는 코드이다
	// const lis = document.querySelectorAll('li');
	// lis.forEach((el) => {
	// 	el.addEventListener('click', function (event) {
	// 		console.log('이미지가 클릭되었습니다.');

	//    event.target vs event.currentTarget
	// 		// event.target은 이벤트가 일어난 자식 객체를 의미
	// 		// 즉, 이벤트 버블링의 가장 끝단에 위치한 마지막 요소를 반환 --> 클릭한 요소 --> 자식 객체
	// 		// 좀 더 쉽게 설명하면 이미지 자체를 클릭한 것이므로 <img ... > 이런 식의 이미지 태그가 타켓이고, 이걸 반환
	// 		console.log('event.target: ', event.target);

	// 		// event.currentTarget은 이벤트가 위임된 부모의 객체를 반환
	// 		// 즉, event.target이 이미지 태그(img)를 기준으로 가져온다면,
	// 		// event.currentTarget은 이미지 태그의 부모격인 li 요소를 반환
	// 		// 현재 클릭 이벤트가 걸려있는 객체를 반환 --> event.currentTarget --> li
	// 		console.log('event.currentTarget: ', event.currentTarget);
	// 		console.log('----------------------------------------');
	// 	});
	// });

	// [2]: 새로운 동물을 동적으로 추가하게 된다면?
	// Event Delegation(이벤트 위임)
	function getEventTarget(e) {
		e = e || window.event;
		return e.target;
	}

	const memberList = document.querySelector('.memberList'); // class가 memberList인 문서 내 첫 번째 element를 반환 --> 클래스명이 유일하면 그것 딱 하나

	// 버블링에 의해 ul 하위에 있는 li 혹은 img를 클릭하면 여기서 받을 수 있게 된다.
	memberList.addEventListener('click', function (event) {
		// event.currentTarget을 사용하게 되면 현재 이벤트가 걸려있는 ul 태그를 가져오게 되므로
		// event.target을 사용해 이벤트가 발생한 img 태그 자체의 정보를 가져온다.
		const t = getEventTarget(event);
		console.log(t.id);
		console.log(t.src);
	});

	const liNode = document.createElement('li');
	const txtNode = document.createTextNode('추가 동물 호랑이');

	// img 엘리먼트 생성
	const imgNode = document.createElement('img');

	// 생성한 이미지노드 엘리먼트(태그)에 속성 추가
	imgNode.src = './img/호랑이.jpg';
	imgNode.width = 100;
	imgNode.height = 100;
	imgNode.id = '호랑이';
	imgNode.class = 'ddd';

	// 붙이기
	liNode.appendChild(imgNode);
	liNode.appendChild(txtNode);
	memberList.appendChild(liNode);
};
