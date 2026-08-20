// Renders public/resume.html to a full-page PNG preview for visual QA.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, '..', 'public', 'resume.html');
const outPath = path.resolve(__dirname, '..', 'public', '_resume_preview.png');

const browser = await puppeteer.launch({ headless: 'new' });
try {
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath.split(path.sep).join('/'), { waitUntil: 'networkidle0' });
  await page.emulateMediaType('print');
  await page.screenshot({ path: outPath, fullPage: true });
  console.log('preview saved:', outPath);
} finally {
  await browser.close();
}
