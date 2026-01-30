const mainSlider = new Swiper('.main-image-slider', {
    loop: true,
    slidesPerView: 2,
    autoplay: {
        delay: 1
    },
    speed: 5000,
});

document.querySelectorAll('section').forEach(section => {
    const ul = section.querySelector('.list');
    const button = section.querySelector('.more.filled');

    if (!ul || !button) return;

    ul.addEventListener('mouseenter', () => {
    button.classList.add('hovered');
    });

    ul.addEventListener('mouseleave', () => {
    button.classList.remove('hovered');
    });
});