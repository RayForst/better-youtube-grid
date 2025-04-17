# 🎬 Better YouTube Grid

**Better YouTube Grid** is a Chrome Extension that improves the layout of the YouTube subscriptions page by making the grid flexible and customizable.

By default, YouTube restricts the width of subscription items, leaving lots of unused space on large screens. This extension fixes that with a few lines of CSS.

## ✨ Features

- Responsive, customizable grid layout for the `/feed/subscriptions` page
- Adjustable column width (from 0 to 1000px) using a simple slider
- Dark mode-friendly popup interface
- "Apply" button to instantly reload and apply your custom layout

> This extension is tested and working as of **April 17, 2025**

## ⚙️ How it works

The extension injects a small snippet of CSS that redefines how the YouTube subscriptions grid behaves. You can change the minimum width of the grid items in real time through the popup interface.

```css
#contents {
  display: grid !important;
  max-width: none !important;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
}

#contents > ytd-rich-section-renderer {
  display: none;
}

#contents > ytd-rich-item-renderer {
  appearance: none;
  width: 100% !important;
  margin: 0 !important;
}
```
