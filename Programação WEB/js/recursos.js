/**
 * ConectaAgro - Scripts Funcionais da Página de Recursos
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Responsivo (Mobile)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active-menu');
            
            // Alternar ícone (Hamburguer / X)
            const icon = mobileMenuBtn.querySelector('i');
            if(navLinks.classList.contains('active-menu')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Comportamento do Formulário (Dicas de Plantio)
    const tipForm = document.getElementById('tipForm');
    const tipInput = document.getElementById('tipInput');

    if (tipForm) {
        tipForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página

            const tipValue = tipInput.value.trim();
            
            if (tipValue !== "") {
                // Simula o envio da dica
                alert("Obrigado por compartilhar! Sua dica foi enviada com sucesso.");
                tipInput.value = ""; // Limpa o input após enviar
            } else {
                alert("Por favor, escreva uma dica antes de compartilhar.");
                tipInput.focus();
            }
        });
    }

    // A animação do Gauge (Gráfico de Umidade) já é tratada inteiramente
    // via CSS (propriedade transform: rotate e transition).
});