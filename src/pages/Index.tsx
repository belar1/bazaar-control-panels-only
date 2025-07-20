
import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Headphones, RefreshCw, Star, Users, Package } from "lucide-react";

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

  const stats = [
    { icon: Users, number: "10,000+", label: "عميل راضي" },
    { icon: Package, number: "50,000+", label: "منتج متوفر" },
    { icon: Star, number: "4.8", label: "تقييم العملاء" },
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      
      {/* Hero Section - Responsive */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-right space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                اكتشف عالم التسوق الإلكتروني
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                آلاف المنتجات من مئات البائعين في مكان واحد. تسوق بأمان وثقة مع ضمان الجودة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
                  ابدأ التسوق الآن
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2">
                  تصفح الفئات
                </Button>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 mb-4">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CategorySection />
      
      <FeaturedProducts />

      {/* Features Section - Responsive Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">لماذا تختار متجر الجزائر؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نقدم لك أفضل تجربة تسوق إلكتروني مع خدمات متميزة</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 mb-6">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">انضم إلى عائلة البائعين</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            ابدأ رحلتك في البيع الإلكتروني واوصل إلى آلاف العملاء في جميع أنحاء الجزائر
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            onClick={() => window.location.href = '/seller'}
          >
            ابدأ البيع الآن
          </Button>
        </div>
      </section>

      {/* Footer - Responsive */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
            <div>
              <h3 className="font-bold text-xl mb-4">متجر الجزائر</h3>
              <p className="text-gray-400 leading-relaxed">
                السوق الإلكتروني الأول في الجزائر للتسوق الآمن والموثوق
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">روابط مهمة</h4>
              <div className="space-y-2 text-gray-400">
                <div>عن الموقع</div>
                <div>اتصل بنا</div>
                <div>الشروط والأحكام</div>
                <div>سياسة الخصوصية</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">خدمة العملاء</h4>
              <div className="space-y-2 text-gray-400">
                <div>الدعم الفني</div>
                <div>طرق الدفع</div>
                <div>الشحن والتوصيل</div>
                <div>الإرجاع والاستبدال</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 متجر الجزائر. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
