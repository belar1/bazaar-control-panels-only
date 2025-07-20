
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Package, Eye, Star } from "lucide-react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { CustomerSidebar } from "@/components/CustomerSidebar";
import { Button } from "@/components/ui/button";

const CustomerDashboard = () => {
  // Mock data
  const customerInfo = {
    name: "أحمد محمد علي",
    totalOrders: 12,
    totalSpent: 3850
  };

  const recentOrders = [
    { 
      id: "ORD-001", 
      seller: "متجر الأزياء الحديثة", 
      items: 2, 
      total: 450, 
      status: "تم التسليم", 
      date: "2024-01-20",
      products: ["قميص قطني أزرق", "بنطال جينز"]
    },
    { 
      id: "ORD-002", 
      seller: "متجر الإلكترونيات", 
      items: 1, 
      total: 1200, 
      status: "قيد الشحن", 
      date: "2024-01-21",
      products: ["سماعات لاسلكية"]
    },
    { 
      id: "ORD-003", 
      seller: "متجر المنزل والديكور", 
      items: 3, 
      total: 750, 
      status: "قيد المعالجة", 
      date: "2024-01-22",
      products: ["مصباح طاولة", "وسادة ديكور", "إطار صورة"]
    }
  ];

  const favoriteProducts = [
    { 
      id: 1, 
      name: "ساعة ذكية", 
      price: 899, 
      seller: "متجر التكنولوجيا", 
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop",
      rating: 4.5
    },
    { 
      id: 2, 
      name: "حقيبة جلدية", 
      price: 320, 
      seller: "متجر الإكسسوارات", 
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop",
      rating: 4.8
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "تم التسليم": return "bg-green-100 text-green-800";
      case "قيد الشحن": return "bg-blue-100 text-blue-800";
      case "قيد المعالجة": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-orange-50 via-red-50 to-pink-50" dir="rtl">
        <CustomerSidebar />
        
        <SidebarInset className="flex-1">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 md:px-6 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-orange-100" />
                <div>
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    لوحة تحكم العميل
                  </h1>
                  <p className="text-sm md:text-base text-gray-600">مرحباً {customerInfo.name}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">إجمالي الطلبات</p>
                      <p className="text-2xl md:text-3xl font-bold">{customerInfo.totalOrders}</p>
                    </div>
                    <ShoppingCart className="h-6 w-6 md:h-8 md:w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-100 text-sm">إجمالي المشتريات</p>
                      <p className="text-xl md:text-2xl font-bold">{customerInfo.totalSpent.toLocaleString()} دج</p>
                    </div>
                    <Package className="h-6 w-6 md:h-8 md:w-8 text-red-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white border-0 shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-pink-100 text-sm">المنتجات المفضلة</p>
                      <p className="text-2xl md:text-3xl font-bold">{favoriteProducts.length}</p>
                    </div>
                    <Heart className="h-6 w-6 md:h-8 md:w-8 text-pink-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">آخر الطلبات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <div>
                        <h3 className="font-semibold text-gray-800">طلب #{order.id}</h3>
                        <p className="text-sm text-gray-600">من: {order.seller}</p>
                        <p className="text-sm text-gray-500">{order.products.join(", ")}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-lg font-bold text-orange-600">{order.total} دج</span>
                          <span className="text-sm text-gray-500">{order.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                        <Button size="sm" variant="outline" className="hover:bg-orange-50">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Favorite Products */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">منتجاتي المفضلة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {favoriteProducts.map((product) => (
                    <div key={product.id} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.seller}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {renderStars(product.rating)}
                          <span className="text-sm text-gray-500 mr-1">({product.rating})</span>
                        </div>
                        <p className="text-lg font-bold text-orange-600 mt-2">{product.price} دج</p>
                      </div>
                      <Button size="sm" variant="outline" className="hover:bg-red-50">
                        <Heart className="h-4 w-4 fill-current text-red-500" />
                      </Button>
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

export default CustomerDashboard;
