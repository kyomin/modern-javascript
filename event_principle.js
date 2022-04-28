// 자바스크립트의 이벤트 동작 방식과 이벤트 대상 얻기

window.onload = () => {
	// [1]
	// 버튼이 사용자의 행위에 의해 클릭되었는지 확인하기 --> 이벤트 발생의 신뢰 --> isTrusted
	const btn = document.querySelector('button');
	btn.addEventListener('click', addMouseEvent);

	function addMouseEvent(event) {
		console.log(event);
		// isTrusted 속성 --> 이벤트가 사용자 행위에 의하여 발생되었으면 true로 신뢰할 수 있고,
		// 아니면 스크립트나 이벤트를 자동으로 실행시키는 메서드 등에 의해서 실행되었다면 false

		const bool = event.isTrusted;
		if (bool) {
			console.log('이 이벤트는 신뢰할 수 있습니다.');
		} else {
			console.log('이 이벤트는 신뢰할 수 없습니다.');
		}
	}

	// isTrusted 속성의 값이 false가 되는 경우 --> 스크립트에 의한 또는 dispatchEvent() 메서드에 의해서 자동 실행되면 --> false
	const event = new Event('click');
	elem.dispatchEvent(event);

	// dispatchEvent
	// 이벤트를 '실행시키다, 처리하다, 보내다, 발송하다'라는 뜻
	// html 페이지를 실행시키자마자 자동으로 이벤트가 실행되므로 --> isTrusted 속성의 값이 false

	// [2]
	// addEventListener 3번째 파라미터
	// 인자를 안 넣어준 디폴트는 false
	// true : 캡처링(상위 -> 하위 전파)
	// false : 버블링(하위 -> 상위 전파)
	const spans = document.querySelectorAll('span');
	spans.forEach((span) => {
		span.addEventListener(
			'click',
			function (event) {
				console.log(event.currentTarget.id);
				console.log(event.currentTarget.className);
			},
			true
		);
	});
};
