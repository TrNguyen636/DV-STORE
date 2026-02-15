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
/* assets/js/main.js */
const triggers = document.querySelectorAll('.menu-trigger');

if (triggers.length > 0) {
    triggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {
            // 1. Find which specific menu we are inside (Products OR Brands)
            const parentMenu = trigger.closest('.mega-content');

            // 2. Only remove 'active' from items INSIDE this specific menu
            // This prevents "Brands" from breaking "Products"
            parentMenu.querySelectorAll('.menu-trigger').forEach(t => t.classList.remove('active'));
            parentMenu.querySelectorAll('.mega-grid').forEach(g => g.classList.remove('active'));

            // 3. Make THIS trigger active
            trigger.classList.add('active');

            // 4. Show the matching grid
            const targetId = trigger.getAttribute('data-target');
            const targetGrid = document.getElementById(targetId);

            if (targetGrid) {
                targetGrid.classList.add('active');
            }
        });
    });
}