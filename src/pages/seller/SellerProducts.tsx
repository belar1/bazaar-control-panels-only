
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { SellerSidebar } from "@/components/SellerSidebar";
import { Package, Eye, Edit, Trash2, Plus } from "lucide-react";

const SellerProducts = () => {
  const products = [
    { id: 1, name: "قميص قطني أزرق", price: 120, stock: 15, sales: 45, status: "نشط", category: "ملابس", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop" },
    { id: 2, name: "بنطال جينز كلاسيكي", price: 200, stock: 8, sales: 32, status: "نشط", category: "ملابس", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=100&h=100&fit=crop" },
    { id: 3, name: "حذاء رياضي أبيض", price: 350, stock: 0, sales: 28, status: "نفد المخزون", category: "أحذية", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop" },
    { id: 4, name: "حقيبة يد جلدية", price: 450, stock: 12, sales: 18, status: "نشط", category: "إكسسوارات", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop" },
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
          <div className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 md:px-6 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-green-100" />
                <div>
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    إدارة المنتجات
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">إدارة منتجاتك ومخزونك</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
                <Plus className="h-4 w-4 ml-2" />
                إضافة منتج
              </Button>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">إجمالي المنتجات</p>
                      <p className="text-2xl md:text-3xl font-bold">45</p>
                    </div>
                    <Package className="h-6 w-6 md:h-8 md:w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">المنتجات النشطة</p>
                      <p className="text-2xl md:text-3xl font-bold">38</p>
                    </div>
                    <Package className="h-6 w-6 md:h-8 md:w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-100 text-sm">نفد المخزون</p>
                      <p className="text-2xl md:text-3xl font-bold">7</p>
                    </div>
                    <Package className="h-6 w-6 md:h-8 md:w-8 text-red-200" />
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
                    <Package className="h-6 w-6 md:h-8 md:w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-gray-800">قائمة المنتجات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors space-y-3 md:space-y-0">
                      <div className="flex items-center gap-4">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 text-sm md:text-base">{product.name}</h3>
                          <p className="text-xs md:text-sm text-gray-600">{product.category}</p>
                          <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-1 text-xs md:text-sm">
                            <span className="text-lg font-bold text-green-600">{product.price} دج</span>
                            <span className="text-gray-500">المخزون: {product.stock}</span>
                            <span className="text-gray-500">المبيعات: {product.sales}</span>
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

export default SellerProducts;
