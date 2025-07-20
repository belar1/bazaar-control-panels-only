
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { SellerSidebar } from "@/components/SellerSidebar";
import { Settings, Store, Bell, Shield, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SellerSettings = () => {
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    storeName: "متجر الأزياء الحديثة",
    storeDescription: "متجر متخصص في الأزياء العصرية والملابس الحديثة",
    storePhone: "0555123456",
    storeEmail: "info@modernfashion.dz",
    storeAddress: "الجزائر العاصمة، الجزائر",
    autoAcceptOrders: false,
    emailNotifications: true,
    smsNotifications: true,
    lowStockAlert: true,
    lowStockThreshold: 5,
    businessHours: "08:00 - 18:00",
    deliveryFee: 300,
    freeDeliveryThreshold: 5000
  });

  const handleSave = () => {
    toast({
      title: "تم الحفظ",
      description: "تم حفظ إعدادات المتجر بنجاح"
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
      <div className="min-h-screen flex w-full bg-gradient-to-br from-green-50 via-teal-50 to-blue-50" dir="rtl">
        <SellerSidebar />
        
        <SidebarInset className="flex-1">
          <div className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 md:px-6 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-green-100" />
                <div>
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    إعدادات المتجر
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">إدارة إعدادات متجرك</p>
                </div>
              </div>
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                حفظ الإعدادات
              </Button>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            {/* Store Information */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Store className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-xl text-gray-800">معلومات المتجر</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="storeName">اسم المتجر</Label>
                    <Input
                      id="storeName"
                      value={settings.storeName}
                      onChange={(e) => handleSettingChange('storeName', e.target.value)}
                      className="text-right mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="storePhone">رقم الهاتف</Label>
                    <Input
                      id="storePhone"
                      value={settings.storePhone}
                      onChange={(e) => handleSettingChange('storePhone', e.target.value)}
                      className="text-right mt-2"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="storeEmail">البريد الإلكتروني</Label>
                    <Input
                      id="storeEmail"
                      type="email"
                      value={settings.storeEmail}
                      onChange={(e) => handleSettingChange('storeEmail', e.target.value)}
                      className="text-right mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessHours">ساعات العمل</Label>
                    <Input
                      id="businessHours"
                      value={settings.businessHours}
                      onChange={(e) => handleSettingChange('businessHours', e.target.value)}
                      className="text-right mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="storeDescription">وصف المتجر</Label>
                  <Textarea
                    id="storeDescription"
                    value={settings.storeDescription}
                    onChange={(e) => handleSettingChange('storeDescription', e.target.value)}
                    className="text-right mt-2"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="storeAddress">عنوان المتجر</Label>
                  <Textarea
                    id="storeAddress"
                    value={settings.storeAddress}
                    onChange={(e) => handleSettingChange('storeAddress', e.target.value)}
                    className="text-right mt-2"
                    rows={2}
                  />
                </div>

                {/* Store Logo Upload */}
                <div>
                  <Label>شعار المتجر</Label>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Store className="h-8 w-8 text-gray-400" />
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      رفع شعار
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">الحد الأقصى: 2MB، الصيغ المدعومة: JPG, PNG</p>
                </div>
              </CardContent>
            </Card>

            {/* Order Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl text-gray-800">إعدادات الطلبات</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>قبول الطلبات تلقائياً</Label>
                    <p className="text-sm text-gray-600">قبول الطلبات الجديدة دون مراجعة يدوية</p>
                  </div>
                  <Switch
                    checked={settings.autoAcceptOrders}
                    onCheckedChange={(checked) => handleSettingChange('autoAcceptOrders', checked)}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="deliveryFee">رسوم التوصيل (دج)</Label>
                    <Input
                      id="deliveryFee"
                      type="number"
                      value={settings.deliveryFee}
                      onChange={(e) => handleSettingChange('deliveryFee', Number(e.target.value))}
                      className="text-right mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="freeDeliveryThreshold">الحد الأدنى للتوصيل المجاني (دج)</Label>
                    <Input
                      id="freeDeliveryThreshold"
                      type="number"
                      value={settings.freeDeliveryThreshold}
                      onChange={(e) => handleSettingChange('freeDeliveryThreshold', Number(e.target.value))}
                      className="text-right mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inventory Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-xl text-gray-800">إعدادات المخزون</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>تنبيه انخفاض المخزون</Label>
                    <p className="text-sm text-gray-600">إشعار عند انخفاض كمية المنتج</p>
                  </div>
                  <Switch
                    checked={settings.lowStockAlert}
                    onCheckedChange={(checked) => handleSettingChange('lowStockAlert', checked)}
                  />
                </div>
                
                <div className="w-full md:w-1/3">
                  <Label htmlFor="lowStockThreshold">حد التنبيه (قطعة)</Label>
                  <Input
                    id="lowStockThreshold"
                    type="number"
                    value={settings.lowStockThreshold}
                    onChange={(e) => handleSettingChange('lowStockThreshold', Number(e.target.value))}
                    className="text-right mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Bell className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-xl text-gray-800">إعدادات الإشعارات</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>إشعارات البريد الإلكتروني</Label>
                    <p className="text-sm text-gray-600">استقبال إشعارات عبر البريد الإلكتروني</p>
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
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default SellerSettings;
