window.onload = () => {
	const elem = document.getElementById('btn');
	elem.addEventListener('click', function () {
		alert('클릭했군요~ 1번');
		event.stopPropagation();
	});

	// stopPropagation를 하지 않으면 이벤트 전파로 인해 이 이벤트 리스너까지 실행된다.
	const elem2 = document.getElementById('btn2');
	elem2.addEventListener('click', function () {
		alert('클릭했군요~ 2번');
	});
};
