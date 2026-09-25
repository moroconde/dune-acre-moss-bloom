import { chromium } from "playwright";

const browser = await chromium.launch({
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage({
  viewport: { width: 1792, height: 1008 },
  deviceScaleFactor: 1,
});
await page.goto("file:///workspace/.grok/og-card.html", {
  waitUntil: "load",
  timeout: 15000,
});
await page.waitForTimeout(200);
await page.screenshot({
  path: "/workspace/.grok/og-html.png",
  type: "png",
  clip: { x: 0, y: 0, width: 1792, height: 1008 },
});
await browser.close();
console.log("wrote /workspace/.grok/og-html.png");
