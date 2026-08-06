/**
 * ConectaAgro - Scripts Funcionais Básicos
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Menu Responsivo (Mobile)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active-menu');
            
            // Alternar ícone (Bars/Times)
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

    // Comportamento visual nos selects (Filtros)
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('change', (e) => {
            console.log(`Filtro [${e.target.name}] alterado para: ${e.target.value}`);
            // Aqui seria implementada a lógica de filtragem via JavaScript
        });
    });

});