function openNewTab(origTab) {
	var opts = {active: true};
	if (origTab) {
		opts.index = origTab.index + 1;
	}
	chrome.tabs.create(opts);
}

chrome.extension.onRequest.addListener(function (request, sender) {
	if (request == 'newtab') {
		openNewTab(sender.tab);
	}
});

chrome.commands.onCommand.addListener(function (command) {
	if (command == 'newtab') {
		chrome.tabs.getSelected(openNewTab);
	}
});
