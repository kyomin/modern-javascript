// DOM - innerHTML vs innerText

// [1]: innerHTML을 이용하여 body에 이미지 추가하기
window.onload = () => {
	// 문자열 변수 하나 생성
	let strHtml = '';
	strHtml += '<h1>제목: 랜덤 이미지</h1>';
	strHtml += "<img src='https://placeimg.com/200/100/any' ";
	strHtml += "width='400' height='300' />";

	// body에 붙이기
	// document.body.innerText = strHtml; // 텍스트 자체로 삽입 --> HTML 태그 사용 불가
	document.body.innerHTML = strHtml;
};
