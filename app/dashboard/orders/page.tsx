"use client";

import { DataTable } from "@/components/dashboard/data-table";
import { Badge } from "@/components/ui/badge";

const ordersData = [
  {
    id: "#ORD-001",
    مشتری: "علی احمدی",
    محصول: "لپ‌تاپ",
    مبلغ: "15,000,000 تومان",
    تاریخ: "1403/01/15",
    وضعیت: "تحویل شده",
  },
  {
    id: "#ORD-002",
    مشتری: "مریم رضایی",
    محصول: "موبایل",
    مبلغ: "8,500,000 تومان",
    تاریخ: "1403/01/14",
    وضعیت: "در حال ارسال",
  },
  {
    id: "#ORD-003",
    مشتری: "حسین کریمی",
    محصول: "تی‌شرت",
    مبلغ: "150,000 تومان",
    تاریخ: "1403/01/13",
    وضعیت: "در انتظار",
  },
  {
    id: "#ORD-004",
    مشتری: "فاطمه محمدی",
    محصول: "کتاب",
    مبلغ: "50,000 تومان",
    تاریخ: "1403/01/12",
    وضعیت: "لغو شده",
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "تحویل شده":
      return "default";
    case "در حال ارسال":
      return "secondary";
    case "در انتظار":
      return "outline";
    case "لغو شده":
      return "destructive";
    default:
      return "outline";
  }
};

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">سفارشات</h1>
        <p className="text-muted-foreground mt-2">
          مدیریت سفارشات
        </p>
      </div>

      <DataTable
        data={ordersData}
        columns={[
          {
            key: "id",
            header: "شماره سفارش",
          },
          {
            key: "مشتری",
            header: "مشتری",
          },
          {
            key: "محصول",
            header: "محصول",
          },
          {
            key: "مبلغ",
            header: "مبلغ",
          },
          {
            key: "تاریخ",
            header: "تاریخ",
          },
          {
            key: "وضعیت",
            header: "وضعیت",
            render: (value) => (
              <Badge variant={getStatusVariant(value)}>{value}</Badge>
            ),
          },
        ]}
      />
    </div>
  );
}

