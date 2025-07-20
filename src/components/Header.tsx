
import { Search, Heart, ShoppingCart, User, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" dir="rtl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
              <Store className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              متجر متعدد البائعين
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="ابحث عن المنتجات..."
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            {/* Become a Seller */}
            <Button 
              variant="outline" 
              className="hidden md:flex items-center gap-2 hover:bg-green-50 hover:border-green-500"
              onClick={() => navigate('/seller')}
            >
              <Store className="h-4 w-4" />
              <span>كن بائعاً</span>
            </Button>

            {/* Favorites */}
            <Button variant="ghost" size="icon" className="relative hover:bg-red-50">
              <Heart className="h-5 w-5" />
              <Badge className="absolute -top-2 -left-2 h-5 w-5 p-0 text-xs bg-red-500">
                3
              </Badge>
            </Button>

            {/* Shopping Cart */}
            <Button variant="ghost" size="icon" className="relative hover:bg-blue-50">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -left-2 h-5 w-5 p-0 text-xs bg-blue-500">
                2
              </Badge>
            </Button>

            {/* Login Menu */}
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/seller')}
                className="hover:bg-green-50 hover:border-green-500"
              >
                دخول البائع
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/customer')}
                className="hover:bg-orange-50 hover:border-orange-500"
              >
                دخول العميل
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
