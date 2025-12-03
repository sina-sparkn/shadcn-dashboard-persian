"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/hooks/use-theme";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">تنظیمات</h1>
        <p className="text-muted-foreground mt-2">
          مدیریت تنظیمات حساب کاربری و سیستم
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle>پروفایل</CardTitle>
            <CardDescription>
              اطلاعات حساب کاربری خود را به‌روزرسانی کنید
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">نام</Label>
              <Input id="name" placeholder="نام شما" defaultValue="کاربر" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">ایمیل</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                defaultValue="user@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">شماره تماس</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="09123456789"
                defaultValue="09123456789"
              />
            </div>
            <Button>ذخیره تغییرات</Button>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle>ظاهر</CardTitle>
            <CardDescription>
              تنظیمات ظاهری و تم سیستم
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>حالت تاریک</Label>
                <p className="text-sm text-muted-foreground">
                  استفاده از تم تاریک
                </p>
              </div>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>اعلان‌ها</Label>
                <p className="text-sm text-muted-foreground">
                  دریافت اعلان‌های سیستم
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>ایمیل‌های تبلیغاتی</Label>
                <p className="text-sm text-muted-foreground">
                  دریافت ایمیل‌های تبلیغاتی
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle>امنیت</CardTitle>
            <CardDescription>
              مدیریت امنیت حساب کاربری
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">رمز عبور فعلی</Label>
              <Input
                id="current-password"
                type="password"
                placeholder="رمز عبور فعلی"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">رمز عبور جدید</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="رمز عبور جدید"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">تأیید رمز عبور</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="تأیید رمز عبور"
              />
            </div>
            <Button variant="destructive">تغییر رمز عبور</Button>
          </CardContent>
        </Card>

        {/* Notifications Settings */}
        <Card>
          <CardHeader>
            <CardTitle>اعلان‌ها</CardTitle>
            <CardDescription>
              تنظیمات اعلان‌های سیستم
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>اعلان‌های ایمیل</Label>
                <p className="text-sm text-muted-foreground">
                  دریافت اعلان‌ها از طریق ایمیل
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>اعلان‌های مرورگر</Label>
                <p className="text-sm text-muted-foreground">
                  دریافت اعلان‌ها در مرورگر
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>اعلان‌های موبایل</Label>
                <p className="text-sm text-muted-foreground">
                  دریافت اعلان‌ها در موبایل
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

