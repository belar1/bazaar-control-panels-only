
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Settings, Globe, Shield, Bell, Database, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminSettings = () => {
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    siteName: "منصة التجارة الإلكترونية",
    siteDescription: "منصة شاملة للتجارة الإلكترونية في الجزائر",
    allowSellerRegistration: true,
    requireSellerApproval: true,
    defaultCommission: 5,
    emailNotifications: true,
    smsNotifications: false,
    maintenanceMode: false,
    currency: "دج",
    language: "ar",
    timezone: "Africa/Algiers"
  });

  const handleSave = () => {
    toast({
      title: "تم الحفظ",
      description: "تم حفظ الإعدادات بنجاح"
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
      <div className="min-h-screen flex w-full bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50" dir="rtl">
        <AdminSidebar />
        
        <SidebarInset className="flex-1">
          <div className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 md:px-6 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-purple-100" />
                <div>
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    إعدادات النظام
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">إدارة إعدادات المنصة العامة</p>
                </div>
              </div>
              <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
                حفظ الإعدادات
              </Button>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            {/* General Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-xl text-gray-800">الإعدادات العامة</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="siteName">اسم الموقع</Label>
                    <Input
                      id="siteName"
                      value={settings.siteName}
                      onChange={(e) => handleSettingChange('siteName', e.target.value)}
                      className="text-right mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="currency">العملة الافتراضية</Label>
                    <Input
                      id="currency"
                      value={settings.currency}
                      onChange={(e) => handleSettingChange('currency', e.target.value)}
                      className="text-right mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="siteDescription">وصف الموقع</Label>
                  <Textarea
                    id="siteDescription"
                    value={settings.siteDescription}
                    onChange={(e) => handleSettingChange('siteDescription', e.target.value)}
                    className="text-right mt-2"
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="language">اللغة الافتراضية</Label>
                    <Input
                      id="language"
                      value={settings.language}
                      onChange={(e) => handleSettingChange('language', e.target.value)}
                      className="text-right mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="timezone">المنطقة الزمنية</Label>
                    <Input
                      id="timezone"
                      value={settings.timezone}
                      onChange={(e) => handleSettingChange('timezone', e.target.value)}
                      className="text-right mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl text-gray-800">إعدادات العمل</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>السماح بتسجيل البائعين الجدد</Label>
                    <p className="text-sm text-gray-600">يسمح للبائعين الجدد بالتسجيل في المنصة</p>
                  </div>
                  <Switch
                    checked={settings.allowSellerRegistration}
                    onCheckedChange={(checked) => handleSettingChange('allowSellerRegistration', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>يتطلب موافقة المسؤول للبائعين</Label>
                    <p className="text-sm text-gray-600">يجب موافقة المسؤول قبل تفعيل حساب البائع</p>
                  </div>
                  <Switch
                    checked={settings.requireSellerApproval}
                    onCheckedChange={(checked) => handleSettingChange('requireSellerApproval', checked)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="defaultCommission">العمولة الافتراضية (%)</Label>
                  <Input
                    id="defaultCommission"
                    type="number"
                    value={settings.defaultCommission}
                    onChange={(e) => handleSettingChange('defaultCommission', Number(e.target.value))}
                    className="text-right mt-2 w-full md:w-1/3"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>وضع الصيانة</Label>
                    <p className="text-sm text-gray-600">إيقاف الموقع مؤقتاً للصيانة</p>
                  </div>
                  <Switch
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => handleSettingChange('maintenanceMode', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Bell className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-xl text-gray-800">إعدادات الإشعارات</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>إشعارات البريد الإلكتروني</Label>
                    <p className="text-sm text-gray-600">إرسال إشعارات عبر البريد الإلكتروني</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>إشعارات الرسائل النصية</Label>
                    <p className="text-sm text-gray-600">إرسال إشعارات عبر الرسائل النصية</p>
                  </div>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => handleSettingChange('smsNotifications', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* System Info */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-xl text-gray-800">معلومات النظام</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-700">إصدار النظام</p>
                    <p className="text-gray-600">v2.1.0</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-700">آخر تحديث</p>
                    <p className="text-gray-600">2024-01-22</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-700">حالة قاعدة البيانات</p>
                    <p className="text-green-600">متصلة</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminSettings;
