# Ez.Park - Next.js Website

Website của Ez.Park được chuyển đổi từ HTML/CSS/JS sang Next.js với TypeScript và Tailwind CSS.

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy development server:
```bash
npm run dev
```

3. Mở trình duyệt tại [http://localhost:3000](http://localhost:3000)

## Build cho production

```bash
npm run build
npm start
```

## Cấu trúc Project

```
ezpark/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Header.tsx
│       ├── HeroSection.tsx
│       ├── StatisticsSection.tsx
│       ├── AboutSection.tsx
│       ├── GreenEnergyBanner.tsx
│       ├── SolutionsSection.tsx
│       ├── MapSection.tsx
│       ├── NewsSection.tsx
│       ├── PartnersSection.tsx
│       └── FooterSection.tsx
├── public/
│   └── images/             # Tất cả images và assets
└── package.json
```

## Tính năng

- ✅ Responsive design
- ✅ Smooth scroll animations
- ✅ Statistics counter animation
- ✅ Header scroll effect
- ✅ Calendar SVG dynamic update
- ✅ TypeScript support
- ✅ Tailwind CSS styling

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
