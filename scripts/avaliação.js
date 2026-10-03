let contador =
    Number(localStorage.getItem("contadorAvaliacoes")) || 0;

console.log("Valor anterior:", contador);

contador++;

console.log("Novo valor:", contador);

localStorage.setItem(
    "contadorAvaliacoes",
    contador
);

document.querySelector("#totalAvaliacoes").textContent =
    contador;
    

document.querySelector("#anoAtual").textContent =
    new Date().getFullYear();

document.querySelector("#ultimaModificacao").textContent =
    document.lastModified;