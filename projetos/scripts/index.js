
const ano = document.querySelector("#anoAtual");
const hoje = new Date();


document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtém o nome do arquivo atual a partir da URL
    let currentPage = window.location.pathname.split('/').pop();

    // Se a página for a raiz "/" ou estiver vazia, considera como 'index.html'
    if (currentPage === '' || currentPage === '/') {
        currentPage = 'index.html';
    }

    // 2. Seleciona todos os links do menu desktop e mobile
    const menuLinks = document.querySelectorAll('.nav-desktop a, .mobile-menu a');

    // 3. Percorre os links e adiciona a classe 'active' apenas no correspondente
    menuLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        // Compara o href do link com a página atual
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 4. Lógica para abrir/fechar o menu hambúrguer no mobile
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

ano.innerHTML = `${hoje.getFullYear()} `;