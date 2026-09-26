const ano = document.querySelector("#anoAtual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");
const btnMobile = document.getElementById('btn-mobile')

const links = document.querySelectorAll('#menu a');

const paginaAtual = location.pathname.split('/').pop();

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-05-22",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-03-15",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-05-17",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "London England",
        localizacao: "Cidade do México, México",
        consagracao: "1958-09-07",
        area: 42652,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Paris France Temple",
        localizacao: "Paris France",
        consagracao: "2017-05-21",
        area: 44175,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "St. George Utah Temple",
        localizacao: "George, Utah",
        consagracao: "1877-05-06",
        area: 143969,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Rome Italy",
        localizacao: "Rome, Italy",
        consagracao: "2019-04-10",
        area: 41010,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Adicione mais objetos de templos aqui...
];


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




// creando os cards

function toggleActive(element) {
    document.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
    });
    element.classList.add("active");
}

// document.querySelector('#all').addEventListener('click', () => {
//     toggleActive(document.querySelector('#all'));
//     createTempleCard(templos)
// });

// document.querySelector('#old').addEventListener('click', () => {
//     toggleActive(document.querySelector('#old'));
//     createTempleCard(templos.filter(templo => new Date(templo.consagracao) < new Date('1950-01-01')));
// });

// document.querySelector('#new').addEventListener('click', () => {
//     toggleActive(document.querySelector('#new'));
//     createTempleCard(templos.filter(templo => new Date(templo.consagracao) >= new Date('1950-01-01')));
// });

// document.querySelector('#large').addEventListener('click', () => {
//     toggleActive(document.querySelector('#large'));
//     createTempleCard(templos.filter(templo => templo.area >= 50000));
// });

// document.querySelector('#small').addEventListener('click', () => {
//     toggleActive(document.querySelector('#small'));
//     createTempleCard(templos.filter(templo => templo.area < 50000))
// })

const cutoffDate = new Date('1950-01-01');
const largeArea = 50000;

function setFiler(seletor, filterFunction) {
    const element = document.querySelector(seletor);
    
    element.addEventListener('click', () => {
        toggleActive(element);
        createTempleCard(templos.filter(filterFunction));
    });
}

setFiler('#all', () => templos);
setFiler('#old', templo => new Date( templo.consagracao) < cutoffDate)
setFiler('#new', templo => new Date(templo.consagracao) >= cutoffDate)
setFiler('#large', templo => templo.area >= largeArea);
setFiler('#small', templo => templo.area < largeArea);


// FILTRANDO OS OBJETO
createTempleCard(templos);

function createTempleCard(templos) {
    document.querySelector('.res-grid').innerHTML = '';

    templos.forEach(templo => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedication = document.createElement('p');
        let area = document.createElement('p');
        let img = document.createElement('img');

        name.textContent = templo.nomeDoTemplo;
        location.innerHTML = `<spam class="label">Localização</spam> ${templo.localizacao}`
        dedication.innerHTML = `<spam class="label">Dedicado</spam> ${templo.consagracao}`
        area.innerHTML = `<span class="label">Tamanho:</span> ${templo.area} pés²`
        img.setAttribute("src", templo.urlDaImagem);
        img.setAttribute("alt", `Templo ${templo.nomeDoTemplo}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);


        document.querySelector(".res-grid").appendChild(card)
    })

} 
