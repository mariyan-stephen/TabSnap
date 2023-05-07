document.getElementById('copyBtn').addEventListener('click', async () => {
  const tabs = await chrome.tabs.query({ currentWindow: true });
  const urls = tabs
    .filter(tab => !tab.url.startsWith('chrome://'))
    .map(tab => tab.url)
    .join('\n');
  try {
    await navigator.clipboard.writeText(urls);
    alert('URLs copied to clipboard!');
  } catch (err) {
    console.error('Error copying URLs: ', err);
  }
});
