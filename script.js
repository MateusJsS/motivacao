// Seleciona o elemento do carrinho
const carrinho = document.getElementById('carrinho');

// Variáveis para controlar o movimento
let isDragging = false; // Variável para saber se o carrinho está sendo arrastado
let offsetX = 0; // Deslocamento inicial do cursor em relação ao carrinho

// Adiciona eventos de mouse
carrinho.addEventListener('mousedown', iniciarArraste);
document.addEventListener('mousemove', moverCarrinho);
document.addEventListener('mouseup', pararArraste);

// Adiciona eventos para dispositivos móveis
carrinho.addEventListener('touchstart', iniciarArraste);
document.addEventListener('touchmove', moverCarrinho);
document.addEventListener('touchend', pararArraste);

// Função para iniciar o arraste
function iniciarArraste(event) {
    isDragging = true; // Indica que o carrinho está sendo arrastado
    offsetX = (event.clientX || event.touches[0].clientX) - carrinho.offsetLeft; // Calcula o deslocamento inicial
    carrinho.style.cursor = 'grabbing'; // Altera o cursor para "grabbing" (mão fechada)
}

// Função para mover o carrinho
function moverCarrinho(event) {
    if (!isDragging) return; // Se não estiver arrastando, não faz nada

    // Pega a posição atual do cursor ou toque
    const atualX = event.clientX || event.touches[0].clientX;
    const pista = carrinho.parentElement; // Pega a referência da pista (pai do carrinho)

    // **Correção: calculamos a nova posição diretamente**
    // Em vez de usar um deslocamento cumulativo, usamos o `atualX` menos o `offsetX`.
    const novaPosicao = atualX - offsetX;

    // **Correção: limite de movimento do carrinho**
    // Garantimos que o carrinho não ultrapasse os limites da pista.
    if (novaPosicao >= 0 && novaPosicao <= pista.offsetWidth - carrinho.offsetWidth) {
        carrinho.style.left = `${novaPosicao}px`; // Atualiza a posição do carrinho
    }

    // **Correção: verificação mais precisa do final da pista**
    // Adicionamos uma tolerância de 5px para evitar imprecisões em dispositivos móveis.
    if (novaPosicao >= pista.offsetWidth - carrinho.offsetWidth - 5) {
        abrirNovaPagina(); // Chama a função para abrir a nova página
        pararArraste(); // Para o arraste imediatamente
    }
}

// Função para parar o arraste
function pararArraste() {
    isDragging = false; // Indica que o carrinho não está mais sendo arrastado
    carrinho.style.cursor = 'grab'; // Retorna o cursor para "grab" (mão aberta)
}

// Função para abrir nova página
function abrirNovaPagina() {
    // Redireciona para 'mensagem.html'
    window.location.href = 'mensagem.html'; }

//reinciar o jogo

function reiniciarjogo(){
    location.reload()
}

