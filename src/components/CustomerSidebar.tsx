
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
import { ShoppingCart, Heart, User, Package, Settings, LogOut, BarChart3, Bell, MapPin } from "lucide-react";

const customerMenuItems = [
  { title: "نظرة عامة", url: "/customer", icon: BarChart3 },
  { title: "طلباتي", url: "/customer/orders", icon: ShoppingCart },
  { title: "المفضلة", url: "/customer/favorites", icon: Heart },
  { title: "الملف الشخصي", url: "/customer/profile", icon: User },
  { title: "العناوين", url: "/customer/addresses", icon: MapPin },
  { title: "الإشعارات", url: "/customer/notifications", icon: Bell },
  { title: "الإعدادات", url: "/customer/settings", icon: Settings },
];

export function CustomerSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar side="right" className="border-r-0 border-l">
      <SidebarHeader className="border-b border-orange-200 p-4">
        <div className="flex items-center gap-3 flex-row-reverse">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
          {open && (
            <div className="text-right">
              <h2 className="font-bold text-gray-800">لوحة العميل</h2>
              <Badge variant="outline" className="border-orange-200 text-orange-700 text-xs">
                عضو مميز
              </Badge>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-right">حسابي</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {customerMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/customer"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors flex-row-reverse ${
                          isActive 
                            ? "bg-orange-100 text-orange-700 font-medium" 
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

      <SidebarFooter className="border-t border-orange-200 p-4">
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
