"use client";

import { DataTable } from "@/components/dashboard/data-table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const usersData = [
  {
    id: 1,
    نام: "علی احمدی",
    ایمیل: "ali@example.com",
    نقش: "مدیر",
    وضعیت: "فعال",
    تاریخ: "1403/01/15",
  },
  {
    id: 2,
    نام: "مریم رضایی",
    ایمیل: "maryam@example.com",
    نقش: "کاربر",
    وضعیت: "فعال",
    تاریخ: "1403/01/14",
  },
  {
    id: 3,
    نام: "حسین کریمی",
    ایمیل: "hossein@example.com",
    نقش: "کاربر",
    وضعیت: "غیرفعال",
    تاریخ: "1403/01/13",
  },
  {
    id: 4,
    نام: "فاطمه محمدی",
    ایمیل: "fateme@example.com",
    نقش: "ویرایشگر",
    وضعیت: "فعال",
    تاریخ: "1403/01/12",
  },
  {
    id: 5,
    نام: "محمد حسینی",
    ایمیل: "mohammad@example.com",
    نقش: "کاربر",
    وضعیت: "فعال",
    تاریخ: "1403/01/11",
  },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">کاربران</h1>
        <p className="text-muted-foreground mt-2">
          مدیریت کاربران سیستم
        </p>
      </div>

      <DataTable
        title="لیست کاربران"
        description="تمام کاربران ثبت‌شده در سیستم"
        data={usersData}
        columns={[
          {
            key: "id",
            header: "آواتار",
            render: (_, row) => (
              <Avatar>
                <AvatarImage src={`/placeholder-avatar-${row.id}.jpg`} />
                <AvatarFallback>
                  {row.نام.split(" ").map((n: string) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
            ),
          },
          {
            key: "نام",
            header: "نام",
          },
          {
            key: "ایمیل",
            header: "ایمیل",
          },
          {
            key: "نقش",
            header: "نقش",
            render: (value) => (
              <Badge variant="secondary">{value}</Badge>
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
          {
            key: "تاریخ",
            header: "تاریخ عضویت",
          },
        ]}
      />
    </div>
  );
}

