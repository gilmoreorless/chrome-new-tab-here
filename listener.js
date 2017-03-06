function openNewTab(origTab) {
	var opts = { active: true };
	if (origTab) {
		opts.index = origTab.index + 1;
		opts.openerTabId = origTab.id;
	}
	chrome.tabs.create(opts);
}

chrome.commands.onCommand.addListener(function (command) {
	if (command == 'new-tab-here') {
		chrome.tabs.query({
			active: true,
			currentWindow: true,
		}, function (tabs) {
			openNewTab(tabs[0]);
		});
	}
});

chrome.browserAction.onClicked.addListener(openNewTab);
