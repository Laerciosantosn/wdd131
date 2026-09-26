let umCourso = {
    codigo: "WDD131",
    nome: "Fundamentos da Web Dinâmica",
    creditos: 2,
    secoes: [
        { secao: "001", matricula: 95, instrutor: "Joao Ferreira" },
        { secao: "002", matricula: 80, instrutor: "Isabela Chosta" }
    ]
};

function definirInformacoesCurso(curso) {
    document.querySelector("#nomeCurso").innerHTML = `${curso.codigo} - ${curso.nome}`;
}

function exibirSecoes(curso) {
    const tbody = document.querySelector("#secoes tbody")
    let linhas = "";
    for (const secao of curso.secoes) {
        console.log(secao)
        linhas += ` <tr>
            <td>${secao.secao}</td>
            <td>${secao.matricula}</td>
            <td>${secao.instrutor}</td>
            </tr>`;
    }
    tbody.innerHTML = linhas;
}

definirInformacoesCurso(umCourso);
exibirSecoes(umCourso);