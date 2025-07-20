
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "قميص قطني أزرق عالي الجودة",
      price: 120,
      originalPrice: 150,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      seller: "متجر الأزياء الحديثة",
      rating: 4.5,
      reviews: 45,
      discount: 20
    },
    {
      id: 2,
      name: "سماعات لاسلكية عالية الجودة",
      price: 1200,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      seller: "متجر التكنولوجيا",
      rating: 4.8,
      reviews: 128
    },
    {
      id: 3,
      name: "ساعة ذكية رياضية",
      price: 899,
      originalPrice: 1099,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      seller: "متجر الإلكترونيات الذكية",
      rating: 4.6,
      reviews: 89,
      discount: 18
    },
    {
      id: 4,
      name: "حقيبة جلدية أنيقة",
      price: 320,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      seller: "متجر الإكسسوارات",
      rating: 4.3,
      reviews: 67
    },
    {
      id: 5,
      name: "حذاء رياضي مريح",
      price: 350,
      originalPrice: 420,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      seller: "متجر الأحذية الرياضية",
      rating: 4.7,
      reviews: 156,
      discount: 17
    },
    {
      id: 6,
      name: "مصباح طاولة LED",
      price: 85,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      seller: "متجر المنزل والديكور",
      rating: 4.4,
      reviews: 34
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          المنتجات المميزة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
