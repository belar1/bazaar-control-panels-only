
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { SellerSidebar } from "@/components/SellerSidebar";
import { ShoppingCart, Package, Clock, CheckCircle, XCircle, Eye } from "lucide-react";

const SellerOrders = () => {
  const orders = [
    { 
      id: "ORD-001", 
      customer: "أحمد محمد", 
      items: 3, 
      total: 850, 
      status: "قيد التحضير", 
      date: "2024-01-15",
      products: ["قميص قطني أزرق", "بنطال جينز", "حذاء رياضي"]
    },
    { 
      id: "ORD-002", 
      customer: "فاطمة علي", 
      items: 1, 
      total: 450, 
      status: "تم الشحن", 
      date: "2024-01-14",
      products: ["حقيبة يد جلدية"]
    },
    { 
      id: "ORD-003", 
      customer: "محمد حسن", 
      items: 2, 
      total: 320, 
      status: "مكتمل", 
      date: "2024-01-13",
      products: ["قميص قطني أبيض", "قبعة رياضية"]
    },
    { 
      id: "ORD-004", 
      customer: "نور الدين", 
      items: 1, 
      total: 200, 
      status: "ملغي", 
      date: "2024-01-12",
      products: ["بنطال رياضي"]
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "قيد التحضير": return "bg-yellow-100 text-yellow-800";
      case "تم الشحن": return "bg-blue-100 text-blue-800";
      case "مكتمل": return "bg-green-100 text-green-800";
      case "ملغي": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "قيد التحضير": return <Clock className="h-4 w-4" />;
      case "تم الشحن": return <Package className="h-4 w-4" />;
      case "مكتمل": return <CheckCircle className="h-4 w-4" />;
      case "ملغي": return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
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
                    إدارة الطلبات
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">متابعة وإدارة طلبات العملاء</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-100 text-sm">قيد التحضير</p>
                      <p className="text-2xl md:text-3xl font-bold">8</p>
                    </div>
                    <Clock className="h-6 w-6 md:h-8 md:w-8 text-yellow-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">تم الشحن</p>
                      <p className="text-2xl md:text-3xl font-bold">15</p>
                    </div>
                    <Package className="h-6 w-6 md:h-8 md:w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">مكتملة</p>
                      <p className="text-2xl md:text-3xl font-bold">98</p>
                    </div>
                    <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">إجمالي المبيعات</p>
                      <p className="text-lg md:text-2xl font-bold">25,000 دج</p>
                    </div>
                    <ShoppingCart className="h-6 w-6 md:h-8 md:w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-gray-800">الطلبات الحديثة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors space-y-3 md:space-y-0">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="font-semibold text-gray-800">{order.id}</h3>
                          <Badge className={getStatusColor(order.status)}>
                            <div className="flex items-center gap-1">
                              {getStatusIcon(order.status)}
                              {order.status}
                            </div>
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">العميل: {order.customer}</p>
                        <p className="text-xs text-gray-500 mb-2">التاريخ: {order.date}</p>
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
                          <span className="text-lg font-bold text-green-600">{order.total} دج</span>
                          <span className="text-gray-500">عدد المنتجات: {order.items}</span>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs text-gray-500">المنتجات: {order.products.join(", ")}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="hover:bg-blue-50">
                          <Eye className="h-4 w-4" />
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

export default SellerOrders;
