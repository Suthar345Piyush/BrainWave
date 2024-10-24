function sendMessageToBackground() {
  try {
    chrome.runtime.sendMessage({ action: "fetchData" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Runtime error: ", chrome.runtime.lastError);
      } else {
        console.log("Response from background script:", response);
      }
    });
  } catch (error) {
    console.error("Caught an error while sending message:", error);
  }
}

// Ensure content script runs when the page is fully loaded
window.addEventListener("load", () => {
  sendMessageToBackground();
});
