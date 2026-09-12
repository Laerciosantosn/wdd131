const ano = document.querySelector("#anoAtual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");
const btnMobile = document.getElementById('btn-mobile')

const links = document.querySelectorAll('#menu a');

const paginaAtual = location.pathname.split('/').pop();


links.forEach(link => {
    const href = link.getAttribute('href');

    if (href === paginaAtual) {
        link.classList.add('active');
    }
})


const hoje = new Date();

ano.innerHTML = `${hoje.getFullYear()} `;
ultimaModificacao.innerHTML = ` ${document.lastModified}`

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu);