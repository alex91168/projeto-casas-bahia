document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carrossel = document.querySelector('.deuerro');
    const items = document.querySelectorAll('.conteineritem');

    const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight);
    const totalItems = items.length;
    const itemsPerPage = 9; 
    const totalPages = Math.ceil(totalItems/itemsPerPage); 
    const autoplayInterval = 4000;

    let currentPage = 0;

    function showSlide(index) {
        const offset = index * itemsPerPage * itemWidth;
        carrossel.style.transform = `translateX(-${offset}px)`;
        currentPage = index;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            showSlide(currentPage - 1);
        } else {
            showSlide(totalPages - 1); 
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            showSlide(currentPage + 1);
        } else {
            showSlide(0); 
        }
    });

    function autoSlide() {
        console.log('Auto slide chamado');
        if (currentPage < totalPages - 1) {
            showSlide(currentPage + 1);
        } else {
            showSlide(0); 
        }
    }

    function autoSlide(){
        console.log('');
        if (currentPage < totalPages - 1) {
            showSlide(currentPage + 1);
        } else {
            showSlide(0);
        }
    }
    setInterval(autoSlide, autoplayInterval); ativar slide
    showSlide(currentPage);
});
