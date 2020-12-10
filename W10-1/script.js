window.addEventListener("load", function() {
  const btn = document.querySelector('.j-btn-test');
  const lightIcon = btn.querySelector('.light-icon');
  const darkIcon = btn.querySelector('.dark-icon');

  btn.addEventListener('click', () => {
    lightIcon.classList.toggle('none');
    darkIcon.classList.toggle('none');
  });
});