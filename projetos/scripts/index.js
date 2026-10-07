
const ano = document.querySelector("#anoAtual");
const hoje = new Date();


document.addEventListener('DOMContentLoaded', () => {

    let currentPage = window.location.pathname.split('/').pop();

    if (currentPage === '' || currentPage === '/') {
        currentPage = 'index.html';
    }

    const menuLinks = document.querySelectorAll('.nav-desktop a, .mobile-menu a');

    menuLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

ano.innerHTML = `${hoje.getFullYear()} `;
