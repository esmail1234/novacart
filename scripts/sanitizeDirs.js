import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const productsDir = path.join(__dirname, '..', 'public', 'assets', 'products');

function sanitize(name) {
    return name.toLowerCase().replace(/\s+/g, '-');
}

function processDirs(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            const sanitized = sanitize(item);
            const newFullPath = path.join(dir, sanitized);
            if (fullPath !== newFullPath) {
                fs.renameSync(fullPath, newFullPath);
                console.log(`Renamed Dir: ${item} -> ${sanitized}`);
            }
            processDirs(newFullPath); // recurse
        }
    });
}

console.log('📂 Sanitizing directory names...');
processDirs(productsDir);
console.log('✅ Directories sanitized!');
