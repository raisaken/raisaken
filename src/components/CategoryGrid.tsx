
import { Smartphone, Laptop, Shirt, Home, Heart, Car, Gamepad2, Baby } from "lucide-react";

const categories = [
  { name: "Electronics", icon: Smartphone, color: "bg-blue-100 text-blue-600" },
  { name: "Computers", icon: Laptop, color: "bg-purple-100 text-purple-600" },
  { name: "Fashion", icon: Shirt, color: "bg-pink-100 text-pink-600" },
  { name: "Home & Living", icon: Home, color: "bg-green-100 text-green-600" },
  { name: "Health & Beauty", icon: Heart, color: "bg-red-100 text-red-600" },
  { name: "Automotive", icon: Car, color: "bg-gray-100 text-gray-600" },
  { name: "Sports", icon: Gamepad2, color: "bg-orange-100 text-orange-600" },
  { name: "Mother & Baby", icon: Baby, color: "bg-yellow-100 text-yellow-600" },
];

export const CategoryGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-2xl font-semibold mb-6">Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
              <category.icon className="w-6 h-6" />
            </div>
            <p className="text-center text-sm font-medium text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};