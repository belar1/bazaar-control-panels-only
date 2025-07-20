
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  seller: string;
  rating: number;
  reviews: number;
  discount?: number;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  seller, 
  rating, 
  reviews, 
  discount 
}: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount && (
            <Badge className="absolute top-2 right-2 bg-red-500 text-white">
              -{discount}%
            </Badge>
          )}
          <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
            {name}
          </h3>
          
          <p className="text-sm text-gray-600 mb-2">بواسطة: {seller}</p>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {renderStars(rating)}
            <span className="text-sm text-gray-500 mr-1">({reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-purple-600">{price} دج</span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">{originalPrice} دج</span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <ShoppingCart className="h-4 w-4 ml-2" />
              أضف للسلة
            </Button>
            <Button variant="outline" size="icon">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
