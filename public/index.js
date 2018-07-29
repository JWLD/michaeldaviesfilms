// TOGGLE EXTRA DETAILS PANEL
Array.from(document.querySelectorAll('.info-button')).forEach(function(button) {
  button.addEventListener('click', function(e) {
    var data = e.target.dataset;

    // get panel and panes
    var panel = document.querySelector('#panel-' + data.key);
    var panes = {
      awards: document.querySelector('#awards-' + data.key),
      info: document.querySelector('#info-' + data.key)
    }

    // toggle if panel is closed, or if open and on correct pane already
    if (!panel.classList.contains('panel-open') || !panes[data.pane].classList.contains('hidden')) {
      panel.classList.toggle('panel-open');
    }

    // show / hide correct panes
    panes[data.pane].classList.remove('hidden');
    var altPane = data.pane === 'awards' ? 'info' : 'awards';
    if (panes[altPane]) panes[altPane].classList.add('hidden');
  });
});

// SLIDE IN VIDEOS
Array.from(document.querySelectorAll('.video-wrap')).forEach(function(button) {
  button.addEventListener('click', function(e) {
    var videoBox = document.querySelector('#vimeo-' + button.dataset.key);

    // slide in
    videoBox.classList.add('show-video');

    // update src after animation finishes
    setTimeout(function() {
      videoBox.src = 'https://player.vimeo.com/video/' + button.dataset.vimeo + '?title=0&byline=0&portrait=0';
    }, 500);
  });
});

// JUMP TO DIV
Array.from(document.querySelectorAll('.scroll')).forEach(function(button) {
  button.addEventListener('click', function() {
    var target = document.querySelector('#sctn-' + button.dataset.target);
		window.scrollTo(0, target.offsetTop)

    // if mobile menu, then toggle
    if (!document.querySelector('.mobile-menu').classList.contains('hide-menu')) {
      toggleMobileMenu();
    }
  });
});

document.querySelector('.logo.desktop').addEventListener('click', function() {
	window.scrollTo(0, 0)
});

// TOGGLE MOBILE MENU
document.querySelector('.mobile-burger').addEventListener('click', function() {
  toggleMobileMenu();
});

function toggleMobileMenu() {
  var mobileMenu = document.querySelector('.mobile-menu');
  var burgerBars = Array.from(document.querySelectorAll('.burger-bar'));

  if (mobileMenu.classList.contains('hide-menu')) {
    burgerBars.forEach(function(bar) {
      bar.classList.add('animate');
    });
    mobileMenu.classList.remove('hide-menu');
  } else {
    burgerBars.forEach(function(bar) {
      bar.classList.remove('animate');
    });
    mobileMenu.classList.add('hide-menu');
  }
}
