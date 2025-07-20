import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { SellerSidebar } from "@/components/SellerSidebar";
import { Truck, Key, Settings, RefreshCw, CheckCircle, XCircle, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SellerDelivery = () => {
  const { toast } = useToast();
  
  const [deliverySettings, setDeliverySettings] = useState([
    { 
      id: 1, 
      name: "E-com Delivery", 
      nameAr: "إي كوم للتوصيل", 
      logo: "/lovable-uploads/43c0e459-d152-4b75-9f13-34d5cc110d09.png",
      isEnabled: true,
      isConfigured: true,
      apiKey: "ecom_live_12345678901234567890",
      apiSecret: "ecom_secret_98765432109876543210",
      lastSync: "2024-01-22 14:30",
      status: "متصل",
      color: "bg-red-500"
    },
    { 
      id: 2, 
      name: "Abex Express", 
      nameAr: "أبكس إكسبريس", 
      logo: "/lovable-uploads/b1e66f51-d36d-4230-8c1b-689ccb88a44c.png",
      isEnabled: false,
      isConfigured: false,
      apiKey: "",
      apiSecret: "",
      lastSync: "غير متزامن",
      status: "معطل",
      color: "bg-purple-600"
    },
    { 
      id: 3, 
      name: "ZR Express", 
      nameAr: "زد آر إكسبريس", 
      logo: "/lovable-uploads/481269dd-3543-401a-9f69-db1fe01212c9.png",
      isEnabled: true,
      isConfigured: true,
      apiKey: "zr_live_09876543210987654321",
      apiSecret: "zr_secret_12345678901234567890",
      lastSync: "2024-01-22 12:15",
      status: "متصل",
      color: "bg-yellow-500"
    },
    { 
      id: 4, 
      name: "Yalidine / Guepex Express", 
      nameAr: "يليدين / جويبكس إكسبريس", 
      logo: "/lovable-uploads/e13757ad-65f7-486e-b8c5-8dd6119dbe6d.png",
      isEnabled: false,
      isConfigured: false,
      apiKey: "",
      apiSecret: "",
      lastSync: "غير متزامن",
      status: "معطل",
      color: "bg-red-600"
    },
    { 
      id: 5, 
      name: "NOEST Express", 
      nameAr: "نوست إكسبريس", 
      logo: "/lovable-uploads/d0ae4268-a0a3-426e-b8c5-8dd6119dbe6d.png",
      isEnabled: false,
      isConfigured: false,
      apiKey: "",
      apiSecret: "",
      lastSync: "غير متزامن",
      status: "معطل",
      color: "bg-blue-600"
    },
    { 
      id: 6, 
      name: "ISR Services", 
      nameAr: "آي إس آر سيرفيسز", 
      logo: "/lovable-uploads/a3ff168e-821f-4449-baaf-a041dcab5b1a.png",
      isEnabled: false,
      isConfigured: false,
      apiKey: "",
      apiSecret: "",
      lastSync: "غير متزامن",
      status: "معطل",
      color: "bg-orange-500"
    }
  ]);

  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [showApiForm, setShowApiForm] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [apiSecretInput, setApiSecretInput] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);
  const [showApiSecret, setShowApiSecret] = useState(false);

  const toggleCompany = (id: number) => {
    const company = deliverySettings.find(c => c.id === id);
    
    if (!company?.isConfigured && !company?.isEnabled) {
      setSelectedCompany(company);
      setApiKeyInput(company?.apiKey || "");
      setApiSecretInput(company?.apiSecret || "");
      setShowApiForm(true);
      return;
    }

    setDeliverySettings(prev => 
      prev.map(company => 
        company.id === id 
          ? { 
              ...company, 
              isEnabled: !company.isEnabled,
              status: !company.isEnabled ? "متصل" : "معطل"
            } 
          : company
      )
    );
  };

  const handleConfigureApi = (company: any) => {
    setSelectedCompany(company);
    setApiKeyInput(company.apiKey || "");
    setApiSecretInput(company.apiSecret || "");
    setShowApiForm(true);
  };

  const saveApiKey = () => {
    if (!apiKeyInput.trim() || !apiSecretInput.trim()) {
      toast({
        title: "خطأ",
        description: "يرجى إدخال مفتاح API والمفتاح السري",
        variant: "destructive"
      });
      return;
    }

    setDeliverySettings(prev =>
      prev.map(company =>
        company.id === selectedCompany?.id
          ? {
              ...company,
              apiKey: apiKeyInput,
              apiSecret: apiSecretInput,
              isConfigured: true,
              isEnabled: true,
              status: "متصل",
              lastSync: new Date().toLocaleString('ar-DZ')
            }
          : company
      )
    );

    toast({
      title: "تم الحفظ",
      description: `تم حفظ إعدادات ${selectedCompany?.nameAr} بنجاح`
    });

    setShowApiForm(false);
    setSelectedCompany(null);
    setApiKeyInput("");
    setApiSecretInput("");
    setShowApiKey(false);
    setShowApiSecret(false);
  };

  const syncOrders = (companyId: number) => {
    const company = deliverySettings.find(c => c.id === companyId);
    if (!company?.isConfigured) {
      toast({
        title: "خطأ",
        description: "يجب تكوين الشركة أولاً",
        variant: "destructive"
      });
      return;
    }

    setDeliverySettings(prev =>
      prev.map(c =>
        c.id === companyId
          ? { ...c, lastSync: new Date().toLocaleString('ar-DZ') }
          : c
      )
    );

    toast({
      title: "تم المزامنة",
      description: `تم مزامنة الطلبات مع ${company?.nameAr}`
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "متصل":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "غير مكون":
        return <XCircle className="h-4 w-4 text-orange-600" />;
      case "معطل":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <XCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "متصل": return "bg-green-100 text-green-800 border-green-200";
      case "غير مكون": return "bg-orange-100 text-orange-800 border-orange-200";
      case "معطل": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-green-50 via-teal-50 to-blue-50" dir="rtl">
        <SellerSidebar />
        
        <SidebarInset className="flex-1">
          <div className="bg-white/90 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 md:px-6 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-green-100" />
                <div>
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    شركات التوصيل
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">إدارة وتكوين شركات التوصيل</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-xl">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm font-medium">الشركات المفعلة</p>
                      <p className="text-2xl md:text-3xl font-bold">
                        {deliverySettings.filter(c => c.isEnabled).length}
                      </p>
                    </div>
                    <div className="bg-green-400/30 p-3 rounded-full">
                      <Truck className="h-6 w-6 md:h-8 md:w-8 text-green-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-xl">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-medium">الشركات المكونة</p>
                      <p className="text-2xl md:text-3xl font-bold">
                        {deliverySettings.filter(c => c.isConfigured).length}
                      </p>
                    </div>
                    <div className="bg-blue-400/30 p-3 rounded-full">
                      <Key className="h-6 w-6 md:h-8 md:w-8 text-blue-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-xl">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm font-medium">إجمالي الشركات</p>
                      <p className="text-2xl md:text-3xl font-bold">{deliverySettings.length}</p>
                    </div>
                    <div className="bg-purple-400/30 p-3 rounded-full">
                      <Settings className="h-6 w-6 md:h-8 md:w-8 text-purple-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Delivery Companies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {deliverySettings.map((company) => (
                <Card 
                  key={company.id} 
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 ${
                    company.isEnabled 
                      ? 'border-green-300 shadow-lg bg-gradient-to-br from-white to-green-50/50' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  } rounded-3xl`}
                >
                  <CardContent className="p-6">
                    {/* Company Logo - Large and Circular */}
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 border-4 border-gray-100">
                        <img 
                          src={company.logo} 
                          alt={company.name}
                          className="w-16 h-16 object-contain rounded-full"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement?.classList.add('bg-gray-100');
                            const icon = target.parentElement?.querySelector('.fallback-icon');
                            if (!icon) {
                              const fallbackIcon = document.createElement('div');
                              fallbackIcon.className = 'fallback-icon flex items-center justify-center w-full h-full';
                              fallbackIcon.innerHTML = '<svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/></svg>';
                              target.parentElement?.appendChild(fallbackIcon);
                            }
                          }}
                        />
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 mb-1 text-center leading-tight">
                        {company.nameAr}
                      </h3>
                      <p className="text-sm text-gray-500 text-center">{company.name}</p>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="flex justify-center mb-4">
                      <Badge className={`${getStatusColor(company.status)} border font-medium px-3 py-1 rounded-full`}>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(company.status)}
                          {company.status}
                        </div>
                      </Badge>
                    </div>
                    
                    {/* Toggle Switch - Enhanced */}
                    <div className="flex justify-center mb-6">
                      <div className="flex items-center gap-3 bg-gray-50 rounded-full p-2">
                        <span className="text-sm text-gray-600 font-medium">معطل</span>
                        <Switch
                          checked={company.isEnabled}
                          onCheckedChange={() => toggleCompany(company.id)}
                          className="data-[state=checked]:bg-green-500"
                        />
                        <span className="text-sm text-gray-600 font-medium">مفعل</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full hover:bg-blue-50 border-blue-200 text-blue-700 rounded-full font-medium"
                        onClick={() => handleConfigureApi(company)}
                      >
                        <Key className="h-4 w-4 ml-2" />
                        {company.isConfigured ? 'تعديل المفاتيح' : 'إعداد المفاتيح'}
                      </Button>
                      
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full hover:bg-green-50 border-green-200 text-green-700 rounded-full font-medium"
                        onClick={() => syncOrders(company.id)}
                        disabled={!company.isConfigured || !company.isEnabled}
                      >
                        <RefreshCw className="h-4 w-4 ml-2" />
                        مزامنة الطلبات
                      </Button>
                    </div>

                    {/* Company Details - Minimal */}
                    {company.isConfigured && (
                      <div className="mt-4 text-center">
                        <div className="text-xs text-gray-500 bg-gray-50 rounded-full px-3 py-1">
                          آخر مزامنة: {company.lastSync}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* API Configuration Modal */}
            {showApiForm && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <Card className="bg-white border-0 shadow-2xl w-full max-w-md rounded-3xl">
                  <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-3xl">
                    <CardTitle className="text-xl text-gray-800 text-center flex items-center justify-center gap-2">
                      <Key className="h-5 w-5 text-blue-600" />
                      إعداد مفاتيح API - {selectedCompany?.nameAr}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {/* API Key Field */}
                    <div className="space-y-2">
                      <Label htmlFor="apiKey" className="text-right block font-medium text-gray-700">
                        مفتاح API *
                      </Label>
                      <div className="relative">
                        <Input
                          id="apiKey"
                          type={showApiKey ? "text" : "password"}
                          value={apiKeyInput}
                          onChange={(e) => setApiKeyInput(e.target.value)}
                          placeholder="أدخل مفتاح API الخاص بك"
                          className="text-right pr-10 border-2 focus:border-blue-400 rounded-full"
                        />
                        <button
                          type="button"
                          onClick={() => setShowApiKey(!showApiKey)}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    {/* API Secret Field */}
                    <div className="space-y-2">
                      <Label htmlFor="apiSecret" className="text-right block font-medium text-gray-700">
                        المفتاح السري *
                      </Label>
                      <div className="relative">
                        <Input
                          id="apiSecret"
                          type={showApiSecret ? "text" : "password"}
                          value={apiSecretInput}
                          onChange={(e) => setApiSecretInput(e.target.value)}
                          placeholder="أدخل المفتاح السري"
                          className="text-right pr-10 border-2 focus:border-blue-400 rounded-full"
                        />
                        <button
                          type="button"
                          onClick={() => setShowApiSecret(!showApiSecret)}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showApiSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500 text-center bg-blue-50 p-3 rounded-2xl">
                      سيتم حفظ هذه المفاتيح بشكل آمن ومشفر
                    </div>
                    
                    <div className="flex gap-3 justify-center pt-4">
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setShowApiForm(false);
                          setSelectedCompany(null);
                          setApiKeyInput("");
                          setApiSecretInput("");
                          setShowApiKey(false);
                          setShowApiSecret(false);
                        }}
                        className="flex-1 rounded-full"
                      >
                        إلغاء
                      </Button>
                      <Button 
                        onClick={saveApiKey}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-full"
                      >
                        حفظ الإعدادات
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default SellerDelivery;
