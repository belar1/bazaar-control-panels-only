
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { CustomerSidebar } from "@/components/CustomerSidebar";
import { Settings, User, Bell, Shield, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CustomerSettings = () => {
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    marketingEmails: false,
    orderUpdates: true,
    promotionAlerts: true,
    twoFactorAuth: false,
    savePaymentMethods: true,
    autoLogin: false,
    language: "ar",
    currency: "دج"
  });

  const handleSave = () => {
    toast({
      title: "تم الحفظ",
      description: "تم حفظ إعداداتك بنجاح"
    });
  };

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-orange-50 via-red-50 to-pink-50" dir="rtl">
        <CustomerSidebar />
        
        <SidebarInset className="flex-1">
          <div className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 md:px-6 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-orange-100" />
                <div>
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    الإعدادات
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">إدارة إعدادات حسابك</p>
                </div>
              </div>
              <Button onClick={handleSave} className="bg-orange-600 hover:bg-orange-700">
                حفظ الإعدادات
              </Button>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            {/* Account Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <User className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-xl text-gray-800">إعدادات الحساب</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="language">اللغة المفضلة</Label>
                    <Input
                      id="language"
                      value={settings.language === "ar" ? "العربية" : "English"}
                      readOnly
                      className="text-right mt-2 bg-gray-50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="currency">العملة المفضلة</Label>
                    <Input
                      id="currency"
                      value={settings.currency}
                      onChange={(e) => handleSettingChange('currency', e.target.value)}
                      className="text-right mt-2"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>تسجيل الدخول التلقائي</Label>
                    <p className="text-sm text-gray-600">البقاء مسجلاً عند زيارة الموقع</p>
                  </div>
                  <Switch
                    checked={settings.autoLogin}
                    onCheckedChange={(checked) => handleSettingChange('autoLogin', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Bell className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl text-gray-800">إعدادات الإشعارات</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>إشعارات البريد الإلكتروني</Label>
                    <p className="text-sm text-gray-600">استقبال إشعارات عامة عبر البريد الإلكتروني</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>إشعارات الرسائل النصية</Label>
                    <p className="text-sm text-gray-600">استقبال إشعارات عبر الرسائل النصية</p>
                  </div>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => handleSettingChange('smsNotifications', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>تحديثات الطلبات</Label>
                    <p className="text-sm text-gray-600">إشعارات حالة الطلبات والشحن</p>
                  </div>
                  <Switch
                    checked={settings.orderUpdates}
                    onCheckedChange={(checked) => handleSettingChange('orderUpdates', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>تنبيهات العروض</Label>
                    <p className="text-sm text-gray-600">إشعارات العروض والخصومات الخاصة</p>
                  </div>
                  <Switch
                    checked={settings.promotionAlerts}
                    onCheckedChange={(checked) => handleSettingChange('promotionAlerts', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>رسائل تسويقية</Label>
                    <p className="text-sm text-gray-600">استقبال رسائل تسويقية ونشرات إعلانية</p>
                  </div>
                  <Switch
                    checked={settings.marketingEmails}
                    onCheckedChange={(checked) => handleSettingChange('marketingEmails', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-xl text-gray-800">إعدادات الأمان</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>المصادقة الثنائية</Label>
                    <p className="text-sm text-gray-600">طبقة حماية إضافية لحسابك</p>
                  </div>
                  <Switch
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => handleSettingChange('twoFactorAuth', checked)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full md:w-auto">
                    تغيير كلمة المرور
                  </Button>
                  <Button variant="outline" className="w-full md:w-auto ml-0 md:ml-2">
                    تحديث رقم الهاتف
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-xl text-gray-800">إعدادات الدفع</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>حفظ طرق الدفع</Label>
                    <p className="text-sm text-gray-600">حفظ بيانات البطاقات للاستخدام السريع</p>
                  </div>
                  <Switch
                    checked={settings.savePaymentMethods}
                    onCheckedChange={(checked) => handleSettingChange('savePaymentMethods', checked)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full md:w-auto">
                    إدارة البطاقات المحفوظة
                  </Button>
                  <Button variant="outline" className="w-full md:w-auto ml-0 md:ml-2">
                    عرض سجل المدفوعات
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">المنطقة الخطرة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">إلغاء تفعيل الحساب</h4>
                  <p className="text-sm text-red-600 mb-3">
                    إلغاء تفعيل حسابك بشكل مؤقت. يمكنك إعادة تفعيله لاحقاً.
                  </p>
                  <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                    إلغاء تفعيل الحساب
                  </Button>
                </div>
                
                <div className="p-4 bg-red-100 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">حذف الحساب</h4>
                  <p className="text-sm text-red-600 mb-3">
                    حذف حسابك نهائياً. هذا الإجراء لا يمكن التراجع عنه.
                  </p>
                  <Button variant="destructive">
                    حذف الحساب نهائياً
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default CustomerSettings;
