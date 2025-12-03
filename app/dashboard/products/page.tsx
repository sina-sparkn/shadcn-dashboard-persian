"use client";

import { DataTable } from "@/components/dashboard/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const productsData = [
  {
    id: 1,
    نام: "لپ‌تاپ",
    دسته‌بندی: "الکترونیک",
    قیمت: "15,000,000 تومان",
    موجودی: 12,
    وضعیت: "فعال",
  },
  {
    id: 2,
    نام: "موبایل",
    دسته‌بندی: "الکترونیک",
    قیمت: "8,500,000 تومان",
    موجودی: 25,
    وضعیت: "فعال",
  },
  {
    id: 3,
    نام: "تی‌شرت",
    دسته‌بندی: "پوشاک",
    قیمت: "150,000 تومان",
    موجودی: 0,
    وضعیت: "غیرفعال",
  },
  {
    id: 4,
    نام: "کتاب",
    دسته‌بندی: "کتاب",
    قیمت: "50,000 تومان",
    موجودی: 100,
    وضعیت: "فعال",
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">محصولات</h1>
          <p className="text-muted-foreground mt-2">
            مدیریت محصولات
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          افزودن محصول
        </Button>
      </div>

      <DataTable
        data={productsData}
        columns={[
          {
            key: "نام",
            header: "نام",
          },
          {
            key: "دسته‌بندی",
            header: "دسته‌بندی",
          },
          {
            key: "قیمت",
            header: "قیمت",
          },
          {
            key: "موجودی",
            header: "موجودی",
            render: (value) => (
              <span className={value === 0 ? "text-destructive" : ""}>
                {value}
              </span>
            ),
          },
          {
            key: "وضعیت",
            header: "وضعیت",
            render: (value) => (
              <Badge variant={value === "فعال" ? "default" : "secondary"}>
                {value}
              </Badge>
            ),
          },
        ]}
      />
    </div>
  );
}

