(function () {
  var main = document.getElementById('main');
  var question = document.getElementById('question');
  var subtitle = document.getElementById('subtitle');
  var buttons = document.querySelector('.buttons');
  var responseEl = document.getElementById('response');
  var yesBtn = document.getElementById('yes');
  var noBtn = document.getElementById('no');
  var horseImage = document.getElementById('horseImage');
  var beggingHorse = document.getElementById('beggingHorse');

  // 'valentine' | 'sure1' | 'sure2' | 'sure3' | 'yay'
  var state = 'valentine';

  function showYay() {
    state = 'yay';
    question.textContent = 'Yay! Happy Valentine\'s Day!';
    question.className = 'question';
    subtitle.classList.add('hidden');
    subtitle.classList.remove('subtitle-normal', 'subtitle-blowup');
    buttons.classList.add('hidden');
    responseEl.classList.add('hidden');
    beggingHorse.classList.add('hidden');
    horseImage.classList.remove('hidden');
  }

  function goToMain() {
    state = 'valentine';
    question.textContent = 'Will you be my Valentine?';
    question.className = 'question';
    subtitle.classList.add('hidden');
    subtitle.classList.remove('subtitle-normal', 'subtitle-blowup');
    buttons.classList.remove('hidden');
    responseEl.classList.add('hidden');
    beggingHorse.classList.add('hidden');
  }

  function goToSure(level) {
    state = level;
    question.textContent = 'Are you sure?';
    question.className = 'question question-sure question-' + level;
    subtitle.classList.add('hidden');
    subtitle.classList.remove('subtitle-normal');
    if (level === 'sure3') {
      subtitle.classList.remove('hidden');
    }
    beggingHorse.classList.remove('hidden');
  }

  function onSure3Click() {
    state = 'sure3-pause';
    buttons.classList.add('hidden');
    question.className = 'question question-blowup';
    subtitle.classList.remove('subtitle-normal');
    subtitle.classList.add('subtitle-blowup');
    setTimeout(showYay, 3000);
  }

  yesBtn.addEventListener('click', function () {
    if (state === 'yay') return;
    responseEl.classList.add('hidden');
    if (state === 'valentine') {
      showYay();
    } else if (state === 'sure1') {
      goToSure('sure2');
    } else if (state === 'sure2') {
      goToSure('sure3');
    } else if (state === 'sure3') {
      onSure3Click();
    }
  });

  noBtn.addEventListener('click', function () {
    if (state === 'yay') return;
    responseEl.classList.add('hidden');
    if (state === 'valentine') {
      goToSure('sure1');
    } else if (state === 'sure1' || state === 'sure2' || state === 'sure3') {
      goToMain();
    }
  });
})();
