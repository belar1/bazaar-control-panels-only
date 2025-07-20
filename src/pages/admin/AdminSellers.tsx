
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Store, Eye, UserCheck, UserX, Edit, Plus } from "lucide-react";

const AdminSellers = () => {
  const sellers = [
    { id: 1, name: "متجر الأزياء الحديثة", email: "fashion@store.com", status: "نشط", products: 45, sales: 15000, joined: "2024-01-15" },
    { id: 2, name: "متجر الإلكترونيات", email: "electronics@store.com", status: "نشط", products: 120, sales: 45000, joined: "2024-02-20" },
    { id: 3, name: "متجر المنزل والديكور", email: "home@store.com", status: "معلق", products: 78, sales: 8500, joined: "2024-03-10" },
    { id: 4, name: "متجر الرياضة", email: "sports@store.com", status: "قيد المراجعة", products: 32, sales: 12000, joined: "2024-03-25" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "نشط": return "bg-green-100 text-green-800";
      case "معلق": return "bg-yellow-100 text-yellow-800";
      case "قيد المراجعة": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
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
                    إدارة البائعين
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">إدارة حسابات البائعين والموافقة عليها</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Plus className="h-4 w-4 ml-2" />
                إضافة بائع
              </Button>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">البائعين النشطين</p>
                      <p className="text-2xl md:text-3xl font-bold">25</p>
                    </div>
                    <Store className="h-6 w-6 md:h-8 md:w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-100 text-sm">قيد المراجعة</p>
                      <p className="text-2xl md:text-3xl font-bold">8</p>
                    </div>
                    <UserCheck className="h-6 w-6 md:h-8 md:w-8 text-yellow-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-100 text-sm">معلقة</p>
                      <p className="text-2xl md:text-3xl font-bold">3</p>
                    </div>
                    <UserX className="h-6 w-6 md:h-8 md:w-8 text-red-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">إجمالي المبيعات</p>
                      <p className="text-lg md:text-2xl font-bold">125,000 ر.س</p>
                    </div>
                    <Store className="h-6 w-6 md:h-8 md:w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-gray-800">قائمة البائعين</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sellers.map((seller) => (
                    <div key={seller.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors space-y-3 md:space-y-0">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-sm md:text-base">{seller.name}</h3>
                        <p className="text-xs md:text-sm text-gray-600">{seller.email}</p>
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2 text-xs md:text-sm">
                          <span className="text-gray-500">{seller.products} منتج</span>
                          <span className="text-gray-500">{seller.sales.toLocaleString()} ر.س</span>
                          <span className="text-gray-500">انضم في {seller.joined}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={getStatusColor(seller.status)}>
                          {seller.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="hover:bg-blue-50">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="hover:bg-green-50">
                            <UserCheck className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="hover:bg-gray-50">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="hover:bg-red-50">
                            <UserX className="h-4 w-4" />
                          </Button>
                        </div>
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

export default AdminSellers;
