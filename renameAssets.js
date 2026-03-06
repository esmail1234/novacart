import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const productsDir = path.join(__dirname, 'public', 'assets', 'products');

function sanitizeFileName(fileName) {
    return fileName
        .replace(/\s+/g, '-')      // يحول المسافات لـ "-"
        .replace(/[()+,]/g, '-')   // يحول الرموز + ( ) , لـ "-"
        .replace(/-+/g, '-')       // يقلل - المتتابعة لـ واحدة
        .toLowerCase();
}

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else {
            const ext = path.extname(file);
            const sanitized = sanitizeFileName(path.basename(file, ext)) + ext.toLowerCase();
            const newFullPath = path.join(dir, sanitized);
            if (fullPath !== newFullPath) {
                fs.renameSync(fullPath, newFullPath);
                console.log(`Renamed: ${file} -> ${sanitized}`);
            }
        }
    });
}

console.log('🚀 Sanitizing product images...');
walkDir(productsDir);
console.log('✅ All product images sanitized!');