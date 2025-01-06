# Extension to highlight the status of 'Applied' in Linkedin website

## How to Develop a Microsoft Edge Extension to Highlight the status of 'Applied' in Linkedin website

## 1. Project Overview
This guide explains how to develop an extension for Microsoft Edge to highlight specific HTML elements. The extension identifies elements with a certain class (`li.job-card-container__footer-item`) and changes the background color of the parent `<div>` to highlight it.

---

## 2. Project Structure
The extension folder should have the following structure:

```
linkedin_highlight/
├── manifest.json
├── content.js
```

### `manifest.json`

```json
{
  "manifest_version": 3,
  "name": "LinkedIn Job Card Highlighter",
  "version": "1.0",
  "description": "An extension to highlight specific job card",
  "permissions": ["activeTab"],
  "host_permissions": ["https://www.linkedin.com/*"],
  "content_scripts": [
    {
      "matches": ["https://www.linkedin.com/*"], //target website URL
      "js": ["content.js"]
    }
  ]
}
```

---

### `content.js`

```javascript
// Use MutationObserver to handle dynamic loading
const observer = new MutationObserver(() => {
  // Find <li> elements with the target class
  const searchResults = document.querySelectorAll('li.job-card-container__footer-item');

  // Iterate through each result and style the parent <div>
  searchResults.forEach(result => {
    if (result.textContent.trim() === "Applied") {
      // Find the closest parent <div> with the target class
      const parentDiv = result.closest('div.job-card-container');

      if (parentDiv) {
        // Apply highlight styles (change background color)
        parentDiv.style.backgroundColor = "grey"; // Grey background
        parentDiv.style.color = "white"; // White text
      }
    }
  });
});

// Observe DOM changes to handle dynamic elements
observer.observe(document.body, { childList: true, subtree: true });
```

---

## 3. Installing and Testing the Extension

### 1. **Load the Extension**
1. Open Microsoft Edge and navigate to `edge://extensions/`.
2. Enable "Developer mode."
3. Click "Load unpacked" and select the `linkedin_filter` folder.

### 2. **Activate the Extension**
- Ensure the extension appears in the list and toggle it on to activate it.

### 3. **Verify the Functionality**
- Navigate to the LinkedIn website (e.g., `https://www.linkedin.com/jobs`).
- Check if the `<div>` containing a `li` with the text `Applied` is highlighted with a black background.
  
---

## 4. Customization
### Change Background Color
To change the background color to gray, update the code as follows:

```javascript
parentDiv.style.backgroundColor = "gray"; // Gray background
```

### Add Borders
To add a border to the highlighted element:

```javascript
parentDiv.style.border = "2px solid red"; // Red border
```

### Emphasize Text
To make the text bold:

```javascript
parentDiv.style.fontWeight = "bold"; // Bold text
```

---

## 5. Notes
1. **MutationObserver**: Ensures dynamic elements loaded after the initial page load are handled.
2. **Security**: Limit `host_permissions` to specific domains for better security.
3. **Debugging**:
   - Use `console.log()` in the browser's Developer Tools to debug and verify functionality.
   - Test the extension thoroughly to ensure it behaves as expected.

---

## 6. Conclusion
This extension provides a simple method to highlight specific HTML elements in Microsoft Edge. By using `MutationObserver`, it handles dynamically loaded content. Users can customize styles like background color, borders, and text formatting to suit their needs.

If you have further questions or encounter issues, feel free to create a GitHub Issue!
