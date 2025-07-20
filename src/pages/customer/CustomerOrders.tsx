
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { CustomerSidebar } from "@/components/CustomerSidebar";
import { ShoppingCart, Eye, Package, Truck, CheckCircle } from "lucide-react";

const CustomerOrders = () => {
  const orders = [
    { id: "ORD-001", date: "2024-03-15", total: 450, status: "تم التسليم", items: 3, tracking: "TR123456789" },
    { id: "ORD-002", date: "2024-03-20", total: 280, status: "قيد الشحن", items: 2, tracking: "TR987654321" },
    { id: "ORD-003", date: "2024-03-22", total: 125, status: "قيد التحضير", items: 1, tracking: "-" },
    { id: "ORD-004", date: "2024-03-25", total: 680, status: "مؤكد", items: 4, tracking: "-" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "تم التسليم": return "bg-green-100 text-green-800";
      case "قيد الشحن": return "bg-blue-100 text-blue-800";
      case "قيد التحضير": return "bg-yellow-100 text-yellow-800";
      case "مؤكد": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "تم التسليم": return CheckCircle;
      case "قيد الشحن": return Truck;
      case "قيد التحضير": return Package;
      case "مؤكد": return ShoppingCart;
      default: return ShoppingCart;
    }
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
                    طلباتي
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">تتبع طلباتك وحالتها</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">إجمالي الطلبات</p>
                      <p className="text-2xl md:text-3xl font-bold">24</p>
                    </div>
                    <ShoppingCart className="h-6 w-6 md:h-8 md:w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">تم التسليم</p>
                      <p className="text-2xl md:text-3xl font-bold">18</p>
                    </div>
                    <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-100 text-sm">قيد التحضير</p>
                      <p className="text-2xl md:text-3xl font-bold">4</p>
                    </div>
                    <Package className="h-6 w-6 md:h-8 md:w-8 text-yellow-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">إجمالي الإنفاق</p>
                      <p className="text-lg md:text-2xl font-bold">8,500 ر.س</p>
                    </div>
                    <ShoppingCart className="h-6 w-6 md:h-8 md:w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-gray-800">آخر الطلبات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => {
                    const StatusIcon = getStatusIcon(order.status);
                    return (
                      <div key={order.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors space-y-3 md:space-y-0">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <StatusIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800 text-sm md:text-base">طلب رقم {order.id}</h3>
                            <p className="text-xs md:text-sm text-gray-600">تاريخ الطلب: {order.date}</p>
                            <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-1 text-xs md:text-sm">
                              <span className="text-lg font-bold text-green-600">{order.total} ر.س</span>
                              <span className="text-gray-500">{order.items} عنصر</span>
                              {order.tracking !== "-" && (
                                <span className="text-gray-500">رقم التتبع: {order.tracking}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="hover:bg-blue-50">
                              <Eye className="h-4 w-4" />
                              التفاصيل
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default CustomerOrders;
