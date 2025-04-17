const slider = document.getElementById("slider");
const valueText = document.getElementById("value");
const applyButton = document.getElementById("apply");

chrome.storage.sync.get({ minWidth: 390 }, (data) => {
  slider.value = data.minWidth;
  valueText.textContent = data.minWidth;
});

slider.addEventListener("input", () => {
  const val = parseInt(slider.value);
  valueText.textContent = val;
  chrome.storage.sync.set({ minWidth: val });
});

applyButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => location.reload()
      });
    }
  });
});
