
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, ShoppingCart, TrendingUp, Settings, LogOut, BarChart3, Store, Plus, Truck, TrendingDown } from "lucide-react";

const sellerMenuItems = [
  { title: "نظرة عامة", url: "/seller", icon: BarChart3 },
  { title: "المنتجات", url: "/seller/products", icon: Package },
  { title: "الطلبات", url: "/seller/orders", icon: ShoppingCart },
  { title: "إضافة منتج", url: "/seller/add-product", icon: Plus },
  { title: "شركات التوصيل", url: "/seller/delivery", icon: Truck },
  { title: "التقارير", url: "/seller/reports", icon: TrendingUp },
  { title: "الإعدادات", url: "/seller/settings", icon: Settings },
];

export function SellerSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar side="right" className="border-r-0 border-l">
      <SidebarHeader className="border-b border-green-200 p-4">
        <div className="flex items-center gap-3 flex-row-reverse">
          <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center">
            <Store className="h-4 w-4 text-white" />
          </div>
          {open && (
            <div className="text-right">
              <h2 className="font-bold text-gray-800">لوحة البائع</h2>
              <Badge variant="outline" className="border-green-200 text-green-700 text-xs">
                متجر الأزياء الحديثة
              </Badge>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-right">إدارة المتجر</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sellerMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/seller"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors flex-row-reverse ${
                          isActive 
                            ? "bg-green-100 text-green-700 font-medium" 
                            : "text-gray-600 hover:bg-gray-100"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-green-200 p-4">
        <Button 
          variant="ghost" 
          className="w-full justify-end text-gray-600 hover:text-red-600 hover:bg-red-50 flex-row-reverse"
        >
          <LogOut className="h-4 w-4" />
          {open && <span className="ml-2">تسجيل خروج</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
