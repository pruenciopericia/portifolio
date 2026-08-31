/* Menu recolhível — ativo apenas nas larguras em que o botão é exibido. */
(function () {
  var botao = document.querySelector('.menu-botao');
  var menu = document.getElementById('menu');
  if (!botao || !menu) return;

  var mq = window.matchMedia('(max-width: 840px)');

  function aplicar() {
    if (mq.matches) {
      menu.hidden = botao.getAttribute('aria-expanded') !== 'true';
    } else {
      menu.hidden = false;
      botao.setAttribute('aria-expanded', 'false');
    }
  }

  botao.addEventListener('click', function () {
    var aberto = botao.getAttribute('aria-expanded') === 'true';
    botao.setAttribute('aria-expanded', String(!aberto));
    aplicar();
  });

  mq.addEventListener('change', aplicar);
  aplicar();
})();
