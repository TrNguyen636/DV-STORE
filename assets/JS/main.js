// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade", 
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* --- Mega navbar animation --- */
const triggers = document.querySelectorAll('.menu-trigger');
const grids = document.querySelectorAll('.mega-grid');

if (triggers.length > 0) {
    triggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {
            triggers.forEach(t => t.classList.remove('active'));
            grids.forEach(g => g.classList.remove('active'));

            trigger.classList.add('active');
            const targetId = trigger.getAttribute('data-target');
            const targetGrid = document.getElementById(targetId);

            if (targetGrid) {
                targetGrid.classList.add('active');
            }
        });
    });
}