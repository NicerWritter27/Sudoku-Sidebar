chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install") {
        chrome.tabs.create({
            url: 'help.html'
        });
        chrome.contentSettings.notifications.set({
            primaryPattern: 'help.html*',
            setting: 'allow'
        });
    }
});