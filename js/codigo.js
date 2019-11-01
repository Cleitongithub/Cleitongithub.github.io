document.querySelector('.abrir').onclick = function() {
    document.documentElement.classList.add('ativo');
};
document.querySelector('.fechar').onclick = function() {
    document.documentElement.classList.remove('ativo');
};
window.alert("Bem Vindo a minha página conheça um pouco sobre mim!");
function grande(x) {
    x.style.width = "13%";
}
function normal(x) {
    x.style.width = "12%";
}
$('.menu-principal a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffetset = $(id).offset().top,
        menuHeight = $('.menu-principal').innerHeight();
    $('html, body').animate({
        scrollTop: targetOffetset -menuHeight
    }, 2500);
});