// Renders public/resume.html -> public/resume.pdf using Puppeteer.
// Honors the existing @media print CSS in resume.html.
// Usage: node scripts/generate-resume-pdf.js
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, '..', 'public', 'resume.html');
const pdfPath = path.resolve(__dirname, '..', 'public', 'resume.pdf');

const browser = await puppeteer.launch({ headless: 'new' });
try {
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  // emulate print media so @media print rules apply
  await page.emulateMediaType('print');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', bottom: '12mm', left: '12mm', right: '12mm' },
  });
  console.log('PDF written to:', pdfPath);
} finally {
  await browser.close();
}
