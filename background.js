chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: toggleDarkMode
    });
});

function toggleDarkMode() {
    chrome.runtime.sendMessage({action: "toggleDarkMode"});
}
