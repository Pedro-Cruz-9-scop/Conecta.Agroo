// Controle de exibição do menu de navegação em telas pequenas
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const navContainer = document.getElementById('navContainer');

    if (mobileToggle && navContainer) {
        mobileToggle.addEventListener('click', () => {
            navContainer.classList.toggle('open');
            
            // Altera dinamicamente o ícone ao abrir/fechar
            const iconElement = mobileToggle.querySelector('.material-symbols-outlined');
            if (navContainer.classList.contains('open')) {
                iconElement.textContent = 'close';
            } else {
                iconElement.textContent = 'menu';
            }
        });
    }
});