document.querySelector('.abrir').onclick = function() {
    document.documentElement.classList.add('ativo');
};
document.querySelector('.fechar').onclick = function() {
    document.documentElement.classList.remove('ativo');
};
window.alert("Bem Vindo a minha Pagina conheça um pouco sobre mim!");
function grande(x) {
    x.style.width = "13%";
}
function normal(x) {
    x.style.width = "12%";
}