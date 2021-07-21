const block = document.querySelectorAll('.work__block');

document.querySelector('.categories').addEventListener('click', event => {
    if (event.target.tagName != 'li') return false;
    console.log(filterClass);

    let filterClass = event.target.dataset['filter'];

    block.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass != 'all') {
            elem.classList.add('hide');
            
        }
    })
})
