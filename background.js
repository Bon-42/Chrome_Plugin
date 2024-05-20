chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Check if the request is for a main frame (page)
    if (details.type === "main_frame") {
      const allowedDomains = ['https://www.youtube.com/watch?v=P48QELwruQs', 'https://www.youtube.com/watch?v=gCWaRhNUvfc', 'https://www.youtube.com/watch?v=FxJ3zPUU6Y4',
      'https://www.youtube.com/watch?v=mg7netw1JuM', 'leetcode.com', 'github.com', 'chat.openai.com', 'https://seanprashad.com/'] ;
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

