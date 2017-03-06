function openNewTab(origTab) {
	var opts = {active: true};
	if (origTab) {
		opts.index = origTab.index + 1;
	}
	chrome.tabs.create(opts);
}

chrome.commands.onCommand.addListener(function (command) {
	if (command == 'new-tab-here') {
		chrome.tabs.getSelected(openNewTab);
	}
});
