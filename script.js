/*=============================== SIDEBAR*/

document.addEventListener('DOMContentLoaded', () =>{
    let fecharSidebar = document.getElementById('fechar-sidebar')
    let sidebar = document.getElementById('sidebar')
    let abrirSidebar = document.getElementById('menu-header')

    let sidebarAberta = false

    abrirSidebar.addEventListener('click', () => {
        if (!sidebarAberta) {
            // Se a sidebar estiver fechada, abra ela
            sidebar.style.right = '0';
            sidebarAberta = true;
        } else {
            // Se a sidebar estiver aberta, feche ela
            sidebar.style.right = '-33vw';
            sidebarAberta = false;
        }
    });

    fecharSidebar.addEventListener('click', () =>{
        sidebar.style.right = '-33vw';
        sidebarAberta = false;
    })
} );

/*=============================== PROGRESSO*/

// Função para iniciar a animação quando o elemento for visível
function iniciarAnimacaoQuandoVisivel(elementId, animationName) {
    const progressBar = document.getElementById(elementId);

    // Cria um observer para observar a interseção com o viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Se o elemento estiver visível, inicia a animação
                iniciarAnimacao(elementId, animationName);
                // Remove a classe 'animar' para que a animação não seja repetida
                progressBar.classList.remove('animar');
                // Desconecta o observer depois que a animação foi iniciada
                observer.disconnect();
            }
        });
    });

    // Observa o elemento alvo
    observer.observe(progressBar);
}

// Função para iniciar a animação
function iniciarAnimacao(elementId, animationName) {
    const progressBar = document.getElementById(elementId);

    // Ativa a visibilidade do elemento
    progressBar.style.visibility = 'visible';

    // Inicia a animação
    progressBar.style.animation = `${animationName} 1.3s ease-in-out forwards`;
}

// Chama iniciarAnimacaoQuandoVisivel para cada elemento
document.addEventListener('DOMContentLoaded', () => {
    iniciarAnimacaoQuandoVisivel('progresso-ps', 'progressoPS');
    iniciarAnimacaoQuandoVisivel('progresso-ia', 'progressoIA');
});


/*=============================== SLIDERS*/ 

let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
    }
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

showSlide(slideIndex);

/*=============================== comprar*/ 

function comprar(){
    window.open('https://wa.me/5514998631662', '_blank');
}


/*=============================== IMAGEM*/ 



document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.getElementById('close');

    const openImageElements = document.querySelectorAll('.open-image');

    openImageElements.forEach(function(element) {
        element.addEventListener('click', function() {
            const imgSrc = this.getAttribute('src');
            modalImg.setAttribute('src', imgSrc);
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});