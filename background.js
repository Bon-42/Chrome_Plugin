chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Check if the request is for a main frame (page)
    if (details.type === "main_frame") {
      const allowedDomains = ['youtube.com', 'leetcode.com', 'github.com', 'chat.openai.com'];
      const url = new URL(details.url);
      const isAllowed = allowedDomains.some(domain => url.hostname.includes(domain));
      return { cancel: !isAllowed };
    }
    // Allow all other types of requests (like scripts, CSS, images)
    return { cancel: false };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

