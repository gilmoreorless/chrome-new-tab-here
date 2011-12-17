window.addEventListener('keydown', function (e) {
	if (e.keyCode == 84 && e.altKey && e.ctrlKey && e.metaKey) {
		chrome.extension.sendRequest('newtab');
	}
}, false);