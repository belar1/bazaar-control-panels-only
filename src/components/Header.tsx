
import { Search, Heart, ShoppingCart, User, Store, Menu, ChevronDown, MoreHorizontal } from "lucide-react";
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
  DropdownMenuSeparator,
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
    "الإكسسوارات",
    "الكتب والتعليم",
    "السيارات",
    "الطعام والمشروبات"
  ];

  const visibleCategories = isMobile ? categories.slice(0, 2) : categories.slice(0, 6);
  const moreCategories = isMobile ? categories.slice(2) : categories.slice(6);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" dir="rtl">
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

          {/* Action Icons - Fixed Order */}
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

            {/* Login Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative hover:bg-gray-50 p-2">
                  <User className="h-6 w-6 text-gray-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border shadow-lg">
                <DropdownMenuItem onClick={() => navigate('/customer')}>
                  <User className="h-4 w-4 ml-2" />
                  تسجيل دخول العملاء
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/seller')}>
                  <Store className="h-4 w-4 ml-2" />
                  تسجيل دخول البائعين
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-6 overflow-x-auto flex-1">
              {visibleCategories.map((category, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 whitespace-nowrap text-sm font-medium py-2 px-3"
                >
                  {category}
                </Button>
              ))}
            </div>
              
            {/* More Categories Dropdown - Positioned on the left */}
            {moreCategories.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 hover:text-blue-600 hover:bg-blue-50 mr-4">
                    <MoreHorizontal className="h-4 w-4" />
                    <span>المزيد</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-white border shadow-lg">
                  {moreCategories.map((category, index) => (
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
