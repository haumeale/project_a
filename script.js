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


// slide

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

///////

const indicators = document.querySelectorAll('.indicator');


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => showSlide(i));
});


//////

