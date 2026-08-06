/**
 * Lógica de interface e interações do formulário
 */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const inputs = document.querySelectorAll('.input-group input');

    // Prevenção do envio padrão para demonstração
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            // Simula um feedback visual rápido no botão
            const btn = loginForm.querySelector('.btn-submit');
            const originalText = btn.textContent;
            
            btn.textContent = 'Carregando...';
            btn.style.opacity = '0.8';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
                console.log('Login submetido com sucesso.');
                // window.location.href = '/dashboard'; // Redirecionamento futuro
            }, 1000);
        }
    });

    // Efeitos sutis para melhorar a experiência do usuário nos inputs
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.opacity = '1';
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.parentElement.style.opacity = '0.9';
            }
        });
    });
});
