"use client";

import { StatCard } from "@/components/dashboard/stat-card";
import { ChartCard } from "@/components/dashboard/chart-card";
import { DollarSign, TrendingUp, ShoppingBag, Percent } from "lucide-react";

const salesData = [
  { name: "فروردین", فروش: 4000, هدف: 5000 },
  { name: "اردیبهشت", فروش: 3000, هدف: 4500 },
  { name: "خرداد", فروش: 2000, هدف: 4000 },
  { name: "تیر", فروش: 2780, هدف: 3500 },
  { name: "مرداد", فروش: 1890, هدف: 3000 },
  { name: "شهریور", فروش: 2390, هدف: 3200 },
];

const revenueData = [
  { name: "Q1", درآمد: 12000 },
  { name: "Q2", درآمد: 15000 },
  { name: "Q3", درآمد: 18000 },
  { name: "Q4", درآمد: 20000 },
];

export default function SalesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">فروش</h1>
        <p className="text-muted-foreground mt-2">
          تحلیل و بررسی عملکرد فروش
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="فروش کل"
          value="65,000,000"
          description="+25.3% نسبت به ماه قبل"
          icon={DollarSign}
          trend={{ value: 25.3, isPositive: true }}
        />
        <StatCard
          title="رشد"
          value="+18.5%"
          description="+5.2% نسبت به ماه قبل"
          icon={TrendingUp}
          trend={{ value: 5.2, isPositive: true }}
        />
        <StatCard
          title="سفارشات"
          value="1,234"
          description="+12% نسبت به ماه قبل"
          icon={ShoppingBag}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="نرخ تبدیل"
          value="3.2%"
          description="+0.8% نسبت به ماه قبل"
          icon={Percent}
          trend={{ value: 0.8, isPositive: true }}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard
          title="فروش و هدف"
          description="مقایسه فروش با اهداف تعیین شده"
          data={salesData}
          type="bar"
          dataKeys={["فروش", "هدف"]}
          colors={["#8884d8", "#82ca9d"]}
        />
        <ChartCard
          title="درآمد فصلی"
          description="درآمد در چهار فصل سال"
          data={revenueData}
          type="area"
          dataKey="درآمد"
          colors={["#8884d8"]}
        />
      </div>
    </div>
  );
}

