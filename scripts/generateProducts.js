import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_ASSETS = path.join(__dirname, '../public/assets');
const SRC_DATA = path.join(__dirname, '../src/data');

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.svg']);

function isImage(file) {
    return IMAGE_EXTS.has(path.extname(file).toLowerCase());
}

function sanitize(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-')      // Spaces to hyphens
        .replace(/[^a-z0-9\-\.]/g, '') // Remove special characters
        .replace(/-+/g, '-')       // Multiple hyphens to single
        .replace(/^-+|-+$/g, '');   // Trim hyphens from ends
}

function sanitizeFileSystem(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const ext = path.extname(item);
        const base = path.basename(item, ext);
        const sanitized = sanitize(base) + ext.toLowerCase();
        const newFullPath = path.join(dir, sanitized);

        if (fullPath !== newFullPath) {
            fs.renameSync(fullPath, newFullPath);
            console.log(`Renamed: ${item} -> ${sanitized}`);
        }

        if (fs.statSync(newFullPath).isDirectory()) {
            sanitizeFileSystem(newFullPath);
        }
    });
}

const categoryMeta = {
    tv: { label: 'TVs & Displays', priceRange: [15000, 80000] },
    airpodes: { label: 'AirPods', priceRange: [1500, 20000] },
    camera: { label: 'Cameras', priceRange: [10000, 90000] },
    earphones: { label: 'Earphones', priceRange: [500, 10000] },
    mobile: { label: 'Smartphones', priceRange: [5000, 80000] },
    mouse: { label: 'Mice & Keyboards', priceRange: [300, 5000] },
    printers: { label: 'Printers', priceRange: [3000, 25000] },
    processor: { label: 'Processors', priceRange: [8000, 60000] },
    refrigerator: { label: 'Refrigerators', priceRange: [15000, 60000] },
    speakers: { label: 'Speakers', priceRange: [800, 20000] },
    trimmers: { label: 'Trimmers', priceRange: [500, 5000] },
    watches: { label: 'Watches', priceRange: [1000, 25000] },
};

function randomIn(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function randomRating() {
    return parseFloat((Math.random() * 1.5 + 3.5).toFixed(1));
}

function humanize(str) {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function scanProducts() {
    const productsDir = path.join(PUBLIC_ASSETS, 'products');
    if (!fs.existsSync(productsDir)) return { products: [], categories: [] };

    const categoryDirs = fs.readdirSync(productsDir).filter(d =>
        fs.statSync(path.join(productsDir, d)).isDirectory()
    );

    const products = [];
    const usedTitles = new Set();
    let idCounter = 1;

    categoryDirs.forEach(cat => {
        const catPath = path.join(productsDir, cat);
        const files = fs.readdirSync(catPath).filter(isImage);
        const meta = categoryMeta[cat] || { label: humanize(cat), priceRange: [500, 9999] };

        // Group files by product title (strip trailing number/part like -1, -2)
        const productGroups = {};
        files.forEach(file => {
            const ext = path.extname(file);
            const base = path.basename(file, ext);
            const titleId = base.replace(/-\d+$/, ''); // boat-airdopes-111-1 -> boat-airdopes-111
            if (!productGroups[titleId]) productGroups[titleId] = [];
            productGroups[titleId].push(`/assets/products/${cat}/${file}`);
        });

        Object.entries(productGroups).forEach(([titleId, images]) => {
            if (usedTitles.has(titleId)) return;
            usedTitles.add(titleId);

            const title = humanize(titleId);
            const price = randomIn(meta.priceRange[0], meta.priceRange[1]);
            const isNew = Math.random() > 0.8;
            const isPopular = Math.random() > 0.7;

            products.push({
                id: titleId,
                title,
                description: `Experience the excellence of ${title}. Built with premium materials and cutting-edge technology to elevate your life.`,
                price,
                originalPrice: parseFloat((price * (1 + Math.random() * 0.4)).toFixed(2)),
                rating: randomRating(),
                reviews: Math.floor(Math.random() * 1000) + 12,
                image: images[0],
                thumbnails: images.slice(0, 4),
                categoryId: cat,
                category: meta.label,
                isNew,
                isPopular,
            });
        });
    });

    const uniqueCategories = categoryDirs.map(cat => ({
        id: cat,
        label: (categoryMeta[cat] || { label: humanize(cat) }).label,
    }));

    return { products, categories: uniqueCategories };
}

function scanBanners() {
    const bannerDir = path.join(PUBLIC_ASSETS, 'banner');
    if (!fs.existsSync(bannerDir)) return [];
    const files = fs.readdirSync(bannerDir).filter(isImage);
    const groups = {};
    files.forEach(file => {
        const isMobile = file.includes('mobile');
        const numMatch = file.match(/(\d+)/);
        const num = numMatch ? numMatch[1] : '1';
        const key = `img${num}`;
        if (!groups[key]) groups[key] = {};
        if (isMobile) groups[key].mobile = `/assets/banner/${file}`;
        else groups[key].desktop = `/assets/banner/${file}`;
    });

    const titles = ['Premium Experience', 'Modern Lifestyle', 'Cutting Edge Tech', 'Elegance & Power', 'Simply The Best'];
    const subtitles = ['Discover the future of shopping.', 'Level up your daily gear.', 'Performance meets design.', 'Crafted for perfection.', 'Award winning collections.'];

    return Object.entries(groups).map(([key, val], i) => ({
        id: i + 1,
        desktop: val.desktop || val.mobile || '',
        mobile: val.mobile || val.desktop || '',
        title: titles[i] || `Collection ${i + 1}`,
        subtitle: subtitles[i] || 'Exclusively at NovaCart.',
    }));
}

function scanLogo() {
    const logoDir = path.join(PUBLIC_ASSETS, 'logo');
    if (!fs.existsSync(logoDir)) return null;
    const files = fs.readdirSync(logoDir).filter(isImage);
    return files.length > 0 ? `/assets/logo/${files[0]}` : null;
}

function run() {
    console.log('🚀 Starting Asset Cleanup & Data Generation...');

    // 1. Sanitize the actual filesystem
    console.log('📂 Sanitizing filenames...');
    sanitizeFileSystem(PUBLIC_ASSETS);

    // 2. Scan and build data
    const logo = scanLogo();
    const banners = scanBanners();
    const { products, categories } = scanProducts();

    if (!fs.existsSync(SRC_DATA)) fs.mkdirSync(SRC_DATA, { recursive: true });

    // 3. Write manifest
    const manifestContent = `// AUTO-GENERATED
export const LOGO_PATH = ${JSON.stringify(logo)};
export const BANNERS = ${JSON.stringify(banners, null, 2)};
`;
    fs.writeFileSync(path.join(SRC_DATA, 'assetManifest.ts'), manifestContent);

    // 4. Write products
    const productsContent = `// AUTO-GENERATED
export interface Category {
  id: string;
  label: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  thumbnails: string[];
  categoryId: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export const categories: Category[] = ${JSON.stringify(categories, null, 2)};
export const mockProducts: Product[] = ${JSON.stringify(products, null, 2)};
`;
    fs.writeFileSync(path.join(SRC_DATA, 'products.ts'), productsContent);

    console.log(`✅ Success! Generated ${products.length} products and ${banners.length} banners.`);
}

run();
