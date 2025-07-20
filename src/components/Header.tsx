
import { Search, Heart, ShoppingCart, User, Store, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "الإلكترونيات",
    "الأزياء والملابس", 
    "المنزل والحديقة",
    "الرياضة والصحة",
    "الأم والطفل",
    "الإكسسوارات"
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" dir="rtl">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden md:flex items-center gap-4">
              <span>مرحباً بك في متجر الجزائر</span>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-white/20 h-auto p-1"
                onClick={() => navigate('/seller')}
              >
                <User className="h-4 w-4 ml-1" />
                تسجيل دخول العملاء
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-white/20 h-auto p-1"
                onClick={() => navigate('/customer')}
              >
                <Store className="h-4 w-4 ml-1" />
                تسجيل دخول البائعين
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
          )}

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
              <Store className="h-8 w-8 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                متجر الجزائر
              </h1>
              <p className="text-xs text-gray-500">السوق الإلكتروني الأول</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <div className="flex">
                <Input
                  type="text"
                  placeholder="ابحث عن منتجات، ماركات، فئات..."
                  className="w-full pr-4 pl-12 py-3 border-2 border-gray-200 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
                />
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 rounded-l-lg rounded-r-none px-6"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            {/* Become a Seller - Hidden on mobile */}
            {!isMobile && (
              <Button 
                variant="outline" 
                className="hidden lg:flex items-center gap-2 hover:bg-green-50 hover:border-green-500 text-green-600 border-green-200"
                onClick={() => navigate('/seller')}
              >
                <Store className="h-4 w-4" />
                <span>كن بائعاً</span>
              </Button>
            )}

            {/* Favorites */}
            <Button variant="ghost" size="icon" className="relative hover:bg-red-50 p-2">
              <Heart className="h-6 w-6 text-gray-600" />
              <Badge className="absolute -top-1 -left-1 h-5 w-5 p-0 text-xs bg-red-500 text-white">
                3
              </Badge>
            </Button>

            {/* Shopping Cart */}
            <Button variant="ghost" size="icon" className="relative hover:bg-blue-50 p-2">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              <Badge className="absolute -top-1 -left-1 h-5 w-5 p-0 text-xs bg-blue-500 text-white">
                2
              </Badge>
            </Button>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="hidden md:flex items-center gap-6 overflow-x-auto">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 whitespace-nowrap text-sm font-medium py-2 px-3"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Mobile Categories Dropdown */}
            {isMobile && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <span>الفئات</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {categories.map((category, index) => (
                    <DropdownMenuItem key={index}>
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-white w-80 h-full p-4" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-4">
              <Button 
                className="w-full justify-start gap-2"
                variant="ghost"
                onClick={() => navigate('/seller')}
              >
                <Store className="h-4 w-4" />
                كن بائعاً
              </Button>
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-right"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
