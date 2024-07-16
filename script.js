const openBtn = document.getElementById('header_search-btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('closeModal')
const openHiddenSearch = document.getElementById('menu_search')

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

openHiddenSearch.addEventListener('click', () => {
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
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