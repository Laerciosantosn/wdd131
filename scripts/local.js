// VARIAVEIS OBTER DATA E ULTIMA MODIFICAÇAO
const ano = document.querySelector("#anoAtual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

// VARIAVEIS ATIVAR LINK SELECIONADO
const links = document.querySelectorAll('#menu a');
const paginaAtual = location.pathname.split('/').pop();

// VARIAVEIS DO CALCULA DA SENSAÇÃO TERMICA
const TEMPERATURA = parseInt(document.querySelector("#temperature").textContent);
const VELOCIDADE_VENTO = parseInt(document.querySelector("#wind").textContent);
const windChillElement = document.getElementById("windChill")

const BASE = 13.12;
const FATOR_TEMPERATURA = 0.6215;
const FATOR_VENTO = 11.37;
const EXPOENTE_VENTO = 0.16;
const FATOR_INTERACAO = 0.3965;

const TEMPERATURA_MAXIMA = 10;
const VELOCIDADE_MINIMA = 4.8;


// ATIVAR O LINK SELECIONADO
links.forEach(link => {
    const href = link.getAttribute('href');

    if (href === paginaAtual) {
        link.classList.add('active');
    }
})
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}



// OBTER A DATA HOJE
const hoje = new Date();

// ADICIONAR NA PAGINA A DATA HOJE
ano.innerHTML = `${hoje.getFullYear()} `;

// ADICIONAR NA ÁGINA A ULTIMA DATA DE MODIGICAÇÃO
ultimaModificacao.innerHTML = ` ${document.lastModified}`




// CONDIÇÃO PARA O CALCULA DA SENSAÇÃO TERMICA
if (
    TEMPERATURA <= TEMPERATURA_MAXIMA &&
    VELOCIDADE_VENTO > VELOCIDADE_MINIMA
) {

    const sensacaoTermica =
        calcularSensacaoTermica(
            TEMPERATURA,
            VELOCIDADE_VENTO
        );

    windChillElement.textContent =
        `${sensacaoTermica.toFixed(1)} °C`;
}
else {
    windChillElement.textContent = "N/A";
}

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return (
        BASE +
        (FATOR_TEMPERATURA * temperatura) -
        (FATOR_VENTO *
            Math.pow(
                velocidadeVento,
                EXPOENTE_VENTO
            )) +
        (
            FATOR_INTERACAO *
            temperatura *
            Math.pow(
                velocidadeVento,
                EXPOENTE_VENTO
            )
        )
    );
}
