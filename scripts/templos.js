const ano = document.querySelector("#anoAtual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");
const btnMobile = document.getElementById('btn-mobile')


const hoje = new Date();

ano.innerHTML = `${hoje.getFullYear()} `;
ultimaModificacao.innerHTML = ` ${document.lastModified}`

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu);