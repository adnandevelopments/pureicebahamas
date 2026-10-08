import { chromium } from "playwright";

const browser = await chromium.launch({ channel: "msedge" });
for (const [name, width] of [
  ["d", 1280],
  ["m", 390],
]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(900);
  const copy = page.getByText("Premium Bagged Ice");
  await copy.screenshot({ path: `d:/PureIce/pure-ice/.tmp-copy-${name}.png` });
  await page.close();
}
await browser.close();
