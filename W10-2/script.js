window.addEventListener('load', function() {
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
    //btn.classList.toggle('none');
    alert("Размер экрана устройства (ш х в): " + window.screen.width + " х " + window.screen.height + " пикселей");
  });

});