
import { Search, ShoppingCart, User, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <div className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Deliver to Kathmandu</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Save More on App</span>
            <span>Sell on Daraz</span>
            <span>Help & Support</span>
            <select className="bg-transparent border-none text-gray-600">
              <option>EN</option>
              <option>NP</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-orange-500">daraz</h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search in Daraz"
                className="w-full pl-4 pr-12 py-3 border-2 border-orange-200 rounded-sm focus:border-orange-400"
              />
              <Button className="absolute right-0 top-0 h-full px-6 bg-orange-500 hover:bg-orange-600 rounded-l-none">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" className="flex flex-col items-center p-2">
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">Account</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center p-2">
              <Heart className="w-6 h-6" />
              <span className="text-xs mt-1">Wishlist</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center p-2 relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-xs mt-1">Cart</span>
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="border-t bg-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-8 py-3 text-sm">
            <span className="text-gray-700 hover:text-orange-500 cursor-pointer">Electronics</span>
            <span className="text-gray-700 hover:text-orange-500 cursor-pointer">Women's Fashion</span>
            <span className="text-gray-700 hover:text-orange-500 cursor-pointer">Men's Fashion</span>
            <span className="text-gray-700 hover:text-orange-500 cursor-pointer">Home & Living</span>
            <span className="text-gray-700 hover:text-orange-500 cursor-pointer">Health & Beauty</span>
            <span className="text-gray-700 hover:text-orange-500 cursor-pointer">Sports & Outdoors</span>
            <span className="text-gray-700 hover:text-orange-500 cursor-pointer">Automotive</span>
          </nav>
        </div>
      </div>
    </div>
  );
};