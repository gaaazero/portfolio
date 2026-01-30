const bestSlider = new Swiper('.best-item-slider', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
        delay: 1
    },
    speed: 2000,
});

const instaSlider = new Swiper('.insta-slider', {
    loop: true,
    slidesPerView: 5,
    centeredSlides: true,
    autoplay: {
        delay: 1
    },
    speed: 3000,

});



let header = document.querySelector('header');
const langImg = document.querySelector('.lang img');

window.addEventListener('scroll', () => {
    if ( window.scrollY < 740 ) {
        header.classList.add('on')
        header.style.backgroundColor='transparent';
        header.style.border='none';
        langImg.src = 'images/language.png';


    } else {
        header.classList.remove('on')
        header.style.backgroundColor='#fff';
        header.style.border='1px solid #ddd';
        langImg.src = 'images/languagewh.png';
    }
})


const bigs   = document.querySelectorAll('.new-list > div:not(#detail-box)');
const thumbs = document.querySelectorAll('.new-section li');
const brandEl  = document.querySelector('#detail-box .brand');
const sloganEl = document.querySelector('#detail-box .slogan');

 if (thumbs.length > 0) {
   brandEl.textContent  = thumbs[0].dataset.brand || '';
   sloganEl.textContent = thumbs[0].dataset.slogan || '';
 }

thumbs.forEach((li, idx) => {
  li.addEventListener('click', () => {
    // 왼쪽 큰 이미지 전환
    const current = document.querySelector('.new-list .active');
    if (current) current.classList.remove('active');
    if (bigs[idx]) bigs[idx].classList.add('active');

    // 오른쪽 썸네일 선택 표시(선택 클래스가 .new 라면)
    const curThumb = document.querySelector('.new-section .new');
    if (curThumb) curThumb.classList.remove('new');
    li.classList.add('new');

    // 글자 갱신 (detail-box)
    brandEl.textContent  = li.dataset.brand || '';
    sloganEl.textContent = li.dataset.slogan || '';
  });
});