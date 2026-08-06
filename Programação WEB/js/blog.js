/**
 * ConectaAgro - Vanilla Script para a Seção Blog
 */

document.addEventListener('DOMContentLoaded', () => {

    // Mock de banco de dados baseado integralmente nas imagens de referência
    const dbPosts = {
        dicas: [
            {
                author: "João Pereira",
                location: "Brejões - BA",
                date: "12 de Abr. | 19:30",
                text: "Para manter o solo úmido e evitar o crescimento de plantas daninhas, uso cobertura morta com palha de milho. Tem feito toda a diferença aqui na lavoura!",
                img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80"
            },
            {
                author: "José Neto",
                location: "Cravolândia - BA",
                date: "15 de Jun. | 19:30",
                text: "Fiz a adubação orgânica com esterco curtido a cada 20 dias e percebi que o desenvolvimento das plantas bastante!",
                img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80"
            },
            {
                author: "Maria Eduarda",
                location: "Santa Inês - BA",
                date: "Ontem | 17:30",
                text: "Fiz a adubação orgânica com esterco curtido a cada 30 dias e percebi que o desenvolvimento das plantas bastante!",
                img: "https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80"
            },
            {
                author: "Elivaldo Santos",
                location: "Amargosa - BA",
                date: "Anteontem | 19:30",
                text: "Fiz a adubação orgânica com esterco curtido a cada 35 dias e percebi que o desenvolvimento das plantas bastante!",
                img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80"
            }
        ],
        servicos: [
            {
                author: "Maria Clara",
                location: "Jaguara - BA",
                date: "Hoje | 14:20",
                badge: "Preciso de Serviço",
                text: "Preciso de alguém para me ajudar na colheita de milho esta semana.",
                footerTag: "Colheita"
            },
            {
                author: "Ivoneide Alves",
                location: "Mutuípe - BA",
                date: "Ontem | 08:23",
                badge: "Preciso de Serviço",
                text: "Gostaria de uma pessoa para auxiliar na limpeza e organização de um pequeno depósito.",
                footerTag: "Auxiliar de Organização"
            },
            {
                author: "Camilla Vasconcelos",
                location: "Nova Itarana - BA",
                date: "Hoje | 13:12",
                badge: "Preciso de Serviço",
                text: "Procuro pessoa com trator para aragem da minha área.",
                footerTag: "Trator/Aragem"
            },
            {
                author: "Alex Brito",
                location: "Amargosa - BA",
                date: "Ontem | 21:49",
                badge: "Preciso de Serviço",
                text: "Preciso de uma pessoa para auxiliar no plantio de mudas no sítio.",
                footerTag: "Auxiliar de Plantio"
            }
        ]
    };

    const postsContainer = document.getElementById('postsContainer');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Elementos dinâmicos do cabeçalho de abas
    const mainMenuTitle = document.getElementById('mainMenuTitle');
    const mainMenuDesc = document.getElementById('mainMenuDesc');
    const subBanner = document.getElementById('subBanner');

    // Renderiza os posts com base na chave escolhida
    function renderCategory(category) {
        postsContainer.innerHTML = "";
        
        if(category === 'dicas') {
            // Ajustes de Texto e Layout do banner de Dicas
            mainMenuTitle.innerText = "Serviços";
            mainMenuDesc.innerText = "Compartilhe dicas de plantio e encontre serviços disponíveis na sua região.";
            subBanner.style.display = "flex";

            dbPosts.dicas.forEach(post => {
                const article = document.createElement('article');
                article.className = "post-card";
                article.innerHTML = `
                    <div class="post-meta-top">${post.date}</div>
                    <div class="author-block">
                        <div class="avatar-placeholder"><i class="fa-solid fa-user"></i></div>
                        <div class="author-info">
                            <h4>${post.author}</h4>
                            <div class="location-tag"><i class="fa-solid fa-location-dot"></i> ${post.location}</div>
                        </div>
                    </div>
                    <div class="post-body">
                        <p class="post-text">${post.text}</p>
                        <div class="post-media">
                            <img src="${post.img}" alt="Mídia do Post">
                        </div>
                    </div>
                    <div class="post-actions">
                        <button class="like-btn"><i class="fa-regular fa-thumbs-up"></i></button>
                    </div>
                `;
                postsContainer.appendChild(article);
            });
        } else {
            // Ajustes de Texto e Layout do banner de Serviços
            mainMenuTitle.innerText = "Preciso de Serviço";
            mainMenuDesc.innerText = "Encontre ou ofereça serviços na sua região.";
            subBanner.style.display = "none";

            dbPosts.servicos.forEach(post => {
                const article = document.createElement('article');
                article.className = "post-card";
                article.innerHTML = `
                    <div class="post-meta-top">${post.date}</div>
                    <div class="author-block">
                        <div class="avatar-placeholder"><i class="fa-solid fa-user"></i></div>
                        <div class="author-info">
                            <h4>${post.author}</h4>
                            <div class="location-tag"><i class="fa-solid fa-location-dot"></i> ${post.location}</div>
                        </div>
                    </div>
                    <span class="service-badge">${post.badge}</span>
                    <div class="post-body">
                        <p class="post-text">${post.text}</p>
                    </div>
                    <div class="post-actions" style="justify-content: space-between; border-top: none;">
                        <span class="tag-footer">${post.footerTag}</span>
                        <button class="btn-contact"><i class="fa-brands fa-whatsapp"></i> Entrar em contato</button>
                    </div>
                `;
                postsContainer.appendChild(article);
            });
        }
    }

    // Gerenciador de cliques das abas do menu superior
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            const targetButton = e.currentTarget;
            targetButton.classList.add('active');
            
            const targetTab = targetButton.getAttribute('data-tab');
            renderCategory(targetTab);
        });
    });

    // Inicializa a view padrão em Dicas de Plantio
    renderCategory('dicas');
});