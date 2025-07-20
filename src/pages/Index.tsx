
import Header from "@/components/Header";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Shield, Headphones, RefreshCw, Star, Users, Package, Store, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

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
      
      {/* Hero Section from Image - Responsive */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Right Side - Main Content */}
            <div className="text-center lg:text-right space-y-6 text-white order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                مرحباً بك في
                <br />
                متجر الجزائر
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto lg:mx-0">
                اكتشف أفضل المنتجات من البائعين المحليين المتميزين
                <br />
                تسوق آمن • توصيل سريع • أسعار مناسبة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
                  onClick={() => navigate('/sellers')}
                >
                  <Store className="h-5 w-5 ml-2" />
                  اكتشف البائعين
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-white border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
                >
                  <ShoppingCart className="h-5 w-5 ml-2" />
                  ابدأ التسوق الآن
                </Button>
              </div>
              
              {/* Quality Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">ضمان الجودة</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Truck className="h-4 w-4" />
                  <span className="text-sm">توصيل مضمون</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <RefreshCw className="h-4 w-4" />
                  <span className="text-sm">دعم آمن</span>
                </div>
              </div>
            </div>
            
            {/* Left Side - Stats Section */}
            <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
              {/* Seller Stats */}
              <Card className="text-center border-0 shadow-lg bg-green-500/90 text-white backdrop-blur">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
                    <Store className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1">+5000</div>
                  <div className="text-sm opacity-90">متجر متنوع</div>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-blue-500/90 text-white backdrop-blur">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1">+100</div>
                  <div className="text-sm opacity-90">بائع متميز</div>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-purple-500/90 text-white backdrop-blur">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
                    <ShoppingCart className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1">+10k</div>
                  <div className="text-sm opacity-90">طلب مكتمل</div>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-yellow-500/90 text-white backdrop-blur">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1">4.8</div>
                  <div className="text-sm opacity-90">تقييم العملاء</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
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
