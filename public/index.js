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
