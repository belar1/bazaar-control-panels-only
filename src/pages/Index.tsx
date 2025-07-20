
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, Store, User, ShoppingBag } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const userTypes = [
    {
      title: "لوحة تحكم المسؤول",
      description: "إدارة البائعين والعملاء والمنتجات",
      icon: Shield,
      color: "from-purple-600 to-blue-600",
      route: "/admin",
      hoverColor: "hover:from-purple-700 hover:to-blue-700"
    },
    {
      title: "لوحة تحكم البائع",
      description: "إدارة المنتجات والطلبات والمبيعات",
      icon: Store,
      color: "from-green-600 to-teal-600",
      route: "/seller",
      hoverColor: "hover:from-green-700 hover:to-teal-700"
    },
    {
      title: "لوحة تحكم العميل",
      description: "عرض الطلبات والملف الشخصي",
      icon: User,
      color: "from-orange-600 to-red-600",
      route: "/customer",
      hoverColor: "hover:from-orange-700 hover:to-red-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg">
              <ShoppingBag className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            متجر متعدد البائعين
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اختر نوع المستخدم للوصول إلى لوحة التحكم المناسبة
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {userTypes.map((type, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              onClick={() => navigate(type.route)}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${type.color} ${type.hoverColor} transition-all duration-300 mb-6 group-hover:scale-110`}>
                  <type.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <Button 
                  className={`w-full bg-gradient-to-r ${type.color} ${type.hoverColor} text-white border-0 py-3 text-lg font-semibold transition-all duration-300 group-hover:scale-105`}
                >
                  دخول اللوحة
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            مميزات النظام
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-purple-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">إدارة شاملة</h3>
              <p className="text-gray-600">تحكم كامل في جميع جوانب المتجر</p>
            </div>
            <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">واجهة سهلة</h3>
              <p className="text-gray-600">تصميم بسيط وسهل الاستخدام</p>
            </div>
            <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-green-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">تتبع مباشر</h3>
              <p className="text-gray-600">مراقبة المبيعات والطلبات في الوقت الفعلي</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
