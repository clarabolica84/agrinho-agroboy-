// =============================
// SCRIPT DE INTERAÇÕES
// =============================

// Botão de explorar máquinas
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
    const maquinasSection = document.getElementById('maquinas');
    maquinasSection.scrollIntoView({ behavior: 'smooth' });
});

// Botão de contato
const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', () => {
    alert('Obrigado pelo interesse! Em breve entraremos em contato.');
});