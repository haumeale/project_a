const openBtn = document.querySelector('.header_search-btn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.closeModal')

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

// window.addEventListener('click', (event) => {
//     if (event.target == modal){
//         modal.style.display = 'none';
//     }
// })