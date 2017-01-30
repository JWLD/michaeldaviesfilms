function loadPage(page) {
    $('.content.about').css('left', 0);
}

// slide video in from left
function playVideo(url, box) {
	$(box.childNodes[1]).css('left', '0px');

	// load embedded vimeo
	setTimeout(function() {
		$(box.childNodes[1]).attr('src', 'https://player.vimeo.com/video/' + url + '?title=0&byline=0&portrait=0');
	}, 500);
}

// scroll down page to div
function jumpTo(dest) {
    if (dest !== null) {
        if (dest == 'landing') {
            var target = '.section.' + dest;
        } else {
            var target = '.divider.' + dest;
        }

		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	}
}

// toggle extra panel below videos
function toggleExtraPanel(panel, pane) {
    var element = '.extraPanel.' + panel;

    // open panel
    if ($(element).css('height') > '1px' && $(element + ' .extra.' + pane).css('display') == 'flex') {
		$(element).css('height', '0px');
    } else {
        $(element).css('height', '225px');
    }

    // deactivate active pane, and activate new pane
    $(element).children().css('display', 'flex').css('display', 'none');
    $(element + ' .extra.' + pane).css('display', 'flex');
}
