
import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&h=300",
    title: "Running Shoes - Nike Air Max",
    price: "Rs. 12,999",
    originalPrice: "Rs. 15,999",
    rating: 4.8,
    reviews: 124,
    freeShipping: true
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=300&h=300",
    title: "Classic Sunglasses",
    price: "Rs. 2,499",
    originalPrice: "Rs. 3,999",
    rating: 4.5,
    reviews: 89,
    freeShipping: true
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=300&h=300",
    title: "Casual T-Shirt",
    price: "Rs. 899",
    originalPrice: "Rs. 1,299",
    rating: 4.3,
    reviews: 67,
    freeShipping: false
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=300&h=300",
    title: "Leather Handbag",
    price: "Rs. 4,999",
    originalPrice: "Rs. 7,999",
    rating: 4.6,
    reviews: 156,
    freeShipping: true
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&h=300",
    title: "Bluetooth Headphones",
    price: "Rs. 3,499",
    originalPrice: "Rs. 4,999",
    rating: 4.7,
    reviews: 203,
    freeShipping: true
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&h=300",
    title: "Smartphone Case",
    price: "Rs. 599",
    originalPrice: "Rs. 999",
    rating: 4.2,
    reviews: 45,
    freeShipping: false
  }
];

export const ProductsGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Just For You</h3>
        <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
          Load More
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg border hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Button 
                size="sm" 
                variant="ghost" 
                className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white"
              >
                <Heart className="w-4 h-4" />
              </Button>
              {product.freeShipping && (
                <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Free Shipping
                </span>
              )}
            </div>
            
            <div className="p-3">
              <h4 className="font-medium text-gray-800 mb-2 text-sm line-clamp-2 h-10">
                {product.title}
              </h4>
              
              <div className="flex items-center mb-2 text-sm">
                <div className="flex items-center text-yellow-400">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="ml-1 text-gray-600 text-xs">{product.rating}</span>
                </div>
                <span className="text-gray-500 text-xs ml-2">({product.reviews})</span>
              </div>
              
              <div className="space-y-1">
                <div className="text-orange-500 font-semibold">{product.price}</div>
                <div className="text-gray-400 text-sm line-through">{product.originalPrice}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
