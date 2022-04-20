// DOM - 사용자 입력 폼과 노드 추가

// [1]: 버튼 클릭시 사용자 이름과 홈페이지 주소가 body에 추가
window.onload = () => {
	document.getElementById('btn').addEventListener('click', function () {
		// 사용자 입력 값
		const user_name = document.getElementById('user_name');
		const user_home = document.getElementById('user_home');

		console.log(user_name.value);
		console.log(user_home.value);

		// a 태그 노드 생성 및 href 속성 셋팅하며 추가
		let aTagNode = document.createElement('a');
		aTagNode.href = user_home.value;

		// 텍스트 노드 생성 및 aTagNode의 자식으로 붙이기
		let txtNode = document.createTextNode(user_name.value);
		aTagNode.appendChild(txtNode);

		// memberList에 붙이기
		let memList = document.getElementById('memberList');
		let br = document.createElement('br');

		memList.appendChild(aTagNode);
		memList.appendChild(br);

		// 추가 후 입력 값들 초기화
		user_name.value = '';
		user_home.value = '';
	});
};
