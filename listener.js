chrome.extension.onRequest.addListener(function (request, sender) {
	if (request != 'newtab') {
		return;
	}
	chrome.tabs.create({
		index: sender.tab.index + 1,
		active: true
	});
});
