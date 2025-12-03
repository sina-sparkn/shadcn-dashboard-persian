"use client";

import { StatCard } from "@/components/dashboard/stat-card";
import { ChartCard } from "@/components/dashboard/chart-card";
import { DataTable } from "@/components/dashboard/data-table";
import {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample data
const salesData = [
  { name: "فروردین", فروش: 4000, درآمد: 2400 },
  { name: "اردیبهشت", فروش: 3000, درآمد: 1398 },
  { name: "خرداد", فروش: 2000, درآمد: 9800 },
  { name: "تیر", فروش: 2780, درآمد: 3908 },
  { name: "مرداد", فروش: 1890, درآمد: 4800 },
  { name: "شهریور", فروش: 2390, درآمد: 3800 },
];

const revenueData = [
  { name: "فروردین", درآمد: 4000 },
  { name: "اردیبهشت", درآمد: 3000 },
  { name: "خرداد", درآمد: 2000 },
  { name: "تیر", درآمد: 2780 },
  { name: "مرداد", درآمد: 1890 },
  { name: "شهریور", درآمد: 2390 },
];

const tableData = [
  {
    id: 1,
    نام: "محصول 1",
    دسته‌بندی: "الکترونیک",
    قیمت: "1,200,000 تومان",
    وضعیت: "فعال",
  },
  {
    id: 2,
    نام: "محصول 2",
    دسته‌بندی: "پوشاک",
    قیمت: "800,000 تومان",
    وضعیت: "فعال",
  },
  {
    id: 3,
    نام: "محصول 3",
    دسته‌بندی: "الکترونیک",
    قیمت: "2,500,000 تومان",
    وضعیت: "غیرفعال",
  },
  {
    id: 4,
    نام: "محصول 4",
    دسته‌بندی: "خانه و آشپزخانه",
    قیمت: "1,500,000 تومان",
    وضعیت: "فعال",
  },
  {
    id: 5,
    نام: "محصول 5",
    دسته‌بندی: "پوشاک",
    قیمت: "900,000 تومان",
    وضعیت: "فعال",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">داشبورد</h1>
        <p className="text-muted-foreground mt-2">
          خوش آمدید! این نمای کلی از عملکرد شماست.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="کل درآمد"
          value="12,500,000"
          description="+20.1% نسبت به ماه قبل"
          icon={DollarSign}
          trend={{ value: 20.1, isPositive: true }}
        />
        <StatCard
          title="کاربران"
          value="2,350"
          description="+180.1% نسبت به ماه قبل"
          icon={Users}
          trend={{ value: 180.1, isPositive: true }}
        />
        <StatCard
          title="سفارشات"
          value="12,234"
          description="+19% نسبت به ماه قبل"
          icon={ShoppingCart}
          trend={{ value: 19, isPositive: true }}
        />
        <StatCard
          title="رشد"
          value="+12.5%"
          description="+4.3% نسبت به ماه قبل"
          icon={TrendingUp}
          trend={{ value: 4.3, isPositive: true }}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard
          title="فروش و درآمد"
          description="نمودار فروش و درآمد در 6 ماه گذشته"
          data={salesData}
          type="area"
          dataKeys={["فروش", "درآمد"]}
          colors={["#8884d8", "#82ca9d"]}
        />
        <ChartCard
          title="درآمد ماهانه"
          description="نمودار درآمد در 6 ماه گذشته"
          data={revenueData}
          type="bar"
          dataKey="درآمد"
          colors={["#8884d8"]}
        />
      </div>

      {/* Data Table */}
      <DataTable
        title="محصولات اخیر"
        description="لیست آخرین محصولات اضافه شده"
        data={tableData}
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
            key: "وضعیت",
            header: "وضعیت",
            render: (value) => (
              <Badge
                variant={value === "فعال" ? "default" : "secondary"}
              >
                {value}
              </Badge>
            ),
          },
        ]}
      />
    </div>
  );
}

