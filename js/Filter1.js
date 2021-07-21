const block = document.querySelectorAll('.work__block');

document.querySelector('.categories').addEventListener('click', event => {
    if (event.target.tagName != 'LI') return false;
    let filterClass = event.target.dataset['filter'];

    console.log(filterClass);

    block.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass != 'all') {
            elem.classList.add('hide');
            
        }
    })
})
