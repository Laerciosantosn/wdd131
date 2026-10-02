const ano = document.querySelector("#anoAtual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

const hoje = new Date();
// const dataUltimaModificacao = document.lastModified;


ano.innerHTML = `${hoje.getFullYear()} `;
ultimaModificacao.innerHTML = ` ${document.lastModified}`