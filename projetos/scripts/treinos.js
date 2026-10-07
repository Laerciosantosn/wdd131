
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


const treinos = [
    {
        titulo: "Musculação",
        texto: "Aumente sua força, hipertrofia e definição muscular com nossa estrutura completa de pesos livres e máquinas de alta performance.",
        isDark: false,
        rowReverse: false,
        imagens: [
            { alt: "Halteres", url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&auto=format&fit=crop" },
            { alt: "Anilhas", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&auto=format&fit=crop" },
            { alt: "Supino", url: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=800&auto=format&fit=crop" },
            { alt: "Crossfit", url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300&auto=format&fit=crop" },
            { alt: "Academia", url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=300&auto=format&fit=crop" },
            { alt: "Treino Biceps", url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=300&auto=format&fit=crop" }
        ],
        destaque: {
            titulo: "Acompanhamento Profissional",
            texto: "Treinos adaptados para todos os níveis, do iniciante ao avançado, com foco em segurança e evolução constante.",
            url: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=800&auto=format&fit=crop",
            alt: "Destaque Musculação"
        }
    },
    {
        titulo: "Funcional",
        texto: "Desenvolva agilidade, equilíbrio, resistência e força de forma dinâmica com exercícios que preparam seu corpo para o dia a dia.",
        isDark: true,
        rowReverse: true,
        imagens: [
            { alt: "Kettlebell", url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&auto=format&fit=crop" },
            { alt: "Corda Naval", url: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=300&auto=format&fit=crop" },
            { alt: "Agachamento", url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=300&auto=format&fit=crop" },
            { alt: "Cardio Funcional", url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&auto=format&fit=crop" },
            { alt: "Caixa Salto", url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300&auto=format&fit=crop" },
            { alt: "Flexão", url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=300&auto=format&fit=crop" }
        ],
        destaque: {
            titulo: "Aulas em Grupo Motivadoras",
            texto: "Treine com energia máxima em circuitos dinâmicos pensados para queimar calorias e superar limites.",
            url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&auto=format&fit=crop",
            alt: "Destaque Funcional"
        }
    },
    {
        titulo: "Cardio",
        texto: "Melhore sua capacidade cardiorrespiratória e queime gordura com esteiras, elípticos e bicicletas de última geração.",
        isDark: false,
        rowReverse: false,
        imagens: [
            { alt: "Esteira", url: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=300&auto=format&fit=crop" },
            { alt: "Corrida", url: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=300&auto=format&fit=crop" },
            { alt: "Bike Spin", url: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=300&auto=format&fit=crop" },
            { alt: "Elíptico", url: "https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?w=300&auto=format&fit=crop" },
            { alt: "Simulador Escada", url: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=300&auto=format&fit=crop" },
            { alt: "Remo Ergométrico", url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=300&auto=format&fit=crop" }
        ],
        destaque: {
            titulo: "Monitoramento e Alta Performance",
            texto: "Equipamentos modernos integrados com medidores de frequência para você acompanhar seu desempenho em tempo real.",
            url: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&auto=format&fit=crop",
            alt: "Destaque Cardio"
        }
    }
];

function getFavoritos() {
    return JSON.parse(localStorage.getItem('treinosFavoritos')) || [];
}

function toggleFavorito(tituloTreino) {
    let favoritos = getFavoritos();
    if (favoritos.includes(tituloTreino)) {
        favoritos = favoritos.filter(item => item !== tituloTreino);
    } else {
        favoritos.push(tituloTreino);
    }
    localStorage.setItem('treinosFavoritos', JSON.stringify(favoritos));
    return favoritos;
}

function createWorkoutCards(listaTreinos) {
    const mainContent = document.querySelector('.main-content');

    if (!mainContent) {
        console.error("Erro: Não foi encontrado nenhum elemento com a classe '.main-content' no HTML.");
        return;
    }

    mainContent.innerHTML = '';

    listaTreinos.forEach((treino, index) => {
        let section = document.createElement('section');
        section.className = `workout-section${treino.isDark ? ' section-dark' : ''}`;

        let container = document.createElement('div');
        container.className = `container workout-grid${treino.rowReverse ? ' row-reverse' : ''}`;

        let workoutInfo = document.createElement('div');
        workoutInfo.className = 'workout-info';

        let title = document.createElement('h2');
        title.className = 'workout-title';
        title.textContent = treino.titulo;

        let text = document.createElement('p');
        text.className = 'text-main';
        text.textContent = treino.texto;

        let thumbGrid = document.createElement('div');
        thumbGrid.className = 'thumb-grid';

        treino.imagens.forEach(imgData => {
            let thumbItem = document.createElement('div');
            thumbItem.className = 'thumb-item';

            let img = document.createElement('img');
            img.setAttribute('src', imgData.url);
            img.setAttribute('alt', imgData.alt);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('decoding', 'async');

            thumbItem.appendChild(img);
            thumbGrid.appendChild(thumbItem);
        });

        workoutInfo.appendChild(title);
        workoutInfo.appendChild(text);
        workoutInfo.appendChild(thumbGrid);

        let featuredCard = document.createElement('div');
        featuredCard.className = 'featured-card';

        let featuredImgWrapper = document.createElement('div');
        featuredImgWrapper.className = 'featured-img-wrapper';

        let featuredImg = document.createElement('img');
        featuredImg.setAttribute('src', treino.destaque.url);
        featuredImg.setAttribute('alt', treino.destaque.alt);

        if (index === 0) {
            featuredImg.setAttribute('loading', 'eager');
            featuredImg.setAttribute('fetchpriority', 'high');
        } else {
            featuredImg.setAttribute('loading', 'lazy');
            featuredImg.setAttribute('decoding', 'async');
        }

        featuredImgWrapper.appendChild(featuredImg);

        let featuredBody = document.createElement('div');
        featuredBody.className = 'featured-body';

        let featuredTitle = document.createElement('h3');
        featuredTitle.textContent = treino.destaque.titulo;

        let featuredText = document.createElement('p');
        featuredText.textContent = treino.destaque.texto;

        let btnLike = document.createElement('button');
        btnLike.className = 'btn-favorito';

        let favoritos = getFavoritos();
        let estaCurtido = favoritos.includes(treino.titulo);

        if (estaCurtido) {
            btnLike.textContent = '❤️ Curtido';
            btnLike.classList.add('active');
        } else {
            btnLike.textContent = '🤍 Curtir';
        }

        btnLike.addEventListener('click', () => {
            let novosFavoritos = toggleFavorito(treino.titulo);
            let curtiu = novosFavoritos.includes(treino.titulo);

            if (curtiu) {
                btnLike.textContent = '❤️ Curtido';
                btnLike.classList.add('active');
            } else {
                btnLike.textContent = '🤍 Curtir';
                btnLike.classList.remove('active');
            }
        });

        featuredBody.appendChild(featuredTitle);
        featuredBody.appendChild(featuredText);
        featuredBody.appendChild(btnLike);

        featuredCard.appendChild(featuredImgWrapper);
        featuredCard.appendChild(featuredBody);

        container.appendChild(workoutInfo);
        container.appendChild(featuredCard);
        section.appendChild(container);

        mainContent.appendChild(section);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createWorkoutCards(treinos);
});