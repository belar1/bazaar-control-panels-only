
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Truck, Package, Settings, Eye, Edit } from "lucide-react";

const AdminDelivery = () => {
  const [deliveryCompanies, setDeliveryCompanies] = useState([
    { 
      id: 1, 
      name: "ZR Express", 
      nameAr: "البريد السريع", 
      logo: "/lovable-uploads/43c0e459-d152-4b75-9f13-34d5cc110d09.png",
      isActive: true, 
      type: "express",
      color: "bg-yellow-500"
    },
    { 
      id: 2, 
      name: "Yalidine", 
      nameAr: "يليدين", 
      logo: "/lovable-uploads/481269dd-3543-401a-9f69-db1fe01212c9.png",
      isActive: true, 
      type: "standard",
      color: "bg-red-500"
    },
    { 
      id: 3, 
      name: "Rocket Delivery", 
      nameAr: "روكيت للتوصيل", 
      logo: "/lovable-uploads/e13757ad-65f7-486e-b8c5-8dd6119dbe6d.png",
      isActive: false, 
      type: "express",
      color: "bg-red-600"
    },
    { 
      id: 4, 
      name: "MSM Go Oran", 
      nameAr: "MSM Go وهران", 
      logo: "/lovable-uploads/d0ae4268-a0a3-426e-b724-d79515db72e0.png",
      isActive: true, 
      type: "local",
      color: "bg-yellow-600"
    },
    { 
      id: 5, 
      name: "Noest", 
      nameAr: "نويست", 
      logo: "/lovable-uploads/a3ff168e-821f-4449-baaf-a041dcab5b1a.png",
      isActive: false, 
      type: "standard",
      color: "bg-blue-600"
    },
    { 
      id: 6, 
      name: "World Express", 
      nameAr: "وورلد إكسبريس", 
      logo: "/lovable-uploads/b1e66f51-d36d-4230-8c1b-689ccb88a44c.png",
      isActive: true, 
      type: "international",
      color: "bg-blue-500"
    }
  ]);

  const toggleCompany = (id: number) => {
    setDeliveryCompanies(prev => 
      prev.map(company => 
        company.id === id ? { ...company, isActive: !company.isActive } : company
      )
    );
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "express": return "bg-orange-100 text-orange-800";
      case "standard": return "bg-blue-100 text-blue-800";
      case "local": return "bg-green-100 text-green-800";
      case "international": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "express": return "سريع";
      case "standard": return "عادي";
      case "local": return "محلي";
      case "international": return "دولي";
      default: return "غير محدد";
    }
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
                    إدارة شركات التوصيل
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">تفعيل وإلغاء شركات التوصيل</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">الشركات النشطة</p>
                      <p className="text-2xl md:text-3xl font-bold">
                        {deliveryCompanies.filter(c => c.isActive).length}
                      </p>
                    </div>
                    <Truck className="h-6 w-6 md:h-8 md:w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">الشركات المعطلة</p>
                      <p className="text-2xl md:text-3xl font-bold">
                        {deliveryCompanies.filter(c => !c.isActive).length}
                      </p>
                    </div>
                    <Package className="h-6 w-6 md:h-8 md:w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">إجمالي الشركات</p>
                      <p className="text-2xl md:text-3xl font-bold">{deliveryCompanies.length}</p>
                    </div>
                    <Settings className="h-6 w-6 md:h-8 md:w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Delivery Companies Grid */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">شركات التوصيل المتاحة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {deliveryCompanies.map((company) => (
                    <div 
                      key={company.id} 
                      className={`p-6 rounded-xl transition-all duration-300 ${
                        company.isActive 
                          ? 'border-2 border-green-300 bg-gradient-to-br from-green-50 to-green-100 shadow-lg shadow-green-200/50' 
                          : 'border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-md'
                      }`}
                    >
                      {/* Header with Logo and Toggle */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center p-2">
                            <img 
                              src={company.logo} 
                              alt={company.name}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          </div>
                          <div className="text-right">
                            <h3 className="font-bold text-lg text-gray-800 mb-1">{company.nameAr}</h3>
                            <p className="text-sm text-gray-600">{company.name}</p>
                            <Badge className={`${getTypeColor(company.type)} mt-2`}>
                              {getTypeLabel(company.type)}
                            </Badge>
                          </div>
                        </div>
                        
                        {/* Enhanced Toggle Switch */}
                        <div className="flex flex-col items-center gap-2">
                          <Switch
                            checked={company.isActive}
                            onCheckedChange={() => toggleCompany(company.id)}
                            className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300 relative h-6 w-11"
                          />
                          <span className={`text-xs font-medium ${
                            company.isActive ? 'text-green-600' : 'text-gray-500'
                          }`}>
                            {company.isActive ? 'نشط' : 'معطل'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Status Indicator */}
                      <div className={`w-full h-2 rounded-full mb-4 ${
                        company.isActive 
                          ? 'bg-gradient-to-r from-green-400 to-green-600' 
                          : 'bg-gradient-to-r from-gray-300 to-gray-400'
                      }`} />
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 hover:bg-blue-50 border-blue-200 text-blue-600 hover:text-blue-700"
                        >
                          <Eye className="h-4 w-4 ml-2" />
                          عرض
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 hover:bg-green-50 border-green-200 text-green-600 hover:text-green-700"
                        >
                          <Edit className="h-4 w-4 ml-2" />
                          تعديل
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminDelivery;
