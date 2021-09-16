const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/allUsers.html');
  await page.click('#showAllData');
  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();