/**
 * Lógica funcional da interface de Alerta de Pragas
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const selectCultura = document.getElementById('cultura');
    const selectCidade = document.getElementById('cidade');

    // Manipulador do botão "+ Cadastrar alerta"
    if (btnCadastrar) {
        btnCadastrar.addEventListener('click', () => {
            btnCadastrar.style.transform = 'scale(0.97)';
            setTimeout(() => {
                btnCadastrar.style.transform = 'scale(1)';
            }, 100);

            console.log('Ação: Inicializar fluxo de inserção de novo Alerta de Praga.');
            alert('Funcionalidade de cadastro acionada!');
        });
    }

    // Monitoramento de filtros
    const aplicarFiltros = () => {
        const culturaValue = selectCultura.value;
        const cidadeValue = selectCidade.value;
        
        console.log(`Filtrando por Cultura: ${culturaValue} | Cidade: ${cidadeValue}`);
        
        // Aqui constará a rotina assíncrona de filtragem dos elementos em ambiente de produção
    };

    if (selectCultura) {
        selectCultura.addEventListener('change', aplicarFiltros);
    }

    if (selectCidade) {
        selectCidade.addEventListener('change', aplicarFiltros);
    }
    
});