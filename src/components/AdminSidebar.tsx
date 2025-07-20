
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
import { Users, Store, Package, ShoppingCart, TrendingUp, Settings, LogOut, BarChart3, UserCheck, Truck } from "lucide-react";

const adminMenuItems = [
  { title: "نظرة عامة", url: "/admin", icon: BarChart3 },
  { title: "البائعين", url: "/admin/sellers", icon: Store },
  { title: "العملاء", url: "/admin/customers", icon: Users },
  { title: "المنتجات", url: "/admin/products", icon: Package },
  { title: "الطلبات", url: "/admin/orders", icon: ShoppingCart },
  { title: "شركات التوصيل", url: "/admin/delivery", icon: Truck },
  { title: "التقارير", url: "/admin/reports", icon: TrendingUp },
  { title: "الإعدادات", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar side="right" className="border-r-0 border-l">
      <SidebarHeader className="border-b border-purple-200 p-4">
        <div className="flex items-center gap-3 flex-row-reverse">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <UserCheck className="h-4 w-4 text-white" />
          </div>
          {open && (
            <div className="text-right">
              <h2 className="font-bold text-gray-800">لوحة المسؤول</h2>
              <Badge variant="outline" className="border-purple-200 text-purple-700 text-xs">
                مسؤول النظام
              </Badge>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-right">القائمة الرئيسية</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/admin"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors flex-row-reverse ${
                          isActive 
                            ? "bg-purple-100 text-purple-700 font-medium" 
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

      <SidebarFooter className="border-t border-purple-200 p-4">
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
