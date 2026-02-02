(function () {
  var main = document.getElementById('main');
  var question = document.getElementById('question');
  var subtitle = document.getElementById('subtitle');
  var buttons = document.querySelector('.buttons');
  var responseEl = document.getElementById('response');
  var yesBtn = document.getElementById('yes');
  var noBtn = document.getElementById('no');
  var horseImage = document.getElementById('horseImage');

  // 'valentine' | 'sure1' | 'sure2' | 'sure3' | 'yay'
  var state = 'valentine';

  function showYay() {
    state = 'yay';
    question.textContent = 'Yay! Happy Valentine\'s Day!';
    question.className = 'question';
    subtitle.classList.add('hidden');
    subtitle.classList.remove('subtitle-normal');
    buttons.classList.add('hidden');
    responseEl.classList.add('hidden');
    horseImage.classList.remove('hidden');
  }

  function goToSure(level) {
    state = level;
    question.textContent = 'Are you sure?';
    question.className = 'question question-sure question-sure' + level;
    subtitle.classList.add('hidden');
    subtitle.classList.remove('subtitle-normal');
    if (level === 'sure3') {
      subtitle.classList.remove('hidden');
    }
  }

  function onSure3Click() {
    state = 'sure3-pause';
    buttons.classList.add('hidden');
    question.className = 'question';
    subtitle.classList.add('subtitle-normal');
    setTimeout(showYay, 3000);
  }

  yesBtn.addEventListener('click', function () {
    if (state === 'yay') return;
    if (state === 'sure3') {
      onSure3Click();
      return;
    }
    showYay();
  });

  noBtn.addEventListener('click', function () {
    if (state === 'yay') return;
    responseEl.classList.add('hidden');
    if (state === 'valentine') {
      goToSure('sure1');
    } else if (state === 'sure1') {
      goToSure('sure2');
    } else if (state === 'sure2') {
      goToSure('sure3');
    } else if (state === 'sure3') {
      onSure3Click();
    }
  });
})();
