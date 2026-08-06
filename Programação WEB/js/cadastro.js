document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('photo');
    const fileLabel = document.getElementById('file-label');
    const registerForm = document.getElementById('register-form');
    const birthdateInput = document.getElementById('birthdate');

    // Altera dinamicamente o texto do botão de arquivo ao selecionar imagem
    fileInput.addEventListener('change', function() {
        if (this.files && this.files.length > 0) {
            let fileName = this.files[0].name;
            if (fileName.length > 15) {
                fileName = fileName.substring(0, 12) + '...';
            }
            fileLabel.textContent = fileName;
            fileLabel.style.backgroundColor = '#d1fae5';
            fileLabel.style.borderColor = '#10b981';
            fileLabel.style.color = '#065f46';
        } else {
            fileLabel.textContent = 'Arquivo';
            fileLabel.style.backgroundColor = '';
            fileLabel.style.borderColor = '';
            fileLabel.style.color = '';
        }
    });

    // Filtro e máscara de entrada para Data de Nascimento (DD/MM/AAAA)
    birthdateInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, ''); 
        
        if (value.length > 2 && value.length <= 4) {
            value = value.replace(/^(\d{2})(\d+)/, '$1/$2');
        } else if (value.length > 4) {
            value = value.replace(/^(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
        }
        
        e.target.value = value;
    });

    // Simulação estável de envio do formulário com feedback visual
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btn = registerForm.querySelector('.btn-submit');
        const originalText = btn.textContent;
        
        btn.textContent = 'Criando conta...';
        btn.disabled = true;
        btn.style.opacity = '0.7';

        setTimeout(() => {
            alert('Conta criada com sucesso no sistema ConectaAgro!');
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.opacity = '1';
            registerForm.reset();
            
            // Reseta estilo do botão de upload
            fileLabel.textContent = 'Arquivo';
            fileLabel.style.backgroundColor = '';
            fileLabel.style.borderColor = '';
            fileLabel.style.color = '';
        }, 1200);
    });
});