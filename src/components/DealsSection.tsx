
import { Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const flashDeals = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&h=300",
    title: "Wireless Headphones",
    originalPrice: "Rs. 5,000",
    salePrice: "Rs. 2,999",
    discount: "-40%",
    rating: 4.5,
    sold: 234
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&h=300",
    title: "Smart Watch",
    originalPrice: "Rs. 8,000",
    salePrice: "Rs. 4,999",
    discount: "-38%",
    rating: 4.3,
    sold: 156
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=300&h=300",
    title: "Sunglasses",
    originalPrice: "Rs. 3,000",
    salePrice: "Rs. 1,799",
    discount: "-40%",
    rating: 4.7,
    sold: 89
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&h=300",
    title: "Handbag",
    originalPrice: "Rs. 4,500",
    salePrice: "Rs. 2,699",
    discount: "-40%",
    rating: 4.2,
    sold: 167
  }
];

export const DealsSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <h3 className="text-2xl font-semibold text-gray-800 mr-4">Flash Sale</h3>
            <div className="flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              <Clock className="w-4 h-4 mr-1" />
              Ends in 05:23:45
            </div>
          </div>
          <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
            See All
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {flashDeals.map((deal) => (
            <div key={deal.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {deal.discount}
                </span>
              </div>
              
              <h4 className="font-medium text-gray-800 mb-2 text-sm line-clamp-2">{deal.title}</h4>
              
              <div className="flex items-center mb-2">
                <div className="flex items-center text-yellow-400 text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 text-gray-600">{deal.rating}</span>
                </div>
                <span className="text-gray-500 text-xs ml-2">({deal.sold} sold)</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-orange-500 font-semibold">{deal.salePrice}</span>
                  <span className="text-gray-400 text-sm line-through ml-2">{deal.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};