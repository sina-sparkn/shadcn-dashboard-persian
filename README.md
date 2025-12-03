<p align="center">
  <img src="/public/image.png" alt="shadcn-dashboard-persian preview" width="100%"/>
</p>

<h1 align="center">⚡️ shadcn-dashboard-persian</h1>

<p align="center">
  <strong>قالب داشبورد ادمین مدرن، ریسپانسیو و فارسی‌شده</strong><br>
  ساخته‌شده با Next.js 14 (App Router)، TypeScript، Tailwind CSS و کامپوننت‌های shadcn/ui
</p>

<p align="center">
  <a href="https://github.com/sina-sparkn/shadcn-dashboard-persian">
    <img src="https://img.shields.io/github/stars/sina-sparkn/shadcn-dashboard-persian?style=flat&logo=github" alt="GitHub stars" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-14%2B-black?style=flat&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.0%2B-blue?style=flat&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.0%2B-38B2AC?style=flat&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-Ready-06b6d4" alt="shadcn/ui" />
</p>

## 🚀 ویژگی‌ها

- **فریم‌ورک مدرن**: Next.js 14+ با App Router
- **کامپوننت‌های زیبا**: تمام کامپوننت‌ها از [shadcn/ui](https://ui.shadcn.com)
- **پشتیبانی کامل از RTL و فارسی**
- **حالت تاریک و روشن** با سوئیچ خودکار
- **احراز هویت آماده**: قابل استفاده با NextAuth.js / Clerk / Supabase
- **نمودارهای تعاملی**: با Recharts
- **تایپ‌سیفت کامل**: نوشته‌شده با TypeScript
- **فرم‌های هوشمند**: Zod + React Hook Form
- **مدیریت حالت سبک**: Zustand یا Context API (قابل تغییر)

## 🛠️ تکنولوژی‌های استفاده‌شده

| تکنولوژی              | توضیحات                        |
| --------------------- | ------------------------------ |
| Next.js 14+           | App Router & Server Components |
| TypeScript            | تایپ‌سیفت کامل                 |
| Tailwind CSS          | استایل‌دهی سریع و ریسپانسیو    |
| shadcn/ui             | کامپوننت‌های زیبا و قابل تنظیم |
| Lucide React          | آیکون‌های مدرن                 |
| Recharts              | نمودارهای تعاملی               |
| Zod + React Hook Form | اعتبارسنجی فرم‌ها              |

## ⚡️ شروع سریع

### پیش‌نیازها

- Node.js 18 یا بالاتر
- npm / yarn / pnpm

### نصب

```bash
git clone https://github.com/sina-sparkn/shadcn-dashboard-persian.git
cd shadcn-dashboard-persian
npm install
# یا
yarn install
# یا
pnpm install
```

### تنظیمات محیط

```bash
cp .env.example .env.local
```

سپس مقادیر مورد نیاز (مثل دیتابیس، کلیدهای احراز هویت و ...) را در `.env.local` وارد کنید.

### اجرا

```bash
npm run dev
```

حالا به آدرس [http://localhost:3000](http://localhost:3000) بروید.

## 🎨 سفارشی‌سازی

### تغییر تم (رنگ اصلی، شعاع گوشه‌ها و ...)

به فایل `app/globals.css` بروید و متغیرهای HSL داخل `:root` و `.dark` را تغییر دهید.

یا از [صفحه تم‌های shadcn](https://ui.shadcn.com/themes) استفاده کنید و کد تولیدشده را کپی کنید.

### اضافه کردن کامپوننت جدید shadcn/ui

```bash
npx shadcn-ui@latest add card
# یا هر کامپوننت دلخواه
```

## 🤝 مشارکت

خیلی خوشحال می‌شویم که به پروژه کمک کنید!

1. ریپازیتوری را فورک کنید
2. برنچ جدید بسازید (`git checkout -b feature/amazing-feature`)
3. تغییرات را کامیت کنید (`git commit -m 'Add some amazing feature'`)
4. پوش کنید (`git push origin feature/amazing-feature`)
5. یک Pull Request باز کنید

## 🌟 حمایت

اگر این قالب برایتان مفید بود، لطفاً یک ⭐ روی ریپازیتوری بزنید!

Developed with ❤️ by [Sina Sparkn](https://github.com/sina-sparkn)
