const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const NovoCarrossel = document.querySelector('.conteiner');
const items = document.querySelectorAll('.conteiner-box');

const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight);
const totalItems = items.length;
const itemsPag = 4;
const pages = Math.ceil (totalItems / itemsPag); 

let CurrentPage = 0;

function ShowSlide(index){
    const offset = index * itemsPag * itemWidth;
    const maxOffset =  1800;
    const constrainedOffset = Math.min(offset, maxOffset);
    NovoCarrossel.style.transform = `TranslateX(-${constrainedOffset}px)`;
    //NovoCarrossel.style.transform = `TranslateX(-${offset}px)`;

    CurrentPage = index;
}

btnPrev.addEventListener('click', () =>{
    if (CurrentPage > 0 ){
        ShowSlide(CurrentPage - 1);
    }
    else {
        ShowSlide(pages - 1);
    }
})

btnNext.addEventListener('click', () => {
    if (CurrentPage < pages - 1){
        ShowSlide(CurrentPage + 1 );
    } else {
        ShowSlide(0);
    }
})

ShowSlide(CurrentPage);