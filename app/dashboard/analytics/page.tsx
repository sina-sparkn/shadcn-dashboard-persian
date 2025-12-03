"use client";

import { ChartCard } from "@/components/dashboard/chart-card";
import { StatCard } from "@/components/dashboard/stat-card";
import { Eye, MousePointerClick, Users, Clock } from "lucide-react";

const analyticsData = [
  { name: "دوشنبه", بازدید: 4000, کلیک: 2400 },
  { name: "سه‌شنبه", بازدید: 3000, کلیک: 1398 },
  { name: "چهارشنبه", بازدید: 2000, کلیک: 9800 },
  { name: "پنج‌شنبه", بازدید: 2780, کلیک: 3908 },
  { name: "جمعه", بازدید: 1890, کلیک: 4800 },
  { name: "شنبه", بازدید: 2390, کلیک: 3800 },
  { name: "یکشنبه", بازدید: 3490, کلیک: 4300 },
];

const trafficData = [
  { name: "فروردین", ترافیک: 4000 },
  { name: "اردیبهشت", ترافیک: 3000 },
  { name: "خرداد", ترافیک: 2000 },
  { name: "تیر", ترافیک: 2780 },
  { name: "مرداد", ترافیک: 1890 },
  { name: "شهریور", ترافیک: 2390 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">تحلیل‌ها</h1>
        <p className="text-muted-foreground mt-2">
          تحلیل و بررسی عملکرد و ترافیک سایت
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="بازدید کل"
          value="125,430"
          description="+12.5% نسبت به هفته قبل"
          icon={Eye}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatCard
          title="کلیک‌ها"
          value="8,234"
          description="+8.2% نسبت به هفته قبل"
          icon={MousePointerClick}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatCard
          title="کاربران فعال"
          value="3,456"
          description="+15.3% نسبت به هفته قبل"
          icon={Users}
          trend={{ value: 15.3, isPositive: true }}
        />
        <StatCard
          title="میانگین زمان"
          value="3:45"
          description="+2.1% نسبت به هفته قبل"
          icon={Clock}
          trend={{ value: 2.1, isPositive: true }}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard
          title="بازدید و کلیک"
          description="نمودار بازدید و کلیک در هفته گذشته"
          data={analyticsData}
          type="line"
          dataKeys={["بازدید", "کلیک"]}
          colors={["#8884d8", "#82ca9d"]}
        />
        <ChartCard
          title="ترافیک ماهانه"
          description="نمودار ترافیک در 6 ماه گذشته"
          data={trafficData}
          type="area"
          dataKey="ترافیک"
          colors={["#8884d8"]}
        />
      </div>
    </div>
  );
}

