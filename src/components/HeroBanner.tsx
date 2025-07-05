
import { Button } from "@/components/ui/button";

export const HeroBanner = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg overflow-hidden relative h-80">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 flex items-center justify-between h-full px-12">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">Daraz 11.11 Big Sale</h2>
            <p className="text-xl mb-6">Up to 80% OFF on all categories</p>
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Shop Now
            </Button>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&h=300"
              alt="Shopping deals"
              className="w-80 h-60 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
