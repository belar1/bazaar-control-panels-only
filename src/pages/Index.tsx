
import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Headphones, RefreshCw } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Truck,
      title: "شحن مجاني",
      description: "للطلبات أكثر من 500 دج"
    },
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "منتجات أصلية 100%"
    },
    {
      icon: Headphones,
      title: "دعم 24/7",
      description: "خدمة عملاء متاحة دائماً"
    },
    {
      icon: RefreshCw,
      title: "إرجاع مجاني",
      description: "خلال 30 يوم من الشراء"
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            اكتشف عالم التسوق الإلكتروني
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            آلاف المنتجات من مئات البائعين في مكان واحد
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3">
            ابدأ التسوق الآن
          </Button>
        </div>
      </section>

      <CategorySection />
      
      <FeaturedProducts />

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-purple-100 mb-4">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 متجر متعدد البائعين. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
