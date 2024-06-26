const openBtn = document.getElementById('header_search-btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('closeModal')

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

const hiddenOpen = document.getElementById('menu_burger')
const hiddenMenu = document.getElementById('menu_hidden')
const hiddenClose = document.getElementById('hidden_close')

hiddenOpen.addEventListener('click', () => {
    hiddenMenu.style.display = 'block';
})

hiddenClose.addEventListener('click', () => {
    hiddenMenu.style.display = 'none';
})