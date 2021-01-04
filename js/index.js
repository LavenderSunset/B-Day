(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openCard = $('open'),
      closeCard = $('close'),
      timer = null;
      
  openCard.addEventListener('click', function () {
    console.log('opening...', card);
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeCard.addEventListener('click', function () {
    console.log('closing...', card);
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
