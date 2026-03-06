import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const MOCK_PRODUCTS_PATH = path.join(__dirname, '../src/data/mockProducts.ts'); // عدل حسب مسار الملف عندك
const ASSETS_DIR = '/assets/products';

function sanitizeFilename(filename: string) {
    return filename
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-\.]/g, '')
        .replace(/-+/g, '-');
}

function updateMockProducts() {
    let content = fs.readFileSync(MOCK_PRODUCTS_PATH, 'utf-8');

    content = content.replace(/image:\s*['"]([^'"]+)['"]/g, (_, oldPath) => {
        const parsed = path.parse(oldPath);
        const sanitizedBase = sanitizeFilename(parsed.base);
        const newPath = path.join(ASSETS_DIR, parsed.dir.replace(/^\/?assets\/products\/?/i, ''), sanitizedBase)
            .replace(/\\/g, '/');
        return `image: '${newPath}'`;
    });

    fs.writeFileSync(MOCK_PRODUCTS_PATH, content, 'utf-8');
    console.log('✅ All mockProducts.ts image paths updated!');
}

updateMockProducts();