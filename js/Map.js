let button = document.querySelector('.location__btn')
let map = document.querySelector('.location__map')
button.addEventListener('click', (e) => {
    button.classList.add('active__btn');
    map.classList.add('active__map');
})
