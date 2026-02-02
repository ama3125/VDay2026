(function () {
  var question = document.querySelector('.question');
  var buttons = document.querySelector('.buttons');
  var responseEl = document.getElementById('response');
  var yesBtn = document.getElementById('yes');
  var noBtn = document.getElementById('no');

  function showResponse(text) {
    responseEl.textContent = text;
    responseEl.classList.remove('hidden');
  }

  function moveNoButton() {
    var rect = noBtn.getBoundingClientRect();
    var maxX = window.innerWidth - rect.width - 24;
    var maxY = window.innerHeight - rect.height - 24;
    var x = 24 + Math.random() * (maxX - 24);
    var y = 24 + Math.random() * (maxY - 24);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
  }

  yesBtn.addEventListener('click', function () {
    question.textContent = 'Yay! Happy Valentine\'s Day!';
    buttons.classList.add('hidden');
    responseEl.classList.add('hidden');
    document.getElementById('horseImage').classList.remove('hidden');
  });

  noBtn.addEventListener('mouseenter', function () {
    if (buttons.classList.contains('hidden')) return;
    moveNoButton();
  });

  noBtn.addEventListener('click', function () {
    if (buttons.classList.contains('hidden')) return;
    showResponse('Are you sure? Try Yes!');
  });

  // Reset No button position on resize so it stays visible
  window.addEventListener('resize', function () {
    if (noBtn.style.position === 'fixed') {
      moveNoButton();
    }
  });
})();
