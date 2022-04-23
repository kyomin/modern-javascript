// DOM - li 엘리먼트의 특정 문자열로 li 요소 삭제하기

// [1]: li의 문자열 값으로 해당 요소 삭제 --> 함수 만들기
function removeElementByText(text) {
	const li = document.querySelectorAll('li'); // NodeList 객체를 반환

	// 1. 자바스크립트에서 Element 배열을 다룰 시 --> querySelectorAll은 NodeList 객체를 반환(배열과 차이점이 있다)
	// 2. NodeList 객체의 프로토타입 메서드 --> forEach 메서드를 이용하여 순회하면서 각 엘리먼트를 비교하여 조건 처리
	// 3. 모던 브라우저의 경우는 대부분 지원 --> 구브라우저(IE)는 지원하지 않는다.
	// 4. 그러면 이 메서드는 브라우저의 API라는 것을 알 수 있다. 그런데 JS에서도 호출해서 사용할 수 있다.
	// 5. NodeList와 Array의 가장 큰 차이점 --> NodeList는 자바스크립트 API가 아니고, 브라우저가 제공하는 API

	li.forEach((element) => {
		if (element.innerText === text) {
			element.parentNode.removeChild(element);
		}
	});
}

// [2]: 함수 호출
document.getElementById('btn').addEventListener('click', function () {
	removeElementByText('을지문덕');
});
