
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Users, Eye, Edit, Ban, MessageSquare } from "lucide-react";

const AdminCustomers = () => {
  const customers = [
    { id: 1, name: "أحمد محمد", email: "ahmed@email.com", status: "نشط", orders: 15, totalSpent: 5400, joined: "2024-01-10" },
    { id: 2, name: "فاطمة علي", email: "fatima@email.com", status: "نشط", orders: 8, totalSpent: 2800, joined: "2024-02-15" },
    { id: 3, name: "محمد سعد", email: "mohammed@email.com", status: "محظور", orders: 3, totalSpent: 890, joined: "2024-03-20" },
    { id: 4, name: "نورا أحمد", email: "nora@email.com", status: "نشط", orders: 22, totalSpent: 8900, joined: "2023-12-05" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "نشط": return "bg-green-100 text-green-800";
      case "محظور": return "bg-red-100 text-red-800";
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
                    إدارة العملاء
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">إدارة حسابات العملاء وأنشطتهم</p>
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
                      <p className="text-blue-100 text-sm">إجمالي العملاء</p>
                      <p className="text-2xl md:text-3xl font-bold">1,250</p>
                    </div>
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">العملاء النشطين</p>
                      <p className="text-2xl md:text-3xl font-bold">1,180</p>
                    </div>
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">عملاء جدد هذا الشهر</p>
                      <p className="text-2xl md:text-3xl font-bold">85</p>
                    </div>
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">متوسط الإنفاق</p>
                      <p className="text-lg md:text-2xl font-bold">4,200 ر.س</p>
                    </div>
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-gray-800">قائمة العملاء</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customers.map((customer) => (
                    <div key={customer.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors space-y-3 md:space-y-0">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-sm md:text-base">{customer.name}</h3>
                        <p className="text-xs md:text-sm text-gray-600">{customer.email}</p>
                        <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2 text-xs md:text-sm">
                          <span className="text-gray-500">{customer.orders} طلب</span>
                          <span className="text-gray-500">{customer.totalSpent.toLocaleString()} ر.س</span>
                          <span className="text-gray-500">انضم في {customer.joined}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={getStatusColor(customer.status)}>
                          {customer.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="hover:bg-blue-50">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="hover:bg-green-50">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="hover:bg-gray-50">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="hover:bg-red-50">
                            <Ban className="h-4 w-4" />
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

export default AdminCustomers;
