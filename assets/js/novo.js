document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carrossel = document.querySelector('.deuerro');
    const items = document.querySelectorAll('.conteineritem');

    const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight);
    const totalItems = items.length;
    const itemsPerPage = 9; // Número de itens visíveis por vez
    const totalPages = Math.ceil(totalItems/itemsPerPage); //math.ceil é utilizado para arredondar para cima o número de totalpages
    const autoplayInterval = 5000;

    let currentPage = 0;

    function showSlide(index) {
        // Calcula o deslocamento
        const offset = index * itemsPerPage * itemWidth;

        // Aplica a transformação para mostrar os itens corretos
        carrossel.style.transform = `translateX(-${offset}px)`;

        // Atualiza a página atual
        currentPage = index;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            showSlide(currentPage - 1);
        } else {
            showSlide(totalPages - 1); // Loop para o final
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            showSlide(currentPage + 1);
        } else {
            showSlide(0); // Loop para o início
        }
    });

    function autoSlide() {
        console.log('Auto slide chamado');
        if (currentPage < totalPages - 1) {
            showSlide(currentPage + 1);
        } else {
            showSlide(0); // Loop para o início
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
    //setInterval(autoSlide, autoplayInterval); ativar slide
    showSlide(currentPage);
});
