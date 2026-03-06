import fs from 'fs';
import path from 'path';

/**
 * Script to update image references in the codebase after renaming assets for SEO.
 * This script matches the logic used in renameAssets.js.
 */

const TARGET_DIRS = ['src']; // Directory to scan for code files
const ASSET_PREFIX = '/assets/products/';
const FILE_EXTS = ['.tsx', '.ts', '.js', '.jsx', '.css', '.html'];
const IMAGE_EXTS = ['.webp', '.jpg', '.jpeg', '.png', '.svg', '.avif', '.gif'];

function sanitizeFileName(fileName) {
    const ext = path.extname(fileName);
    const base = path.basename(fileName, ext);
    const sanitizedBase = base
        .replace(/\s+/g, '-')      // Spaces to hyphens
        .replace(/[()+,]/g, '-')   // Special chars to hyphens
        .replace(/-+/g, '-')       // Multiple hyphens to single
        .toLowerCase();
    return sanitizedBase + ext.toLowerCase();
}

let report = {
    filesScanned: 0,
    referencesReplaced: 0,
    details: []
};

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Regex to find occurrences of the asset prefix followed by an image filename
    // It captures the part after the prefix until the next quote, space, or bracket
    const regex = new RegExp(`${ASSET_PREFIX}([^"'\\s\\[\\]\\(\\)%?]+)`, 'g');

    content = content.replace(regex, (match, fileName) => {
        // Only sanitize if it ends with a known image extension
        const hasImageExt = IMAGE_EXTS.some(ext => fileName.toLowerCase().endsWith(ext));
        if (!hasImageExt) return match;

        // Split by '/' to handle subdirectories if any, but renameAssets.js was recursive
        // Our regex catches the whole relative path after /assets/products/
        const parts = fileName.split('/');
        const sanitizedParts = parts.map(part => {
            // If it's the actual filename (has extension), sanitize it
            if (IMAGE_EXTS.some(ext => part.toLowerCase().endsWith(ext))) {
                return sanitizeFileName(part);
            }
            // Otherwise it's a category/folder, usually already sanitized or simple
            return part.toLowerCase().replace(/\s+/g, '-');
        });

        const newPath = ASSET_PREFIX + sanitizedParts.join('/');

        if (match !== newPath) {
            changed = true;
            report.details.push({
                file: path.relative(process.cwd(), filePath),
                old: match,
                new: newPath
            });
            report.referencesReplaced++;
            return newPath;
        }
        return match;
    });

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
    report.filesScanned++;
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                walk(fullPath);
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            if (FILE_EXTS.includes(ext)) {
                processFile(fullPath);
            }
        }
    });
}

console.log('🚀 Starting image reference update...');

TARGET_DIRS.forEach(dir => {
    const fullDir = path.join(process.cwd(), dir);
    walk(fullDir);
});

console.log('\n--- 📊 UPDATE REPORT ---');
console.log(`Files Scanned: ${report.filesScanned}`);
console.log(`References Replaced: ${report.referencesReplaced}`);

if (report.details.length > 0) {
    console.log('\nDetails:');
    report.details.forEach(item => {
        console.log(`[${item.file}] ${item.old} -> ${item.new}`);
    });
} else {
    console.log('No outdated references found.');
}

console.log('\n✅ Task Complete!');
