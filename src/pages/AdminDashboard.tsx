
import { Card, CardContent } from "@/components/ui/card";
import { Users, Store, Package, ShoppingCart, TrendingUp } from "lucide-react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";

const AdminDashboard = () => {
  const stats = {
    totalSellers: 25,
    totalCustomers: 150,
    totalProducts: 340,
    totalOrders: 89,
    totalRevenue: 125000
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
                    لوحة تحكم المسؤول
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">إدارة شاملة للمتجر</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">إجمالي البائعين</p>
                      <p className="text-2xl md:text-3xl font-bold">{stats.totalSellers}</p>
                    </div>
                    <Store className="h-6 w-6 md:h-8 md:w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">إجمالي العملاء</p>
                      <p className="text-2xl md:text-3xl font-bold">{stats.totalCustomers}</p>
                    </div>
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">إجمالي المنتجات</p>
                      <p className="text-2xl md:text-3xl font-bold">{stats.totalProducts}</p>
                    </div>
                    <Package className="h-6 w-6 md:h-8 md:w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">إجمالي الطلبات</p>
                      <p className="text-2xl md:text-3xl font-bold">{stats.totalOrders}</p>
                    </div>
                    <ShoppingCart className="h-6 w-6 md:h-8 md:w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-teal-100 text-sm">إجمالي الإيرادات</p>
                      <p className="text-lg md:text-2xl font-bold">{stats.totalRevenue.toLocaleString()} دج</p>
                    </div>
                    <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-teal-200" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
