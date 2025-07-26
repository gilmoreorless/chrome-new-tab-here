function openNewTab(origTab, opts = { active: true }) {
	if (origTab) {
		opts.index = origTab.index + 1;
		opts.openerTabId = origTab.id;
	}
	chrome.tabs.create(opts);
}

chrome.commands.onCommand.addListener(function (command) {
	if (command === 'new-tab-here' || command === 'new-tab-here-background') {
		chrome.tabs.query({
			active: true,
			currentWindow: true,
		}, function (tabs) {
			openNewTab(tabs[0], {
				active: command === 'new-tab-here',
			});
		});
	}
});

chrome.action.onClicked.addListener(openNewTab);
