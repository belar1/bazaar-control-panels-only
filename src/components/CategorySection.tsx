
import { Card, CardContent } from "@/components/ui/card";

interface Category {
  id: number;
  name: string;
  image: string;
  productsCount: number;
}

const CategorySection = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "الأزياء والملابس",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
      productsCount: 245
    },
    {
      id: 2,
      name: "الإلكترونيات",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7306662?w=300&h=200&fit=crop",
      productsCount: 182
    },
    {
      id: 3,
      name: "المنزل والديكور",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      productsCount: 156
    },
    {
      id: 4,
      name: "الرياضة واللياقة",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      productsCount: 98
    },
    {
      id: 5,
      name: "الكتب والتعليم",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      productsCount: 73
    },
    {
      id: 6,
      name: "الجمال والعناية",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop",
      productsCount: 124
    }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          تسوق حسب الفئة
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm group-hover:text-purple-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {category.productsCount} منتج
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
