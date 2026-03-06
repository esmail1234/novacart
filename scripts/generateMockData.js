import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_ASSETS = path.join(__dirname, '../public/assets');
const SRC_DATA = path.join(__dirname, '../src/data');

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.svg', '.png']);

function isImage(file) {
    return IMAGE_EXTS.has(path.extname(file).toLowerCase());
}

function titleCase(str) {
    return str
        .replace(/\.[^/.]+$/, '') // remove extension
        .replace(/\s+\d+$/, '')    // remove trailing " 1", " 2" etc
        .trim();
}

// ─── Scan Banners ──────────────────────────────────────────────────────
function scanBanners() {
    const bannerDir = path.join(PUBLIC_ASSETS, 'banner');
    if (!fs.existsSync(bannerDir)) return [];

    const files = fs.readdirSync(bannerDir).filter(isImage);
    // Group mobile/desktop by number (img1, img1_mobile)
    const groups = {};
    files.forEach(file => {
        const isMobile = file.includes('_mobile');
        const numMatch = file.match(/(\d+)/);
        const num = numMatch ? numMatch[1] : '1';
        const key = `img${num}`;
        if (!groups[key]) groups[key] = {};
        if (isMobile) groups[key].mobile = `/assets/banner/${file}`;
        else groups[key].desktop = `/assets/banner/${file}`;
    });

    const titles = [
        'The New Standard of Premium',
        'Elevate Your Lifestyle',
        'Performance Meets Elegance',
        'Designed For You',
        'Capture Every Moment',
    ];
    const subtitles = [
        'Shop the finest electronics and lifestyle products, curated just for you.',
        'Transform your daily routine with premium quality products.',
        'Discover cutting-edge technology at unbeatable prices.',
        'Experience the ultimate in comfort, style, and quality.',
        'Award-winning products handpicked by our experts.',
    ];

    return Object.entries(groups).map(([key, val], i) => ({
        id: i + 1,
        desktop: val.desktop || val.mobile || '',
        mobile: val.mobile || val.desktop || '',
        title: titles[i] || `Banner ${i + 1}`,
        subtitle: subtitles[i] || 'Shop the finest products.',
    }));
}

// ─── Scan Logo ─────────────────────────────────────────────────────────
function scanLogo() {
    const logoDir = path.join(PUBLIC_ASSETS, 'logo');
    if (!fs.existsSync(logoDir)) return null;
    const files = fs.readdirSync(logoDir).filter(isImage);
    return files.length > 0 ? `/assets/logo/${files[0]}` : null;
}

// ─── Scan Products ─────────────────────────────────────────────────────
const categoryMeta = {
    TV: { label: 'TVs & Displays', priceRange: [15000, 80000] },
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
        const meta = categoryMeta[cat] || { label: cat, priceRange: [500, 9999] };

        // Group files by product title (strip trailing number)
        const productGroups = {};
        files.forEach(file => {
            const rawTitle = titleCase(file);
            if (!productGroups[rawTitle]) productGroups[rawTitle] = [];
            productGroups[rawTitle].push(`/assets/products/${cat}/${file}`);
        });

        Object.entries(productGroups).forEach(([title, images]) => {
            if (usedTitles.has(title)) return; // skip dupes across categories
            usedTitles.add(title);

            const price = randomIn(meta.priceRange[0], meta.priceRange[1]);
            const isNew = Math.random() > 0.75;
            const isPopular = Math.random() > 0.65;

            products.push({
                id: `p${idCounter++}`,
                title,
                description: `Premium ${meta.label} – ${title}. High performance & reliability.`,
                price,
                originalPrice: parseFloat((price * (1 + Math.random() * 0.3)).toFixed(2)),
                rating: randomRating(),
                reviews: Math.floor(Math.random() * 800) + 10,
                image: images[0],
                thumbnails: images.slice(0, 4),
                categoryId: cat.toLowerCase(),
                category: meta.label,
                isNew,
                isPopular,
            });
        });
    });

    const uniqueCategories = categoryDirs.map(cat => ({
        id: cat.toLowerCase(),
        label: (categoryMeta[cat] || { label: cat }).label,
    }));

    return { products, categories: uniqueCategories };
}

// ─── Write Files ───────────────────────────────────────────────────────
function run() {
    if (!fs.existsSync(SRC_DATA)) fs.mkdirSync(SRC_DATA, { recursive: true });

    const banners = scanBanners();
    const logo = scanLogo();
    const { products, categories } = scanProducts();

    // assetManifest.ts
    const manifestContent = `// AUTO-GENERATED. Run: node scripts/generateMockData.js
export const LOGO_PATH = ${JSON.stringify(logo)};

export interface Banner {
  id: number;
  desktop: string;
  mobile: string;
  title: string;
  subtitle: string;
}

export const BANNERS: Banner[] = ${JSON.stringify(banners, null, 2)};
`;
    fs.writeFileSync(path.join(SRC_DATA, 'assetManifest.ts'), manifestContent, 'utf8');

    // mockProducts.ts
    const productsContent = `// AUTO-GENERATED. Run: node scripts/generateMockData.js
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
    fs.writeFileSync(path.join(SRC_DATA, 'mockProducts.ts'), productsContent, 'utf8');

    console.log(`✅ Generated ${banners.length} banners`);
    console.log(`✅ Logo: ${logo}`);
    console.log(`✅ Generated ${products.length} products across ${categories.length} categories`);
    console.log(`✅ Files written to src/data/`);
}

run();
