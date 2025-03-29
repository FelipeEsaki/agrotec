const menuIcon = document.getElementById('menu-icon');
const menuBar = document.getElementById('menu__bar');
const btnFechar = document.getElementById('close-btn');

const conceitos = document.getElementById('conceitos__menu');
const plantio = document.getElementById('plantio__menu');
const tecnicas = document.getElementById('tecnicas__menu');
const otimizacao = document.getElementById('otimizacao__menu');

menuIcon.addEventListener('click', () => {
    menuBar.style.top = '0';
    menuBar.style.transition = '.5s';
});

btnFechar.addEventListener('click', () => {
    menuBar.style.top = '-500%';
})

conceitos.addEventListener('click', () => {
    menuBar.style.top = '-500%';
})

plantio.addEventListener('click', () => {
    menuBar.style.top = '-500%';
})

tecnicas.addEventListener('click', () => {
    menuBar.style.top = '-500%';
})

otimizacao.addEventListener('click', () => {
    menuBar.style.top = '-500%';
})

