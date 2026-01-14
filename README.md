# Vinhomes Hải Vân Bay

Landing page cho dự án Vinhomes Hải Vân Bay - Biển xanh, cuộc sống xanh.

## Cấu trúc dự án

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Trang chủ
├── components/         # Các component tái sử dụng
├── sections/           # Các section của landing page
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── constants/         # Constants và config
└── styles/            # Custom styles
```

## Công nghệ sử dụng

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **ESLint** - Code linting

## Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production build
npm run start
```

## Triển khai

Dự án có thể được triển khai trên Vercel, Netlify, hoặc bất kỳ platform nào hỗ trợ Next.js.

## Phát triển

- Sử dụng cấu trúc `src/` để tổ chức code
- Tuân thủ TypeScript cho type safety
- Sử dụng Tailwind CSS cho styling
- Component-based architecture
