document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".fade-up");
  imgs.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add("show");
    }, 300 * (index + 1)); // 0.3초 간격으로 순차 등장
  });
});

document.querySelectorAll('.movie-list').forEach(list => {
  const img = list.querySelector('img');      // 포스터 이미지
  const button = list.querySelector('a.more'); // 예매하기 버튼

  if (img && button) {
    // 마우스 올렸을 때
    img.addEventListener('mouseenter', () => {
      button.classList.add('hovered');  // 버튼에 임의 클래스 추가
    });

    // 마우스 뗐을 때
    img.addEventListener('mouseleave', () => {
      button.classList.remove('hovered');
    });
  }
});