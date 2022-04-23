// DOM - 노드 삭제

// [1]: 첫 번째 방식 --> 부모를 찾고 그 자식을 제거
// window.onload = () => {
// 	document.getElementById('btn').addEventListener('click', function () {
// 		let memList = document.getElementById('memberList');
// 		let p1 = document.getElementById('p1');
// 		memList.removeChild(p1);
// 	});
// };

/* ---------------------------------------- */

// [2]: 두 번째 방식
window.onload = () => {
	document.getElementById('btn').addEventListener('click', function () {
		let p1 = document.getElementById('p1');
		p1.parentNode.removeChild(p1); // p1의 부모 노드를 자동으로 알아서 찾은 다음에 자식 요소 삭제
	});
};
