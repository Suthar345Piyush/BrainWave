chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchData") {
    asyncFunctionThatFetchesData()
      .then((data) => {
        sendResponse({ success: true, data: data });
      })
      .catch((error) => {
        console.error("Error in async task:", error);
        sendResponse({ success: false, message: "Failed to fetch data" });
      });
    return true; // Ensures asynchronous response is allowed
  }
});

function asyncFunctionThatFetchesData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fetched Data Successfully");
    }, 1000);
  });
}
