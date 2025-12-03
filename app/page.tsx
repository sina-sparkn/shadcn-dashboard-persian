import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          داشبورد ماژولار
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          یک قالب کامل و ماژولار برای پروژه‌های Next.js با استفاده از shadcn/ui و Tailwind CSS
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/dashboard">
            <Button size="lg">ورود به داشبورد</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
