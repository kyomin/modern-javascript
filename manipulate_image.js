// 실전예제 - 작은 이미지 클릭시 큰 이미지로 변경하기

// 작은 이미지들 가져오기
const imgs = document.querySelectorAll('.small_img');

// [1]: 일반적인 for 반복문 사용 --> 순회하면서 --> 클릭(click) 이벤트 등록 --> 클릭시 큰 이미지의 속성 변경
// for (let i = 0; i < imgs.length; i++) {
// 	imgs[i].onclick = function () {
// 		document.getElementById('big_img').src = this.dataset.image;
// 	};
// }

// [2]: NodeList 객체의 forEach() 메서드를 사용하여 처리
imgs.forEach((elem) => {
	elem.addEventListener('click', function () {
		document.getElementById('big_img').src = this.dataset.image;
	});
});
