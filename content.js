function applyStyles(minWidth) {
  const styleId = 'better-yt-grid-style';
  let style = document.getElementById(styleId);
  if (!style) {
    style = document.createElement('style');
    style.id = styleId;
    document.head.appendChild(style);
  }

  style.textContent = `
    #contents {
        display: grid !important;
        max-width: none !important;
        gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(${minWidth}px, 1fr));
    }

    #contents > ytd-rich-section-renderer {
        display: none;
    }

    #contents > ytd-rich-item-renderer {
        appearance: none;
        width: 100% !important;
        margin: 0 !important;
    }
  `;
}

chrome.storage.sync.get({ minWidth: 390 }, (data) => {
  const observer = new MutationObserver(() => {
    if (document.querySelector('#contents')) {
      applyStyles(data.minWidth);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});