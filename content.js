// Function to hide thumbnails of YouTube Shorts
function hideShortsThumbnails() {
  const shortsThumbnails = document.querySelectorAll('ytm-shorts-lockup-view-model-v2, ytm-shorts-lockup-view-model');

  shortsThumbnails.forEach(thumbnail => {
    thumbnail.style.display = 'none';
  });
}

// Observe changes to the DOM to hide thumbnails dynamically
const observer = new MutationObserver(hideShortsThumbnails);
observer.observe(document.body, { childList: true, subtree: true });

// Initial call to hide thumbnails on page load
hideShortsThumbnails();
