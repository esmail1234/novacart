// AUTO-GENERATED. Run: node scripts/generateMockData.js
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

export const categories: Category[] = [
  {
    "id": "airpodes",
    "label": "AirPods"
  },
  {
    "id": "camera",
    "label": "Cameras"
  },
  {
    "id": "earphones",
    "label": "Earphones"
  },
  {
    "id": "mobile",
    "label": "Smartphones"
  },
  {
    "id": "mouse",
    "label": "Mice & Keyboards"
  },
  {
    "id": "printers",
    "label": "Printers"
  },
  {
    "id": "processor",
    "label": "Processors"
  },
  {
    "id": "refrigerator",
    "label": "Refrigerators"
  },
  {
    "id": "speakers",
    "label": "Speakers"
  },
  {
    "id": "trimmers",
    "label": "Trimmers"
  },
  {
    "id": "tv",
    "label": "TVs & Displays"
  },
  {
    "id": "watches",
    "label": "Watches"
  }
];

export const mockProducts: Product[] = [
  {
    "id": "p1",
    "title": "boat-airdopes-111-1",
    "description": "Premium AirPods – boat-airdopes-111-1. High performance & reliability.",
    "price": 4406.73,
    "originalPrice": 5609.28,
    "rating": 4.9,
    "reviews": 748,
    "image": "/assets/products/airpodes/boat-airdopes-111-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-111-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p2",
    "title": "boat-airdopes-111-2",
    "description": "Premium AirPods – boat-airdopes-111-2. High performance & reliability.",
    "price": 15551.49,
    "originalPrice": 19210.57,
    "rating": 4.6,
    "reviews": 165,
    "image": "/assets/products/airpodes/boat-airdopes-111-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-111-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p3",
    "title": "boat-airdopes-111-3",
    "description": "Premium AirPods – boat-airdopes-111-3. High performance & reliability.",
    "price": 11745.04,
    "originalPrice": 13733.09,
    "rating": 4.7,
    "reviews": 260,
    "image": "/assets/products/airpodes/boat-airdopes-111-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-111-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p4",
    "title": "boat-airdopes-111-4",
    "description": "Premium AirPods – boat-airdopes-111-4. High performance & reliability.",
    "price": 3241.01,
    "originalPrice": 4064.09,
    "rating": 4.8,
    "reviews": 215,
    "image": "/assets/products/airpodes/boat-airdopes-111-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-111-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p5",
    "title": "boat-airdopes-115-1",
    "description": "Premium AirPods – boat-airdopes-115-1. High performance & reliability.",
    "price": 3002.85,
    "originalPrice": 3345.28,
    "rating": 3.7,
    "reviews": 190,
    "image": "/assets/products/airpodes/boat-airdopes-115-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-115-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p6",
    "title": "boat-airdopes-115-2",
    "description": "Premium AirPods – boat-airdopes-115-2. High performance & reliability.",
    "price": 6319.78,
    "originalPrice": 7273.63,
    "rating": 4.8,
    "reviews": 605,
    "image": "/assets/products/airpodes/boat-airdopes-115-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-115-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p7",
    "title": "boat-airdopes-121-v2-1",
    "description": "Premium AirPods – boat-airdopes-121-v2-1. High performance & reliability.",
    "price": 9726.13,
    "originalPrice": 11308.29,
    "rating": 3.6,
    "reviews": 347,
    "image": "/assets/products/airpodes/boat-airdopes-121-v2-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-121-v2-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p8",
    "title": "boat-airdopes-131-1",
    "description": "Premium AirPods – boat-airdopes-131-1. High performance & reliability.",
    "price": 17334.47,
    "originalPrice": 20971.38,
    "rating": 4.8,
    "reviews": 263,
    "image": "/assets/products/airpodes/boat-airdopes-131-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-131-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p9",
    "title": "boat-airdopes-131-2",
    "description": "Premium AirPods – boat-airdopes-131-2. High performance & reliability.",
    "price": 15471.17,
    "originalPrice": 15779.95,
    "rating": 4.1,
    "reviews": 617,
    "image": "/assets/products/airpodes/boat-airdopes-131-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-131-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p10",
    "title": "boat-airdopes-131-3",
    "description": "Premium AirPods – boat-airdopes-131-3. High performance & reliability.",
    "price": 14670.56,
    "originalPrice": 16280.42,
    "rating": 4.1,
    "reviews": 305,
    "image": "/assets/products/airpodes/boat-airdopes-131-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-131-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p11",
    "title": "boat-airdopes-131-4",
    "description": "Premium AirPods – boat-airdopes-131-4. High performance & reliability.",
    "price": 11300.36,
    "originalPrice": 14401.16,
    "rating": 3.7,
    "reviews": 548,
    "image": "/assets/products/airpodes/boat-airdopes-131-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-131-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p12",
    "title": "boat-airdopes-172-1",
    "description": "Premium AirPods – boat-airdopes-172-1. High performance & reliability.",
    "price": 12625.78,
    "originalPrice": 15275.01,
    "rating": 4.2,
    "reviews": 82,
    "image": "/assets/products/airpodes/boat-airdopes-172-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-172-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p13",
    "title": "boat-airdopes-172-2",
    "description": "Premium AirPods – boat-airdopes-172-2. High performance & reliability.",
    "price": 12034.6,
    "originalPrice": 12709.56,
    "rating": 3.6,
    "reviews": 539,
    "image": "/assets/products/airpodes/boat-airdopes-172-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-172-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p14",
    "title": "boat-airdopes-172-3",
    "description": "Premium AirPods – boat-airdopes-172-3. High performance & reliability.",
    "price": 19238.73,
    "originalPrice": 19709.07,
    "rating": 4.8,
    "reviews": 218,
    "image": "/assets/products/airpodes/boat-airdopes-172-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-172-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p15",
    "title": "boat-airdopes-192-1",
    "description": "Premium AirPods – boat-airdopes-192-1. High performance & reliability.",
    "price": 7607.99,
    "originalPrice": 8338.22,
    "rating": 4.3,
    "reviews": 566,
    "image": "/assets/products/airpodes/boat-airdopes-192-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-192-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p16",
    "title": "boat-airdopes-192-2",
    "description": "Premium AirPods – boat-airdopes-192-2. High performance & reliability.",
    "price": 14851.51,
    "originalPrice": 17760,
    "rating": 3.6,
    "reviews": 805,
    "image": "/assets/products/airpodes/boat-airdopes-192-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-192-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p17",
    "title": "boat-airdopes-192-3",
    "description": "Premium AirPods – boat-airdopes-192-3. High performance & reliability.",
    "price": 16686.07,
    "originalPrice": 19999.44,
    "rating": 4.2,
    "reviews": 246,
    "image": "/assets/products/airpodes/boat-airdopes-192-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-192-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p18",
    "title": "boat-airdopes-192-4",
    "description": "Premium AirPods – boat-airdopes-192-4. High performance & reliability.",
    "price": 4338.29,
    "originalPrice": 5162.42,
    "rating": 4.5,
    "reviews": 655,
    "image": "/assets/products/airpodes/boat-airdopes-192-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-192-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p19",
    "title": "boat-airdopes-201-1",
    "description": "Premium AirPods – boat-airdopes-201-1. High performance & reliability.",
    "price": 4831.93,
    "originalPrice": 5665.13,
    "rating": 4.5,
    "reviews": 426,
    "image": "/assets/products/airpodes/boat-airdopes-201-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-201-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p20",
    "title": "boat-airdopes-201-2",
    "description": "Premium AirPods – boat-airdopes-201-2. High performance & reliability.",
    "price": 18084.54,
    "originalPrice": 18418.52,
    "rating": 3.9,
    "reviews": 475,
    "image": "/assets/products/airpodes/boat-airdopes-201-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-201-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p21",
    "title": "boat-airdopes-201-3",
    "description": "Premium AirPods – boat-airdopes-201-3. High performance & reliability.",
    "price": 16439.65,
    "originalPrice": 16571.02,
    "rating": 4.3,
    "reviews": 269,
    "image": "/assets/products/airpodes/boat-airdopes-201-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-201-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p22",
    "title": "boat-airdopes-201-4",
    "description": "Premium AirPods – boat-airdopes-201-4. High performance & reliability.",
    "price": 6165.39,
    "originalPrice": 6593.58,
    "rating": 4,
    "reviews": 392,
    "image": "/assets/products/airpodes/boat-airdopes-201-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-201-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p23",
    "title": "boat-airdopes-381-1",
    "description": "Premium AirPods – boat-airdopes-381-1. High performance & reliability.",
    "price": 17575.09,
    "originalPrice": 18865.49,
    "rating": 4.2,
    "reviews": 327,
    "image": "/assets/products/airpodes/boat-airdopes-381-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-381-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p24",
    "title": "boat-airdopes-381-2",
    "description": "Premium AirPods – boat-airdopes-381-2. High performance & reliability.",
    "price": 3059.66,
    "originalPrice": 3319.81,
    "rating": 4.7,
    "reviews": 432,
    "image": "/assets/products/airpodes/boat-airdopes-381-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-381-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p25",
    "title": "boat-airdopes-381-3",
    "description": "Premium AirPods – boat-airdopes-381-3. High performance & reliability.",
    "price": 9571.24,
    "originalPrice": 11324.71,
    "rating": 3.7,
    "reviews": 56,
    "image": "/assets/products/airpodes/boat-airdopes-381-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-381-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p26",
    "title": "boat-airdopes-381-4",
    "description": "Premium AirPods – boat-airdopes-381-4. High performance & reliability.",
    "price": 3709.54,
    "originalPrice": 4142.14,
    "rating": 4.9,
    "reviews": 439,
    "image": "/assets/products/airpodes/boat-airdopes-381-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-381-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p27",
    "title": "boat-airdopes-381-mki-1",
    "description": "Premium AirPods – boat-airdopes-381-mki-1. High performance & reliability.",
    "price": 19034.32,
    "originalPrice": 22589.55,
    "rating": 4.2,
    "reviews": 284,
    "image": "/assets/products/airpodes/boat-airdopes-381-mki-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-381-mki-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p28",
    "title": "boat-airdopes-381-mki-2",
    "description": "Premium AirPods – boat-airdopes-381-mki-2. High performance & reliability.",
    "price": 10226.72,
    "originalPrice": 11856.46,
    "rating": 3.6,
    "reviews": 163,
    "image": "/assets/products/airpodes/boat-airdopes-381-mki-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-381-mki-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p29",
    "title": "boat-airdopes-381-mki-3",
    "description": "Premium AirPods – boat-airdopes-381-mki-3. High performance & reliability.",
    "price": 16382.43,
    "originalPrice": 18187.86,
    "rating": 4.7,
    "reviews": 153,
    "image": "/assets/products/airpodes/boat-airdopes-381-mki-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-381-mki-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p30",
    "title": "boat-airdopes-381-mki-4",
    "description": "Premium AirPods – boat-airdopes-381-mki-4. High performance & reliability.",
    "price": 19500.5,
    "originalPrice": 22670.28,
    "rating": 3.7,
    "reviews": 207,
    "image": "/assets/products/airpodes/boat-airdopes-381-mki-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-381-mki-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p31",
    "title": "boat-airdopes-411-anc-1",
    "description": "Premium AirPods – boat-airdopes-411-anc-1. High performance & reliability.",
    "price": 7637.94,
    "originalPrice": 8110.68,
    "rating": 3.7,
    "reviews": 378,
    "image": "/assets/products/airpodes/boat-airdopes-411-anc-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-411-anc-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p32",
    "title": "boat-airdopes-411-anc-2",
    "description": "Premium AirPods – boat-airdopes-411-anc-2. High performance & reliability.",
    "price": 16283.89,
    "originalPrice": 21149.59,
    "rating": 4.1,
    "reviews": 256,
    "image": "/assets/products/airpodes/boat-airdopes-411-anc-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-411-anc-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p33",
    "title": "boat-airdopes-411-anc-3",
    "description": "Premium AirPods – boat-airdopes-411-anc-3. High performance & reliability.",
    "price": 5013.95,
    "originalPrice": 5270.7,
    "rating": 3.5,
    "reviews": 579,
    "image": "/assets/products/airpodes/boat-airdopes-411-anc-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-411-anc-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p34",
    "title": "boat-airdopes-411-anc-4",
    "description": "Premium AirPods – boat-airdopes-411-anc-4. High performance & reliability.",
    "price": 5567.44,
    "originalPrice": 6050.24,
    "rating": 4.4,
    "reviews": 672,
    "image": "/assets/products/airpodes/boat-airdopes-411-anc-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-411-anc-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p35",
    "title": "boat-airdopes-451v2-1",
    "description": "Premium AirPods – boat-airdopes-451v2-1. High performance & reliability.",
    "price": 11355.5,
    "originalPrice": 13559.05,
    "rating": 4.9,
    "reviews": 261,
    "image": "/assets/products/airpodes/boat-airdopes-451v2-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-451v2-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p36",
    "title": "boat-airdopes-451v2-2",
    "description": "Premium AirPods – boat-airdopes-451v2-2. High performance & reliability.",
    "price": 11653.21,
    "originalPrice": 13786.45,
    "rating": 4.6,
    "reviews": 463,
    "image": "/assets/products/airpodes/boat-airdopes-451v2-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-451v2-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p37",
    "title": "boat-airdopes-451v2-3",
    "description": "Premium AirPods – boat-airdopes-451v2-3. High performance & reliability.",
    "price": 6788.91,
    "originalPrice": 7604.68,
    "rating": 3.9,
    "reviews": 332,
    "image": "/assets/products/airpodes/boat-airdopes-451v2-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-451v2-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p38",
    "title": "boat-airdopes-451v2-4",
    "description": "Premium AirPods – boat-airdopes-451v2-4. High performance & reliability.",
    "price": 9767.94,
    "originalPrice": 12154.05,
    "rating": 4.1,
    "reviews": 743,
    "image": "/assets/products/airpodes/boat-airdopes-451v2-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-451v2-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p39",
    "title": "boat-airdopes-501-anc-1",
    "description": "Premium AirPods – boat-airdopes-501-anc-1. High performance & reliability.",
    "price": 9417.31,
    "originalPrice": 11854.04,
    "rating": 4.3,
    "reviews": 181,
    "image": "/assets/products/airpodes/boat-airdopes-501-anc-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-501-anc-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p40",
    "title": "boat-airdopes-501-anc-2",
    "description": "Premium AirPods – boat-airdopes-501-anc-2. High performance & reliability.",
    "price": 5279.16,
    "originalPrice": 6597.29,
    "rating": 4.6,
    "reviews": 677,
    "image": "/assets/products/airpodes/boat-airdopes-501-anc-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-501-anc-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p41",
    "title": "boat-airdopes-501-anc-3",
    "description": "Premium AirPods – boat-airdopes-501-anc-3. High performance & reliability.",
    "price": 2399.2,
    "originalPrice": 2628.84,
    "rating": 4.2,
    "reviews": 515,
    "image": "/assets/products/airpodes/boat-airdopes-501-anc-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-501-anc-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p42",
    "title": "boat-airdopes-501-anc-4",
    "description": "Premium AirPods – boat-airdopes-501-anc-4. High performance & reliability.",
    "price": 8163.05,
    "originalPrice": 9709.24,
    "rating": 3.6,
    "reviews": 616,
    "image": "/assets/products/airpodes/boat-airdopes-501-anc-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-501-anc-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p43",
    "title": "boat-airdopes-511-v2-1",
    "description": "Premium AirPods – boat-airdopes-511-v2-1. High performance & reliability.",
    "price": 16836.88,
    "originalPrice": 19343.84,
    "rating": 4.9,
    "reviews": 338,
    "image": "/assets/products/airpodes/boat-airdopes-511-v2-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-511-v2-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p44",
    "title": "boat-airdopes-511-v2-2",
    "description": "Premium AirPods – boat-airdopes-511-v2-2. High performance & reliability.",
    "price": 3753.97,
    "originalPrice": 3937.48,
    "rating": 4.4,
    "reviews": 793,
    "image": "/assets/products/airpodes/boat-airdopes-511-v2-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-511-v2-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p45",
    "title": "boat-airdopes-511-v2-3",
    "description": "Premium AirPods – boat-airdopes-511-v2-3. High performance & reliability.",
    "price": 5641.31,
    "originalPrice": 5948.72,
    "rating": 4,
    "reviews": 377,
    "image": "/assets/products/airpodes/boat-airdopes-511-v2-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-511-v2-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p46",
    "title": "boat-airdopes-511-v2-4",
    "description": "Premium AirPods – boat-airdopes-511-v2-4. High performance & reliability.",
    "price": 8349.24,
    "originalPrice": 9383.45,
    "rating": 5,
    "reviews": 47,
    "image": "/assets/products/airpodes/boat-airdopes-511-v2-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-511-v2-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p47",
    "title": "boat-airdopes-701-anc-1",
    "description": "Premium AirPods – boat-airdopes-701-anc-1. High performance & reliability.",
    "price": 10167.99,
    "originalPrice": 12390.97,
    "rating": 3.5,
    "reviews": 296,
    "image": "/assets/products/airpodes/boat-airdopes-701-anc-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-701-anc-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p48",
    "title": "boat-airdopes-701-anc-2",
    "description": "Premium AirPods – boat-airdopes-701-anc-2. High performance & reliability.",
    "price": 2125.93,
    "originalPrice": 2554.65,
    "rating": 4.2,
    "reviews": 303,
    "image": "/assets/products/airpodes/boat-airdopes-701-anc-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-701-anc-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p49",
    "title": "boat-airdopes-701-anc-3",
    "description": "Premium AirPods – boat-airdopes-701-anc-3. High performance & reliability.",
    "price": 6251.27,
    "originalPrice": 7084.65,
    "rating": 4.7,
    "reviews": 322,
    "image": "/assets/products/airpodes/boat-airdopes-701-anc-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-701-anc-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p50",
    "title": "boat-airdopes-701-anc-4",
    "description": "Premium AirPods – boat-airdopes-701-anc-4. High performance & reliability.",
    "price": 2494.17,
    "originalPrice": 2683.84,
    "rating": 3.8,
    "reviews": 621,
    "image": "/assets/products/airpodes/boat-airdopes-701-anc-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-airdopes-701-anc-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p51",
    "title": "boat-immortal-121-1",
    "description": "Premium AirPods – boat-immortal-121-1. High performance & reliability.",
    "price": 14033.77,
    "originalPrice": 16411.81,
    "rating": 4,
    "reviews": 714,
    "image": "/assets/products/airpodes/boat-immortal-121-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-immortal-121-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p52",
    "title": "boat-immortal-121-2",
    "description": "Premium AirPods – boat-immortal-121-2. High performance & reliability.",
    "price": 15883.28,
    "originalPrice": 16729.8,
    "rating": 4.4,
    "reviews": 763,
    "image": "/assets/products/airpodes/boat-immortal-121-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-immortal-121-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p53",
    "title": "boat-trebel-airdopes-181-1",
    "description": "Premium AirPods – boat-trebel-airdopes-181-1. High performance & reliability.",
    "price": 14237.35,
    "originalPrice": 15630.25,
    "rating": 3.6,
    "reviews": 295,
    "image": "/assets/products/airpodes/boat-trebel-airdopes-181-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-trebel-airdopes-181-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p54",
    "title": "boat-trebel-airdopes-181-2",
    "description": "Premium AirPods – boat-trebel-airdopes-181-2. High performance & reliability.",
    "price": 15554.39,
    "originalPrice": 17574.47,
    "rating": 4.5,
    "reviews": 446,
    "image": "/assets/products/airpodes/boat-trebel-airdopes-181-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-trebel-airdopes-181-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p55",
    "title": "boat-trebel-airdopes-181-3",
    "description": "Premium AirPods – boat-trebel-airdopes-181-3. High performance & reliability.",
    "price": 5227.59,
    "originalPrice": 5699.39,
    "rating": 3.9,
    "reviews": 738,
    "image": "/assets/products/airpodes/boat-trebel-airdopes-181-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-trebel-airdopes-181-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p56",
    "title": "boat-trebel-airdopes-181-4",
    "description": "Premium AirPods – boat-trebel-airdopes-181-4. High performance & reliability.",
    "price": 11254.28,
    "originalPrice": 13589.7,
    "rating": 5,
    "reviews": 333,
    "image": "/assets/products/airpodes/boat-trebel-airdopes-181-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-trebel-airdopes-181-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p57",
    "title": "boat-trebel-airdopes-431-1",
    "description": "Premium AirPods – boat-trebel-airdopes-431-1. High performance & reliability.",
    "price": 12233.99,
    "originalPrice": 12450.64,
    "rating": 4.5,
    "reviews": 500,
    "image": "/assets/products/airpodes/boat-trebel-airdopes-431-1.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-trebel-airdopes-431-1.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p58",
    "title": "boat-trebel-airdopes-431-2",
    "description": "Premium AirPods – boat-trebel-airdopes-431-2. High performance & reliability.",
    "price": 3528.22,
    "originalPrice": 3741.97,
    "rating": 3.6,
    "reviews": 258,
    "image": "/assets/products/airpodes/boat-trebel-airdopes-431-2.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-trebel-airdopes-431-2.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p59",
    "title": "boat-trebel-airdopes-431-3",
    "description": "Premium AirPods – boat-trebel-airdopes-431-3. High performance & reliability.",
    "price": 7443.06,
    "originalPrice": 8526.9,
    "rating": 4.9,
    "reviews": 471,
    "image": "/assets/products/airpodes/boat-trebel-airdopes-431-3.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-trebel-airdopes-431-3.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p60",
    "title": "boat-trebel-airdopes-431-4",
    "description": "Premium AirPods – boat-trebel-airdopes-431-4. High performance & reliability.",
    "price": 13690.35,
    "originalPrice": 14648.55,
    "rating": 4.5,
    "reviews": 371,
    "image": "/assets/products/airpodes/boat-trebel-airdopes-431-4.webp",
    "thumbnails": [
      "/assets/products/airpodes/boat-trebel-airdopes-431-4.webp"
    ],
    "categoryId": "airpodes",
    "category": "AirPods",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p61",
    "title": "canon-eos-1500d-24.1-digital-slr-camera-black-with-ef-s18-55-is-ii-lens-2",
    "description": "Premium Cameras – canon-eos-1500d-24.1-digital-slr-camera-black-with-ef-s18-55-is-ii-lens-2. High performance & reliability.",
    "price": 84874.73,
    "originalPrice": 94366.5,
    "rating": 4.4,
    "reviews": 35,
    "image": "/assets/products/camera/canon-eos-1500d-24.1-digital-slr-camera-black-with-ef-s18-55-is-ii-lens-2.jpg",
    "thumbnails": [
      "/assets/products/camera/canon-eos-1500d-24.1-digital-slr-camera-black-with-ef-s18-55-is-ii-lens-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p62",
    "title": "canon-eos-1500d-24.1-digital-slr-camera-black-with-ef-s18-55-is-ii-lens-3",
    "description": "Premium Cameras – canon-eos-1500d-24.1-digital-slr-camera-black-with-ef-s18-55-is-ii-lens-3. High performance & reliability.",
    "price": 35930.6,
    "originalPrice": 45948.73,
    "rating": 4.7,
    "reviews": 437,
    "image": "/assets/products/camera/canon-eos-1500d-24.1-digital-slr-camera-black-with-ef-s18-55-is-ii-lens-3.jpg",
    "thumbnails": [
      "/assets/products/camera/canon-eos-1500d-24.1-digital-slr-camera-black-with-ef-s18-55-is-ii-lens-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p63",
    "title": "canon-eos-1500d-24.1-digital-slr-camera-black-with-ef-s18-55-is-ii-lens-4",
    "description": "Premium Cameras – canon-eos-1500d-24.1-digital-slr-camera-black-with-ef-s18-55-is-ii-lens-4. High performance & reliability.",
    "price": 63834.68,
    "originalPrice": 68770.84,
    "rating": 4.6,
    "reviews": 224,
    "image": "/assets/products/camera/canon-eos-1500d-24.1-digital-slr-camera-black-with-ef-s18-55-is-ii-lens-4.jpg",
    "thumbnails": [
      "/assets/products/camera/canon-eos-1500d-24.1-digital-slr-camera-black-with-ef-s18-55-is-ii-lens-4.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p64",
    "title": "canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-1",
    "description": "Premium Cameras – canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-1. High performance & reliability.",
    "price": 15640.19,
    "originalPrice": 17817.9,
    "rating": 4.5,
    "reviews": 279,
    "image": "/assets/products/camera/canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-1.jpg",
    "thumbnails": [
      "/assets/products/camera/canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p65",
    "title": "canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-2",
    "description": "Premium Cameras – canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-2. High performance & reliability.",
    "price": 13743.79,
    "originalPrice": 13822.21,
    "rating": 5,
    "reviews": 358,
    "image": "/assets/products/camera/canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-2.jpg",
    "thumbnails": [
      "/assets/products/camera/canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p66",
    "title": "canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-3",
    "description": "Premium Cameras – canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-3. High performance & reliability.",
    "price": 76510.3,
    "originalPrice": 92503.3,
    "rating": 3.7,
    "reviews": 590,
    "image": "/assets/products/camera/canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-3.jpg",
    "thumbnails": [
      "/assets/products/camera/canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p67",
    "title": "canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-4",
    "description": "Premium Cameras – canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-4. High performance & reliability.",
    "price": 54274.56,
    "originalPrice": 64188.94,
    "rating": 3.8,
    "reviews": 102,
    "image": "/assets/products/camera/canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-4.jpg",
    "thumbnails": [
      "/assets/products/camera/canon-eos-200d-ii-24.1mp-digital-slr-camera-ef-s-18-55mm-f4-is-stm-lens-black-4.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p68",
    "title": "canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-1",
    "description": "Premium Cameras – canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-1. High performance & reliability.",
    "price": 23866.44,
    "originalPrice": 25823.27,
    "rating": 3.7,
    "reviews": 497,
    "image": "/assets/products/camera/canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-1.jpg",
    "thumbnails": [
      "/assets/products/camera/canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p69",
    "title": "canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-2",
    "description": "Premium Cameras – canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-2. High performance & reliability.",
    "price": 68509.85,
    "originalPrice": 87237.82,
    "rating": 4.3,
    "reviews": 190,
    "image": "/assets/products/camera/canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-2.jpg",
    "thumbnails": [
      "/assets/products/camera/canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p70",
    "title": "canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-3",
    "description": "Premium Cameras – canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-3. High performance & reliability.",
    "price": 66782.19,
    "originalPrice": 85977.79,
    "rating": 4.8,
    "reviews": 366,
    "image": "/assets/products/camera/canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-3.jpg",
    "thumbnails": [
      "/assets/products/camera/canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p71",
    "title": "canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-4",
    "description": "Premium Cameras – canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-4. High performance & reliability.",
    "price": 54270.64,
    "originalPrice": 69198.02,
    "rating": 4.5,
    "reviews": 610,
    "image": "/assets/products/camera/canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-4.jpg",
    "thumbnails": [
      "/assets/products/camera/canon-eos-5d-mark-iv-30.4-mp-digital-slr-camera-black-ef-24-105mm-is-ii-usm-lens-kit-4.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p72",
    "title": "cp-plus-3mp-full-hd-smart-wi-fi-cctv-home-security-camera-1",
    "description": "Premium Cameras – cp-plus-3mp-full-hd-smart-wi-fi-cctv-home-security-camera-1. High performance & reliability.",
    "price": 30339.84,
    "originalPrice": 37088.16,
    "rating": 3.5,
    "reviews": 245,
    "image": "/assets/products/camera/cp-plus-3mp-full-hd-smart-wi-fi-cctv-home-security-camera-1.jpg",
    "thumbnails": [
      "/assets/products/camera/cp-plus-3mp-full-hd-smart-wi-fi-cctv-home-security-camera-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p73",
    "title": "cp-plus-3mp-full-hd-smart-wi-fi-cctv-home-security-camera-2",
    "description": "Premium Cameras – cp-plus-3mp-full-hd-smart-wi-fi-cctv-home-security-camera-2. High performance & reliability.",
    "price": 58399.6,
    "originalPrice": 74876.1,
    "rating": 4.6,
    "reviews": 151,
    "image": "/assets/products/camera/cp-plus-3mp-full-hd-smart-wi-fi-cctv-home-security-camera-2.jpg",
    "thumbnails": [
      "/assets/products/camera/cp-plus-3mp-full-hd-smart-wi-fi-cctv-home-security-camera-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p74",
    "title": "cp-plus-3mp-full-hd-smart-wi-fi-cctv-home-security-camera-3",
    "description": "Premium Cameras – cp-plus-3mp-full-hd-smart-wi-fi-cctv-home-security-camera-3. High performance & reliability.",
    "price": 77086.09,
    "originalPrice": 79884.04,
    "rating": 4.8,
    "reviews": 163,
    "image": "/assets/products/camera/cp-plus-3mp-full-hd-smart-wi-fi-cctv-home-security-camera-3.jpg",
    "thumbnails": [
      "/assets/products/camera/cp-plus-3mp-full-hd-smart-wi-fi-cctv-home-security-camera-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p75",
    "title": "digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-1",
    "description": "Premium Cameras – digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-1. High performance & reliability.",
    "price": 70660.7,
    "originalPrice": 86516.51,
    "rating": 4.5,
    "reviews": 479,
    "image": "/assets/products/camera/digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-1.jpg",
    "thumbnails": [
      "/assets/products/camera/digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p76",
    "title": "digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-2",
    "description": "Premium Cameras – digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-2. High performance & reliability.",
    "price": 23281.74,
    "originalPrice": 27607.51,
    "rating": 4.1,
    "reviews": 157,
    "image": "/assets/products/camera/digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-2.jpg",
    "thumbnails": [
      "/assets/products/camera/digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p77",
    "title": "digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-3",
    "description": "Premium Cameras – digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-3. High performance & reliability.",
    "price": 14741.23,
    "originalPrice": 17717.67,
    "rating": 4.1,
    "reviews": 493,
    "image": "/assets/products/camera/digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-3.jpg",
    "thumbnails": [
      "/assets/products/camera/digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p78",
    "title": "digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-4",
    "description": "Premium Cameras – digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-4. High performance & reliability.",
    "price": 71594.49,
    "originalPrice": 80566.96,
    "rating": 4.5,
    "reviews": 215,
    "image": "/assets/products/camera/digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-4.jpg",
    "thumbnails": [
      "/assets/products/camera/digitek®-dtr-260-gt-gorilla-tripod-mini-33-cm-13-inch-tripod-for-mobile-phone-with-phone-mount-&-remote-flexible-gorilla-stand-for-dslr-&-action-cameras-4.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p79",
    "title": "fujifilm-instax-mini-9-instant-camera-cobalt-blue-1",
    "description": "Premium Cameras – fujifilm-instax-mini-9-instant-camera-cobalt-blue-1. High performance & reliability.",
    "price": 89829.29,
    "originalPrice": 106644.38,
    "rating": 4.4,
    "reviews": 160,
    "image": "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-cobalt-blue-1.jpg",
    "thumbnails": [
      "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-cobalt-blue-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p80",
    "title": "fujifilm-instax-mini-9-instant-camera-cobalt-blue-2",
    "description": "Premium Cameras – fujifilm-instax-mini-9-instant-camera-cobalt-blue-2. High performance & reliability.",
    "price": 21377.13,
    "originalPrice": 24320.49,
    "rating": 4.2,
    "reviews": 473,
    "image": "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-cobalt-blue-2.jpg",
    "thumbnails": [
      "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-cobalt-blue-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p81",
    "title": "fujifilm-instax-mini-9-instant-camera-cobalt-blue-3",
    "description": "Premium Cameras – fujifilm-instax-mini-9-instant-camera-cobalt-blue-3. High performance & reliability.",
    "price": 29887.67,
    "originalPrice": 37848.21,
    "rating": 4.7,
    "reviews": 42,
    "image": "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-cobalt-blue-3.jpg",
    "thumbnails": [
      "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-cobalt-blue-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p82",
    "title": "fujifilm-instax-mini-9-instant-camera-cobalt-blue-4",
    "description": "Premium Cameras – fujifilm-instax-mini-9-instant-camera-cobalt-blue-4. High performance & reliability.",
    "price": 26677.69,
    "originalPrice": 28496.67,
    "rating": 3.6,
    "reviews": 711,
    "image": "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-cobalt-blue-4.jpg",
    "thumbnails": [
      "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-cobalt-blue-4.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p83",
    "title": "fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-1",
    "description": "Premium Cameras – fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-1. High performance & reliability.",
    "price": 81858.45,
    "originalPrice": 89808.61,
    "rating": 3.9,
    "reviews": 559,
    "image": "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-1.jpg",
    "thumbnails": [
      "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p84",
    "title": "fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-2",
    "description": "Premium Cameras – fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-2. High performance & reliability.",
    "price": 43696.26,
    "originalPrice": 49943.05,
    "rating": 4.5,
    "reviews": 349,
    "image": "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-2.jpg",
    "thumbnails": [
      "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p85",
    "title": "fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-3",
    "description": "Premium Cameras – fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-3. High performance & reliability.",
    "price": 12211.11,
    "originalPrice": 13357.26,
    "rating": 4.6,
    "reviews": 95,
    "image": "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-3.jpg",
    "thumbnails": [
      "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p86",
    "title": "fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-4",
    "description": "Premium Cameras – fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-4. High performance & reliability.",
    "price": 80816.45,
    "originalPrice": 80874.68,
    "rating": 4.1,
    "reviews": 427,
    "image": "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-4.jpg",
    "thumbnails": [
      "/assets/products/camera/fujifilm-instax-mini-9-instant-camera-smokey-white-gift-box-with-10-shots-4.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p87",
    "title": "nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-1",
    "description": "Premium Cameras – nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-1. High performance & reliability.",
    "price": 13618.87,
    "originalPrice": 13860.51,
    "rating": 3.7,
    "reviews": 729,
    "image": "/assets/products/camera/nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-1.jpg",
    "thumbnails": [
      "/assets/products/camera/nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p88",
    "title": "nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-2",
    "description": "Premium Cameras – nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-2. High performance & reliability.",
    "price": 43414.77,
    "originalPrice": 48951.29,
    "rating": 3.7,
    "reviews": 33,
    "image": "/assets/products/camera/nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-2.jpg",
    "thumbnails": [
      "/assets/products/camera/nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p89",
    "title": "nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-3",
    "description": "Premium Cameras – nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-3. High performance & reliability.",
    "price": 14385.73,
    "originalPrice": 15817.52,
    "rating": 4.2,
    "reviews": 476,
    "image": "/assets/products/camera/nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-3.jpg",
    "thumbnails": [
      "/assets/products/camera/nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p90",
    "title": "nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-4",
    "description": "Premium Cameras – nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-4. High performance & reliability.",
    "price": 22356.17,
    "originalPrice": 27118.78,
    "rating": 4.2,
    "reviews": 268,
    "image": "/assets/products/camera/nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-4.jpg",
    "thumbnails": [
      "/assets/products/camera/nikon-d780-dslr-body-with-24-120mm-vr-lens-3x-optical-zoom-black-4.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p91",
    "title": "nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-1",
    "description": "Premium Cameras – nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-1. High performance & reliability.",
    "price": 26806.92,
    "originalPrice": 29067.83,
    "rating": 4.2,
    "reviews": 792,
    "image": "/assets/products/camera/nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-1.jpg",
    "thumbnails": [
      "/assets/products/camera/nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p92",
    "title": "nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-2",
    "description": "Premium Cameras – nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-2. High performance & reliability.",
    "price": 59717.43,
    "originalPrice": 64359.15,
    "rating": 4.6,
    "reviews": 224,
    "image": "/assets/products/camera/nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-2.jpg",
    "thumbnails": [
      "/assets/products/camera/nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p93",
    "title": "nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-3",
    "description": "Premium Cameras – nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-3. High performance & reliability.",
    "price": 16880.32,
    "originalPrice": 20482.62,
    "rating": 4.1,
    "reviews": 283,
    "image": "/assets/products/camera/nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-3.jpg",
    "thumbnails": [
      "/assets/products/camera/nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p94",
    "title": "nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-4",
    "description": "Premium Cameras – nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-4. High performance & reliability.",
    "price": 20968.55,
    "originalPrice": 22419.25,
    "rating": 4.8,
    "reviews": 675,
    "image": "/assets/products/camera/nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-4.jpg",
    "thumbnails": [
      "/assets/products/camera/nikon-d850-45.7mp-digital-slr-camera-black-with-af-s-nikkor-24-120mm-f-4g-ed-vr-lens-and-64gb-memory-card-4.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p95",
    "title": "osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-1",
    "description": "Premium Cameras – osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-1. High performance & reliability.",
    "price": 84220.06,
    "originalPrice": 102286.23,
    "rating": 4.7,
    "reviews": 108,
    "image": "/assets/products/camera/osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-1.jpg",
    "thumbnails": [
      "/assets/products/camera/osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p96",
    "title": "osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-2",
    "description": "Premium Cameras – osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-2. High performance & reliability.",
    "price": 73197.83,
    "originalPrice": 94498.22,
    "rating": 4.7,
    "reviews": 341,
    "image": "/assets/products/camera/osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-2.jpg",
    "thumbnails": [
      "/assets/products/camera/osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p97",
    "title": "osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-3",
    "description": "Premium Cameras – osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-3. High performance & reliability.",
    "price": 26907.29,
    "originalPrice": 31379.35,
    "rating": 4.5,
    "reviews": 341,
    "image": "/assets/products/camera/osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-3.jpg",
    "thumbnails": [
      "/assets/products/camera/osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p98",
    "title": "osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-4",
    "description": "Premium Cameras – osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-4. High performance & reliability.",
    "price": 81014.12,
    "originalPrice": 102783.07,
    "rating": 3.7,
    "reviews": 91,
    "image": "/assets/products/camera/osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-4.jpg",
    "thumbnails": [
      "/assets/products/camera/osaka-os-550-tripod-55-inches-140-cm-with-mobile-holder-and-carry-case-for-smartphone-&-dslr-camera-portable-lightweight-aluminium-tripod-4.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p99",
    "title": "sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-1",
    "description": "Premium Cameras – sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-1. High performance & reliability.",
    "price": 19174.17,
    "originalPrice": 24104.59,
    "rating": 4.3,
    "reviews": 248,
    "image": "/assets/products/camera/sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-1.jpg",
    "thumbnails": [
      "/assets/products/camera/sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p100",
    "title": "sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-2",
    "description": "Premium Cameras – sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-2. High performance & reliability.",
    "price": 53519.62,
    "originalPrice": 56252.17,
    "rating": 3.7,
    "reviews": 579,
    "image": "/assets/products/camera/sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-2.jpg",
    "thumbnails": [
      "/assets/products/camera/sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p101",
    "title": "sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-3",
    "description": "Premium Cameras – sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-3. High performance & reliability.",
    "price": 50840.26,
    "originalPrice": 59848.18,
    "rating": 4.8,
    "reviews": 581,
    "image": "/assets/products/camera/sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-3.jpg",
    "thumbnails": [
      "/assets/products/camera/sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p102",
    "title": "sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-4",
    "description": "Premium Cameras – sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-4. High performance & reliability.",
    "price": 28137.56,
    "originalPrice": 29133.04,
    "rating": 4.5,
    "reviews": 431,
    "image": "/assets/products/camera/sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-4.jpg",
    "thumbnails": [
      "/assets/products/camera/sjcam-sj4000-wifi-12mp-optical-full-hd-wifi-sports-action-camera-170°wide-fov-30m-waterproof-dv-camcorder-gold-4.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p103",
    "title": "sony-alpha-ilce-6400-24.2mp-mirrorless-digital-slr-camera-body-aps-c-sensor-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-black-1",
    "description": "Premium Cameras – sony-alpha-ilce-6400-24.2mp-mirrorless-digital-slr-camera-body-aps-c-sensor-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-black-1. High performance & reliability.",
    "price": 51083.31,
    "originalPrice": 51763.21,
    "rating": 4.8,
    "reviews": 634,
    "image": "/assets/products/camera/sony-alpha-ilce-6400-24.2mp-mirrorless-digital-slr-camera-body-aps-c-sensor-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-black-1.jpg",
    "thumbnails": [
      "/assets/products/camera/sony-alpha-ilce-6400-24.2mp-mirrorless-digital-slr-camera-body-aps-c-sensor-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-black-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p104",
    "title": "sony-alpha-ilce-6400-24.2mp-mirrorless-digital-slr-camera-body-aps-c-sensor-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-black-2",
    "description": "Premium Cameras – sony-alpha-ilce-6400-24.2mp-mirrorless-digital-slr-camera-body-aps-c-sensor-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-black-2. High performance & reliability.",
    "price": 80830.19,
    "originalPrice": 81181.88,
    "rating": 4.7,
    "reviews": 541,
    "image": "/assets/products/camera/sony-alpha-ilce-6400-24.2mp-mirrorless-digital-slr-camera-body-aps-c-sensor-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-black-2.jpg",
    "thumbnails": [
      "/assets/products/camera/sony-alpha-ilce-6400-24.2mp-mirrorless-digital-slr-camera-body-aps-c-sensor-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-black-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p105",
    "title": "sony-alpha-ilce-6400-24.2mp-mirrorless-digital-slr-camera-body-aps-c-sensor-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-black-3",
    "description": "Premium Cameras – sony-alpha-ilce-6400-24.2mp-mirrorless-digital-slr-camera-body-aps-c-sensor-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-black-3. High performance & reliability.",
    "price": 87479.57,
    "originalPrice": 88333.84,
    "rating": 4.6,
    "reviews": 557,
    "image": "/assets/products/camera/sony-alpha-ilce-6400-24.2mp-mirrorless-digital-slr-camera-body-aps-c-sensor-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-black-3.jpg",
    "thumbnails": [
      "/assets/products/camera/sony-alpha-ilce-6400-24.2mp-mirrorless-digital-slr-camera-body-aps-c-sensor-real-time-eye-auto-focus-4k-vlogging-camera-tiltable-lcd-black-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p106",
    "title": "syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-1",
    "description": "Premium Cameras – syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-1. High performance & reliability.",
    "price": 45211.54,
    "originalPrice": 46059.47,
    "rating": 3.8,
    "reviews": 485,
    "image": "/assets/products/camera/syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-1.jpg",
    "thumbnails": [
      "/assets/products/camera/syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p107",
    "title": "syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-2",
    "description": "Premium Cameras – syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-2. High performance & reliability.",
    "price": 60634.75,
    "originalPrice": 61972.4,
    "rating": 3.6,
    "reviews": 153,
    "image": "/assets/products/camera/syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-2.jpg",
    "thumbnails": [
      "/assets/products/camera/syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p108",
    "title": "syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-3",
    "description": "Premium Cameras – syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-3. High performance & reliability.",
    "price": 62139,
    "originalPrice": 67320.44,
    "rating": 3.7,
    "reviews": 344,
    "image": "/assets/products/camera/syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-3.jpg",
    "thumbnails": [
      "/assets/products/camera/syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p109",
    "title": "syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-4",
    "description": "Premium Cameras – syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-4. High performance & reliability.",
    "price": 69427.13,
    "originalPrice": 74490.08,
    "rating": 4,
    "reviews": 731,
    "image": "/assets/products/camera/syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-4.jpg",
    "thumbnails": [
      "/assets/products/camera/syvo-wt-3130-aluminum-tripod-133cm-universal-lightweight-tripod-with-mobile-phone-holder-mount-&-carry-bag-for-all-smart-phones-gopro-cameras-brown-4.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p110",
    "title": "tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-1",
    "description": "Premium Cameras – tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-1. High performance & reliability.",
    "price": 67287.62,
    "originalPrice": 77042.9,
    "rating": 4.4,
    "reviews": 324,
    "image": "/assets/products/camera/tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-1.jpg",
    "thumbnails": [
      "/assets/products/camera/tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-1.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p111",
    "title": "tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-2",
    "description": "Premium Cameras – tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-2. High performance & reliability.",
    "price": 12435.57,
    "originalPrice": 13578.65,
    "rating": 4.9,
    "reviews": 186,
    "image": "/assets/products/camera/tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-2.jpg",
    "thumbnails": [
      "/assets/products/camera/tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-2.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p112",
    "title": "tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-3",
    "description": "Premium Cameras – tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-3. High performance & reliability.",
    "price": 83356.13,
    "originalPrice": 94144.26,
    "rating": 3.6,
    "reviews": 290,
    "image": "/assets/products/camera/tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-3.jpg",
    "thumbnails": [
      "/assets/products/camera/tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-3.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p113",
    "title": "tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-4",
    "description": "Premium Cameras – tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-4. High performance & reliability.",
    "price": 34238.74,
    "originalPrice": 36200.09,
    "rating": 4,
    "reviews": 807,
    "image": "/assets/products/camera/tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-4.jpg",
    "thumbnails": [
      "/assets/products/camera/tygot-adjustable-aluminium-alloy-tripod-stand-holder-for-mobile-phones-&-camera-360-mm-1060-mm-42-inch-1-4-inch-screw-mobile-holder-bracket-4.jpg"
    ],
    "categoryId": "camera",
    "category": "Cameras",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p114",
    "title": "boat-rockerz-103-pro-1",
    "description": "Premium Earphones – boat-rockerz-103-pro-1. High performance & reliability.",
    "price": 8345.55,
    "originalPrice": 9376.68,
    "rating": 4.5,
    "reviews": 62,
    "image": "/assets/products/earphones/boat-rockerz-103-pro-1.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-103-pro-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p115",
    "title": "boat-rockerz-103-pro-2",
    "description": "Premium Earphones – boat-rockerz-103-pro-2. High performance & reliability.",
    "price": 1457.05,
    "originalPrice": 1582.75,
    "rating": 3.5,
    "reviews": 46,
    "image": "/assets/products/earphones/boat-rockerz-103-pro-2.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-103-pro-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p116",
    "title": "boat-rockerz-103-pro-3",
    "description": "Premium Earphones – boat-rockerz-103-pro-3. High performance & reliability.",
    "price": 7983.58,
    "originalPrice": 8813.7,
    "rating": 4.8,
    "reviews": 29,
    "image": "/assets/products/earphones/boat-rockerz-103-pro-3.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-103-pro-3.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p117",
    "title": "boat-rockerz-103-pro-4",
    "description": "Premium Earphones – boat-rockerz-103-pro-4. High performance & reliability.",
    "price": 9059.17,
    "originalPrice": 10066.48,
    "rating": 4.1,
    "reviews": 197,
    "image": "/assets/products/earphones/boat-rockerz-103-pro-4.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-103-pro-4.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p118",
    "title": "boat-rockerz-258-pro-1",
    "description": "Premium Earphones – boat-rockerz-258-pro-1. High performance & reliability.",
    "price": 4164.83,
    "originalPrice": 4989.89,
    "rating": 4,
    "reviews": 175,
    "image": "/assets/products/earphones/boat-rockerz-258-pro-1.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-258-pro-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p119",
    "title": "boat-rockerz-258-pro-2",
    "description": "Premium Earphones – boat-rockerz-258-pro-2. High performance & reliability.",
    "price": 4722.28,
    "originalPrice": 4768.38,
    "rating": 4.1,
    "reviews": 23,
    "image": "/assets/products/earphones/boat-rockerz-258-pro-2.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-258-pro-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p120",
    "title": "boat-rockerz-258-pro-3",
    "description": "Premium Earphones – boat-rockerz-258-pro-3. High performance & reliability.",
    "price": 9647.43,
    "originalPrice": 11620.86,
    "rating": 4.4,
    "reviews": 107,
    "image": "/assets/products/earphones/boat-rockerz-258-pro-3.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-258-pro-3.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p121",
    "title": "boat-rockerz-258-pro-4",
    "description": "Premium Earphones – boat-rockerz-258-pro-4. High performance & reliability.",
    "price": 1288.58,
    "originalPrice": 1392.41,
    "rating": 4.7,
    "reviews": 559,
    "image": "/assets/products/earphones/boat-rockerz-258-pro-4.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-258-pro-4.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p122",
    "title": "boat-rockerz-330-1",
    "description": "Premium Earphones – boat-rockerz-330-1. High performance & reliability.",
    "price": 7540.55,
    "originalPrice": 7549.94,
    "rating": 4.7,
    "reviews": 760,
    "image": "/assets/products/earphones/boat-rockerz-330-1.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-330-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p123",
    "title": "boat-rockerz-330-2",
    "description": "Premium Earphones – boat-rockerz-330-2. High performance & reliability.",
    "price": 6525.29,
    "originalPrice": 7205.57,
    "rating": 4.3,
    "reviews": 264,
    "image": "/assets/products/earphones/boat-rockerz-330-2.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-330-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p124",
    "title": "boat-rockerz-330-3",
    "description": "Premium Earphones – boat-rockerz-330-3. High performance & reliability.",
    "price": 5039.13,
    "originalPrice": 5154.25,
    "rating": 4.3,
    "reviews": 31,
    "image": "/assets/products/earphones/boat-rockerz-330-3.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-330-3.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p125",
    "title": "boat-rockerz-330-4",
    "description": "Premium Earphones – boat-rockerz-330-4. High performance & reliability.",
    "price": 5344.8,
    "originalPrice": 6801,
    "rating": 4.3,
    "reviews": 756,
    "image": "/assets/products/earphones/boat-rockerz-330-4.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-330-4.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p126",
    "title": "boat-rockerz-330-pro-1",
    "description": "Premium Earphones – boat-rockerz-330-pro-1. High performance & reliability.",
    "price": 9365.87,
    "originalPrice": 9835.68,
    "rating": 4.2,
    "reviews": 579,
    "image": "/assets/products/earphones/boat-rockerz-330-pro-1.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-330-pro-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p127",
    "title": "boat-rockerz-330-pro-2",
    "description": "Premium Earphones – boat-rockerz-330-pro-2. High performance & reliability.",
    "price": 6119.88,
    "originalPrice": 6729.38,
    "rating": 3.5,
    "reviews": 289,
    "image": "/assets/products/earphones/boat-rockerz-330-pro-2.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-330-pro-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p128",
    "title": "boat-rockerz-330-pro-3",
    "description": "Premium Earphones – boat-rockerz-330-pro-3. High performance & reliability.",
    "price": 7651.01,
    "originalPrice": 8770.58,
    "rating": 4.8,
    "reviews": 366,
    "image": "/assets/products/earphones/boat-rockerz-330-pro-3.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-330-pro-3.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p129",
    "title": "boat-rockerz-330-pro-4",
    "description": "Premium Earphones – boat-rockerz-330-pro-4. High performance & reliability.",
    "price": 2401.17,
    "originalPrice": 2970.71,
    "rating": 3.5,
    "reviews": 782,
    "image": "/assets/products/earphones/boat-rockerz-330-pro-4.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-330-pro-4.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p130",
    "title": "boat-rockerz-375-1",
    "description": "Premium Earphones – boat-rockerz-375-1. High performance & reliability.",
    "price": 894.91,
    "originalPrice": 1048.7,
    "rating": 5,
    "reviews": 756,
    "image": "/assets/products/earphones/boat-rockerz-375-1.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-375-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p131",
    "title": "boat-rockerz-375-2",
    "description": "Premium Earphones – boat-rockerz-375-2. High performance & reliability.",
    "price": 7821.72,
    "originalPrice": 9885.29,
    "rating": 4.1,
    "reviews": 117,
    "image": "/assets/products/earphones/boat-rockerz-375-2.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-375-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p132",
    "title": "boat-rockerz-375-3",
    "description": "Premium Earphones – boat-rockerz-375-3. High performance & reliability.",
    "price": 2536.08,
    "originalPrice": 2670.89,
    "rating": 3.8,
    "reviews": 25,
    "image": "/assets/products/earphones/boat-rockerz-375-3.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-375-3.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p133",
    "title": "boat-rockerz-375-4",
    "description": "Premium Earphones – boat-rockerz-375-4. High performance & reliability.",
    "price": 4267.72,
    "originalPrice": 4408.99,
    "rating": 4.5,
    "reviews": 775,
    "image": "/assets/products/earphones/boat-rockerz-375-4.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-375-4.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p134",
    "title": "boat-rockerz-400-1",
    "description": "Premium Earphones – boat-rockerz-400-1. High performance & reliability.",
    "price": 9436.64,
    "originalPrice": 10309.41,
    "rating": 3.8,
    "reviews": 135,
    "image": "/assets/products/earphones/boat-rockerz-400-1.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-400-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p135",
    "title": "boat-rockerz-400-2",
    "description": "Premium Earphones – boat-rockerz-400-2. High performance & reliability.",
    "price": 1654.4,
    "originalPrice": 1795.05,
    "rating": 4.3,
    "reviews": 140,
    "image": "/assets/products/earphones/boat-rockerz-400-2.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-400-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p136",
    "title": "boat-rockerz-400-3",
    "description": "Premium Earphones – boat-rockerz-400-3. High performance & reliability.",
    "price": 4851.49,
    "originalPrice": 5088.2,
    "rating": 4.8,
    "reviews": 763,
    "image": "/assets/products/earphones/boat-rockerz-400-3.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-400-3.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p137",
    "title": "boat-rockerz-400-4",
    "description": "Premium Earphones – boat-rockerz-400-4. High performance & reliability.",
    "price": 3707.87,
    "originalPrice": 4022.43,
    "rating": 3.8,
    "reviews": 592,
    "image": "/assets/products/earphones/boat-rockerz-400-4.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-400-4.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p138",
    "title": "boat-rockerz-450-batman-dc-edition-1",
    "description": "Premium Earphones – boat-rockerz-450-batman-dc-edition-1. High performance & reliability.",
    "price": 7385.43,
    "originalPrice": 7498.42,
    "rating": 4.4,
    "reviews": 563,
    "image": "/assets/products/earphones/boat-rockerz-450-batman-dc-edition-1.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-450-batman-dc-edition-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p139",
    "title": "boat-rockerz-450-batman-dc-edition-2",
    "description": "Premium Earphones – boat-rockerz-450-batman-dc-edition-2. High performance & reliability.",
    "price": 1272.79,
    "originalPrice": 1607.63,
    "rating": 4.1,
    "reviews": 655,
    "image": "/assets/products/earphones/boat-rockerz-450-batman-dc-edition-2.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-450-batman-dc-edition-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p140",
    "title": "boat-rockerz-450-batman-dc-edition-3",
    "description": "Premium Earphones – boat-rockerz-450-batman-dc-edition-3. High performance & reliability.",
    "price": 5425.63,
    "originalPrice": 5452.89,
    "rating": 3.7,
    "reviews": 591,
    "image": "/assets/products/earphones/boat-rockerz-450-batman-dc-edition-3.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-450-batman-dc-edition-3.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p141",
    "title": "boat-rockerz-450-batman-dc-edition-4",
    "description": "Premium Earphones – boat-rockerz-450-batman-dc-edition-4. High performance & reliability.",
    "price": 8237.39,
    "originalPrice": 10435.74,
    "rating": 4.9,
    "reviews": 256,
    "image": "/assets/products/earphones/boat-rockerz-450-batman-dc-edition-4.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-450-batman-dc-edition-4.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p142",
    "title": "boat-rockerz-510",
    "description": "Premium Earphones – boat-rockerz-510. High performance & reliability.",
    "price": 8294,
    "originalPrice": 9371.73,
    "rating": 4,
    "reviews": 559,
    "image": "/assets/products/earphones/boat-rockerz-510.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-510.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p143",
    "title": "boat-rockerz-518-1",
    "description": "Premium Earphones – boat-rockerz-518-1. High performance & reliability.",
    "price": 5949.66,
    "originalPrice": 6323.39,
    "rating": 5,
    "reviews": 133,
    "image": "/assets/products/earphones/boat-rockerz-518-1.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-518-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p144",
    "title": "boat-rockerz-518-2",
    "description": "Premium Earphones – boat-rockerz-518-2. High performance & reliability.",
    "price": 8795.74,
    "originalPrice": 10961.09,
    "rating": 3.9,
    "reviews": 589,
    "image": "/assets/products/earphones/boat-rockerz-518-2.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-518-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p145",
    "title": "boat-rockerz-518-3",
    "description": "Premium Earphones – boat-rockerz-518-3. High performance & reliability.",
    "price": 750.98,
    "originalPrice": 900.16,
    "rating": 3.8,
    "reviews": 484,
    "image": "/assets/products/earphones/boat-rockerz-518-3.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-518-3.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p146",
    "title": "boat-rockerz-518-4",
    "description": "Premium Earphones – boat-rockerz-518-4. High performance & reliability.",
    "price": 5931.98,
    "originalPrice": 6402.13,
    "rating": 4.2,
    "reviews": 779,
    "image": "/assets/products/earphones/boat-rockerz-518-4.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-518-4.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p147",
    "title": "boat-rockerz-558-1",
    "description": "Premium Earphones – boat-rockerz-558-1. High performance & reliability.",
    "price": 6528.31,
    "originalPrice": 6982.03,
    "rating": 4.8,
    "reviews": 139,
    "image": "/assets/products/earphones/boat-rockerz-558-1.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-558-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p148",
    "title": "boat-rockerz-558-2",
    "description": "Premium Earphones – boat-rockerz-558-2. High performance & reliability.",
    "price": 1342.01,
    "originalPrice": 1379.85,
    "rating": 3.6,
    "reviews": 109,
    "image": "/assets/products/earphones/boat-rockerz-558-2.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-558-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p149",
    "title": "boat-rockerz-558-3",
    "description": "Premium Earphones – boat-rockerz-558-3. High performance & reliability.",
    "price": 8386.89,
    "originalPrice": 9314.15,
    "rating": 3.5,
    "reviews": 201,
    "image": "/assets/products/earphones/boat-rockerz-558-3.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-558-3.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p150",
    "title": "boat-rockerz-558-4",
    "description": "Premium Earphones – boat-rockerz-558-4. High performance & reliability.",
    "price": 883.84,
    "originalPrice": 901.57,
    "rating": 4.1,
    "reviews": 353,
    "image": "/assets/products/earphones/boat-rockerz-558-4.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-rockerz-558-4.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p151",
    "title": "boat-trebel-rockerz-235-v2-1",
    "description": "Premium Earphones – boat-trebel-rockerz-235-v2-1. High performance & reliability.",
    "price": 2918.89,
    "originalPrice": 3032.62,
    "rating": 4.5,
    "reviews": 308,
    "image": "/assets/products/earphones/boat-trebel-rockerz-235-v2-1.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-trebel-rockerz-235-v2-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p152",
    "title": "boat-trebel-rockerz-235-v2-2",
    "description": "Premium Earphones – boat-trebel-rockerz-235-v2-2. High performance & reliability.",
    "price": 5032.89,
    "originalPrice": 5437.01,
    "rating": 4.4,
    "reviews": 347,
    "image": "/assets/products/earphones/boat-trebel-rockerz-235-v2-2.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-trebel-rockerz-235-v2-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p153",
    "title": "boat-trebel-rockerz-255-pro-1",
    "description": "Premium Earphones – boat-trebel-rockerz-255-pro-1. High performance & reliability.",
    "price": 9647.05,
    "originalPrice": 9830.74,
    "rating": 3.6,
    "reviews": 288,
    "image": "/assets/products/earphones/boat-trebel-rockerz-255-pro-1.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-trebel-rockerz-255-pro-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p154",
    "title": "boat-trebel-rockerz-255-pro-2",
    "description": "Premium Earphones – boat-trebel-rockerz-255-pro-2. High performance & reliability.",
    "price": 2849.7,
    "originalPrice": 3072.41,
    "rating": 4.5,
    "reviews": 465,
    "image": "/assets/products/earphones/boat-trebel-rockerz-255-pro-2.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-trebel-rockerz-255-pro-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p155",
    "title": "boat-trebel-rockerz-255-pro-3",
    "description": "Premium Earphones – boat-trebel-rockerz-255-pro-3. High performance & reliability.",
    "price": 569.4,
    "originalPrice": 655.5,
    "rating": 4.4,
    "reviews": 629,
    "image": "/assets/products/earphones/boat-trebel-rockerz-255-pro-3.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-trebel-rockerz-255-pro-3.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p156",
    "title": "boat-trebel-rockerz-255-pro-4",
    "description": "Premium Earphones – boat-trebel-rockerz-255-pro-4. High performance & reliability.",
    "price": 7559.17,
    "originalPrice": 8137.82,
    "rating": 3.6,
    "reviews": 86,
    "image": "/assets/products/earphones/boat-trebel-rockerz-255-pro-4.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-trebel-rockerz-255-pro-4.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p157",
    "title": "boat-trebel-rockerz-450-1",
    "description": "Premium Earphones – boat-trebel-rockerz-450-1. High performance & reliability.",
    "price": 6125.01,
    "originalPrice": 6830.6,
    "rating": 4.9,
    "reviews": 187,
    "image": "/assets/products/earphones/boat-trebel-rockerz-450-1.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-trebel-rockerz-450-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p158",
    "title": "boat-trebel-rockerz-450-2",
    "description": "Premium Earphones – boat-trebel-rockerz-450-2. High performance & reliability.",
    "price": 7680.85,
    "originalPrice": 8138.56,
    "rating": 4.7,
    "reviews": 276,
    "image": "/assets/products/earphones/boat-trebel-rockerz-450-2.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-trebel-rockerz-450-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p159",
    "title": "boat-trebel-rockerz-450-3",
    "description": "Premium Earphones – boat-trebel-rockerz-450-3. High performance & reliability.",
    "price": 7903.51,
    "originalPrice": 8240.29,
    "rating": 3.6,
    "reviews": 476,
    "image": "/assets/products/earphones/boat-trebel-rockerz-450-3.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-trebel-rockerz-450-3.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p160",
    "title": "boat-trebel-rockerz-450-4",
    "description": "Premium Earphones – boat-trebel-rockerz-450-4. High performance & reliability.",
    "price": 1926.32,
    "originalPrice": 2349.35,
    "rating": 4.5,
    "reviews": 724,
    "image": "/assets/products/earphones/boat-trebel-rockerz-450-4.webp",
    "thumbnails": [
      "/assets/products/earphones/boat-trebel-rockerz-450-4.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p161",
    "title": "rockerz-265-v2-1",
    "description": "Premium Earphones – rockerz-265-v2-1. High performance & reliability.",
    "price": 6154.24,
    "originalPrice": 7825.44,
    "rating": 4.6,
    "reviews": 708,
    "image": "/assets/products/earphones/rockerz-265-v2-1.webp",
    "thumbnails": [
      "/assets/products/earphones/rockerz-265-v2-1.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p162",
    "title": "rockerz-265-v2-2",
    "description": "Premium Earphones – rockerz-265-v2-2. High performance & reliability.",
    "price": 9854.19,
    "originalPrice": 12166.61,
    "rating": 4.9,
    "reviews": 798,
    "image": "/assets/products/earphones/rockerz-265-v2-2.webp",
    "thumbnails": [
      "/assets/products/earphones/rockerz-265-v2-2.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p163",
    "title": "rockerz-265-v2-3",
    "description": "Premium Earphones – rockerz-265-v2-3. High performance & reliability.",
    "price": 7963.01,
    "originalPrice": 8046.4,
    "rating": 4.2,
    "reviews": 610,
    "image": "/assets/products/earphones/rockerz-265-v2-3.webp",
    "thumbnails": [
      "/assets/products/earphones/rockerz-265-v2-3.webp"
    ],
    "categoryId": "earphones",
    "category": "Earphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p164",
    "title": "realme-7-pro-mirror-silver-128-gb-6-gb-ram-1",
    "description": "Premium Smartphones – realme-7-pro-mirror-silver-128-gb-6-gb-ram-1. High performance & reliability.",
    "price": 35543.37,
    "originalPrice": 40774.85,
    "rating": 4.6,
    "reviews": 646,
    "image": "/assets/products/mobile/realme-7-pro-mirror-silver-128-gb-6-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-7-pro-mirror-silver-128-gb-6-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p165",
    "title": "realme-7-pro-mirror-silver-128-gb-6-gb-ram-2",
    "description": "Premium Smartphones – realme-7-pro-mirror-silver-128-gb-6-gb-ram-2. High performance & reliability.",
    "price": 40549.48,
    "originalPrice": 51912.39,
    "rating": 3.6,
    "reviews": 359,
    "image": "/assets/products/mobile/realme-7-pro-mirror-silver-128-gb-6-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-7-pro-mirror-silver-128-gb-6-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p166",
    "title": "realme-7-pro-mirror-silver-128-gb-6-gb-ram-3",
    "description": "Premium Smartphones – realme-7-pro-mirror-silver-128-gb-6-gb-ram-3. High performance & reliability.",
    "price": 34513.52,
    "originalPrice": 37541.48,
    "rating": 4.9,
    "reviews": 542,
    "image": "/assets/products/mobile/realme-7-pro-mirror-silver-128-gb-6-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-7-pro-mirror-silver-128-gb-6-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p167",
    "title": "realme-7-pro-mirror-silver-128-gb-6-gb-ram-4",
    "description": "Premium Smartphones – realme-7-pro-mirror-silver-128-gb-6-gb-ram-4. High performance & reliability.",
    "price": 56968.92,
    "originalPrice": 64615.79,
    "rating": 3.8,
    "reviews": 130,
    "image": "/assets/products/mobile/realme-7-pro-mirror-silver-128-gb-6-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-7-pro-mirror-silver-128-gb-6-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p168",
    "title": "realme-9-5g-stargaze-white-128-gb-6-gb-ram-1",
    "description": "Premium Smartphones – realme-9-5g-stargaze-white-128-gb-6-gb-ram-1. High performance & reliability.",
    "price": 14173.29,
    "originalPrice": 15946.53,
    "rating": 4.9,
    "reviews": 204,
    "image": "/assets/products/mobile/realme-9-5g-stargaze-white-128-gb-6-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-9-5g-stargaze-white-128-gb-6-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p169",
    "title": "realme-9-5g-stargaze-white-128-gb-6-gb-ram-2",
    "description": "Premium Smartphones – realme-9-5g-stargaze-white-128-gb-6-gb-ram-2. High performance & reliability.",
    "price": 53069.27,
    "originalPrice": 58035.8,
    "rating": 4.3,
    "reviews": 520,
    "image": "/assets/products/mobile/realme-9-5g-stargaze-white-128-gb-6-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-9-5g-stargaze-white-128-gb-6-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p170",
    "title": "realme-9-5g-stargaze-white-128-gb-6-gb-ram-3",
    "description": "Premium Smartphones – realme-9-5g-stargaze-white-128-gb-6-gb-ram-3. High performance & reliability.",
    "price": 36512.81,
    "originalPrice": 41322.4,
    "rating": 3.5,
    "reviews": 109,
    "image": "/assets/products/mobile/realme-9-5g-stargaze-white-128-gb-6-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-9-5g-stargaze-white-128-gb-6-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p171",
    "title": "realme-9-5g-stargaze-white-128-gb-6-gb-ram-4",
    "description": "Premium Smartphones – realme-9-5g-stargaze-white-128-gb-6-gb-ram-4. High performance & reliability.",
    "price": 24099.43,
    "originalPrice": 30800.34,
    "rating": 3.7,
    "reviews": 60,
    "image": "/assets/products/mobile/realme-9-5g-stargaze-white-128-gb-6-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-9-5g-stargaze-white-128-gb-6-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p172",
    "title": "realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-1",
    "description": "Premium Smartphones – realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-1. High performance & reliability.",
    "price": 46599.97,
    "originalPrice": 49045.61,
    "rating": 4.1,
    "reviews": 103,
    "image": "/assets/products/mobile/realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p173",
    "title": "realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-2",
    "description": "Premium Smartphones – realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-2. High performance & reliability.",
    "price": 5672.32,
    "originalPrice": 6381.45,
    "rating": 4,
    "reviews": 389,
    "image": "/assets/products/mobile/realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p174",
    "title": "realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-3",
    "description": "Premium Smartphones – realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-3. High performance & reliability.",
    "price": 78050.79,
    "originalPrice": 95794.74,
    "rating": 3.6,
    "reviews": 442,
    "image": "/assets/products/mobile/realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p175",
    "title": "realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-4",
    "description": "Premium Smartphones – realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-4. High performance & reliability.",
    "price": 27241.4,
    "originalPrice": 28430.96,
    "rating": 4.5,
    "reviews": 100,
    "image": "/assets/products/mobile/realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-9-pro-5g-midnight-black-128-gb-6-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p176",
    "title": "realme-9i-5g-soulful-blue-64-gb-4-gb-ram-1",
    "description": "Premium Smartphones – realme-9i-5g-soulful-blue-64-gb-4-gb-ram-1. High performance & reliability.",
    "price": 34076.12,
    "originalPrice": 42581.75,
    "rating": 3.6,
    "reviews": 751,
    "image": "/assets/products/mobile/realme-9i-5g-soulful-blue-64-gb-4-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-9i-5g-soulful-blue-64-gb-4-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p177",
    "title": "realme-9i-5g-soulful-blue-64-gb-4-gb-ram-2",
    "description": "Premium Smartphones – realme-9i-5g-soulful-blue-64-gb-4-gb-ram-2. High performance & reliability.",
    "price": 26566.29,
    "originalPrice": 34164.63,
    "rating": 4,
    "reviews": 526,
    "image": "/assets/products/mobile/realme-9i-5g-soulful-blue-64-gb-4-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-9i-5g-soulful-blue-64-gb-4-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p178",
    "title": "realme-9i-5g-soulful-blue-64-gb-4-gb-ram-3",
    "description": "Premium Smartphones – realme-9i-5g-soulful-blue-64-gb-4-gb-ram-3. High performance & reliability.",
    "price": 71297.92,
    "originalPrice": 78607.09,
    "rating": 3.6,
    "reviews": 468,
    "image": "/assets/products/mobile/realme-9i-5g-soulful-blue-64-gb-4-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-9i-5g-soulful-blue-64-gb-4-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p179",
    "title": "realme-9i-5g-soulful-blue-64-gb-4-gb-ram-4",
    "description": "Premium Smartphones – realme-9i-5g-soulful-blue-64-gb-4-gb-ram-4. High performance & reliability.",
    "price": 19871.52,
    "originalPrice": 21254.8,
    "rating": 3.7,
    "reviews": 216,
    "image": "/assets/products/mobile/realme-9i-5g-soulful-blue-64-gb-4-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-9i-5g-soulful-blue-64-gb-4-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p180",
    "title": "realme-c25s-watery-grey-128-gb-4-gb-ram-1",
    "description": "Premium Smartphones – realme-c25s-watery-grey-128-gb-4-gb-ram-1. High performance & reliability.",
    "price": 70659.28,
    "originalPrice": 86923.23,
    "rating": 4.1,
    "reviews": 61,
    "image": "/assets/products/mobile/realme-c25s-watery-grey-128-gb-4-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c25s-watery-grey-128-gb-4-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p181",
    "title": "realme-c25s-watery-grey-128-gb-4-gb-ram-2",
    "description": "Premium Smartphones – realme-c25s-watery-grey-128-gb-4-gb-ram-2. High performance & reliability.",
    "price": 53864.18,
    "originalPrice": 68338.56,
    "rating": 4.1,
    "reviews": 567,
    "image": "/assets/products/mobile/realme-c25s-watery-grey-128-gb-4-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c25s-watery-grey-128-gb-4-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p182",
    "title": "realme-c25s-watery-grey-128-gb-4-gb-ram-3",
    "description": "Premium Smartphones – realme-c25s-watery-grey-128-gb-4-gb-ram-3. High performance & reliability.",
    "price": 14484.52,
    "originalPrice": 15953.67,
    "rating": 4.3,
    "reviews": 791,
    "image": "/assets/products/mobile/realme-c25s-watery-grey-128-gb-4-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c25s-watery-grey-128-gb-4-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p183",
    "title": "realme-c25s-watery-grey-128-gb-4-gb-ram-4",
    "description": "Premium Smartphones – realme-c25s-watery-grey-128-gb-4-gb-ram-4. High performance & reliability.",
    "price": 40672.55,
    "originalPrice": 46549.88,
    "rating": 4.7,
    "reviews": 631,
    "image": "/assets/products/mobile/realme-c25s-watery-grey-128-gb-4-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c25s-watery-grey-128-gb-4-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p184",
    "title": "realme-c30-bamboo-green-32-gb-2-gb-ram-1",
    "description": "Premium Smartphones – realme-c30-bamboo-green-32-gb-2-gb-ram-1. High performance & reliability.",
    "price": 10692.63,
    "originalPrice": 13790.04,
    "rating": 3.9,
    "reviews": 112,
    "image": "/assets/products/mobile/realme-c30-bamboo-green-32-gb-2-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c30-bamboo-green-32-gb-2-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p185",
    "title": "realme-c30-bamboo-green-32-gb-2-gb-ram-2",
    "description": "Premium Smartphones – realme-c30-bamboo-green-32-gb-2-gb-ram-2. High performance & reliability.",
    "price": 67304.2,
    "originalPrice": 81455.69,
    "rating": 3.8,
    "reviews": 128,
    "image": "/assets/products/mobile/realme-c30-bamboo-green-32-gb-2-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c30-bamboo-green-32-gb-2-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p186",
    "title": "realme-c30-bamboo-green-32-gb-2-gb-ram-3",
    "description": "Premium Smartphones – realme-c30-bamboo-green-32-gb-2-gb-ram-3. High performance & reliability.",
    "price": 48698.46,
    "originalPrice": 63089.74,
    "rating": 5,
    "reviews": 96,
    "image": "/assets/products/mobile/realme-c30-bamboo-green-32-gb-2-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c30-bamboo-green-32-gb-2-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p187",
    "title": "realme-c30-bamboo-green-32-gb-2-gb-ram-4",
    "description": "Premium Smartphones – realme-c30-bamboo-green-32-gb-2-gb-ram-4. High performance & reliability.",
    "price": 20890.92,
    "originalPrice": 25714.19,
    "rating": 3.6,
    "reviews": 283,
    "image": "/assets/products/mobile/realme-c30-bamboo-green-32-gb-2-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c30-bamboo-green-32-gb-2-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p188",
    "title": "realme-c33-night-sea-32-gb-3-gb-ram-1",
    "description": "Premium Smartphones – realme-c33-night-sea-32-gb-3-gb-ram-1. High performance & reliability.",
    "price": 66840.26,
    "originalPrice": 74481.92,
    "rating": 4.7,
    "reviews": 88,
    "image": "/assets/products/mobile/realme-c33-night-sea-32-gb-3-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c33-night-sea-32-gb-3-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p189",
    "title": "realme-c33-night-sea-32-gb-3-gb-ram-2",
    "description": "Premium Smartphones – realme-c33-night-sea-32-gb-3-gb-ram-2. High performance & reliability.",
    "price": 78515.1,
    "originalPrice": 84642.72,
    "rating": 3.7,
    "reviews": 400,
    "image": "/assets/products/mobile/realme-c33-night-sea-32-gb-3-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c33-night-sea-32-gb-3-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p190",
    "title": "realme-c33-night-sea-32-gb-3-gb-ram-3",
    "description": "Premium Smartphones – realme-c33-night-sea-32-gb-3-gb-ram-3. High performance & reliability.",
    "price": 66227.51,
    "originalPrice": 68441.15,
    "rating": 4.1,
    "reviews": 542,
    "image": "/assets/products/mobile/realme-c33-night-sea-32-gb-3-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c33-night-sea-32-gb-3-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p191",
    "title": "realme-c33-night-sea-32-gb-3-gb-ram-4",
    "description": "Premium Smartphones – realme-c33-night-sea-32-gb-3-gb-ram-4. High performance & reliability.",
    "price": 14757.17,
    "originalPrice": 15372.4,
    "rating": 4.3,
    "reviews": 405,
    "image": "/assets/products/mobile/realme-c33-night-sea-32-gb-3-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c33-night-sea-32-gb-3-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p192",
    "title": "realme-c35-glowing-green-64-gb-4-gb-ram-1",
    "description": "Premium Smartphones – realme-c35-glowing-green-64-gb-4-gb-ram-1. High performance & reliability.",
    "price": 28232.58,
    "originalPrice": 28582.65,
    "rating": 4.9,
    "reviews": 638,
    "image": "/assets/products/mobile/realme-c35-glowing-green-64-gb-4-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c35-glowing-green-64-gb-4-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p193",
    "title": "realme-c35-glowing-green-64-gb-4-gb-ram-2",
    "description": "Premium Smartphones – realme-c35-glowing-green-64-gb-4-gb-ram-2. High performance & reliability.",
    "price": 8035.7,
    "originalPrice": 8152.28,
    "rating": 4.9,
    "reviews": 439,
    "image": "/assets/products/mobile/realme-c35-glowing-green-64-gb-4-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c35-glowing-green-64-gb-4-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p194",
    "title": "realme-c35-glowing-green-64-gb-4-gb-ram-3",
    "description": "Premium Smartphones – realme-c35-glowing-green-64-gb-4-gb-ram-3. High performance & reliability.",
    "price": 68963.8,
    "originalPrice": 70172.4,
    "rating": 4.4,
    "reviews": 246,
    "image": "/assets/products/mobile/realme-c35-glowing-green-64-gb-4-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c35-glowing-green-64-gb-4-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p195",
    "title": "realme-c35-glowing-green-64-gb-4-gb-ram-4",
    "description": "Premium Smartphones – realme-c35-glowing-green-64-gb-4-gb-ram-4. High performance & reliability.",
    "price": 64537.83,
    "originalPrice": 73350.94,
    "rating": 4.6,
    "reviews": 106,
    "image": "/assets/products/mobile/realme-c35-glowing-green-64-gb-4-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-c35-glowing-green-64-gb-4-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p196",
    "title": "realme-gt-5g-racing-yellow-256-gb-12-gb-ram-1",
    "description": "Premium Smartphones – realme-gt-5g-racing-yellow-256-gb-12-gb-ram-1. High performance & reliability.",
    "price": 42657.03,
    "originalPrice": 42966.44,
    "rating": 4,
    "reviews": 545,
    "image": "/assets/products/mobile/realme-gt-5g-racing-yellow-256-gb-12-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-gt-5g-racing-yellow-256-gb-12-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p197",
    "title": "realme-gt-5g-racing-yellow-256-gb-12-gb-ram-2",
    "description": "Premium Smartphones – realme-gt-5g-racing-yellow-256-gb-12-gb-ram-2. High performance & reliability.",
    "price": 8732.96,
    "originalPrice": 9876.12,
    "rating": 4,
    "reviews": 663,
    "image": "/assets/products/mobile/realme-gt-5g-racing-yellow-256-gb-12-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-gt-5g-racing-yellow-256-gb-12-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p198",
    "title": "realme-gt-5g-racing-yellow-256-gb-12-gb-ram-3",
    "description": "Premium Smartphones – realme-gt-5g-racing-yellow-256-gb-12-gb-ram-3. High performance & reliability.",
    "price": 8413.16,
    "originalPrice": 9470.43,
    "rating": 3.8,
    "reviews": 164,
    "image": "/assets/products/mobile/realme-gt-5g-racing-yellow-256-gb-12-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-gt-5g-racing-yellow-256-gb-12-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p199",
    "title": "realme-gt-5g-racing-yellow-256-gb-12-gb-ram-4",
    "description": "Premium Smartphones – realme-gt-5g-racing-yellow-256-gb-12-gb-ram-4. High performance & reliability.",
    "price": 77809.5,
    "originalPrice": 100347.84,
    "rating": 4,
    "reviews": 30,
    "image": "/assets/products/mobile/realme-gt-5g-racing-yellow-256-gb-12-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-gt-5g-racing-yellow-256-gb-12-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p200",
    "title": "realme-gt-neo-2-neo-black-128-gb-8-gb-ram-1",
    "description": "Premium Smartphones – realme-gt-neo-2-neo-black-128-gb-8-gb-ram-1. High performance & reliability.",
    "price": 9515.21,
    "originalPrice": 12177.81,
    "rating": 3.9,
    "reviews": 427,
    "image": "/assets/products/mobile/realme-gt-neo-2-neo-black-128-gb-8-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-gt-neo-2-neo-black-128-gb-8-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p201",
    "title": "realme-gt-neo-2-neo-black-128-gb-8-gb-ram-2",
    "description": "Premium Smartphones – realme-gt-neo-2-neo-black-128-gb-8-gb-ram-2. High performance & reliability.",
    "price": 38961.9,
    "originalPrice": 41109.57,
    "rating": 4.5,
    "reviews": 401,
    "image": "/assets/products/mobile/realme-gt-neo-2-neo-black-128-gb-8-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-gt-neo-2-neo-black-128-gb-8-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p202",
    "title": "realme-gt-neo-2-neo-black-128-gb-8-gb-ram-3",
    "description": "Premium Smartphones – realme-gt-neo-2-neo-black-128-gb-8-gb-ram-3. High performance & reliability.",
    "price": 14832.08,
    "originalPrice": 18867.48,
    "rating": 4.7,
    "reviews": 47,
    "image": "/assets/products/mobile/realme-gt-neo-2-neo-black-128-gb-8-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-gt-neo-2-neo-black-128-gb-8-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p203",
    "title": "realme-gt-neo-2-neo-black-128-gb-8-gb-ram-4",
    "description": "Premium Smartphones – realme-gt-neo-2-neo-black-128-gb-8-gb-ram-4. High performance & reliability.",
    "price": 52275,
    "originalPrice": 66359.24,
    "rating": 4.3,
    "reviews": 647,
    "image": "/assets/products/mobile/realme-gt-neo-2-neo-black-128-gb-8-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-gt-neo-2-neo-black-128-gb-8-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p204",
    "title": "realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-1",
    "description": "Premium Smartphones – realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-1. High performance & reliability.",
    "price": 51873.01,
    "originalPrice": 57696.15,
    "rating": 3.6,
    "reviews": 430,
    "image": "/assets/products/mobile/realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p205",
    "title": "realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-2",
    "description": "Premium Smartphones – realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-2. High performance & reliability.",
    "price": 49890.25,
    "originalPrice": 55110.03,
    "rating": 3.7,
    "reviews": 64,
    "image": "/assets/products/mobile/realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p206",
    "title": "realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-3",
    "description": "Premium Smartphones – realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-3. High performance & reliability.",
    "price": 64459.58,
    "originalPrice": 65315.3,
    "rating": 4.1,
    "reviews": 725,
    "image": "/assets/products/mobile/realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p207",
    "title": "realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-4",
    "description": "Premium Smartphones – realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-4. High performance & reliability.",
    "price": 39023.5,
    "originalPrice": 45810.05,
    "rating": 4.1,
    "reviews": 196,
    "image": "/assets/products/mobile/realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-gt-neo-3-asphalt-black-128-gb-8-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p208",
    "title": "realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-1",
    "description": "Premium Smartphones – realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-1. High performance & reliability.",
    "price": 26118.9,
    "originalPrice": 30885.84,
    "rating": 4.5,
    "reviews": 536,
    "image": "/assets/products/mobile/realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p209",
    "title": "realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-2",
    "description": "Premium Smartphones – realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-2. High performance & reliability.",
    "price": 67796,
    "originalPrice": 69547.75,
    "rating": 4.8,
    "reviews": 96,
    "image": "/assets/products/mobile/realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p210",
    "title": "realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-3",
    "description": "Premium Smartphones – realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-3. High performance & reliability.",
    "price": 9573.98,
    "originalPrice": 9950.5,
    "rating": 3.8,
    "reviews": 244,
    "image": "/assets/products/mobile/realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p211",
    "title": "realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-4",
    "description": "Premium Smartphones – realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-4. High performance & reliability.",
    "price": 53452.51,
    "originalPrice": 69138.29,
    "rating": 3.6,
    "reviews": 693,
    "image": "/assets/products/mobile/realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-30-pro-5g-blade-silver-64-gb-6-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p212",
    "title": "realme-narzo-50-speed-blue-64-gb-4-gb-ram-1",
    "description": "Premium Smartphones – realme-narzo-50-speed-blue-64-gb-4-gb-ram-1. High performance & reliability.",
    "price": 73068.55,
    "originalPrice": 94417.16,
    "rating": 3.7,
    "reviews": 83,
    "image": "/assets/products/mobile/realme-narzo-50-speed-blue-64-gb-4-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-50-speed-blue-64-gb-4-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p213",
    "title": "realme-narzo-50-speed-blue-64-gb-4-gb-ram-2",
    "description": "Premium Smartphones – realme-narzo-50-speed-blue-64-gb-4-gb-ram-2. High performance & reliability.",
    "price": 53451.1,
    "originalPrice": 64225.1,
    "rating": 3.9,
    "reviews": 352,
    "image": "/assets/products/mobile/realme-narzo-50-speed-blue-64-gb-4-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-50-speed-blue-64-gb-4-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p214",
    "title": "realme-narzo-50-speed-blue-64-gb-4-gb-ram-3",
    "description": "Premium Smartphones – realme-narzo-50-speed-blue-64-gb-4-gb-ram-3. High performance & reliability.",
    "price": 59504.37,
    "originalPrice": 76506.31,
    "rating": 4,
    "reviews": 24,
    "image": "/assets/products/mobile/realme-narzo-50-speed-blue-64-gb-4-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-50-speed-blue-64-gb-4-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p215",
    "title": "realme-narzo-50-speed-blue-64-gb-4-gb-ram-4",
    "description": "Premium Smartphones – realme-narzo-50-speed-blue-64-gb-4-gb-ram-4. High performance & reliability.",
    "price": 37793.46,
    "originalPrice": 41780.68,
    "rating": 4.6,
    "reviews": 53,
    "image": "/assets/products/mobile/realme-narzo-50-speed-blue-64-gb-4-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-50-speed-blue-64-gb-4-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p216",
    "title": "realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-1",
    "description": "Premium Smartphones – realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-1. High performance & reliability.",
    "price": 61502.3,
    "originalPrice": 70598.1,
    "rating": 4.9,
    "reviews": 549,
    "image": "/assets/products/mobile/realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p217",
    "title": "realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-2",
    "description": "Premium Smartphones – realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-2. High performance & reliability.",
    "price": 17177.78,
    "originalPrice": 18543.73,
    "rating": 4,
    "reviews": 747,
    "image": "/assets/products/mobile/realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p218",
    "title": "realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-3",
    "description": "Premium Smartphones – realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-3. High performance & reliability.",
    "price": 47845.72,
    "originalPrice": 57512,
    "rating": 4.4,
    "reviews": 472,
    "image": "/assets/products/mobile/realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p219",
    "title": "realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-4",
    "description": "Premium Smartphones – realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-4. High performance & reliability.",
    "price": 31650.1,
    "originalPrice": 35028.83,
    "rating": 4.2,
    "reviews": 154,
    "image": "/assets/products/mobile/realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-50a-oxygen-blue-128-gb-4-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p220",
    "title": "realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-1",
    "description": "Premium Smartphones – realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-1. High performance & reliability.",
    "price": 23637.88,
    "originalPrice": 29966.22,
    "rating": 4.5,
    "reviews": 422,
    "image": "/assets/products/mobile/realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p221",
    "title": "realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-2",
    "description": "Premium Smartphones – realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-2. High performance & reliability.",
    "price": 52362.76,
    "originalPrice": 59813.1,
    "rating": 4.4,
    "reviews": 473,
    "image": "/assets/products/mobile/realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p222",
    "title": "realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-3",
    "description": "Premium Smartphones – realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-3. High performance & reliability.",
    "price": 6404.22,
    "originalPrice": 7747.83,
    "rating": 3.9,
    "reviews": 506,
    "image": "/assets/products/mobile/realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p223",
    "title": "realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-4",
    "description": "Premium Smartphones – realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-4. High performance & reliability.",
    "price": 8439.74,
    "originalPrice": 9682.04,
    "rating": 4.6,
    "reviews": 163,
    "image": "/assets/products/mobile/realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-narzo-50a-prime-flash-black-64-gb-4-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p224",
    "title": "realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-1",
    "description": "Premium Smartphones – realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-1. High performance & reliability.",
    "price": 79418.24,
    "originalPrice": 100123.02,
    "rating": 4.7,
    "reviews": 584,
    "image": "/assets/products/mobile/realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p225",
    "title": "realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-2",
    "description": "Premium Smartphones – realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-2. High performance & reliability.",
    "price": 52678.49,
    "originalPrice": 65376.12,
    "rating": 3.8,
    "reviews": 755,
    "image": "/assets/products/mobile/realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p226",
    "title": "realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-3",
    "description": "Premium Smartphones – realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-3. High performance & reliability.",
    "price": 57002.88,
    "originalPrice": 71507.11,
    "rating": 4.5,
    "reviews": 402,
    "image": "/assets/products/mobile/realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p227",
    "title": "realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-4",
    "description": "Premium Smartphones – realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-4. High performance & reliability.",
    "price": 76304.27,
    "originalPrice": 81462.22,
    "rating": 3.6,
    "reviews": 684,
    "image": "/assets/products/mobile/realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/realme-x7-pro-5g-fantasy-128-gb-8-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p228",
    "title": "samsung-galaxy-a03-black-32-gb-3-gb-ram-1",
    "description": "Premium Smartphones – samsung-galaxy-a03-black-32-gb-3-gb-ram-1. High performance & reliability.",
    "price": 76579.97,
    "originalPrice": 83971.36,
    "rating": 4.1,
    "reviews": 360,
    "image": "/assets/products/mobile/samsung-galaxy-a03-black-32-gb-3-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a03-black-32-gb-3-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p229",
    "title": "samsung-galaxy-a03-black-32-gb-3-gb-ram-2",
    "description": "Premium Smartphones – samsung-galaxy-a03-black-32-gb-3-gb-ram-2. High performance & reliability.",
    "price": 22188.75,
    "originalPrice": 26469.48,
    "rating": 3.8,
    "reviews": 699,
    "image": "/assets/products/mobile/samsung-galaxy-a03-black-32-gb-3-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a03-black-32-gb-3-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p230",
    "title": "samsung-galaxy-a03-black-32-gb-3-gb-ram-3",
    "description": "Premium Smartphones – samsung-galaxy-a03-black-32-gb-3-gb-ram-3. High performance & reliability.",
    "price": 78558.04,
    "originalPrice": 89325.95,
    "rating": 4.9,
    "reviews": 97,
    "image": "/assets/products/mobile/samsung-galaxy-a03-black-32-gb-3-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a03-black-32-gb-3-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p231",
    "title": "samsung-galaxy-a03-black-32-gb-3-gb-ram-4",
    "description": "Premium Smartphones – samsung-galaxy-a03-black-32-gb-3-gb-ram-4. High performance & reliability.",
    "price": 48468.58,
    "originalPrice": 51551.87,
    "rating": 4.5,
    "reviews": 608,
    "image": "/assets/products/mobile/samsung-galaxy-a03-black-32-gb-3-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a03-black-32-gb-3-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p232",
    "title": "samsung-galaxy-a10s-black-32-gb-3-gb-ram-1",
    "description": "Premium Smartphones – samsung-galaxy-a10s-black-32-gb-3-gb-ram-1. High performance & reliability.",
    "price": 63049.77,
    "originalPrice": 78323.98,
    "rating": 4.5,
    "reviews": 410,
    "image": "/assets/products/mobile/samsung-galaxy-a10s-black-32-gb-3-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a10s-black-32-gb-3-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p233",
    "title": "samsung-galaxy-a10s-black-32-gb-3-gb-ram-2",
    "description": "Premium Smartphones – samsung-galaxy-a10s-black-32-gb-3-gb-ram-2. High performance & reliability.",
    "price": 73356.52,
    "originalPrice": 86790.15,
    "rating": 3.7,
    "reviews": 376,
    "image": "/assets/products/mobile/samsung-galaxy-a10s-black-32-gb-3-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a10s-black-32-gb-3-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p234",
    "title": "samsung-galaxy-a10s-black-32-gb-3-gb-ram-3",
    "description": "Premium Smartphones – samsung-galaxy-a10s-black-32-gb-3-gb-ram-3. High performance & reliability.",
    "price": 30528.44,
    "originalPrice": 34181.61,
    "rating": 4,
    "reviews": 324,
    "image": "/assets/products/mobile/samsung-galaxy-a10s-black-32-gb-3-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a10s-black-32-gb-3-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p235",
    "title": "samsung-galaxy-a10s-black-32-gb-3-gb-ram-4",
    "description": "Premium Smartphones – samsung-galaxy-a10s-black-32-gb-3-gb-ram-4. High performance & reliability.",
    "price": 77634.15,
    "originalPrice": 82492.69,
    "rating": 4.5,
    "reviews": 53,
    "image": "/assets/products/mobile/samsung-galaxy-a10s-black-32-gb-3-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a10s-black-32-gb-3-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p236",
    "title": "samsung-galaxy-a12-black-128-gb-6-gb-ram-1",
    "description": "Premium Smartphones – samsung-galaxy-a12-black-128-gb-6-gb-ram-1. High performance & reliability.",
    "price": 43918.65,
    "originalPrice": 46902.71,
    "rating": 4.5,
    "reviews": 492,
    "image": "/assets/products/mobile/samsung-galaxy-a12-black-128-gb-6-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a12-black-128-gb-6-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p237",
    "title": "samsung-galaxy-a12-black-128-gb-6-gb-ram-2",
    "description": "Premium Smartphones – samsung-galaxy-a12-black-128-gb-6-gb-ram-2. High performance & reliability.",
    "price": 26107.9,
    "originalPrice": 29384.58,
    "rating": 3.5,
    "reviews": 661,
    "image": "/assets/products/mobile/samsung-galaxy-a12-black-128-gb-6-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a12-black-128-gb-6-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p238",
    "title": "samsung-galaxy-a12-black-128-gb-6-gb-ram-3",
    "description": "Premium Smartphones – samsung-galaxy-a12-black-128-gb-6-gb-ram-3. High performance & reliability.",
    "price": 56137.89,
    "originalPrice": 67195.94,
    "rating": 4.7,
    "reviews": 79,
    "image": "/assets/products/mobile/samsung-galaxy-a12-black-128-gb-6-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a12-black-128-gb-6-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p239",
    "title": "samsung-galaxy-a12-black-128-gb-6-gb-ram-4",
    "description": "Premium Smartphones – samsung-galaxy-a12-black-128-gb-6-gb-ram-4. High performance & reliability.",
    "price": 48707.2,
    "originalPrice": 53319.9,
    "rating": 4,
    "reviews": 483,
    "image": "/assets/products/mobile/samsung-galaxy-a12-black-128-gb-6-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a12-black-128-gb-6-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p240",
    "title": "samsung-galaxy-a13-blue-128-gb-6-gb-ram-1",
    "description": "Premium Smartphones – samsung-galaxy-a13-blue-128-gb-6-gb-ram-1. High performance & reliability.",
    "price": 61838.16,
    "originalPrice": 73157.08,
    "rating": 4.1,
    "reviews": 214,
    "image": "/assets/products/mobile/samsung-galaxy-a13-blue-128-gb-6-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a13-blue-128-gb-6-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p241",
    "title": "samsung-galaxy-a13-blue-128-gb-6-gb-ram-2",
    "description": "Premium Smartphones – samsung-galaxy-a13-blue-128-gb-6-gb-ram-2. High performance & reliability.",
    "price": 19352.22,
    "originalPrice": 20091.7,
    "rating": 4.6,
    "reviews": 123,
    "image": "/assets/products/mobile/samsung-galaxy-a13-blue-128-gb-6-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a13-blue-128-gb-6-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p242",
    "title": "samsung-galaxy-a13-blue-128-gb-6-gb-ram-3",
    "description": "Premium Smartphones – samsung-galaxy-a13-blue-128-gb-6-gb-ram-3. High performance & reliability.",
    "price": 9629.33,
    "originalPrice": 12017.27,
    "rating": 3.7,
    "reviews": 47,
    "image": "/assets/products/mobile/samsung-galaxy-a13-blue-128-gb-6-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a13-blue-128-gb-6-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p243",
    "title": "samsung-galaxy-a13-blue-128-gb-6-gb-ram-4",
    "description": "Premium Smartphones – samsung-galaxy-a13-blue-128-gb-6-gb-ram-4. High performance & reliability.",
    "price": 8386.33,
    "originalPrice": 8963.28,
    "rating": 3.7,
    "reviews": 252,
    "image": "/assets/products/mobile/samsung-galaxy-a13-blue-128-gb-6-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a13-blue-128-gb-6-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p244",
    "title": "samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-1",
    "description": "Premium Smartphones – samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-1. High performance & reliability.",
    "price": 51482.19,
    "originalPrice": 59352.95,
    "rating": 4.9,
    "reviews": 672,
    "image": "/assets/products/mobile/samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p245",
    "title": "samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-2",
    "description": "Premium Smartphones – samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-2. High performance & reliability.",
    "price": 78975.12,
    "originalPrice": 92637.72,
    "rating": 4.7,
    "reviews": 237,
    "image": "/assets/products/mobile/samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p246",
    "title": "samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-3",
    "description": "Premium Smartphones – samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-3. High performance & reliability.",
    "price": 66547.56,
    "originalPrice": 79923.38,
    "rating": 4.4,
    "reviews": 707,
    "image": "/assets/products/mobile/samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p247",
    "title": "samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-4",
    "description": "Premium Smartphones – samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-4. High performance & reliability.",
    "price": 59812.85,
    "originalPrice": 68395,
    "rating": 4.4,
    "reviews": 586,
    "image": "/assets/products/mobile/samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a14-5g-dark-red-64-gb-4-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p248",
    "title": "samsung-galaxy-a23-peach-128-gb-8-gb-ram-1",
    "description": "Premium Smartphones – samsung-galaxy-a23-peach-128-gb-8-gb-ram-1. High performance & reliability.",
    "price": 21368.4,
    "originalPrice": 23598.75,
    "rating": 4.3,
    "reviews": 487,
    "image": "/assets/products/mobile/samsung-galaxy-a23-peach-128-gb-8-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a23-peach-128-gb-8-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p249",
    "title": "samsung-galaxy-a23-peach-128-gb-8-gb-ram-2",
    "description": "Premium Smartphones – samsung-galaxy-a23-peach-128-gb-8-gb-ram-2. High performance & reliability.",
    "price": 27858.7,
    "originalPrice": 33416.21,
    "rating": 3.7,
    "reviews": 755,
    "image": "/assets/products/mobile/samsung-galaxy-a23-peach-128-gb-8-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a23-peach-128-gb-8-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p250",
    "title": "samsung-galaxy-a23-peach-128-gb-8-gb-ram-3",
    "description": "Premium Smartphones – samsung-galaxy-a23-peach-128-gb-8-gb-ram-3. High performance & reliability.",
    "price": 59323.66,
    "originalPrice": 69294.17,
    "rating": 3.8,
    "reviews": 641,
    "image": "/assets/products/mobile/samsung-galaxy-a23-peach-128-gb-8-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a23-peach-128-gb-8-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p251",
    "title": "samsung-galaxy-a23-peach-128-gb-8-gb-ram-4",
    "description": "Premium Smartphones – samsung-galaxy-a23-peach-128-gb-8-gb-ram-4. High performance & reliability.",
    "price": 77833.42,
    "originalPrice": 82524.68,
    "rating": 4.8,
    "reviews": 547,
    "image": "/assets/products/mobile/samsung-galaxy-a23-peach-128-gb-8-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-a23-peach-128-gb-8-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p252",
    "title": "samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-1",
    "description": "Premium Smartphones – samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-1. High performance & reliability.",
    "price": 76599.59,
    "originalPrice": 95865.7,
    "rating": 4.2,
    "reviews": 256,
    "image": "/assets/products/mobile/samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p253",
    "title": "samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-2",
    "description": "Premium Smartphones – samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-2. High performance & reliability.",
    "price": 36844.01,
    "originalPrice": 47024.11,
    "rating": 3.6,
    "reviews": 376,
    "image": "/assets/products/mobile/samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p254",
    "title": "samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-3",
    "description": "Premium Smartphones – samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-3. High performance & reliability.",
    "price": 36224.78,
    "originalPrice": 38858.93,
    "rating": 4.9,
    "reviews": 649,
    "image": "/assets/products/mobile/samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p255",
    "title": "samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-4",
    "description": "Premium Smartphones – samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-4. High performance & reliability.",
    "price": 48934.77,
    "originalPrice": 58155.62,
    "rating": 3.6,
    "reviews": 531,
    "image": "/assets/products/mobile/samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-f23-5g-aqua-blue-128-gb-6-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p256",
    "title": "samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-1",
    "description": "Premium Smartphones – samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-1. High performance & reliability.",
    "price": 38766.12,
    "originalPrice": 42311.05,
    "rating": 4,
    "reviews": 174,
    "image": "/assets/products/mobile/samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p257",
    "title": "samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-2",
    "description": "Premium Smartphones – samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-2. High performance & reliability.",
    "price": 14338.44,
    "originalPrice": 17239.2,
    "rating": 4.8,
    "reviews": 411,
    "image": "/assets/products/mobile/samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p258",
    "title": "samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-3",
    "description": "Premium Smartphones – samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-3. High performance & reliability.",
    "price": 30877.25,
    "originalPrice": 31894.03,
    "rating": 4,
    "reviews": 319,
    "image": "/assets/products/mobile/samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p259",
    "title": "samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-4",
    "description": "Premium Smartphones – samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-4. High performance & reliability.",
    "price": 28286.83,
    "originalPrice": 36715.81,
    "rating": 3.5,
    "reviews": 399,
    "image": "/assets/products/mobile/samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-m53-5g-mystique-green-128-gb-8-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p260",
    "title": "samsung-galaxy-s20-fe-5g-cloud-mint-128-gb-8-gb-ram-1",
    "description": "Premium Smartphones – samsung-galaxy-s20-fe-5g-cloud-mint-128-gb-8-gb-ram-1. High performance & reliability.",
    "price": 38742.91,
    "originalPrice": 47964.42,
    "rating": 4.8,
    "reviews": 33,
    "image": "/assets/products/mobile/samsung-galaxy-s20-fe-5g-cloud-mint-128-gb-8-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-s20-fe-5g-cloud-mint-128-gb-8-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p261",
    "title": "samsung-galaxy-s20-fe-5g-cloud-mint-128-gb-8-gb-ram-2",
    "description": "Premium Smartphones – samsung-galaxy-s20-fe-5g-cloud-mint-128-gb-8-gb-ram-2. High performance & reliability.",
    "price": 64359.72,
    "originalPrice": 70900.55,
    "rating": 4.9,
    "reviews": 529,
    "image": "/assets/products/mobile/samsung-galaxy-s20-fe-5g-cloud-mint-128-gb-8-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-s20-fe-5g-cloud-mint-128-gb-8-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p262",
    "title": "samsung-galaxy-s20-fe-5g-cloud-mint-128-gb-8-gb-ram-3",
    "description": "Premium Smartphones – samsung-galaxy-s20-fe-5g-cloud-mint-128-gb-8-gb-ram-3. High performance & reliability.",
    "price": 30719.34,
    "originalPrice": 33252.51,
    "rating": 4.3,
    "reviews": 238,
    "image": "/assets/products/mobile/samsung-galaxy-s20-fe-5g-cloud-mint-128-gb-8-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-s20-fe-5g-cloud-mint-128-gb-8-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p263",
    "title": "samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-1",
    "description": "Premium Smartphones – samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-1. High performance & reliability.",
    "price": 13846.72,
    "originalPrice": 16971.84,
    "rating": 4.3,
    "reviews": 357,
    "image": "/assets/products/mobile/samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-1.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-1.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p264",
    "title": "samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-2",
    "description": "Premium Smartphones – samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-2. High performance & reliability.",
    "price": 68855.61,
    "originalPrice": 76849.92,
    "rating": 4,
    "reviews": 783,
    "image": "/assets/products/mobile/samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-2.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-2.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p265",
    "title": "samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-3",
    "description": "Premium Smartphones – samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-3. High performance & reliability.",
    "price": 78055.06,
    "originalPrice": 89835.24,
    "rating": 4.9,
    "reviews": 786,
    "image": "/assets/products/mobile/samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-3.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-3.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p266",
    "title": "samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-4",
    "description": "Premium Smartphones – samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-4. High performance & reliability.",
    "price": 10801.05,
    "originalPrice": 13703.69,
    "rating": 4,
    "reviews": 741,
    "image": "/assets/products/mobile/samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-4.webp",
    "thumbnails": [
      "/assets/products/mobile/samsung-galaxy-z-flip3-5g-cream-128-gb-8-gb-ram-4.webp"
    ],
    "categoryId": "mobile",
    "category": "Smartphones",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p267",
    "title": "asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-1",
    "description": "Premium Mice & Keyboards – asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-1. High performance & reliability.",
    "price": 3247.3,
    "originalPrice": 3949.72,
    "rating": 3.7,
    "reviews": 296,
    "image": "/assets/products/mouse/asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-1.webp",
    "thumbnails": [
      "/assets/products/mouse/asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p268",
    "title": "asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-2",
    "description": "Premium Mice & Keyboards – asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-2. High performance & reliability.",
    "price": 3883.39,
    "originalPrice": 4414.1,
    "rating": 3.5,
    "reviews": 59,
    "image": "/assets/products/mouse/asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-2.webp",
    "thumbnails": [
      "/assets/products/mouse/asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p269",
    "title": "asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-3",
    "description": "Premium Mice & Keyboards – asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-3. High performance & reliability.",
    "price": 4271.84,
    "originalPrice": 5188.31,
    "rating": 4.3,
    "reviews": 693,
    "image": "/assets/products/mouse/asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-3.webp",
    "thumbnails": [
      "/assets/products/mouse/asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p270",
    "title": "asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-4",
    "description": "Premium Mice & Keyboards – asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-4. High performance & reliability.",
    "price": 2205.27,
    "originalPrice": 2374.92,
    "rating": 4.7,
    "reviews": 228,
    "image": "/assets/products/mouse/asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-4.webp",
    "thumbnails": [
      "/assets/products/mouse/asus-marshmallow-silent-adj.-dpi-multi-mode-with-solar-cover-wireless-optical-mouse-2.4ghz-wireless-bluetooth-quiet-blue-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p271",
    "title": "dell-ms-116-wired-optical-mouse-usb-black-1",
    "description": "Premium Mice & Keyboards – dell-ms-116-wired-optical-mouse-usb-black-1. High performance & reliability.",
    "price": 4132.74,
    "originalPrice": 4180.25,
    "rating": 3.5,
    "reviews": 317,
    "image": "/assets/products/mouse/dell-ms-116-wired-optical-mouse-usb-black-1.webp",
    "thumbnails": [
      "/assets/products/mouse/dell-ms-116-wired-optical-mouse-usb-black-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p272",
    "title": "dell-ms-116-wired-optical-mouse-usb-black-2",
    "description": "Premium Mice & Keyboards – dell-ms-116-wired-optical-mouse-usb-black-2. High performance & reliability.",
    "price": 726.31,
    "originalPrice": 728.48,
    "rating": 4.4,
    "reviews": 237,
    "image": "/assets/products/mouse/dell-ms-116-wired-optical-mouse-usb-black-2.webp",
    "thumbnails": [
      "/assets/products/mouse/dell-ms-116-wired-optical-mouse-usb-black-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p273",
    "title": "dell-ms-116-wired-optical-mouse-usb-black-3",
    "description": "Premium Mice & Keyboards – dell-ms-116-wired-optical-mouse-usb-black-3. High performance & reliability.",
    "price": 2934.35,
    "originalPrice": 3050.04,
    "rating": 4.4,
    "reviews": 646,
    "image": "/assets/products/mouse/dell-ms-116-wired-optical-mouse-usb-black-3.webp",
    "thumbnails": [
      "/assets/products/mouse/dell-ms-116-wired-optical-mouse-usb-black-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p274",
    "title": "dell-ms-116-wired-optical-mouse-usb-black-4",
    "description": "Premium Mice & Keyboards – dell-ms-116-wired-optical-mouse-usb-black-4. High performance & reliability.",
    "price": 1388.56,
    "originalPrice": 1435.41,
    "rating": 4.1,
    "reviews": 516,
    "image": "/assets/products/mouse/dell-ms-116-wired-optical-mouse-usb-black-4.webp",
    "thumbnails": [
      "/assets/products/mouse/dell-ms-116-wired-optical-mouse-usb-black-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p275",
    "title": "flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-1",
    "description": "Premium Mice & Keyboards – flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-1. High performance & reliability.",
    "price": 3953.13,
    "originalPrice": 4944.28,
    "rating": 4.6,
    "reviews": 806,
    "image": "/assets/products/mouse/flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-1.webp",
    "thumbnails": [
      "/assets/products/mouse/flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p276",
    "title": "flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-2",
    "description": "Premium Mice & Keyboards – flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-2. High performance & reliability.",
    "price": 4081.04,
    "originalPrice": 4542.08,
    "rating": 4.2,
    "reviews": 722,
    "image": "/assets/products/mouse/flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-2.webp",
    "thumbnails": [
      "/assets/products/mouse/flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p277",
    "title": "flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-3",
    "description": "Premium Mice & Keyboards – flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-3. High performance & reliability.",
    "price": 2560,
    "originalPrice": 2770.56,
    "rating": 4.5,
    "reviews": 212,
    "image": "/assets/products/mouse/flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-3.webp",
    "thumbnails": [
      "/assets/products/mouse/flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p278",
    "title": "flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-4",
    "description": "Premium Mice & Keyboards – flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-4. High performance & reliability.",
    "price": 4145.85,
    "originalPrice": 4208.03,
    "rating": 4.3,
    "reviews": 327,
    "image": "/assets/products/mouse/flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-4.webp",
    "thumbnails": [
      "/assets/products/mouse/flipkart-smartbuy-power-wired-optical-mouse-usb-3.0-midnight-black-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p279",
    "title": "hp-250-wireless-optical-mouse-2.4ghz-wireless-black-1",
    "description": "Premium Mice & Keyboards – hp-250-wireless-optical-mouse-2.4ghz-wireless-black-1. High performance & reliability.",
    "price": 3290.98,
    "originalPrice": 3734.67,
    "rating": 3.8,
    "reviews": 503,
    "image": "/assets/products/mouse/hp-250-wireless-optical-mouse-2.4ghz-wireless-black-1.webp",
    "thumbnails": [
      "/assets/products/mouse/hp-250-wireless-optical-mouse-2.4ghz-wireless-black-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p280",
    "title": "hp-250-wireless-optical-mouse-2.4ghz-wireless-black-2",
    "description": "Premium Mice & Keyboards – hp-250-wireless-optical-mouse-2.4ghz-wireless-black-2. High performance & reliability.",
    "price": 4066.48,
    "originalPrice": 4275.87,
    "rating": 3.5,
    "reviews": 255,
    "image": "/assets/products/mouse/hp-250-wireless-optical-mouse-2.4ghz-wireless-black-2.webp",
    "thumbnails": [
      "/assets/products/mouse/hp-250-wireless-optical-mouse-2.4ghz-wireless-black-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p281",
    "title": "hp-250-wireless-optical-mouse-2.4ghz-wireless-black-3",
    "description": "Premium Mice & Keyboards – hp-250-wireless-optical-mouse-2.4ghz-wireless-black-3. High performance & reliability.",
    "price": 3732.46,
    "originalPrice": 4218.87,
    "rating": 3.6,
    "reviews": 297,
    "image": "/assets/products/mouse/hp-250-wireless-optical-mouse-2.4ghz-wireless-black-3.webp",
    "thumbnails": [
      "/assets/products/mouse/hp-250-wireless-optical-mouse-2.4ghz-wireless-black-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p282",
    "title": "hp-250-wireless-optical-mouse-2.4ghz-wireless-black-4",
    "description": "Premium Mice & Keyboards – hp-250-wireless-optical-mouse-2.4ghz-wireless-black-4. High performance & reliability.",
    "price": 2780.49,
    "originalPrice": 3181.2,
    "rating": 3.8,
    "reviews": 542,
    "image": "/assets/products/mouse/hp-250-wireless-optical-mouse-2.4ghz-wireless-black-4.webp",
    "thumbnails": [
      "/assets/products/mouse/hp-250-wireless-optical-mouse-2.4ghz-wireless-black-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p283",
    "title": "hp-x1000-wired-optical-mouse-usb-2.0-black-1",
    "description": "Premium Mice & Keyboards – hp-x1000-wired-optical-mouse-usb-2.0-black-1. High performance & reliability.",
    "price": 2265.81,
    "originalPrice": 2865.84,
    "rating": 4.4,
    "reviews": 219,
    "image": "/assets/products/mouse/hp-x1000-wired-optical-mouse-usb-2.0-black-1.webp",
    "thumbnails": [
      "/assets/products/mouse/hp-x1000-wired-optical-mouse-usb-2.0-black-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p284",
    "title": "hp-x1000-wired-optical-mouse-usb-2.0-black-2",
    "description": "Premium Mice & Keyboards – hp-x1000-wired-optical-mouse-usb-2.0-black-2. High performance & reliability.",
    "price": 2461.64,
    "originalPrice": 3164.54,
    "rating": 4.9,
    "reviews": 770,
    "image": "/assets/products/mouse/hp-x1000-wired-optical-mouse-usb-2.0-black-2.webp",
    "thumbnails": [
      "/assets/products/mouse/hp-x1000-wired-optical-mouse-usb-2.0-black-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p285",
    "title": "hp-x1000-wired-optical-mouse-usb-2.0-black-3",
    "description": "Premium Mice & Keyboards – hp-x1000-wired-optical-mouse-usb-2.0-black-3. High performance & reliability.",
    "price": 4340.99,
    "originalPrice": 5384.03,
    "rating": 4.7,
    "reviews": 415,
    "image": "/assets/products/mouse/hp-x1000-wired-optical-mouse-usb-2.0-black-3.webp",
    "thumbnails": [
      "/assets/products/mouse/hp-x1000-wired-optical-mouse-usb-2.0-black-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p286",
    "title": "hp-x1000-wired-optical-mouse-usb-2.0-black-4",
    "description": "Premium Mice & Keyboards – hp-x1000-wired-optical-mouse-usb-2.0-black-4. High performance & reliability.",
    "price": 2972.24,
    "originalPrice": 3361.88,
    "rating": 4.2,
    "reviews": 358,
    "image": "/assets/products/mouse/hp-x1000-wired-optical-mouse-usb-2.0-black-4.webp",
    "thumbnails": [
      "/assets/products/mouse/hp-x1000-wired-optical-mouse-usb-2.0-black-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p287",
    "title": "lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-1",
    "description": "Premium Mice & Keyboards – lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-1. High performance & reliability.",
    "price": 4507.3,
    "originalPrice": 5307.83,
    "rating": 3.8,
    "reviews": 798,
    "image": "/assets/products/mouse/lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-1.webp",
    "thumbnails": [
      "/assets/products/mouse/lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p288",
    "title": "lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-2",
    "description": "Premium Mice & Keyboards – lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-2. High performance & reliability.",
    "price": 4318.31,
    "originalPrice": 5576.78,
    "rating": 4.8,
    "reviews": 159,
    "image": "/assets/products/mouse/lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-2.webp",
    "thumbnails": [
      "/assets/products/mouse/lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p289",
    "title": "lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-3",
    "description": "Premium Mice & Keyboards – lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-3. High performance & reliability.",
    "price": 364.18,
    "originalPrice": 366.57,
    "rating": 4.1,
    "reviews": 125,
    "image": "/assets/products/mouse/lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-3.webp",
    "thumbnails": [
      "/assets/products/mouse/lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p290",
    "title": "lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-4",
    "description": "Premium Mice & Keyboards – lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-4. High performance & reliability.",
    "price": 1572.28,
    "originalPrice": 1920.03,
    "rating": 3.6,
    "reviews": 236,
    "image": "/assets/products/mouse/lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-4.webp",
    "thumbnails": [
      "/assets/products/mouse/lenovo-130-wireless-optical-mouse-2.4ghz-wireless-black-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p291",
    "title": "lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-1",
    "description": "Premium Mice & Keyboards – lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-1. High performance & reliability.",
    "price": 1302.78,
    "originalPrice": 1561.4,
    "rating": 4.4,
    "reviews": 351,
    "image": "/assets/products/mouse/lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-1.webp",
    "thumbnails": [
      "/assets/products/mouse/lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p292",
    "title": "lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-2",
    "description": "Premium Mice & Keyboards – lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-2. High performance & reliability.",
    "price": 950.63,
    "originalPrice": 1195.94,
    "rating": 3.8,
    "reviews": 367,
    "image": "/assets/products/mouse/lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-2.webp",
    "thumbnails": [
      "/assets/products/mouse/lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p293",
    "title": "lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-3",
    "description": "Premium Mice & Keyboards – lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-3. High performance & reliability.",
    "price": 2018.28,
    "originalPrice": 2176.9,
    "rating": 4.9,
    "reviews": 23,
    "image": "/assets/products/mouse/lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-3.webp",
    "thumbnails": [
      "/assets/products/mouse/lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p294",
    "title": "lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-4",
    "description": "Premium Mice & Keyboards – lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-4. High performance & reliability.",
    "price": 1006.23,
    "originalPrice": 1049.52,
    "rating": 4.1,
    "reviews": 535,
    "image": "/assets/products/mouse/lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-4.webp",
    "thumbnails": [
      "/assets/products/mouse/lenovo-mice_bo-400-mouse-model-l300-wireless-optical-mouse-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p295",
    "title": "logitech-b100-wired-optical-mouse-usb-black-1",
    "description": "Premium Mice & Keyboards – logitech-b100-wired-optical-mouse-usb-black-1. High performance & reliability.",
    "price": 2632.33,
    "originalPrice": 2731.79,
    "rating": 3.8,
    "reviews": 632,
    "image": "/assets/products/mouse/logitech-b100-wired-optical-mouse-usb-black-1.webp",
    "thumbnails": [
      "/assets/products/mouse/logitech-b100-wired-optical-mouse-usb-black-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p296",
    "title": "logitech-b100-wired-optical-mouse-usb-black-2",
    "description": "Premium Mice & Keyboards – logitech-b100-wired-optical-mouse-usb-black-2. High performance & reliability.",
    "price": 1711.42,
    "originalPrice": 1811.29,
    "rating": 4.1,
    "reviews": 761,
    "image": "/assets/products/mouse/logitech-b100-wired-optical-mouse-usb-black-2.webp",
    "thumbnails": [
      "/assets/products/mouse/logitech-b100-wired-optical-mouse-usb-black-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p297",
    "title": "logitech-b100-wired-optical-mouse-usb-black-3",
    "description": "Premium Mice & Keyboards – logitech-b100-wired-optical-mouse-usb-black-3. High performance & reliability.",
    "price": 3673.42,
    "originalPrice": 3801.58,
    "rating": 4.6,
    "reviews": 133,
    "image": "/assets/products/mouse/logitech-b100-wired-optical-mouse-usb-black-3.webp",
    "thumbnails": [
      "/assets/products/mouse/logitech-b100-wired-optical-mouse-usb-black-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p298",
    "title": "logitech-b100-wired-optical-mouse-usb-black-4",
    "description": "Premium Mice & Keyboards – logitech-b100-wired-optical-mouse-usb-black-4. High performance & reliability.",
    "price": 2128.21,
    "originalPrice": 2145.52,
    "rating": 3.9,
    "reviews": 203,
    "image": "/assets/products/mouse/logitech-b100-wired-optical-mouse-usb-black-4.webp",
    "thumbnails": [
      "/assets/products/mouse/logitech-b100-wired-optical-mouse-usb-black-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p299",
    "title": "logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-1",
    "description": "Premium Mice & Keyboards – logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-1. High performance & reliability.",
    "price": 1879.9,
    "originalPrice": 2401.88,
    "rating": 3.7,
    "reviews": 298,
    "image": "/assets/products/mouse/logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-1.webp",
    "thumbnails": [
      "/assets/products/mouse/logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p300",
    "title": "logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-2",
    "description": "Premium Mice & Keyboards – logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-2. High performance & reliability.",
    "price": 3793.82,
    "originalPrice": 3915.95,
    "rating": 3.6,
    "reviews": 247,
    "image": "/assets/products/mouse/logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-2.webp",
    "thumbnails": [
      "/assets/products/mouse/logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p301",
    "title": "logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-3",
    "description": "Premium Mice & Keyboards – logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-3. High performance & reliability.",
    "price": 2041.55,
    "originalPrice": 2616.42,
    "rating": 3.7,
    "reviews": 68,
    "image": "/assets/products/mouse/logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-3.webp",
    "thumbnails": [
      "/assets/products/mouse/logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p302",
    "title": "logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-4",
    "description": "Premium Mice & Keyboards – logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-4. High performance & reliability.",
    "price": 1570.05,
    "originalPrice": 1952.16,
    "rating": 4.6,
    "reviews": 514,
    "image": "/assets/products/mouse/logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-4.webp",
    "thumbnails": [
      "/assets/products/mouse/logitech-b175-optical-tracking-12-months-battery-life-ambidextrous-wireless-optical-mouse-2.4ghz-wireless-black-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p303",
    "title": "portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-1",
    "description": "Premium Mice & Keyboards – portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-1. High performance & reliability.",
    "price": 557.43,
    "originalPrice": 666.06,
    "rating": 3.8,
    "reviews": 497,
    "image": "/assets/products/mouse/portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-1.webp",
    "thumbnails": [
      "/assets/products/mouse/portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p304",
    "title": "portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-2",
    "description": "Premium Mice & Keyboards – portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-2. High performance & reliability.",
    "price": 1857.18,
    "originalPrice": 2049.48,
    "rating": 4.4,
    "reviews": 554,
    "image": "/assets/products/mouse/portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-2.webp",
    "thumbnails": [
      "/assets/products/mouse/portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p305",
    "title": "portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-3",
    "description": "Premium Mice & Keyboards – portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-3. High performance & reliability.",
    "price": 4589.62,
    "originalPrice": 4594,
    "rating": 4.9,
    "reviews": 383,
    "image": "/assets/products/mouse/portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-3.webp",
    "thumbnails": [
      "/assets/products/mouse/portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p306",
    "title": "portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-4",
    "description": "Premium Mice & Keyboards – portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-4. High performance & reliability.",
    "price": 842.73,
    "originalPrice": 1042.17,
    "rating": 3.7,
    "reviews": 651,
    "image": "/assets/products/mouse/portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-4.webp",
    "thumbnails": [
      "/assets/products/mouse/portronics-toad-22-por-1612-wireless-optical-mouse-2.4ghz-wireless-black-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p307",
    "title": "portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-1",
    "description": "Premium Mice & Keyboards – portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-1. High performance & reliability.",
    "price": 2214.86,
    "originalPrice": 2401.52,
    "rating": 3.9,
    "reviews": 423,
    "image": "/assets/products/mouse/portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-1.webp",
    "thumbnails": [
      "/assets/products/mouse/portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p308",
    "title": "portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-2",
    "description": "Premium Mice & Keyboards – portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-2. High performance & reliability.",
    "price": 4658.97,
    "originalPrice": 5407.99,
    "rating": 4.2,
    "reviews": 260,
    "image": "/assets/products/mouse/portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-2.webp",
    "thumbnails": [
      "/assets/products/mouse/portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p309",
    "title": "portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-3",
    "description": "Premium Mice & Keyboards – portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-3. High performance & reliability.",
    "price": 1874.37,
    "originalPrice": 1907.97,
    "rating": 4.1,
    "reviews": 300,
    "image": "/assets/products/mouse/portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-3.webp",
    "thumbnails": [
      "/assets/products/mouse/portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p310",
    "title": "portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-4",
    "description": "Premium Mice & Keyboards – portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-4. High performance & reliability.",
    "price": 2262.74,
    "originalPrice": 2397.32,
    "rating": 5,
    "reviews": 267,
    "image": "/assets/products/mouse/portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-4.webp",
    "thumbnails": [
      "/assets/products/mouse/portronics-toad-24-por-1611-wireless-optical-mouse-2.4ghz-wireless-black-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p311",
    "title": "portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-1",
    "description": "Premium Mice & Keyboards – portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-1. High performance & reliability.",
    "price": 1357.4,
    "originalPrice": 1403.55,
    "rating": 4.3,
    "reviews": 500,
    "image": "/assets/products/mouse/portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-1.webp",
    "thumbnails": [
      "/assets/products/mouse/portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p312",
    "title": "portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-2",
    "description": "Premium Mice & Keyboards – portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-2. High performance & reliability.",
    "price": 4295.53,
    "originalPrice": 4443.3,
    "rating": 4,
    "reviews": 305,
    "image": "/assets/products/mouse/portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-2.webp",
    "thumbnails": [
      "/assets/products/mouse/portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p313",
    "title": "portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-3",
    "description": "Premium Mice & Keyboards – portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-3. High performance & reliability.",
    "price": 3442.26,
    "originalPrice": 3853.36,
    "rating": 5,
    "reviews": 12,
    "image": "/assets/products/mouse/portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-3.webp",
    "thumbnails": [
      "/assets/products/mouse/portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p314",
    "title": "portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-4",
    "description": "Premium Mice & Keyboards – portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-4. High performance & reliability.",
    "price": 1573.46,
    "originalPrice": 2001.58,
    "rating": 3.9,
    "reviews": 174,
    "image": "/assets/products/mouse/portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-4.webp",
    "thumbnails": [
      "/assets/products/mouse/portronics-toad-one-wireless-optical-mouse-2.4ghz-wireless-bluetooth-black-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p315",
    "title": "zoook-bomber-wired-optical-mouse-usb-2.0-black-1",
    "description": "Premium Mice & Keyboards – zoook-bomber-wired-optical-mouse-usb-2.0-black-1. High performance & reliability.",
    "price": 3497.81,
    "originalPrice": 4154.13,
    "rating": 4.7,
    "reviews": 381,
    "image": "/assets/products/mouse/zoook-bomber-wired-optical-mouse-usb-2.0-black-1.webp",
    "thumbnails": [
      "/assets/products/mouse/zoook-bomber-wired-optical-mouse-usb-2.0-black-1.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p316",
    "title": "zoook-bomber-wired-optical-mouse-usb-2.0-black-2",
    "description": "Premium Mice & Keyboards – zoook-bomber-wired-optical-mouse-usb-2.0-black-2. High performance & reliability.",
    "price": 1346.42,
    "originalPrice": 1654,
    "rating": 3.9,
    "reviews": 197,
    "image": "/assets/products/mouse/zoook-bomber-wired-optical-mouse-usb-2.0-black-2.webp",
    "thumbnails": [
      "/assets/products/mouse/zoook-bomber-wired-optical-mouse-usb-2.0-black-2.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p317",
    "title": "zoook-bomber-wired-optical-mouse-usb-2.0-black-3",
    "description": "Premium Mice & Keyboards – zoook-bomber-wired-optical-mouse-usb-2.0-black-3. High performance & reliability.",
    "price": 4599.86,
    "originalPrice": 5769.69,
    "rating": 4.5,
    "reviews": 708,
    "image": "/assets/products/mouse/zoook-bomber-wired-optical-mouse-usb-2.0-black-3.webp",
    "thumbnails": [
      "/assets/products/mouse/zoook-bomber-wired-optical-mouse-usb-2.0-black-3.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p318",
    "title": "zoook-bomber-wired-optical-mouse-usb-2.0-black-4",
    "description": "Premium Mice & Keyboards – zoook-bomber-wired-optical-mouse-usb-2.0-black-4. High performance & reliability.",
    "price": 2525.91,
    "originalPrice": 2957.67,
    "rating": 5,
    "reviews": 232,
    "image": "/assets/products/mouse/zoook-bomber-wired-optical-mouse-usb-2.0-black-4.webp",
    "thumbnails": [
      "/assets/products/mouse/zoook-bomber-wired-optical-mouse-usb-2.0-black-4.webp"
    ],
    "categoryId": "mouse",
    "category": "Mice & Keyboards",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p319",
    "title": "canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-1",
    "description": "Premium Printers – canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-1. High performance & reliability.",
    "price": 10832.47,
    "originalPrice": 13306.76,
    "rating": 4.3,
    "reviews": 774,
    "image": "/assets/products/printers/canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-1.webp",
    "thumbnails": [
      "/assets/products/printers/canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-1.webp"
    ],
    "categoryId": "printers",
    "category": "Printers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p320",
    "title": "canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-2",
    "description": "Premium Printers – canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-2. High performance & reliability.",
    "price": 17097.26,
    "originalPrice": 17974.8,
    "rating": 4.4,
    "reviews": 651,
    "image": "/assets/products/printers/canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-2.webp",
    "thumbnails": [
      "/assets/products/printers/canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-2.webp"
    ],
    "categoryId": "printers",
    "category": "Printers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p321",
    "title": "canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-3",
    "description": "Premium Printers – canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-3. High performance & reliability.",
    "price": 13355.43,
    "originalPrice": 16284.87,
    "rating": 4.6,
    "reviews": 111,
    "image": "/assets/products/printers/canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-3.webp",
    "thumbnails": [
      "/assets/products/printers/canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-3.webp"
    ],
    "categoryId": "printers",
    "category": "Printers",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p322",
    "title": "canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-4",
    "description": "Premium Printers – canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-4. High performance & reliability.",
    "price": 4684.52,
    "originalPrice": 4710.85,
    "rating": 4.5,
    "reviews": 469,
    "image": "/assets/products/printers/canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-4.webp",
    "thumbnails": [
      "/assets/products/printers/canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-4.webp"
    ],
    "categoryId": "printers",
    "category": "Printers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p323",
    "title": "canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-5",
    "description": "Premium Printers – canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-5. High performance & reliability.",
    "price": 4538.4,
    "originalPrice": 4799.47,
    "rating": 4,
    "reviews": 260,
    "image": "/assets/products/printers/canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-5.webp",
    "thumbnails": [
      "/assets/products/printers/canon-mg2570s-multi-function-color-inkjet-printer-black-ink-cartridge-5.webp"
    ],
    "categoryId": "printers",
    "category": "Printers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p324",
    "title": "canon-pixma-mg2470-all-in-one-inkjet-printer-white-grey-ink-cartridge-1",
    "description": "Premium Printers – canon-pixma-mg2470-all-in-one-inkjet-printer-white-grey-ink-cartridge-1. High performance & reliability.",
    "price": 7948.75,
    "originalPrice": 8289.33,
    "rating": 4.9,
    "reviews": 773,
    "image": "/assets/products/printers/canon-pixma-mg2470-all-in-one-inkjet-printer-white-grey-ink-cartridge-1.webp",
    "thumbnails": [
      "/assets/products/printers/canon-pixma-mg2470-all-in-one-inkjet-printer-white-grey-ink-cartridge-1.webp"
    ],
    "categoryId": "printers",
    "category": "Printers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p325",
    "title": "canon-pixma-mg2470-all-in-one-inkjet-printer-white-grey-ink-cartridge-2",
    "description": "Premium Printers – canon-pixma-mg2470-all-in-one-inkjet-printer-white-grey-ink-cartridge-2. High performance & reliability.",
    "price": 21926.68,
    "originalPrice": 26014.09,
    "rating": 4.9,
    "reviews": 158,
    "image": "/assets/products/printers/canon-pixma-mg2470-all-in-one-inkjet-printer-white-grey-ink-cartridge-2.webp",
    "thumbnails": [
      "/assets/products/printers/canon-pixma-mg2470-all-in-one-inkjet-printer-white-grey-ink-cartridge-2.webp"
    ],
    "categoryId": "printers",
    "category": "Printers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p326",
    "title": "amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-1",
    "description": "Premium Processors – amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-1. High performance & reliability.",
    "price": 12510.73,
    "originalPrice": 13497.45,
    "rating": 4.6,
    "reviews": 651,
    "image": "/assets/products/processor/amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-1.webp",
    "thumbnails": [
      "/assets/products/processor/amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-1.webp"
    ],
    "categoryId": "processor",
    "category": "Processors",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p327",
    "title": "amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-2",
    "description": "Premium Processors – amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-2. High performance & reliability.",
    "price": 30902.53,
    "originalPrice": 36225.76,
    "rating": 3.9,
    "reviews": 335,
    "image": "/assets/products/processor/amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-2.webp",
    "thumbnails": [
      "/assets/products/processor/amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-2.webp"
    ],
    "categoryId": "processor",
    "category": "Processors",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p328",
    "title": "amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-3",
    "description": "Premium Processors – amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-3. High performance & reliability.",
    "price": 45851.35,
    "originalPrice": 53110.51,
    "rating": 4.9,
    "reviews": 324,
    "image": "/assets/products/processor/amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-3.webp",
    "thumbnails": [
      "/assets/products/processor/amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-3.webp"
    ],
    "categoryId": "processor",
    "category": "Processors",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p329",
    "title": "amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-4",
    "description": "Premium Processors – amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-4. High performance & reliability.",
    "price": 46132.47,
    "originalPrice": 59649.42,
    "rating": 3.8,
    "reviews": 98,
    "image": "/assets/products/processor/amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-4.webp",
    "thumbnails": [
      "/assets/products/processor/amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-4.webp"
    ],
    "categoryId": "processor",
    "category": "Processors",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p330",
    "title": "amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-5",
    "description": "Premium Processors – amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-5. High performance & reliability.",
    "price": 24294.13,
    "originalPrice": 25911.85,
    "rating": 3.7,
    "reviews": 296,
    "image": "/assets/products/processor/amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-5.webp",
    "thumbnails": [
      "/assets/products/processor/amd-ryzen-7-3700x-with-wraith-prism-&-rgb-led-cooler-100-100000071box-3.6-ghz-upto-4.4-ghz-am4-socket-8-cores-16-threads-4-mb-l2-32-mb-l3-desktop-processor-silver-5.webp"
    ],
    "categoryId": "processor",
    "category": "Processors",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p331",
    "title": "amd-ryzen-7-3800xt-3.9-ghz-upto-4.7-ghz-am4-socket-8-cores-16-threads-desktop-processor-silver-1",
    "description": "Premium Processors – amd-ryzen-7-3800xt-3.9-ghz-upto-4.7-ghz-am4-socket-8-cores-16-threads-desktop-processor-silver-1. High performance & reliability.",
    "price": 35348.47,
    "originalPrice": 38897.68,
    "rating": 3.9,
    "reviews": 573,
    "image": "/assets/products/processor/amd-ryzen-7-3800xt-3.9-ghz-upto-4.7-ghz-am4-socket-8-cores-16-threads-desktop-processor-silver-1.webp",
    "thumbnails": [
      "/assets/products/processor/amd-ryzen-7-3800xt-3.9-ghz-upto-4.7-ghz-am4-socket-8-cores-16-threads-desktop-processor-silver-1.webp"
    ],
    "categoryId": "processor",
    "category": "Processors",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p332",
    "title": "amd-ryzen-7-3800xt-3.9-ghz-upto-4.7-ghz-am4-socket-8-cores-16-threads-desktop-processor-silver-2",
    "description": "Premium Processors – amd-ryzen-7-3800xt-3.9-ghz-upto-4.7-ghz-am4-socket-8-cores-16-threads-desktop-processor-silver-2. High performance & reliability.",
    "price": 24639.46,
    "originalPrice": 29586.68,
    "rating": 4.9,
    "reviews": 478,
    "image": "/assets/products/processor/amd-ryzen-7-3800xt-3.9-ghz-upto-4.7-ghz-am4-socket-8-cores-16-threads-desktop-processor-silver-2.webp",
    "thumbnails": [
      "/assets/products/processor/amd-ryzen-7-3800xt-3.9-ghz-upto-4.7-ghz-am4-socket-8-cores-16-threads-desktop-processor-silver-2.webp"
    ],
    "categoryId": "processor",
    "category": "Processors",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p333",
    "title": "amd-ryzen-7-3800xt-3.9-ghz-upto-4.7-ghz-am4-socket-8-cores-16-threads-desktop-processor-silver-3",
    "description": "Premium Processors – amd-ryzen-7-3800xt-3.9-ghz-upto-4.7-ghz-am4-socket-8-cores-16-threads-desktop-processor-silver-3. High performance & reliability.",
    "price": 14092,
    "originalPrice": 18289.11,
    "rating": 4.3,
    "reviews": 101,
    "image": "/assets/products/processor/amd-ryzen-7-3800xt-3.9-ghz-upto-4.7-ghz-am4-socket-8-cores-16-threads-desktop-processor-silver-3.webp",
    "thumbnails": [
      "/assets/products/processor/amd-ryzen-7-3800xt-3.9-ghz-upto-4.7-ghz-am4-socket-8-cores-16-threads-desktop-processor-silver-3.webp"
    ],
    "categoryId": "processor",
    "category": "Processors",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p334",
    "title": "gigastar-3.2-ghz-lga-1156-intel-core-i5-650-for-h55-motherboard-1st-generation-processor-silver-1",
    "description": "Premium Processors – gigastar-3.2-ghz-lga-1156-intel-core-i5-650-for-h55-motherboard-1st-generation-processor-silver-1. High performance & reliability.",
    "price": 53430.7,
    "originalPrice": 54086.01,
    "rating": 4.9,
    "reviews": 55,
    "image": "/assets/products/processor/gigastar-3.2-ghz-lga-1156-intel-core-i5-650-for-h55-motherboard-1st-generation-processor-silver-1.webp",
    "thumbnails": [
      "/assets/products/processor/gigastar-3.2-ghz-lga-1156-intel-core-i5-650-for-h55-motherboard-1st-generation-processor-silver-1.webp"
    ],
    "categoryId": "processor",
    "category": "Processors",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p335",
    "title": "gigastar-3.2-ghz-lga-1156-intel-core-i5-650-for-h55-motherboard-1st-generation-processor-silver-2",
    "description": "Premium Processors – gigastar-3.2-ghz-lga-1156-intel-core-i5-650-for-h55-motherboard-1st-generation-processor-silver-2. High performance & reliability.",
    "price": 10019.79,
    "originalPrice": 10885.85,
    "rating": 4.8,
    "reviews": 444,
    "image": "/assets/products/processor/gigastar-3.2-ghz-lga-1156-intel-core-i5-650-for-h55-motherboard-1st-generation-processor-silver-2.webp",
    "thumbnails": [
      "/assets/products/processor/gigastar-3.2-ghz-lga-1156-intel-core-i5-650-for-h55-motherboard-1st-generation-processor-silver-2.webp"
    ],
    "categoryId": "processor",
    "category": "Processors",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p336",
    "title": "gigastar-3.2-ghz-lga-1156-intel-core-i5-650-for-h55-motherboard-1st-generation-processor-silver-3",
    "description": "Premium Processors – gigastar-3.2-ghz-lga-1156-intel-core-i5-650-for-h55-motherboard-1st-generation-processor-silver-3. High performance & reliability.",
    "price": 25096.5,
    "originalPrice": 28482.27,
    "rating": 3.6,
    "reviews": 281,
    "image": "/assets/products/processor/gigastar-3.2-ghz-lga-1156-intel-core-i5-650-for-h55-motherboard-1st-generation-processor-silver-3.webp",
    "thumbnails": [
      "/assets/products/processor/gigastar-3.2-ghz-lga-1156-intel-core-i5-650-for-h55-motherboard-1st-generation-processor-silver-3.webp"
    ],
    "categoryId": "processor",
    "category": "Processors",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p337",
    "title": "godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-1",
    "description": "Premium Refrigerators – godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-1. High performance & reliability.",
    "price": 54910.58,
    "originalPrice": 70402.38,
    "rating": 4,
    "reviews": 25,
    "image": "/assets/products/refrigerator/godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p338",
    "title": "godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-2",
    "description": "Premium Refrigerators – godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-2. High performance & reliability.",
    "price": 31936.1,
    "originalPrice": 33008.78,
    "rating": 3.9,
    "reviews": 615,
    "image": "/assets/products/refrigerator/godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p339",
    "title": "godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-3",
    "description": "Premium Refrigerators – godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-3. High performance & reliability.",
    "price": 26131.64,
    "originalPrice": 32737.74,
    "rating": 4.5,
    "reviews": 332,
    "image": "/assets/products/refrigerator/godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p340",
    "title": "godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-4",
    "description": "Premium Refrigerators – godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-4. High performance & reliability.",
    "price": 50498.14,
    "originalPrice": 51391.88,
    "rating": 4.6,
    "reviews": 524,
    "image": "/assets/products/refrigerator/godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/godrej-215-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-aqua-blue-rd-uno-2154-ptdi-aq-bl-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p341",
    "title": "godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-1",
    "description": "Premium Refrigerators – godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-1. High performance & reliability.",
    "price": 36859.79,
    "originalPrice": 38299.41,
    "rating": 4.4,
    "reviews": 325,
    "image": "/assets/products/refrigerator/godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p342",
    "title": "godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-2",
    "description": "Premium Refrigerators – godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-2. High performance & reliability.",
    "price": 31588.54,
    "originalPrice": 36105.85,
    "rating": 4.3,
    "reviews": 779,
    "image": "/assets/products/refrigerator/godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p343",
    "title": "godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-3",
    "description": "Premium Refrigerators – godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-3. High performance & reliability.",
    "price": 29174.28,
    "originalPrice": 31471.63,
    "rating": 4.1,
    "reviews": 393,
    "image": "/assets/products/refrigerator/godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p344",
    "title": "godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-4",
    "description": "Premium Refrigerators – godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-4. High performance & reliability.",
    "price": 44669.49,
    "originalPrice": 45738.2,
    "rating": 3.6,
    "reviews": 692,
    "image": "/assets/products/refrigerator/godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/godrej-236-l-frost-free-double-door-2-star-refrigerator-royal-dremin-rf-eon-236b-25-hi-ry-dr-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p345",
    "title": "haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-1",
    "description": "Premium Refrigerators – haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-1. High performance & reliability.",
    "price": 29990.31,
    "originalPrice": 35882.54,
    "rating": 4.9,
    "reviews": 701,
    "image": "/assets/products/refrigerator/haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p346",
    "title": "haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-2",
    "description": "Premium Refrigerators – haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-2. High performance & reliability.",
    "price": 51771.51,
    "originalPrice": 62799.86,
    "rating": 4.8,
    "reviews": 279,
    "image": "/assets/products/refrigerator/haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p347",
    "title": "haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-3",
    "description": "Premium Refrigerators – haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-3. High performance & reliability.",
    "price": 36368.83,
    "originalPrice": 41896.28,
    "rating": 4.2,
    "reviews": 626,
    "image": "/assets/products/refrigerator/haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p348",
    "title": "haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-4",
    "description": "Premium Refrigerators – haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-4. High performance & reliability.",
    "price": 16686.35,
    "originalPrice": 17613.16,
    "rating": 4,
    "reviews": 454,
    "image": "/assets/products/refrigerator/haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/haier-195-l-direct-cool-single-door-4-star-refrigerator-prism-glass-hrd-1954cpg-e-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p349",
    "title": "haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-1",
    "description": "Premium Refrigerators – haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-1. High performance & reliability.",
    "price": 19968.37,
    "originalPrice": 23411.67,
    "rating": 4.3,
    "reviews": 115,
    "image": "/assets/products/refrigerator/haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p350",
    "title": "haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-2",
    "description": "Premium Refrigerators – haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-2. High performance & reliability.",
    "price": 47369.48,
    "originalPrice": 52927.22,
    "rating": 3.6,
    "reviews": 121,
    "image": "/assets/products/refrigerator/haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p351",
    "title": "haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-3",
    "description": "Premium Refrigerators – haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-3. High performance & reliability.",
    "price": 29372.55,
    "originalPrice": 34225.05,
    "rating": 3.7,
    "reviews": 699,
    "image": "/assets/products/refrigerator/haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p352",
    "title": "haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-4",
    "description": "Premium Refrigerators – haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-4. High performance & reliability.",
    "price": 19855.48,
    "originalPrice": 22768.98,
    "rating": 3.6,
    "reviews": 22,
    "image": "/assets/products/refrigerator/haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/haier-258-l-frost-free-double-door-3-star-convertible-refrigerator-xcel-glass-hrf-2784pxg-e-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p353",
    "title": "lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-1",
    "description": "Premium Refrigerators – lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-1. High performance & reliability.",
    "price": 52483.72,
    "originalPrice": 65077.25,
    "rating": 4.5,
    "reviews": 156,
    "image": "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p354",
    "title": "lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-2",
    "description": "Premium Refrigerators – lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-2. High performance & reliability.",
    "price": 58094.9,
    "originalPrice": 62617.55,
    "rating": 4.6,
    "reviews": 223,
    "image": "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p355",
    "title": "lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-3",
    "description": "Premium Refrigerators – lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-3. High performance & reliability.",
    "price": 30126.53,
    "originalPrice": 36690.72,
    "rating": 4.2,
    "reviews": 145,
    "image": "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p356",
    "title": "lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-4",
    "description": "Premium Refrigerators – lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-4. High performance & reliability.",
    "price": 48641.65,
    "originalPrice": 51197.7,
    "rating": 4.9,
    "reviews": 75,
    "image": "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p357",
    "title": "lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-5",
    "description": "Premium Refrigerators – lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-5. High performance & reliability.",
    "price": 58243.95,
    "originalPrice": 65296.26,
    "rating": 4.5,
    "reviews": 659,
    "image": "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-5.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-3-star-refrigerator-ebony-regal-gl-b199oerd-5.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p358",
    "title": "lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-1",
    "description": "Premium Refrigerators – lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-1. High performance & reliability.",
    "price": 24973.29,
    "originalPrice": 29910.3,
    "rating": 4.4,
    "reviews": 211,
    "image": "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p359",
    "title": "lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-2",
    "description": "Premium Refrigerators – lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-2. High performance & reliability.",
    "price": 53002.03,
    "originalPrice": 62147.38,
    "rating": 4.2,
    "reviews": 486,
    "image": "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p360",
    "title": "lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-3",
    "description": "Premium Refrigerators – lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-3. High performance & reliability.",
    "price": 21525.73,
    "originalPrice": 24146.79,
    "rating": 4.1,
    "reviews": 696,
    "image": "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p361",
    "title": "lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-4",
    "description": "Premium Refrigerators – lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-4. High performance & reliability.",
    "price": 26133.17,
    "originalPrice": 30908.63,
    "rating": 4.9,
    "reviews": 715,
    "image": "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-185-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-blue-charm-gl-d201abcu-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p362",
    "title": "lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-1",
    "description": "Premium Refrigerators – lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-1. High performance & reliability.",
    "price": 58754.18,
    "originalPrice": 73300.74,
    "rating": 3.7,
    "reviews": 399,
    "image": "/assets/products/refrigerator/lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p363",
    "title": "lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-2",
    "description": "Premium Refrigerators – lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-2. High performance & reliability.",
    "price": 25369.08,
    "originalPrice": 30168.24,
    "rating": 4.8,
    "reviews": 623,
    "image": "/assets/products/refrigerator/lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p364",
    "title": "lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-3",
    "description": "Premium Refrigerators – lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-3. High performance & reliability.",
    "price": 33937.16,
    "originalPrice": 43482.83,
    "rating": 4,
    "reviews": 736,
    "image": "/assets/products/refrigerator/lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p365",
    "title": "lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-4",
    "description": "Premium Refrigerators – lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-4. High performance & reliability.",
    "price": 47005.72,
    "originalPrice": 51842.64,
    "rating": 4.8,
    "reviews": 529,
    "image": "/assets/products/refrigerator/lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/lg-260-l-frost-free-double-door-2-star-refrigerator-ebony-regal-gl-n292rery-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p366",
    "title": "samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-1",
    "description": "Premium Refrigerators – samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-1. High performance & reliability.",
    "price": 49669.26,
    "originalPrice": 58311.44,
    "rating": 4.6,
    "reviews": 183,
    "image": "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p367",
    "title": "samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-2",
    "description": "Premium Refrigerators – samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-2. High performance & reliability.",
    "price": 43786.89,
    "originalPrice": 55855.21,
    "rating": 4,
    "reviews": 495,
    "image": "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p368",
    "title": "samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-3",
    "description": "Premium Refrigerators – samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-3. High performance & reliability.",
    "price": 35618.83,
    "originalPrice": 38930.33,
    "rating": 4.9,
    "reviews": 378,
    "image": "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p369",
    "title": "samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-4",
    "description": "Premium Refrigerators – samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-4. High performance & reliability.",
    "price": 46163.41,
    "originalPrice": 46864.25,
    "rating": 4.8,
    "reviews": 806,
    "image": "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-blue-rr21c2h25cu-hl-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p370",
    "title": "samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-1",
    "description": "Premium Refrigerators – samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-1. High performance & reliability.",
    "price": 33613.69,
    "originalPrice": 43406.68,
    "rating": 4.3,
    "reviews": 658,
    "image": "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p371",
    "title": "samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-2",
    "description": "Premium Refrigerators – samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-2. High performance & reliability.",
    "price": 48195.3,
    "originalPrice": 56014.15,
    "rating": 4.1,
    "reviews": 543,
    "image": "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p372",
    "title": "samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-3",
    "description": "Premium Refrigerators – samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-3. High performance & reliability.",
    "price": 51788.14,
    "originalPrice": 62342.09,
    "rating": 4.5,
    "reviews": 650,
    "image": "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p373",
    "title": "samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-4",
    "description": "Premium Refrigerators – samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-4. High performance & reliability.",
    "price": 54466.71,
    "originalPrice": 60854.76,
    "rating": 4.2,
    "reviews": 176,
    "image": "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/samsung-189-l-direct-cool-single-door-5-star-refrigerator-with-base-drawer-with-digital-inverter-camellia-purple-rr21c2h25cr-hl-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p374",
    "title": "samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-1",
    "description": "Premium Refrigerators – samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-1. High performance & reliability.",
    "price": 28242.76,
    "originalPrice": 34941.37,
    "rating": 4.7,
    "reviews": 561,
    "image": "/assets/products/refrigerator/samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p375",
    "title": "samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-2",
    "description": "Premium Refrigerators – samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-2. High performance & reliability.",
    "price": 29028.84,
    "originalPrice": 33452.29,
    "rating": 4,
    "reviews": 434,
    "image": "/assets/products/refrigerator/samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p376",
    "title": "samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-3",
    "description": "Premium Refrigerators – samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-3. High performance & reliability.",
    "price": 36826.44,
    "originalPrice": 46983.98,
    "rating": 4.5,
    "reviews": 789,
    "image": "/assets/products/refrigerator/samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p377",
    "title": "samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-4",
    "description": "Premium Refrigerators – samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-4. High performance & reliability.",
    "price": 23887.75,
    "originalPrice": 24737.63,
    "rating": 4.7,
    "reviews": 572,
    "image": "/assets/products/refrigerator/samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/samsung-198-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-camellia-blue-rr21t2h2xcu-hl-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p378",
    "title": "whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-1",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-1. High performance & reliability.",
    "price": 45284.59,
    "originalPrice": 54192.39,
    "rating": 3.7,
    "reviews": 636,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p379",
    "title": "whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-2",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-2. High performance & reliability.",
    "price": 56459.01,
    "originalPrice": 68149.85,
    "rating": 4,
    "reviews": 494,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p380",
    "title": "whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-3",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-3. High performance & reliability.",
    "price": 55315.15,
    "originalPrice": 59963.98,
    "rating": 3.7,
    "reviews": 671,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p381",
    "title": "whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-4",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-4. High performance & reliability.",
    "price": 58876.36,
    "originalPrice": 75755.18,
    "rating": 4.4,
    "reviews": 432,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-sapphire-205-wde-prm-2s-sapphire-bloom-z-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p382",
    "title": "whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-1",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-1. High performance & reliability.",
    "price": 42726.77,
    "originalPrice": 48159.48,
    "rating": 4.3,
    "reviews": 677,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p383",
    "title": "whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-2",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-2. High performance & reliability.",
    "price": 59227.62,
    "originalPrice": 64536.5,
    "rating": 4.5,
    "reviews": 232,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p384",
    "title": "whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-3",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-3. High performance & reliability.",
    "price": 50823.17,
    "originalPrice": 51974.47,
    "rating": 4.8,
    "reviews": 106,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p385",
    "title": "whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-4",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-4. High performance & reliability.",
    "price": 53140.62,
    "originalPrice": 68693.83,
    "rating": 5,
    "reviews": 107,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-solid-blue-blue-205-wde-cls-2s-sapphire-blue-z-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p386",
    "title": "whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-1",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-1. High performance & reliability.",
    "price": 42238.58,
    "originalPrice": 44060.66,
    "rating": 3.6,
    "reviews": 446,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p387",
    "title": "whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-2",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-2. High performance & reliability.",
    "price": 53322.84,
    "originalPrice": 55697.05,
    "rating": 4.2,
    "reviews": 562,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p388",
    "title": "whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-3",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-3. High performance & reliability.",
    "price": 50877.12,
    "originalPrice": 64158.15,
    "rating": 4.7,
    "reviews": 211,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p389",
    "title": "whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-4",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-4. High performance & reliability.",
    "price": 52298.55,
    "originalPrice": 58078.95,
    "rating": 3.7,
    "reviews": 187,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-2-star-refrigerator-wine-205-wde-prm-2s-wine-bloom-z-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p390",
    "title": "whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-1",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-1. High performance & reliability.",
    "price": 23970.26,
    "originalPrice": 24701.45,
    "rating": 4.2,
    "reviews": 432,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p391",
    "title": "whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-2",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-2. High performance & reliability.",
    "price": 55102.03,
    "originalPrice": 69870.84,
    "rating": 4.3,
    "reviews": 440,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p392",
    "title": "whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-3",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-3. High performance & reliability.",
    "price": 30534.56,
    "originalPrice": 37708.58,
    "rating": 3.8,
    "reviews": 464,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-3.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-3.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p393",
    "title": "whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-4",
    "description": "Premium Refrigerators – whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-4. High performance & reliability.",
    "price": 16210.87,
    "originalPrice": 19813.73,
    "rating": 4.4,
    "reviews": 400,
    "image": "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-4.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-184-l-direct-cool-single-door-4-star-refrigerator-with-base-drawer-with-intellisense-inverter-compressor-blue-radiance-205-magic-cool-roy-4sinv-blue-radiance-z-4.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p394",
    "title": "whirlpool-190-l-direct-cool-single-door-4-star-refrigerator-sapphire-abyss-205-impc-prm-4s-inv-sapphire-abyss-1",
    "description": "Premium Refrigerators – whirlpool-190-l-direct-cool-single-door-4-star-refrigerator-sapphire-abyss-205-impc-prm-4s-inv-sapphire-abyss-1. High performance & reliability.",
    "price": 50881.46,
    "originalPrice": 52328.88,
    "rating": 3.5,
    "reviews": 258,
    "image": "/assets/products/refrigerator/whirlpool-190-l-direct-cool-single-door-4-star-refrigerator-sapphire-abyss-205-impc-prm-4s-inv-sapphire-abyss-1.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-190-l-direct-cool-single-door-4-star-refrigerator-sapphire-abyss-205-impc-prm-4s-inv-sapphire-abyss-1.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p395",
    "title": "whirlpool-190-l-direct-cool-single-door-4-star-refrigerator-sapphire-abyss-205-impc-prm-4s-inv-sapphire-abyss-2",
    "description": "Premium Refrigerators – whirlpool-190-l-direct-cool-single-door-4-star-refrigerator-sapphire-abyss-205-impc-prm-4s-inv-sapphire-abyss-2. High performance & reliability.",
    "price": 21165.77,
    "originalPrice": 23733.75,
    "rating": 4.2,
    "reviews": 237,
    "image": "/assets/products/refrigerator/whirlpool-190-l-direct-cool-single-door-4-star-refrigerator-sapphire-abyss-205-impc-prm-4s-inv-sapphire-abyss-2.webp",
    "thumbnails": [
      "/assets/products/refrigerator/whirlpool-190-l-direct-cool-single-door-4-star-refrigerator-sapphire-abyss-205-impc-prm-4s-inv-sapphire-abyss-2.webp"
    ],
    "categoryId": "refrigerator",
    "category": "Refrigerators",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p396",
    "title": "blitz-2000-1",
    "description": "Premium Speakers – blitz-2000-1. High performance & reliability.",
    "price": 4288.45,
    "originalPrice": 4396.91,
    "rating": 4.8,
    "reviews": 203,
    "image": "/assets/products/speakers/blitz-2000-1.webp",
    "thumbnails": [
      "/assets/products/speakers/blitz-2000-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p397",
    "title": "boat-rugby-plus-1",
    "description": "Premium Speakers – boat-rugby-plus-1. High performance & reliability.",
    "price": 19207.44,
    "originalPrice": 23167.42,
    "rating": 3.7,
    "reviews": 29,
    "image": "/assets/products/speakers/boat-rugby-plus-1.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-rugby-plus-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p398",
    "title": "boat-rugby-plus-2",
    "description": "Premium Speakers – boat-rugby-plus-2. High performance & reliability.",
    "price": 10946.32,
    "originalPrice": 12440.4,
    "rating": 4.7,
    "reviews": 346,
    "image": "/assets/products/speakers/boat-rugby-plus-2.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-rugby-plus-2.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p399",
    "title": "boat-rugby-plus-3",
    "description": "Premium Speakers – boat-rugby-plus-3. High performance & reliability.",
    "price": 9889.98,
    "originalPrice": 11832.66,
    "rating": 4.9,
    "reviews": 740,
    "image": "/assets/products/speakers/boat-rugby-plus-3.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-rugby-plus-3.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p400",
    "title": "boat-rugby",
    "description": "Premium Speakers – boat-rugby. High performance & reliability.",
    "price": 2084.3,
    "originalPrice": 2265.96,
    "rating": 4.1,
    "reviews": 438,
    "image": "/assets/products/speakers/boat-rugby.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-rugby.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p401",
    "title": "boat-stone-1200-1",
    "description": "Premium Speakers – boat-stone-1200-1. High performance & reliability.",
    "price": 3435.55,
    "originalPrice": 3790.94,
    "rating": 4,
    "reviews": 238,
    "image": "/assets/products/speakers/boat-stone-1200-1.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-1200-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p402",
    "title": "boat-stone-1200-2",
    "description": "Premium Speakers – boat-stone-1200-2. High performance & reliability.",
    "price": 9851.71,
    "originalPrice": 12391.54,
    "rating": 3.8,
    "reviews": 616,
    "image": "/assets/products/speakers/boat-stone-1200-2.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-1200-2.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p403",
    "title": "boat-stone-1200-3",
    "description": "Premium Speakers – boat-stone-1200-3. High performance & reliability.",
    "price": 12333.29,
    "originalPrice": 12459.98,
    "rating": 4.8,
    "reviews": 379,
    "image": "/assets/products/speakers/boat-stone-1200-3.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-1200-3.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p404",
    "title": "boat-stone-1200-4",
    "description": "Premium Speakers – boat-stone-1200-4. High performance & reliability.",
    "price": 2423.27,
    "originalPrice": 2938.23,
    "rating": 4.4,
    "reviews": 579,
    "image": "/assets/products/speakers/boat-stone-1200-4.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-1200-4.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p405",
    "title": "boat-stone-1450-1",
    "description": "Premium Speakers – boat-stone-1450-1. High performance & reliability.",
    "price": 9214.2,
    "originalPrice": 9409.75,
    "rating": 3.6,
    "reviews": 262,
    "image": "/assets/products/speakers/boat-stone-1450-1.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-1450-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p406",
    "title": "boat-stone-1450-2",
    "description": "Premium Speakers – boat-stone-1450-2. High performance & reliability.",
    "price": 16812.25,
    "originalPrice": 18112.68,
    "rating": 4.4,
    "reviews": 457,
    "image": "/assets/products/speakers/boat-stone-1450-2.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-1450-2.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p407",
    "title": "boat-stone-1450-3",
    "description": "Premium Speakers – boat-stone-1450-3. High performance & reliability.",
    "price": 11122.82,
    "originalPrice": 11799.67,
    "rating": 4.6,
    "reviews": 159,
    "image": "/assets/products/speakers/boat-stone-1450-3.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-1450-3.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p408",
    "title": "boat-stone-1450-4",
    "description": "Premium Speakers – boat-stone-1450-4. High performance & reliability.",
    "price": 4230.88,
    "originalPrice": 4317.74,
    "rating": 4.8,
    "reviews": 247,
    "image": "/assets/products/speakers/boat-stone-1450-4.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-1450-4.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p409",
    "title": "boat-stone-1508-1",
    "description": "Premium Speakers – boat-stone-1508-1. High performance & reliability.",
    "price": 1875.19,
    "originalPrice": 2434.42,
    "rating": 4.8,
    "reviews": 575,
    "image": "/assets/products/speakers/boat-stone-1508-1.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-1508-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p410",
    "title": "boat-stone-1508-2",
    "description": "Premium Speakers – boat-stone-1508-2. High performance & reliability.",
    "price": 7976.22,
    "originalPrice": 8347.43,
    "rating": 4.9,
    "reviews": 726,
    "image": "/assets/products/speakers/boat-stone-1508-2.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-1508-2.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p411",
    "title": "boat-stone-1508-3",
    "description": "Premium Speakers – boat-stone-1508-3. High performance & reliability.",
    "price": 4665.21,
    "originalPrice": 5118.78,
    "rating": 4.3,
    "reviews": 181,
    "image": "/assets/products/speakers/boat-stone-1508-3.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-1508-3.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p412",
    "title": "boat-stone-1508-4",
    "description": "Premium Speakers – boat-stone-1508-4. High performance & reliability.",
    "price": 14351.04,
    "originalPrice": 18096.73,
    "rating": 4.9,
    "reviews": 535,
    "image": "/assets/products/speakers/boat-stone-1508-4.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-1508-4.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p413",
    "title": "boat-stone-170",
    "description": "Premium Speakers – boat-stone-170. High performance & reliability.",
    "price": 3577.95,
    "originalPrice": 4627.13,
    "rating": 4.3,
    "reviews": 378,
    "image": "/assets/products/speakers/boat-stone-170.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-170.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p414",
    "title": "boat-stone-180-1",
    "description": "Premium Speakers – boat-stone-180-1. High performance & reliability.",
    "price": 17292.13,
    "originalPrice": 18019.93,
    "rating": 4.3,
    "reviews": 629,
    "image": "/assets/products/speakers/boat-stone-180-1.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-180-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p415",
    "title": "boat-stone-180-2",
    "description": "Premium Speakers – boat-stone-180-2. High performance & reliability.",
    "price": 6256.41,
    "originalPrice": 7694.22,
    "rating": 4,
    "reviews": 516,
    "image": "/assets/products/speakers/boat-stone-180-2.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-180-2.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p416",
    "title": "boat-stone-180-3",
    "description": "Premium Speakers – boat-stone-180-3. High performance & reliability.",
    "price": 19345.61,
    "originalPrice": 20516.69,
    "rating": 4.1,
    "reviews": 343,
    "image": "/assets/products/speakers/boat-stone-180-3.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-180-3.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p417",
    "title": "boat-stone-190-1",
    "description": "Premium Speakers – boat-stone-190-1. High performance & reliability.",
    "price": 19020.83,
    "originalPrice": 21739.9,
    "rating": 3.9,
    "reviews": 319,
    "image": "/assets/products/speakers/boat-stone-190-1.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-190-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p418",
    "title": "boat-stone-190-2",
    "description": "Premium Speakers – boat-stone-190-2. High performance & reliability.",
    "price": 2784.85,
    "originalPrice": 3461.98,
    "rating": 3.8,
    "reviews": 552,
    "image": "/assets/products/speakers/boat-stone-190-2.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-190-2.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p419",
    "title": "boat-stone-190-3",
    "description": "Premium Speakers – boat-stone-190-3. High performance & reliability.",
    "price": 12785.24,
    "originalPrice": 13678.67,
    "rating": 3.7,
    "reviews": 304,
    "image": "/assets/products/speakers/boat-stone-190-3.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-190-3.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p420",
    "title": "boat-stone-620-1",
    "description": "Premium Speakers – boat-stone-620-1. High performance & reliability.",
    "price": 11235.51,
    "originalPrice": 13527.55,
    "rating": 3.9,
    "reviews": 551,
    "image": "/assets/products/speakers/boat-stone-620-1.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-620-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p421",
    "title": "boat-stone-620-2",
    "description": "Premium Speakers – boat-stone-620-2. High performance & reliability.",
    "price": 13030.74,
    "originalPrice": 15393.12,
    "rating": 4,
    "reviews": 525,
    "image": "/assets/products/speakers/boat-stone-620-2.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-620-2.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p422",
    "title": "boat-stone-620-3",
    "description": "Premium Speakers – boat-stone-620-3. High performance & reliability.",
    "price": 13367.06,
    "originalPrice": 16136.4,
    "rating": 4.7,
    "reviews": 188,
    "image": "/assets/products/speakers/boat-stone-620-3.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-620-3.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p423",
    "title": "boat-stone-620-4",
    "description": "Premium Speakers – boat-stone-620-4. High performance & reliability.",
    "price": 10124.04,
    "originalPrice": 12580.69,
    "rating": 4.2,
    "reviews": 180,
    "image": "/assets/products/speakers/boat-stone-620-4.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-620-4.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p424",
    "title": "boat-stone-symphony",
    "description": "Premium Speakers – boat-stone-symphony. High performance & reliability.",
    "price": 10374.56,
    "originalPrice": 11686.32,
    "rating": 4.7,
    "reviews": 309,
    "image": "/assets/products/speakers/boat-stone-symphony.webp",
    "thumbnails": [
      "/assets/products/speakers/boat-stone-symphony.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p425",
    "title": "stone-1000-1",
    "description": "Premium Speakers – stone-1000-1. High performance & reliability.",
    "price": 9704.51,
    "originalPrice": 12270.39,
    "rating": 4.1,
    "reviews": 731,
    "image": "/assets/products/speakers/stone-1000-1.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-1000-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p426",
    "title": "stone-1350-1",
    "description": "Premium Speakers – stone-1350-1. High performance & reliability.",
    "price": 19064.92,
    "originalPrice": 20843.92,
    "rating": 4.8,
    "reviews": 342,
    "image": "/assets/products/speakers/stone-1350-1.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-1350-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p427",
    "title": "stone-1350-2",
    "description": "Premium Speakers – stone-1350-2. High performance & reliability.",
    "price": 1221.22,
    "originalPrice": 1458.93,
    "rating": 3.5,
    "reviews": 580,
    "image": "/assets/products/speakers/stone-1350-2.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-1350-2.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p428",
    "title": "stone-1350-3",
    "description": "Premium Speakers – stone-1350-3. High performance & reliability.",
    "price": 17017.86,
    "originalPrice": 18198.48,
    "rating": 4.9,
    "reviews": 632,
    "image": "/assets/products/speakers/stone-1350-3.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-1350-3.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p429",
    "title": "stone-200-1",
    "description": "Premium Speakers – stone-200-1. High performance & reliability.",
    "price": 11430.02,
    "originalPrice": 12729.36,
    "rating": 3.6,
    "reviews": 674,
    "image": "/assets/products/speakers/stone-200-1.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-200-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p430",
    "title": "stone-200-2",
    "description": "Premium Speakers – stone-200-2. High performance & reliability.",
    "price": 16044.83,
    "originalPrice": 18429.17,
    "rating": 4.9,
    "reviews": 463,
    "image": "/assets/products/speakers/stone-200-2.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-200-2.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p431",
    "title": "stone-200-3",
    "description": "Premium Speakers – stone-200-3. High performance & reliability.",
    "price": 5814.64,
    "originalPrice": 7541.52,
    "rating": 3.6,
    "reviews": 68,
    "image": "/assets/products/speakers/stone-200-3.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-200-3.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p432",
    "title": "stone-200-4",
    "description": "Premium Speakers – stone-200-4. High performance & reliability.",
    "price": 14093.43,
    "originalPrice": 18002.61,
    "rating": 3.5,
    "reviews": 601,
    "image": "/assets/products/speakers/stone-200-4.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-200-4.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p433",
    "title": "stone-260-1",
    "description": "Premium Speakers – stone-260-1. High performance & reliability.",
    "price": 7437.98,
    "originalPrice": 8433.7,
    "rating": 3.5,
    "reviews": 800,
    "image": "/assets/products/speakers/stone-260-1.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-260-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p434",
    "title": "stone-260-2",
    "description": "Premium Speakers – stone-260-2. High performance & reliability.",
    "price": 16289.97,
    "originalPrice": 17351.51,
    "rating": 4.5,
    "reviews": 138,
    "image": "/assets/products/speakers/stone-260-2.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-260-2.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p435",
    "title": "stone-260-3",
    "description": "Premium Speakers – stone-260-3. High performance & reliability.",
    "price": 10413.93,
    "originalPrice": 10571.3,
    "rating": 3.9,
    "reviews": 772,
    "image": "/assets/products/speakers/stone-260-3.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-260-3.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p436",
    "title": "stone-260-4",
    "description": "Premium Speakers – stone-260-4. High performance & reliability.",
    "price": 14587.87,
    "originalPrice": 15073.37,
    "rating": 4.5,
    "reviews": 123,
    "image": "/assets/products/speakers/stone-260-4.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-260-4.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p437",
    "title": "stone-350-1",
    "description": "Premium Speakers – stone-350-1. High performance & reliability.",
    "price": 9061.98,
    "originalPrice": 9726.46,
    "rating": 3.9,
    "reviews": 248,
    "image": "/assets/products/speakers/stone-350-1.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-350-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p438",
    "title": "stone-350-2",
    "description": "Premium Speakers – stone-350-2. High performance & reliability.",
    "price": 1188.67,
    "originalPrice": 1229.84,
    "rating": 3.9,
    "reviews": 678,
    "image": "/assets/products/speakers/stone-350-2.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-350-2.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p439",
    "title": "stone-350-3",
    "description": "Premium Speakers – stone-350-3. High performance & reliability.",
    "price": 11918.83,
    "originalPrice": 13822.03,
    "rating": 3.8,
    "reviews": 142,
    "image": "/assets/products/speakers/stone-350-3.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-350-3.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p440",
    "title": "stone-500-1",
    "description": "Premium Speakers – stone-500-1. High performance & reliability.",
    "price": 4630.39,
    "originalPrice": 4665.55,
    "rating": 4.4,
    "reviews": 468,
    "image": "/assets/products/speakers/stone-500-1.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-500-1.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p441",
    "title": "stone-500-2",
    "description": "Premium Speakers – stone-500-2. High performance & reliability.",
    "price": 19501.53,
    "originalPrice": 21934.03,
    "rating": 3.8,
    "reviews": 305,
    "image": "/assets/products/speakers/stone-500-2.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-500-2.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p442",
    "title": "stone-500-3",
    "description": "Premium Speakers – stone-500-3. High performance & reliability.",
    "price": 14930.25,
    "originalPrice": 16301.61,
    "rating": 4.9,
    "reviews": 116,
    "image": "/assets/products/speakers/stone-500-3.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-500-3.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p443",
    "title": "stone-500-4",
    "description": "Premium Speakers – stone-500-4. High performance & reliability.",
    "price": 17190.99,
    "originalPrice": 21119.07,
    "rating": 4.7,
    "reviews": 627,
    "image": "/assets/products/speakers/stone-500-4.webp",
    "thumbnails": [
      "/assets/products/speakers/stone-500-4.webp"
    ],
    "categoryId": "speakers",
    "category": "Speakers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p444",
    "title": "ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-1",
    "description": "Premium Trimmers – ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-1. High performance & reliability.",
    "price": 2317.91,
    "originalPrice": 2608.58,
    "rating": 4.2,
    "reviews": 780,
    "image": "/assets/products/trimmers/ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p445",
    "title": "ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-2",
    "description": "Premium Trimmers – ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-2. High performance & reliability.",
    "price": 3578.48,
    "originalPrice": 3767.46,
    "rating": 4.2,
    "reviews": 580,
    "image": "/assets/products/trimmers/ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p446",
    "title": "ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-3",
    "description": "Premium Trimmers – ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-3. High performance & reliability.",
    "price": 4262.78,
    "originalPrice": 5035.58,
    "rating": 4.5,
    "reviews": 667,
    "image": "/assets/products/trimmers/ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p447",
    "title": "ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-4",
    "description": "Premium Trimmers – ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-4. High performance & reliability.",
    "price": 3360.74,
    "originalPrice": 3741.18,
    "rating": 4.2,
    "reviews": 198,
    "image": "/assets/products/trimmers/ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/ambrane-agk-11-trimmer-60-min-runtime-18-length-settings-black-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p448",
    "title": "luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-1",
    "description": "Premium Trimmers – luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-1. High performance & reliability.",
    "price": 4553.65,
    "originalPrice": 4990.44,
    "rating": 4.6,
    "reviews": 507,
    "image": "/assets/products/trimmers/luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p449",
    "title": "luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-2",
    "description": "Premium Trimmers – luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-2. High performance & reliability.",
    "price": 788.78,
    "originalPrice": 966.17,
    "rating": 4.2,
    "reviews": 542,
    "image": "/assets/products/trimmers/luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p450",
    "title": "luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-3",
    "description": "Premium Trimmers – luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-3. High performance & reliability.",
    "price": 1085.11,
    "originalPrice": 1251.29,
    "rating": 4,
    "reviews": 34,
    "image": "/assets/products/trimmers/luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p451",
    "title": "luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-4",
    "description": "Premium Trimmers – luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-4. High performance & reliability.",
    "price": 3613.55,
    "originalPrice": 3992.22,
    "rating": 4.9,
    "reviews": 223,
    "image": "/assets/products/trimmers/luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/luhao-dragon-professional-hair-clipper-fully-waterproof-trimmer-90-min-runtime-trimmer-90-min-runtime-4-length-settings-gold-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p452",
    "title": "mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-1",
    "description": "Premium Trimmers – mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-1. High performance & reliability.",
    "price": 3934.72,
    "originalPrice": 4902.03,
    "rating": 4.7,
    "reviews": 293,
    "image": "/assets/products/trimmers/mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p453",
    "title": "mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-2",
    "description": "Premium Trimmers – mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-2. High performance & reliability.",
    "price": 3263.31,
    "originalPrice": 3558.23,
    "rating": 4.7,
    "reviews": 24,
    "image": "/assets/products/trimmers/mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p454",
    "title": "mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-3",
    "description": "Premium Trimmers – mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-3. High performance & reliability.",
    "price": 3684.87,
    "originalPrice": 3848.42,
    "rating": 4.7,
    "reviews": 807,
    "image": "/assets/products/trimmers/mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p455",
    "title": "mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-4",
    "description": "Premium Trimmers – mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-4. High performance & reliability.",
    "price": 1372.07,
    "originalPrice": 1566.87,
    "rating": 3.7,
    "reviews": 211,
    "image": "/assets/products/trimmers/mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/mi-xxq01hm-trimmer-90-min-runtime-40-length-settings-black-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p456",
    "title": "nova-nht-1039-05-usb-trimmer-45-min-runtime-4-length-settings-blue-1",
    "description": "Premium Trimmers – nova-nht-1039-05-usb-trimmer-45-min-runtime-4-length-settings-blue-1. High performance & reliability.",
    "price": 2120.46,
    "originalPrice": 2308.44,
    "rating": 3.7,
    "reviews": 574,
    "image": "/assets/products/trimmers/nova-nht-1039-05-usb-trimmer-45-min-runtime-4-length-settings-blue-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1039-05-usb-trimmer-45-min-runtime-4-length-settings-blue-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p457",
    "title": "nova-nht-1039-05-usb-trimmer-45-min-runtime-4-length-settings-blue-2",
    "description": "Premium Trimmers – nova-nht-1039-05-usb-trimmer-45-min-runtime-4-length-settings-blue-2. High performance & reliability.",
    "price": 1896.36,
    "originalPrice": 1985.56,
    "rating": 4.4,
    "reviews": 774,
    "image": "/assets/products/trimmers/nova-nht-1039-05-usb-trimmer-45-min-runtime-4-length-settings-blue-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1039-05-usb-trimmer-45-min-runtime-4-length-settings-blue-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p458",
    "title": "nova-nht-1039-05-usb-trimmer-45-min-runtime-4-length-settings-blue-3",
    "description": "Premium Trimmers – nova-nht-1039-05-usb-trimmer-45-min-runtime-4-length-settings-blue-3. High performance & reliability.",
    "price": 580.43,
    "originalPrice": 722.96,
    "rating": 4,
    "reviews": 524,
    "image": "/assets/products/trimmers/nova-nht-1039-05-usb-trimmer-45-min-runtime-4-length-settings-blue-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1039-05-usb-trimmer-45-min-runtime-4-length-settings-blue-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p459",
    "title": "nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-1",
    "description": "Premium Trimmers – nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-1. High performance & reliability.",
    "price": 702,
    "originalPrice": 836.66,
    "rating": 4.5,
    "reviews": 638,
    "image": "/assets/products/trimmers/nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p460",
    "title": "nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-2",
    "description": "Premium Trimmers – nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-2. High performance & reliability.",
    "price": 4408.43,
    "originalPrice": 5492.1,
    "rating": 3.6,
    "reviews": 294,
    "image": "/assets/products/trimmers/nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p461",
    "title": "nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-3",
    "description": "Premium Trimmers – nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-3. High performance & reliability.",
    "price": 4455.42,
    "originalPrice": 5704.08,
    "rating": 3.8,
    "reviews": 291,
    "image": "/assets/products/trimmers/nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p462",
    "title": "nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-4",
    "description": "Premium Trimmers – nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-4. High performance & reliability.",
    "price": 1617.72,
    "originalPrice": 2095.27,
    "rating": 4.6,
    "reviews": 64,
    "image": "/assets/products/trimmers/nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1052-usb-trimmer-90-min-runtime-40-length-settings-black-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p463",
    "title": "nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-1",
    "description": "Premium Trimmers – nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-1. High performance & reliability.",
    "price": 2243.01,
    "originalPrice": 2861.03,
    "rating": 4.1,
    "reviews": 765,
    "image": "/assets/products/trimmers/nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p464",
    "title": "nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-2",
    "description": "Premium Trimmers – nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-2. High performance & reliability.",
    "price": 2488.78,
    "originalPrice": 2972.54,
    "rating": 4.8,
    "reviews": 723,
    "image": "/assets/products/trimmers/nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p465",
    "title": "nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-3",
    "description": "Premium Trimmers – nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-3. High performance & reliability.",
    "price": 3319.54,
    "originalPrice": 3565.93,
    "rating": 5,
    "reviews": 224,
    "image": "/assets/products/trimmers/nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p466",
    "title": "nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-4",
    "description": "Premium Trimmers – nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-4. High performance & reliability.",
    "price": 4400.39,
    "originalPrice": 5274.48,
    "rating": 3.9,
    "reviews": 651,
    "image": "/assets/products/trimmers/nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1058-waterproof-trimmer-200-min-runtime-40-length-settings-grey-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p467",
    "title": "nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-1",
    "description": "Premium Trimmers – nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-1. High performance & reliability.",
    "price": 567.21,
    "originalPrice": 685.98,
    "rating": 4,
    "reviews": 443,
    "image": "/assets/products/trimmers/nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p468",
    "title": "nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-2",
    "description": "Premium Trimmers – nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-2. High performance & reliability.",
    "price": 2451.51,
    "originalPrice": 2886.34,
    "rating": 3.6,
    "reviews": 535,
    "image": "/assets/products/trimmers/nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p469",
    "title": "nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-3",
    "description": "Premium Trimmers – nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-3. High performance & reliability.",
    "price": 696.07,
    "originalPrice": 732.41,
    "rating": 4.1,
    "reviews": 710,
    "image": "/assets/products/trimmers/nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p470",
    "title": "nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-4",
    "description": "Premium Trimmers – nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-4. High performance & reliability.",
    "price": 3890.5,
    "originalPrice": 4129.89,
    "rating": 3.6,
    "reviews": 638,
    "image": "/assets/products/trimmers/nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/nova-nht-1073-00-usb-trimmer-60-min-runtime-4-length-settings-black-blue-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p471",
    "title": "philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-1",
    "description": "Premium Trimmers – philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-1. High performance & reliability.",
    "price": 2039.24,
    "originalPrice": 2505.11,
    "rating": 4.3,
    "reviews": 481,
    "image": "/assets/products/trimmers/philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p472",
    "title": "philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-2",
    "description": "Premium Trimmers – philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-2. High performance & reliability.",
    "price": 1357.29,
    "originalPrice": 1491.48,
    "rating": 4,
    "reviews": 699,
    "image": "/assets/products/trimmers/philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p473",
    "title": "philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-3",
    "description": "Premium Trimmers – philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-3. High performance & reliability.",
    "price": 2136.22,
    "originalPrice": 2667.78,
    "rating": 4.2,
    "reviews": 532,
    "image": "/assets/products/trimmers/philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p474",
    "title": "philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-4",
    "description": "Premium Trimmers – philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-4. High performance & reliability.",
    "price": 880.83,
    "originalPrice": 888.62,
    "rating": 4.8,
    "reviews": 472,
    "image": "/assets/products/trimmers/philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt1232-15-trimmer-30-mins-runtime-3-length-settings-blue-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p475",
    "title": "philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-1",
    "description": "Premium Trimmers – philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-1. High performance & reliability.",
    "price": 3393.93,
    "originalPrice": 4107.98,
    "rating": 4,
    "reviews": 207,
    "image": "/assets/products/trimmers/philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p476",
    "title": "philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-2",
    "description": "Premium Trimmers – philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-2. High performance & reliability.",
    "price": 1626.52,
    "originalPrice": 1658.19,
    "rating": 4.8,
    "reviews": 394,
    "image": "/assets/products/trimmers/philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-2.jpeg",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-2.jpeg"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p477",
    "title": "philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-3",
    "description": "Premium Trimmers – philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-3. High performance & reliability.",
    "price": 2307.14,
    "originalPrice": 2573.28,
    "rating": 4.9,
    "reviews": 109,
    "image": "/assets/products/trimmers/philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p478",
    "title": "philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-4",
    "description": "Premium Trimmers – philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-4. High performance & reliability.",
    "price": 993.92,
    "originalPrice": 1176.31,
    "rating": 3.9,
    "reviews": 456,
    "image": "/assets/products/trimmers/philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3101-15-trimmer-45-min-runtime-10-length-settings-black-white-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p479",
    "title": "philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-1",
    "description": "Premium Trimmers – philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-1. High performance & reliability.",
    "price": 2368.46,
    "originalPrice": 2774.07,
    "rating": 4.6,
    "reviews": 224,
    "image": "/assets/products/trimmers/philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p480",
    "title": "philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-2",
    "description": "Premium Trimmers – philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-2. High performance & reliability.",
    "price": 1378.45,
    "originalPrice": 1401.93,
    "rating": 3.5,
    "reviews": 314,
    "image": "/assets/products/trimmers/philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p481",
    "title": "philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-3",
    "description": "Premium Trimmers – philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-3. High performance & reliability.",
    "price": 2104.51,
    "originalPrice": 2611.54,
    "rating": 4.3,
    "reviews": 683,
    "image": "/assets/products/trimmers/philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p482",
    "title": "philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-4",
    "description": "Premium Trimmers – philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-4. High performance & reliability.",
    "price": 3103.6,
    "originalPrice": 3446.83,
    "rating": 4.5,
    "reviews": 583,
    "image": "/assets/products/trimmers/philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3101-25-trimmer-45-min-runtime-10-length-settings-maroon-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p483",
    "title": "philips-bt3102-15-trimmer-60-min-runtime-10-length-settings-multicolor-1",
    "description": "Premium Trimmers – philips-bt3102-15-trimmer-60-min-runtime-10-length-settings-multicolor-1. High performance & reliability.",
    "price": 4769.88,
    "originalPrice": 4923.17,
    "rating": 3.7,
    "reviews": 727,
    "image": "/assets/products/trimmers/philips-bt3102-15-trimmer-60-min-runtime-10-length-settings-multicolor-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3102-15-trimmer-60-min-runtime-10-length-settings-multicolor-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p484",
    "title": "philips-bt3102-15-trimmer-60-min-runtime-10-length-settings-multicolor-2",
    "description": "Premium Trimmers – philips-bt3102-15-trimmer-60-min-runtime-10-length-settings-multicolor-2. High performance & reliability.",
    "price": 4217.92,
    "originalPrice": 4509.1,
    "rating": 3.9,
    "reviews": 725,
    "image": "/assets/products/trimmers/philips-bt3102-15-trimmer-60-min-runtime-10-length-settings-multicolor-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3102-15-trimmer-60-min-runtime-10-length-settings-multicolor-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p485",
    "title": "philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-1",
    "description": "Premium Trimmers – philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-1. High performance & reliability.",
    "price": 2940.07,
    "originalPrice": 3447.47,
    "rating": 4.7,
    "reviews": 90,
    "image": "/assets/products/trimmers/philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p486",
    "title": "philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-2",
    "description": "Premium Trimmers – philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-2. High performance & reliability.",
    "price": 1495.37,
    "originalPrice": 1572.66,
    "rating": 3.5,
    "reviews": 421,
    "image": "/assets/products/trimmers/philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p487",
    "title": "philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-3",
    "description": "Premium Trimmers – philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-3. High performance & reliability.",
    "price": 2075.27,
    "originalPrice": 2521.14,
    "rating": 4.3,
    "reviews": 286,
    "image": "/assets/products/trimmers/philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p488",
    "title": "philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-4",
    "description": "Premium Trimmers – philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-4. High performance & reliability.",
    "price": 4483.91,
    "originalPrice": 5297.05,
    "rating": 4.7,
    "reviews": 186,
    "image": "/assets/products/trimmers/philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-bt3231-15-trimmer-60-min-runtime-20-length-settings-green-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p489",
    "title": "philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-1",
    "description": "Premium Trimmers – philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-1. High performance & reliability.",
    "price": 1721.49,
    "originalPrice": 2089.7,
    "rating": 4.8,
    "reviews": 445,
    "image": "/assets/products/trimmers/philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p490",
    "title": "philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-2",
    "description": "Premium Trimmers – philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-2. High performance & reliability.",
    "price": 2388.42,
    "originalPrice": 2985.13,
    "rating": 4.6,
    "reviews": 647,
    "image": "/assets/products/trimmers/philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p491",
    "title": "philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-3",
    "description": "Premium Trimmers – philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-3. High performance & reliability.",
    "price": 2852.67,
    "originalPrice": 3690.12,
    "rating": 3.7,
    "reviews": 672,
    "image": "/assets/products/trimmers/philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p492",
    "title": "philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-4",
    "description": "Premium Trimmers – philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-4. High performance & reliability.",
    "price": 1437.38,
    "originalPrice": 1664.48,
    "rating": 4.7,
    "reviews": 335,
    "image": "/assets/products/trimmers/philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/philips-mg3710-65-trimmer-60-min-runtime-8-length-settings-black-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p493",
    "title": "syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-1",
    "description": "Premium Trimmers – syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-1. High performance & reliability.",
    "price": 3829,
    "originalPrice": 4286.8,
    "rating": 3.9,
    "reviews": 426,
    "image": "/assets/products/trimmers/syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p494",
    "title": "syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-2",
    "description": "Premium Trimmers – syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-2. High performance & reliability.",
    "price": 3235.8,
    "originalPrice": 3286.39,
    "rating": 4,
    "reviews": 134,
    "image": "/assets/products/trimmers/syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p495",
    "title": "syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-3",
    "description": "Premium Trimmers – syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-3. High performance & reliability.",
    "price": 989.14,
    "originalPrice": 1085.9,
    "rating": 4.5,
    "reviews": 709,
    "image": "/assets/products/trimmers/syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p496",
    "title": "syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-4",
    "description": "Premium Trimmers – syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-4. High performance & reliability.",
    "price": 3655.78,
    "originalPrice": 4053.91,
    "rating": 5,
    "reviews": 57,
    "image": "/assets/products/trimmers/syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/syska-ht200u-trimmer-40-min-runtime-5-length-settings-black-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p497",
    "title": "syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-1",
    "description": "Premium Trimmers – syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-1. High performance & reliability.",
    "price": 3963.45,
    "originalPrice": 4357.69,
    "rating": 4.5,
    "reviews": 239,
    "image": "/assets/products/trimmers/syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-1.webp",
    "thumbnails": [
      "/assets/products/trimmers/syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-1.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p498",
    "title": "syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-2",
    "description": "Premium Trimmers – syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-2. High performance & reliability.",
    "price": 2579.69,
    "originalPrice": 2731.34,
    "rating": 3.6,
    "reviews": 394,
    "image": "/assets/products/trimmers/syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-2.webp",
    "thumbnails": [
      "/assets/products/trimmers/syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-2.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p499",
    "title": "syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-3",
    "description": "Premium Trimmers – syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-3. High performance & reliability.",
    "price": 4517.08,
    "originalPrice": 5106.76,
    "rating": 3.9,
    "reviews": 43,
    "image": "/assets/products/trimmers/syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-3.webp",
    "thumbnails": [
      "/assets/products/trimmers/syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-3.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p500",
    "title": "syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-4",
    "description": "Premium Trimmers – syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-4. High performance & reliability.",
    "price": 3382.5,
    "originalPrice": 3928.74,
    "rating": 3.5,
    "reviews": 338,
    "image": "/assets/products/trimmers/syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-4.webp",
    "thumbnails": [
      "/assets/products/trimmers/syska-ht450-apache-green-trimmer-90-min-runtime-20-length-settings-green-4.webp"
    ],
    "categoryId": "trimmers",
    "category": "Trimmers",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p501",
    "title": "acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-1",
    "description": "Premium TVs & Displays – acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-1. High performance & reliability.",
    "price": 58539.81,
    "originalPrice": 59136.97,
    "rating": 4.5,
    "reviews": 79,
    "image": "/assets/products/tv/acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-1.webp",
    "thumbnails": [
      "/assets/products/tv/acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p502",
    "title": "acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-2",
    "description": "Premium TVs & Displays – acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-2. High performance & reliability.",
    "price": 15780.03,
    "originalPrice": 19952.19,
    "rating": 4.1,
    "reviews": 281,
    "image": "/assets/products/tv/acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-2.webp",
    "thumbnails": [
      "/assets/products/tv/acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p503",
    "title": "acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-3",
    "description": "Premium TVs & Displays – acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-3. High performance & reliability.",
    "price": 46394.42,
    "originalPrice": 46992.14,
    "rating": 4.1,
    "reviews": 655,
    "image": "/assets/products/tv/acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-3.webp",
    "thumbnails": [
      "/assets/products/tv/acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p504",
    "title": "acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-4",
    "description": "Premium TVs & Displays – acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-4. High performance & reliability.",
    "price": 53004.05,
    "originalPrice": 64285.53,
    "rating": 3.6,
    "reviews": 217,
    "image": "/assets/products/tv/acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-4.webp",
    "thumbnails": [
      "/assets/products/tv/acer-i-series-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-android-11-30w-dolby-audio-memc-2022-model-ar50ar2851udfl-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p505",
    "title": "iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-1",
    "description": "Premium TVs & Displays – iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-1. High performance & reliability.",
    "price": 33643.99,
    "originalPrice": 40916.47,
    "rating": 3.6,
    "reviews": 545,
    "image": "/assets/products/tv/iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-1.webp",
    "thumbnails": [
      "/assets/products/tv/iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p506",
    "title": "iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-2",
    "description": "Premium TVs & Displays – iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-2. High performance & reliability.",
    "price": 77041.6,
    "originalPrice": 81520.78,
    "rating": 3.9,
    "reviews": 746,
    "image": "/assets/products/tv/iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-2.webp",
    "thumbnails": [
      "/assets/products/tv/iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p507",
    "title": "iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-3",
    "description": "Premium TVs & Displays – iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-3. High performance & reliability.",
    "price": 67220.13,
    "originalPrice": 87065.91,
    "rating": 4,
    "reviews": 798,
    "image": "/assets/products/tv/iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-3.webp",
    "thumbnails": [
      "/assets/products/tv/iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p508",
    "title": "iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-4",
    "description": "Premium TVs & Displays – iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-4. High performance & reliability.",
    "price": 35604.37,
    "originalPrice": 45251.57,
    "rating": 3.9,
    "reviews": 345,
    "image": "/assets/products/tv/iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-4.webp",
    "thumbnails": [
      "/assets/products/tv/iffalcon-by-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-with-android-11-40f53-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p509",
    "title": "lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-1",
    "description": "Premium TVs & Displays – lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-1. High performance & reliability.",
    "price": 57496.7,
    "originalPrice": 71784.81,
    "rating": 4.4,
    "reviews": 12,
    "image": "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-1.webp",
    "thumbnails": [
      "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p510",
    "title": "lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-2",
    "description": "Premium TVs & Displays – lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-2. High performance & reliability.",
    "price": 43158.52,
    "originalPrice": 50235.82,
    "rating": 4.4,
    "reviews": 191,
    "image": "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-2.webp",
    "thumbnails": [
      "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p511",
    "title": "lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-3",
    "description": "Premium TVs & Displays – lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-3. High performance & reliability.",
    "price": 19653.55,
    "originalPrice": 21357.19,
    "rating": 4.5,
    "reviews": 205,
    "image": "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-3.webp",
    "thumbnails": [
      "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p512",
    "title": "lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-4",
    "description": "Premium TVs & Displays – lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-4. High performance & reliability.",
    "price": 51587.2,
    "originalPrice": 59416.89,
    "rating": 3.6,
    "reviews": 165,
    "image": "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-4.webp",
    "thumbnails": [
      "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p513",
    "title": "lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-1",
    "description": "Premium TVs & Displays – lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-1. High performance & reliability.",
    "price": 15891.5,
    "originalPrice": 19131.69,
    "rating": 3.8,
    "reviews": 228,
    "image": "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-1.webp",
    "thumbnails": [
      "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p514",
    "title": "lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-2",
    "description": "Premium TVs & Displays – lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-2. High performance & reliability.",
    "price": 28292.93,
    "originalPrice": 29762.29,
    "rating": 4,
    "reviews": 738,
    "image": "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-2.webp",
    "thumbnails": [
      "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p515",
    "title": "lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-3",
    "description": "Premium TVs & Displays – lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-3. High performance & reliability.",
    "price": 31492.25,
    "originalPrice": 37730.57,
    "rating": 4.5,
    "reviews": 295,
    "image": "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-3.webp",
    "thumbnails": [
      "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p516",
    "title": "lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-4",
    "description": "Premium TVs & Displays – lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-4. High performance & reliability.",
    "price": 34705.02,
    "originalPrice": 37007,
    "rating": 4.6,
    "reviews": 278,
    "image": "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-4.webp",
    "thumbnails": [
      "/assets/products/tv/lg-123-cm-49-inch-ultra-hd-4k-led-smart-webos-tv-49uk7500pta-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p517",
    "title": "lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-1",
    "description": "Premium TVs & Displays – lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-1. High performance & reliability.",
    "price": 40041.71,
    "originalPrice": 47056.17,
    "rating": 4.5,
    "reviews": 516,
    "image": "/assets/products/tv/lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-1.webp",
    "thumbnails": [
      "/assets/products/tv/lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p518",
    "title": "lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-2",
    "description": "Premium TVs & Displays – lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-2. High performance & reliability.",
    "price": 23825.41,
    "originalPrice": 25968.02,
    "rating": 3.7,
    "reviews": 518,
    "image": "/assets/products/tv/lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-2.webp",
    "thumbnails": [
      "/assets/products/tv/lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p519",
    "title": "lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-3",
    "description": "Premium TVs & Displays – lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-3. High performance & reliability.",
    "price": 23765.73,
    "originalPrice": 23893.78,
    "rating": 3.8,
    "reviews": 743,
    "image": "/assets/products/tv/lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-3.webp",
    "thumbnails": [
      "/assets/products/tv/lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p520",
    "title": "lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-4",
    "description": "Premium TVs & Displays – lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-4. High performance & reliability.",
    "price": 38699.94,
    "originalPrice": 49334.73,
    "rating": 4.2,
    "reviews": 385,
    "image": "/assets/products/tv/lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-4.webp",
    "thumbnails": [
      "/assets/products/tv/lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p521",
    "title": "mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-1",
    "description": "Premium TVs & Displays – mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-1. High performance & reliability.",
    "price": 63782.88,
    "originalPrice": 71402.03,
    "rating": 4.4,
    "reviews": 476,
    "image": "/assets/products/tv/mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-1.webp",
    "thumbnails": [
      "/assets/products/tv/mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p522",
    "title": "mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-2",
    "description": "Premium TVs & Displays – mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-2. High performance & reliability.",
    "price": 58264.26,
    "originalPrice": 72679.96,
    "rating": 4.9,
    "reviews": 773,
    "image": "/assets/products/tv/mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-2.webp",
    "thumbnails": [
      "/assets/products/tv/mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p523",
    "title": "mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-3",
    "description": "Premium TVs & Displays – mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-3. High performance & reliability.",
    "price": 75387.64,
    "originalPrice": 76757.21,
    "rating": 4.5,
    "reviews": 745,
    "image": "/assets/products/tv/mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-3.webp",
    "thumbnails": [
      "/assets/products/tv/mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p524",
    "title": "mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-4",
    "description": "Premium TVs & Displays – mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-4. High performance & reliability.",
    "price": 51932.62,
    "originalPrice": 55768.36,
    "rating": 3.7,
    "reviews": 215,
    "image": "/assets/products/tv/mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-4.webp",
    "thumbnails": [
      "/assets/products/tv/mi-5a-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-2022-model-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p525",
    "title": "motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-1",
    "description": "Premium TVs & Displays – motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-1. High performance & reliability.",
    "price": 26636.14,
    "originalPrice": 33889.34,
    "rating": 3.5,
    "reviews": 221,
    "image": "/assets/products/tv/motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-1.webp",
    "thumbnails": [
      "/assets/products/tv/motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p526",
    "title": "motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-2",
    "description": "Premium TVs & Displays – motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-2. High performance & reliability.",
    "price": 22941.16,
    "originalPrice": 28120.75,
    "rating": 3.6,
    "reviews": 425,
    "image": "/assets/products/tv/motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-2.webp",
    "thumbnails": [
      "/assets/products/tv/motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p527",
    "title": "motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-3",
    "description": "Premium TVs & Displays – motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-3. High performance & reliability.",
    "price": 18697.51,
    "originalPrice": 21479.99,
    "rating": 4.6,
    "reviews": 219,
    "image": "/assets/products/tv/motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-3.webp",
    "thumbnails": [
      "/assets/products/tv/motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p528",
    "title": "motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-4",
    "description": "Premium TVs & Displays – motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-4. High performance & reliability.",
    "price": 60100.41,
    "originalPrice": 69192.61,
    "rating": 4.4,
    "reviews": 199,
    "image": "/assets/products/tv/motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-4.webp",
    "thumbnails": [
      "/assets/products/tv/motorola-zx2-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-atmos-and-dolby-vision-40safhdme-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p529",
    "title": "oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-1",
    "description": "Premium TVs & Displays – oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-1. High performance & reliability.",
    "price": 39187.58,
    "originalPrice": 48550.09,
    "rating": 3.9,
    "reviews": 332,
    "image": "/assets/products/tv/oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-1.webp",
    "thumbnails": [
      "/assets/products/tv/oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p530",
    "title": "oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-2",
    "description": "Premium TVs & Displays – oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-2. High performance & reliability.",
    "price": 78731.58,
    "originalPrice": 83400.51,
    "rating": 4.1,
    "reviews": 797,
    "image": "/assets/products/tv/oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-2.webp",
    "thumbnails": [
      "/assets/products/tv/oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p531",
    "title": "oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-3",
    "description": "Premium TVs & Displays – oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-3. High performance & reliability.",
    "price": 79997.5,
    "originalPrice": 83328.02,
    "rating": 4.5,
    "reviews": 427,
    "image": "/assets/products/tv/oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-3.webp",
    "thumbnails": [
      "/assets/products/tv/oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p532",
    "title": "oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-4",
    "description": "Premium TVs & Displays – oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-4. High performance & reliability.",
    "price": 57469.33,
    "originalPrice": 58187.08,
    "rating": 4.3,
    "reviews": 554,
    "image": "/assets/products/tv/oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-4.webp",
    "thumbnails": [
      "/assets/products/tv/oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-with-dolby-audio-40fa1a00-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p533",
    "title": "panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-1",
    "description": "Premium TVs & Displays – panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-1. High performance & reliability.",
    "price": 59095.54,
    "originalPrice": 73190.17,
    "rating": 4.2,
    "reviews": 710,
    "image": "/assets/products/tv/panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-1.webp",
    "thumbnails": [
      "/assets/products/tv/panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p534",
    "title": "panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-2",
    "description": "Premium TVs & Displays – panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-2. High performance & reliability.",
    "price": 46836.57,
    "originalPrice": 58926.78,
    "rating": 3.9,
    "reviews": 103,
    "image": "/assets/products/tv/panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-2.webp",
    "thumbnails": [
      "/assets/products/tv/panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p535",
    "title": "panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-3",
    "description": "Premium TVs & Displays – panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-3. High performance & reliability.",
    "price": 54118.62,
    "originalPrice": 56934.48,
    "rating": 3.5,
    "reviews": 270,
    "image": "/assets/products/tv/panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-3.webp",
    "thumbnails": [
      "/assets/products/tv/panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p536",
    "title": "panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-4",
    "description": "Premium TVs & Displays – panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-4. High performance & reliability.",
    "price": 65745.65,
    "originalPrice": 68459.59,
    "rating": 4.2,
    "reviews": 403,
    "image": "/assets/products/tv/panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-4.webp",
    "thumbnails": [
      "/assets/products/tv/panasonic-100-cm-40-inch-full-hd-led-smart-android-tv-th-40hs450dx-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p537",
    "title": "realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-1",
    "description": "Premium TVs & Displays – realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-1. High performance & reliability.",
    "price": 44371.97,
    "originalPrice": 45731.66,
    "rating": 4.7,
    "reviews": 779,
    "image": "/assets/products/tv/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-1.webp",
    "thumbnails": [
      "/assets/products/tv/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p538",
    "title": "realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-2",
    "description": "Premium TVs & Displays – realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-2. High performance & reliability.",
    "price": 15367.26,
    "originalPrice": 15679.16,
    "rating": 4.2,
    "reviews": 222,
    "image": "/assets/products/tv/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-2.webp",
    "thumbnails": [
      "/assets/products/tv/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p539",
    "title": "realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-3",
    "description": "Premium TVs & Displays – realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-3. High performance & reliability.",
    "price": 49960.16,
    "originalPrice": 63845.17,
    "rating": 4.9,
    "reviews": 148,
    "image": "/assets/products/tv/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-3.webp",
    "thumbnails": [
      "/assets/products/tv/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p540",
    "title": "realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-4",
    "description": "Premium TVs & Displays – realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-4. High performance & reliability.",
    "price": 53847.69,
    "originalPrice": 58093.1,
    "rating": 4.8,
    "reviews": 548,
    "image": "/assets/products/tv/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-4.webp",
    "thumbnails": [
      "/assets/products/tv/realme-80-cm-32-inch-hd-ready-led-smart-android-tv-tv-32-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p541",
    "title": "samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-1",
    "description": "Premium TVs & Displays – samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-1. High performance & reliability.",
    "price": 46740.57,
    "originalPrice": 49634.46,
    "rating": 3.8,
    "reviews": 498,
    "image": "/assets/products/tv/samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-1.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p542",
    "title": "samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-2",
    "description": "Premium TVs & Displays – samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-2. High performance & reliability.",
    "price": 21909.33,
    "originalPrice": 26850.23,
    "rating": 4.4,
    "reviews": 458,
    "image": "/assets/products/tv/samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-2.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p543",
    "title": "samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-3",
    "description": "Premium TVs & Displays – samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-3. High performance & reliability.",
    "price": 16234.77,
    "originalPrice": 17359.94,
    "rating": 4.7,
    "reviews": 553,
    "image": "/assets/products/tv/samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-3.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p544",
    "title": "samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-4",
    "description": "Premium TVs & Displays – samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-4. High performance & reliability.",
    "price": 74018.07,
    "originalPrice": 91352.33,
    "rating": 3.6,
    "reviews": 525,
    "image": "/assets/products/tv/samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-4.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-ua43tu8570uxxl-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p545",
    "title": "samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-1",
    "description": "Premium TVs & Displays – samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-1. High performance & reliability.",
    "price": 27905.95,
    "originalPrice": 29473.62,
    "rating": 3.7,
    "reviews": 685,
    "image": "/assets/products/tv/samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-1.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p546",
    "title": "samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-2",
    "description": "Premium TVs & Displays – samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-2. High performance & reliability.",
    "price": 62988.78,
    "originalPrice": 74712.65,
    "rating": 3.9,
    "reviews": 352,
    "image": "/assets/products/tv/samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-2.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p547",
    "title": "samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-3",
    "description": "Premium TVs & Displays – samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-3. High performance & reliability.",
    "price": 65017.97,
    "originalPrice": 76349.65,
    "rating": 5,
    "reviews": 680,
    "image": "/assets/products/tv/samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-3.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p548",
    "title": "samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-4",
    "description": "Premium TVs & Displays – samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-4. High performance & reliability.",
    "price": 48634.22,
    "originalPrice": 57379.22,
    "rating": 4.5,
    "reviews": 230,
    "image": "/assets/products/tv/samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-4.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p549",
    "title": "samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-1",
    "description": "Premium TVs & Displays – samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-1. High performance & reliability.",
    "price": 35060.43,
    "originalPrice": 42401.24,
    "rating": 4.9,
    "reviews": 711,
    "image": "/assets/products/tv/samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-1.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p550",
    "title": "samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-2",
    "description": "Premium TVs & Displays – samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-2. High performance & reliability.",
    "price": 79059.71,
    "originalPrice": 88832.13,
    "rating": 4,
    "reviews": 101,
    "image": "/assets/products/tv/samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-2.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p551",
    "title": "samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-3",
    "description": "Premium TVs & Displays – samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-3. High performance & reliability.",
    "price": 63235.92,
    "originalPrice": 70232.25,
    "rating": 3.6,
    "reviews": 761,
    "image": "/assets/products/tv/samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-3.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p552",
    "title": "samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-4",
    "description": "Premium TVs & Displays – samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-4. High performance & reliability.",
    "price": 64360.64,
    "originalPrice": 74564.57,
    "rating": 4.1,
    "reviews": 381,
    "image": "/assets/products/tv/samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-4.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-with-voice-search-ua32te40aakbxl-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p553",
    "title": "samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-1",
    "description": "Premium TVs & Displays – samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-1. High performance & reliability.",
    "price": 36596.44,
    "originalPrice": 42309.82,
    "rating": 3.8,
    "reviews": 65,
    "image": "/assets/products/tv/samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-1.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p554",
    "title": "samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-2",
    "description": "Premium TVs & Displays – samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-2. High performance & reliability.",
    "price": 53843.8,
    "originalPrice": 63359.79,
    "rating": 3.6,
    "reviews": 190,
    "image": "/assets/products/tv/samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-2.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p555",
    "title": "samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-3",
    "description": "Premium TVs & Displays – samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-3. High performance & reliability.",
    "price": 22366.86,
    "originalPrice": 27112.67,
    "rating": 4.5,
    "reviews": 538,
    "image": "/assets/products/tv/samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-3.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p556",
    "title": "samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-4",
    "description": "Premium TVs & Displays – samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-4. High performance & reliability.",
    "price": 22894.28,
    "originalPrice": 26328.81,
    "rating": 4.4,
    "reviews": 232,
    "image": "/assets/products/tv/samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-4.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-q-series-163-cm-65-inch-qled-ultra-hd-4k-smart-tizen-tv-65q7fn-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p557",
    "title": "samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-1",
    "description": "Premium TVs & Displays – samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-1. High performance & reliability.",
    "price": 75168.16,
    "originalPrice": 81324.27,
    "rating": 3.6,
    "reviews": 149,
    "image": "/assets/products/tv/samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-1.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p558",
    "title": "samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-2",
    "description": "Premium TVs & Displays – samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-2. High performance & reliability.",
    "price": 24493.7,
    "originalPrice": 25131.26,
    "rating": 4.6,
    "reviews": 700,
    "image": "/assets/products/tv/samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-2.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p559",
    "title": "samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-3",
    "description": "Premium TVs & Displays – samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-3. High performance & reliability.",
    "price": 51546.69,
    "originalPrice": 66328.48,
    "rating": 5,
    "reviews": 68,
    "image": "/assets/products/tv/samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-3.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p560",
    "title": "samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-4",
    "description": "Premium TVs & Displays – samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-4. High performance & reliability.",
    "price": 21203,
    "originalPrice": 25948.69,
    "rating": 4.7,
    "reviews": 729,
    "image": "/assets/products/tv/samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-4.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-qn700bk-163-cm-65-inch-qled-ultra-hd-8k-smart-tizen-tv-qa65qn700bkxxl-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p561",
    "title": "samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-1",
    "description": "Premium TVs & Displays – samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-1. High performance & reliability.",
    "price": 78292.11,
    "originalPrice": 91523.13,
    "rating": 4,
    "reviews": 69,
    "image": "/assets/products/tv/samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-1.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p562",
    "title": "samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-2",
    "description": "Premium TVs & Displays – samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-2. High performance & reliability.",
    "price": 38234.91,
    "originalPrice": 48074.91,
    "rating": 4.8,
    "reviews": 748,
    "image": "/assets/products/tv/samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-2.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p563",
    "title": "samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-3",
    "description": "Premium TVs & Displays – samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-3. High performance & reliability.",
    "price": 46480.76,
    "originalPrice": 51186.56,
    "rating": 3.7,
    "reviews": 747,
    "image": "/assets/products/tv/samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-3.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p564",
    "title": "samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-4",
    "description": "Premium TVs & Displays – samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-4. High performance & reliability.",
    "price": 63983.02,
    "originalPrice": 75000.92,
    "rating": 4.7,
    "reviews": 236,
    "image": "/assets/products/tv/samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-4.webp",
    "thumbnails": [
      "/assets/products/tv/samsung-series-8-123-cm-49-inch-ultra-hd-4k-led-smart-tizen-tv-49nu8000-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p565",
    "title": "sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-1",
    "description": "Premium TVs & Displays – sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-1. High performance & reliability.",
    "price": 68590.11,
    "originalPrice": 70129.89,
    "rating": 4.3,
    "reviews": 335,
    "image": "/assets/products/tv/sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-1.webp",
    "thumbnails": [
      "/assets/products/tv/sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-1.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p566",
    "title": "sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-2",
    "description": "Premium TVs & Displays – sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-2. High performance & reliability.",
    "price": 44013.76,
    "originalPrice": 49400.34,
    "rating": 4.2,
    "reviews": 611,
    "image": "/assets/products/tv/sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-2.webp",
    "thumbnails": [
      "/assets/products/tv/sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-2.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p567",
    "title": "sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-3",
    "description": "Premium TVs & Displays – sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-3. High performance & reliability.",
    "price": 25453.5,
    "originalPrice": 29976.83,
    "rating": 3.5,
    "reviews": 799,
    "image": "/assets/products/tv/sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-3.webp",
    "thumbnails": [
      "/assets/products/tv/sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-3.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p568",
    "title": "sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-4",
    "description": "Premium TVs & Displays – sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-4. High performance & reliability.",
    "price": 50398.18,
    "originalPrice": 59328.19,
    "rating": 4.4,
    "reviews": 567,
    "image": "/assets/products/tv/sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-4.webp",
    "thumbnails": [
      "/assets/products/tv/sansui-127-cm-50-inch-ultra-hd-4k-led-smart-android-tv-with-dolby-audio-and-dts-mystique-black-2021-model-jsw50asuhd-4.webp"
    ],
    "categoryId": "tv",
    "category": "TVs & Displays",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p569",
    "title": "boat-cosmos-pro-1",
    "description": "Premium Watches – boat-cosmos-pro-1. High performance & reliability.",
    "price": 6341.88,
    "originalPrice": 7455.16,
    "rating": 4.8,
    "reviews": 15,
    "image": "/assets/products/watches/boat-cosmos-pro-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-cosmos-pro-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p570",
    "title": "boat-cosmos-pro-2",
    "description": "Premium Watches – boat-cosmos-pro-2. High performance & reliability.",
    "price": 16345.17,
    "originalPrice": 20073.55,
    "rating": 4.4,
    "reviews": 332,
    "image": "/assets/products/watches/boat-cosmos-pro-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-cosmos-pro-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p571",
    "title": "boat-cosmos-pro-3",
    "description": "Premium Watches – boat-cosmos-pro-3. High performance & reliability.",
    "price": 20511.64,
    "originalPrice": 24980.48,
    "rating": 4.7,
    "reviews": 583,
    "image": "/assets/products/watches/boat-cosmos-pro-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-cosmos-pro-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p572",
    "title": "boat-cosmos-pro-4",
    "description": "Premium Watches – boat-cosmos-pro-4. High performance & reliability.",
    "price": 17492.28,
    "originalPrice": 22225.85,
    "rating": 4.7,
    "reviews": 792,
    "image": "/assets/products/watches/boat-cosmos-pro-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-cosmos-pro-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p573",
    "title": "boat-storm-1",
    "description": "Premium Watches – boat-storm-1. High performance & reliability.",
    "price": 19834.63,
    "originalPrice": 23196.16,
    "rating": 4.4,
    "reviews": 674,
    "image": "/assets/products/watches/boat-storm-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p574",
    "title": "boat-storm-2",
    "description": "Premium Watches – boat-storm-2. High performance & reliability.",
    "price": 3900.42,
    "originalPrice": 4082.27,
    "rating": 3.9,
    "reviews": 365,
    "image": "/assets/products/watches/boat-storm-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p575",
    "title": "boat-storm-3",
    "description": "Premium Watches – boat-storm-3. High performance & reliability.",
    "price": 8900.68,
    "originalPrice": 10487.52,
    "rating": 4.5,
    "reviews": 175,
    "image": "/assets/products/watches/boat-storm-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p576",
    "title": "boat-storm-4",
    "description": "Premium Watches – boat-storm-4. High performance & reliability.",
    "price": 1771.54,
    "originalPrice": 2272.04,
    "rating": 4.6,
    "reviews": 359,
    "image": "/assets/products/watches/boat-storm-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p577",
    "title": "boat-storm-call-1",
    "description": "Premium Watches – boat-storm-call-1. High performance & reliability.",
    "price": 5491.73,
    "originalPrice": 5810.11,
    "rating": 4.8,
    "reviews": 183,
    "image": "/assets/products/watches/boat-storm-call-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-call-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p578",
    "title": "boat-storm-call-2",
    "description": "Premium Watches – boat-storm-call-2. High performance & reliability.",
    "price": 5109.22,
    "originalPrice": 5637.8,
    "rating": 4.2,
    "reviews": 614,
    "image": "/assets/products/watches/boat-storm-call-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-call-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p579",
    "title": "boat-storm-call-3",
    "description": "Premium Watches – boat-storm-call-3. High performance & reliability.",
    "price": 15723.59,
    "originalPrice": 18933.63,
    "rating": 4.9,
    "reviews": 577,
    "image": "/assets/products/watches/boat-storm-call-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-call-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p580",
    "title": "boat-storm-call-4",
    "description": "Premium Watches – boat-storm-call-4. High performance & reliability.",
    "price": 17462.72,
    "originalPrice": 19476.4,
    "rating": 3.5,
    "reviews": 758,
    "image": "/assets/products/watches/boat-storm-call-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-call-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p581",
    "title": "boat-storm-pro-call-1",
    "description": "Premium Watches – boat-storm-pro-call-1. High performance & reliability.",
    "price": 22101.94,
    "originalPrice": 22883.15,
    "rating": 4.1,
    "reviews": 675,
    "image": "/assets/products/watches/boat-storm-pro-call-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-pro-call-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p582",
    "title": "boat-storm-pro-call-2",
    "description": "Premium Watches – boat-storm-pro-call-2. High performance & reliability.",
    "price": 16471.35,
    "originalPrice": 17229.01,
    "rating": 4.7,
    "reviews": 525,
    "image": "/assets/products/watches/boat-storm-pro-call-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-pro-call-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p583",
    "title": "boat-storm-pro-call-3",
    "description": "Premium Watches – boat-storm-pro-call-3. High performance & reliability.",
    "price": 9409.81,
    "originalPrice": 10862.28,
    "rating": 4,
    "reviews": 670,
    "image": "/assets/products/watches/boat-storm-pro-call-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-pro-call-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p584",
    "title": "boat-storm-pro-call-4",
    "description": "Premium Watches – boat-storm-pro-call-4. High performance & reliability.",
    "price": 6588.54,
    "originalPrice": 8497.78,
    "rating": 3.7,
    "reviews": 791,
    "image": "/assets/products/watches/boat-storm-pro-call-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-pro-call-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p585",
    "title": "boat-storm-rtl-1",
    "description": "Premium Watches – boat-storm-rtl-1. High performance & reliability.",
    "price": 24442.82,
    "originalPrice": 29270.2,
    "rating": 3.8,
    "reviews": 585,
    "image": "/assets/products/watches/boat-storm-rtl-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-rtl-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p586",
    "title": "boat-storm-rtl-2",
    "description": "Premium Watches – boat-storm-rtl-2. High performance & reliability.",
    "price": 9399.73,
    "originalPrice": 11099.09,
    "rating": 3.9,
    "reviews": 224,
    "image": "/assets/products/watches/boat-storm-rtl-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-rtl-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p587",
    "title": "boat-storm-rtl-3",
    "description": "Premium Watches – boat-storm-rtl-3. High performance & reliability.",
    "price": 11855.74,
    "originalPrice": 14781.78,
    "rating": 3.7,
    "reviews": 145,
    "image": "/assets/products/watches/boat-storm-rtl-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-rtl-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p588",
    "title": "boat-storm-rtl-4",
    "description": "Premium Watches – boat-storm-rtl-4. High performance & reliability.",
    "price": 15065.89,
    "originalPrice": 16746.52,
    "rating": 4.9,
    "reviews": 544,
    "image": "/assets/products/watches/boat-storm-rtl-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-storm-rtl-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p589",
    "title": "boat-trebel-blaze-1",
    "description": "Premium Watches – boat-trebel-blaze-1. High performance & reliability.",
    "price": 8003.87,
    "originalPrice": 10004.42,
    "rating": 3.9,
    "reviews": 382,
    "image": "/assets/products/watches/boat-trebel-blaze-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-trebel-blaze-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p590",
    "title": "boat-trebel-blaze-2",
    "description": "Premium Watches – boat-trebel-blaze-2. High performance & reliability.",
    "price": 9080.41,
    "originalPrice": 9740.79,
    "rating": 3.9,
    "reviews": 567,
    "image": "/assets/products/watches/boat-trebel-blaze-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-trebel-blaze-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p591",
    "title": "boat-trebel-blaze-3",
    "description": "Premium Watches – boat-trebel-blaze-3. High performance & reliability.",
    "price": 7018.69,
    "originalPrice": 8059.15,
    "rating": 4.7,
    "reviews": 776,
    "image": "/assets/products/watches/boat-trebel-blaze-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-trebel-blaze-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p592",
    "title": "boat-trebel-blaze-4",
    "description": "Premium Watches – boat-trebel-blaze-4. High performance & reliability.",
    "price": 14722.84,
    "originalPrice": 16764.92,
    "rating": 4.9,
    "reviews": 264,
    "image": "/assets/products/watches/boat-trebel-blaze-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-trebel-blaze-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p593",
    "title": "boat-trebel-matrix-1",
    "description": "Premium Watches – boat-trebel-matrix-1. High performance & reliability.",
    "price": 15488.44,
    "originalPrice": 17652.28,
    "rating": 4.5,
    "reviews": 171,
    "image": "/assets/products/watches/boat-trebel-matrix-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-trebel-matrix-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p594",
    "title": "boat-trebel-matrix-2",
    "description": "Premium Watches – boat-trebel-matrix-2. High performance & reliability.",
    "price": 22886.62,
    "originalPrice": 23991.53,
    "rating": 3.6,
    "reviews": 453,
    "image": "/assets/products/watches/boat-trebel-matrix-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-trebel-matrix-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p595",
    "title": "boat-trebel-matrix-3",
    "description": "Premium Watches – boat-trebel-matrix-3. High performance & reliability.",
    "price": 11413.96,
    "originalPrice": 11569.7,
    "rating": 5,
    "reviews": 627,
    "image": "/assets/products/watches/boat-trebel-matrix-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-trebel-matrix-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p596",
    "title": "boat-trebel-matrix-4",
    "description": "Premium Watches – boat-trebel-matrix-4. High performance & reliability.",
    "price": 7395.96,
    "originalPrice": 9021.92,
    "rating": 4,
    "reviews": 758,
    "image": "/assets/products/watches/boat-trebel-matrix-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-trebel-matrix-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p597",
    "title": "boat-watch-storm-captain-america-marvel-edition",
    "description": "Premium Watches – boat-watch-storm-captain-america-marvel-edition. High performance & reliability.",
    "price": 21082.54,
    "originalPrice": 26460.76,
    "rating": 3.9,
    "reviews": 675,
    "image": "/assets/products/watches/boat-watch-storm-captain-america-marvel-edition.webp",
    "thumbnails": [
      "/assets/products/watches/boat-watch-storm-captain-america-marvel-edition.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p598",
    "title": "boat-wave-beat-1",
    "description": "Premium Watches – boat-wave-beat-1. High performance & reliability.",
    "price": 2406.01,
    "originalPrice": 2731.85,
    "rating": 4.4,
    "reviews": 736,
    "image": "/assets/products/watches/boat-wave-beat-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-beat-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p599",
    "title": "boat-wave-beat-2",
    "description": "Premium Watches – boat-wave-beat-2. High performance & reliability.",
    "price": 18213.72,
    "originalPrice": 21704.83,
    "rating": 3.6,
    "reviews": 135,
    "image": "/assets/products/watches/boat-wave-beat-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-beat-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p600",
    "title": "boat-wave-beat-3",
    "description": "Premium Watches – boat-wave-beat-3. High performance & reliability.",
    "price": 23156.21,
    "originalPrice": 29595.05,
    "rating": 4.8,
    "reviews": 489,
    "image": "/assets/products/watches/boat-wave-beat-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-beat-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p601",
    "title": "boat-wave-beat-4",
    "description": "Premium Watches – boat-wave-beat-4. High performance & reliability.",
    "price": 24981.91,
    "originalPrice": 28224.71,
    "rating": 3.6,
    "reviews": 413,
    "image": "/assets/products/watches/boat-wave-beat-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-beat-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p602",
    "title": "boat-wave-beat-call-1",
    "description": "Premium Watches – boat-wave-beat-call-1. High performance & reliability.",
    "price": 11822.43,
    "originalPrice": 14014.36,
    "rating": 3.7,
    "reviews": 754,
    "image": "/assets/products/watches/boat-wave-beat-call-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-beat-call-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p603",
    "title": "boat-wave-beat-call-2",
    "description": "Premium Watches – boat-wave-beat-call-2. High performance & reliability.",
    "price": 13864.05,
    "originalPrice": 13906.45,
    "rating": 4.7,
    "reviews": 236,
    "image": "/assets/products/watches/boat-wave-beat-call-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-beat-call-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p604",
    "title": "boat-wave-beat-call-3",
    "description": "Premium Watches – boat-wave-beat-call-3. High performance & reliability.",
    "price": 13810.33,
    "originalPrice": 17545.23,
    "rating": 4.2,
    "reviews": 319,
    "image": "/assets/products/watches/boat-wave-beat-call-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-beat-call-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p605",
    "title": "boat-wave-beat-call-4",
    "description": "Premium Watches – boat-wave-beat-call-4. High performance & reliability.",
    "price": 13586.8,
    "originalPrice": 16462.22,
    "rating": 3.9,
    "reviews": 424,
    "image": "/assets/products/watches/boat-wave-beat-call-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-beat-call-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p606",
    "title": "boat-wave-call-1",
    "description": "Premium Watches – boat-wave-call-1. High performance & reliability.",
    "price": 3688.11,
    "originalPrice": 4044.87,
    "rating": 3.9,
    "reviews": 792,
    "image": "/assets/products/watches/boat-wave-call-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-call-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p607",
    "title": "boat-wave-call-2",
    "description": "Premium Watches – boat-wave-call-2. High performance & reliability.",
    "price": 14938.97,
    "originalPrice": 15828.87,
    "rating": 4.1,
    "reviews": 736,
    "image": "/assets/products/watches/boat-wave-call-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-call-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p608",
    "title": "boat-wave-call-3",
    "description": "Premium Watches – boat-wave-call-3. High performance & reliability.",
    "price": 19098.63,
    "originalPrice": 23571.09,
    "rating": 4.3,
    "reviews": 256,
    "image": "/assets/products/watches/boat-wave-call-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-call-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p609",
    "title": "boat-wave-call-4",
    "description": "Premium Watches – boat-wave-call-4. High performance & reliability.",
    "price": 2744.65,
    "originalPrice": 2793.36,
    "rating": 4.2,
    "reviews": 23,
    "image": "/assets/products/watches/boat-wave-call-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-call-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p610",
    "title": "boat-wave-connect-1",
    "description": "Premium Watches – boat-wave-connect-1. High performance & reliability.",
    "price": 11815.3,
    "originalPrice": 13935.63,
    "rating": 4.1,
    "reviews": 612,
    "image": "/assets/products/watches/boat-wave-connect-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-connect-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p611",
    "title": "boat-wave-connect-2",
    "description": "Premium Watches – boat-wave-connect-2. High performance & reliability.",
    "price": 15000.92,
    "originalPrice": 15313.79,
    "rating": 3.9,
    "reviews": 513,
    "image": "/assets/products/watches/boat-wave-connect-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-connect-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p612",
    "title": "boat-wave-connect-3",
    "description": "Premium Watches – boat-wave-connect-3. High performance & reliability.",
    "price": 3062.13,
    "originalPrice": 3625.24,
    "rating": 4.9,
    "reviews": 601,
    "image": "/assets/products/watches/boat-wave-connect-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-connect-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p613",
    "title": "boat-wave-connect-4",
    "description": "Premium Watches – boat-wave-connect-4. High performance & reliability.",
    "price": 5639.22,
    "originalPrice": 6412.01,
    "rating": 4.1,
    "reviews": 476,
    "image": "/assets/products/watches/boat-wave-connect-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-connect-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p614",
    "title": "boat-wave-lite-1",
    "description": "Premium Watches – boat-wave-lite-1. High performance & reliability.",
    "price": 10610,
    "originalPrice": 11925.29,
    "rating": 4.6,
    "reviews": 225,
    "image": "/assets/products/watches/boat-wave-lite-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-lite-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p615",
    "title": "boat-wave-lite-2",
    "description": "Premium Watches – boat-wave-lite-2. High performance & reliability.",
    "price": 17901.92,
    "originalPrice": 21169.62,
    "rating": 4.1,
    "reviews": 12,
    "image": "/assets/products/watches/boat-wave-lite-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-lite-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p616",
    "title": "boat-wave-lite-3",
    "description": "Premium Watches – boat-wave-lite-3. High performance & reliability.",
    "price": 20107.88,
    "originalPrice": 26018.83,
    "rating": 4.8,
    "reviews": 761,
    "image": "/assets/products/watches/boat-wave-lite-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-lite-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p617",
    "title": "boat-wave-lite-4",
    "description": "Premium Watches – boat-wave-lite-4. High performance & reliability.",
    "price": 7992.77,
    "originalPrice": 8374.86,
    "rating": 4.4,
    "reviews": 796,
    "image": "/assets/products/watches/boat-wave-lite-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-lite-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p618",
    "title": "boat-wave-play-1",
    "description": "Premium Watches – boat-wave-play-1. High performance & reliability.",
    "price": 12917.52,
    "originalPrice": 13621.77,
    "rating": 4,
    "reviews": 785,
    "image": "/assets/products/watches/boat-wave-play-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-play-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p619",
    "title": "boat-wave-prime-47-1",
    "description": "Premium Watches – boat-wave-prime-47-1. High performance & reliability.",
    "price": 11797.48,
    "originalPrice": 14478.06,
    "rating": 4.8,
    "reviews": 159,
    "image": "/assets/products/watches/boat-wave-prime-47-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-prime-47-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": true,
    "isPopular": true
  },
  {
    "id": "p620",
    "title": "boat-wave-prime-47-2",
    "description": "Premium Watches – boat-wave-prime-47-2. High performance & reliability.",
    "price": 8493.79,
    "originalPrice": 9203.19,
    "rating": 5,
    "reviews": 769,
    "image": "/assets/products/watches/boat-wave-prime-47-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-prime-47-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p621",
    "title": "boat-wave-prime-47-3",
    "description": "Premium Watches – boat-wave-prime-47-3. High performance & reliability.",
    "price": 6043.06,
    "originalPrice": 6285.19,
    "rating": 4.2,
    "reviews": 643,
    "image": "/assets/products/watches/boat-wave-prime-47-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-prime-47-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p622",
    "title": "boat-wave-pro-1",
    "description": "Premium Watches – boat-wave-pro-1. High performance & reliability.",
    "price": 4902.85,
    "originalPrice": 5216.13,
    "rating": 4.2,
    "reviews": 595,
    "image": "/assets/products/watches/boat-wave-pro-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-pro-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p623",
    "title": "boat-wave-pro-2",
    "description": "Premium Watches – boat-wave-pro-2. High performance & reliability.",
    "price": 19484.32,
    "originalPrice": 20975.6,
    "rating": 4.6,
    "reviews": 303,
    "image": "/assets/products/watches/boat-wave-pro-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-pro-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p624",
    "title": "boat-wave-pro-3",
    "description": "Premium Watches – boat-wave-pro-3. High performance & reliability.",
    "price": 11528.63,
    "originalPrice": 14619.98,
    "rating": 3.6,
    "reviews": 610,
    "image": "/assets/products/watches/boat-wave-pro-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-pro-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p625",
    "title": "boat-wave-pro-4",
    "description": "Premium Watches – boat-wave-pro-4. High performance & reliability.",
    "price": 21345.56,
    "originalPrice": 27083.79,
    "rating": 4.8,
    "reviews": 514,
    "image": "/assets/products/watches/boat-wave-pro-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-pro-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p626",
    "title": "boat-wave-select-1",
    "description": "Premium Watches – boat-wave-select-1. High performance & reliability.",
    "price": 19086.48,
    "originalPrice": 20322.99,
    "rating": 4.5,
    "reviews": 102,
    "image": "/assets/products/watches/boat-wave-select-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-select-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p627",
    "title": "boat-wave-select-2",
    "description": "Premium Watches – boat-wave-select-2. High performance & reliability.",
    "price": 10201.17,
    "originalPrice": 11927.3,
    "rating": 3.7,
    "reviews": 36,
    "image": "/assets/products/watches/boat-wave-select-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-select-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p628",
    "title": "boat-wave-select-3",
    "description": "Premium Watches – boat-wave-select-3. High performance & reliability.",
    "price": 24589.13,
    "originalPrice": 26949.31,
    "rating": 4.6,
    "reviews": 707,
    "image": "/assets/products/watches/boat-wave-select-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-select-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p629",
    "title": "boat-wave-select-4",
    "description": "Premium Watches – boat-wave-select-4. High performance & reliability.",
    "price": 13531.6,
    "originalPrice": 16243.44,
    "rating": 3.7,
    "reviews": 595,
    "image": "/assets/products/watches/boat-wave-select-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-select-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p630",
    "title": "boat-wave-style-1",
    "description": "Premium Watches – boat-wave-style-1. High performance & reliability.",
    "price": 13741.63,
    "originalPrice": 15578.64,
    "rating": 3.6,
    "reviews": 702,
    "image": "/assets/products/watches/boat-wave-style-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-style-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p631",
    "title": "boat-wave-style-2",
    "description": "Premium Watches – boat-wave-style-2. High performance & reliability.",
    "price": 21377.32,
    "originalPrice": 24624.22,
    "rating": 4.1,
    "reviews": 764,
    "image": "/assets/products/watches/boat-wave-style-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-style-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p632",
    "title": "boat-wave-style-3",
    "description": "Premium Watches – boat-wave-style-3. High performance & reliability.",
    "price": 1540.96,
    "originalPrice": 1968.12,
    "rating": 4.4,
    "reviews": 774,
    "image": "/assets/products/watches/boat-wave-style-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-style-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": true,
    "isPopular": false
  },
  {
    "id": "p633",
    "title": "boat-wave-style-4",
    "description": "Premium Watches – boat-wave-style-4. High performance & reliability.",
    "price": 19873.85,
    "originalPrice": 21174.41,
    "rating": 4.3,
    "reviews": 664,
    "image": "/assets/products/watches/boat-wave-style-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-style-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p634",
    "title": "boat-wave-style-call-1",
    "description": "Premium Watches – boat-wave-style-call-1. High performance & reliability.",
    "price": 12344.26,
    "originalPrice": 13537.26,
    "rating": 4,
    "reviews": 628,
    "image": "/assets/products/watches/boat-wave-style-call-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-style-call-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p635",
    "title": "boat-wave-style-call-2",
    "description": "Premium Watches – boat-wave-style-call-2. High performance & reliability.",
    "price": 1471.39,
    "originalPrice": 1690.39,
    "rating": 3.9,
    "reviews": 98,
    "image": "/assets/products/watches/boat-wave-style-call-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-style-call-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p636",
    "title": "boat-wave-style-call-3",
    "description": "Premium Watches – boat-wave-style-call-3. High performance & reliability.",
    "price": 5522.69,
    "originalPrice": 6562.23,
    "rating": 3.9,
    "reviews": 544,
    "image": "/assets/products/watches/boat-wave-style-call-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-style-call-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p637",
    "title": "boat-wave-style-call-4",
    "description": "Premium Watches – boat-wave-style-call-4. High performance & reliability.",
    "price": 17914.1,
    "originalPrice": 18177.59,
    "rating": 4.6,
    "reviews": 755,
    "image": "/assets/products/watches/boat-wave-style-call-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-wave-style-call-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p638",
    "title": "boat-xtend‌-1",
    "description": "Premium Watches – boat-xtend‌-1. High performance & reliability.",
    "price": 16269.21,
    "originalPrice": 18297.89,
    "rating": 4.3,
    "reviews": 88,
    "image": "/assets/products/watches/boat-xtend‌-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-xtend‌-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p639",
    "title": "boat-xtend‌-2",
    "description": "Premium Watches – boat-xtend‌-2. High performance & reliability.",
    "price": 11969.87,
    "originalPrice": 12721.23,
    "rating": 3.6,
    "reviews": 776,
    "image": "/assets/products/watches/boat-xtend‌-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-xtend‌-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p640",
    "title": "boat-xtend‌-3",
    "description": "Premium Watches – boat-xtend‌-3. High performance & reliability.",
    "price": 15223.81,
    "originalPrice": 18104.44,
    "rating": 4.1,
    "reviews": 243,
    "image": "/assets/products/watches/boat-xtend‌-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-xtend‌-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": true
  },
  {
    "id": "p641",
    "title": "boat-xtend‌-4",
    "description": "Premium Watches – boat-xtend‌-4. High performance & reliability.",
    "price": 18818.06,
    "originalPrice": 20213.38,
    "rating": 4.2,
    "reviews": 417,
    "image": "/assets/products/watches/boat-xtend‌-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-xtend‌-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p642",
    "title": "boat-xtend‌-sport-1",
    "description": "Premium Watches – boat-xtend‌-sport-1. High performance & reliability.",
    "price": 12207.8,
    "originalPrice": 13416.59,
    "rating": 3.5,
    "reviews": 733,
    "image": "/assets/products/watches/boat-xtend‌-sport-1.webp",
    "thumbnails": [
      "/assets/products/watches/boat-xtend‌-sport-1.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p643",
    "title": "boat-xtend‌-sport-2",
    "description": "Premium Watches – boat-xtend‌-sport-2. High performance & reliability.",
    "price": 23588.8,
    "originalPrice": 25373.72,
    "rating": 3.6,
    "reviews": 670,
    "image": "/assets/products/watches/boat-xtend‌-sport-2.webp",
    "thumbnails": [
      "/assets/products/watches/boat-xtend‌-sport-2.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p644",
    "title": "boat-xtend‌-sport-3",
    "description": "Premium Watches – boat-xtend‌-sport-3. High performance & reliability.",
    "price": 1105.49,
    "originalPrice": 1265.58,
    "rating": 4.5,
    "reviews": 559,
    "image": "/assets/products/watches/boat-xtend‌-sport-3.webp",
    "thumbnails": [
      "/assets/products/watches/boat-xtend‌-sport-3.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  },
  {
    "id": "p645",
    "title": "boat-xtend‌-sport-4",
    "description": "Premium Watches – boat-xtend‌-sport-4. High performance & reliability.",
    "price": 3930.18,
    "originalPrice": 4729.27,
    "rating": 3.7,
    "reviews": 517,
    "image": "/assets/products/watches/boat-xtend‌-sport-4.webp",
    "thumbnails": [
      "/assets/products/watches/boat-xtend‌-sport-4.webp"
    ],
    "categoryId": "watches",
    "category": "Watches",
    "isNew": false,
    "isPopular": false
  }
];
