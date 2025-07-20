
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, ShoppingCart, TrendingUp, DollarSign, Eye, Edit, Trash2 } from "lucide-react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { SellerSidebar } from "@/components/SellerSidebar";
import { Button } from "@/components/ui/button";

const SellerDashboard = () => {
  // Mock data
  const stats = {
    totalProducts: 45,
    totalOrders: 128,
    totalRevenue: 25000,
    pendingOrders: 8
  };

  const products = [
    { id: 1, name: "قميص قطني أزرق", price: 120, stock: 15, sales: 45, status: "نشط", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop" },
    { id: 2, name: "بنطال جينز كلاسيكي", price: 200, stock: 8, sales: 32, status: "نشط", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=100&h=100&fit=crop" },
    { id: 3, name: "حذاء رياضي أبيض", price: 350, stock: 0, sales: 28, status: "نفد المخزون", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "نشط": return "bg-green-100 text-green-800";
      case "نفد المخزون": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-green-50 via-teal-50 to-blue-50" dir="rtl">
        <SellerSidebar />
        
        <SidebarInset className="flex-1">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-green-100" />
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    لوحة تحكم البائع
                  </h1>
                  <p className="text-gray-600">إدارة متجرك ومنتجاتك</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">إجمالي المنتجات</p>
                      <p className="text-3xl font-bold">{stats.totalProducts}</p>
                    </div>
                    <Package className="h-8 w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">إجمالي الطلبات</p>
                      <p className="text-3xl font-bold">{stats.totalOrders}</p>
                    </div>
                    <ShoppingCart className="h-8 w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">إجمالي المبيعات</p>
                      <p className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()} دج</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100">طلبات قيد الانتظار</p>
                      <p className="text-3xl font-bold">{stats.pendingOrders}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Products */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">المنتجات الحديثة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800">{product.name}</h3>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-lg font-bold text-green-600">{product.price} دج</span>
                            <span className="text-sm text-gray-500">المخزون: {product.stock}</span>
                            <span className="text-sm text-gray-500">المبيعات: {product.sales}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={getStatusColor(product.status)}>
                          {product.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="hover:bg-blue-50">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="hover:bg-green-50">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="hover:bg-red-50">
                            <Trash2 className="h-4 w-4" />
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

export default SellerDashboard;
