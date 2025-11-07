// scripts/copy-index-to-404.js
import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');

fs.copyFileSync(indexPath, notFoundPath);
console.log('✅ Copied index.html to 404.html');