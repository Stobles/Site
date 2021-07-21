let btn = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let content = document.querySelector('.all');
let sidebar = document.querySelector('.menu');



    btn.addEventListener('click', (e) => {
        e.preventDefault

        let sidebarW = sidebar.offsetWidth
        menu.classList.toggle('active');
        content.classList.toggle('active');

        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
            btn.style.transform = `translateX(${sidebarW}px)`;
        } else {
            btn.style.transform = `translateX(${0}px)`;
        }

    });


