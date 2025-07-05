
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">How to Buy</a></li>
              <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* About Daraz */}
          <div>
            <h4 className="font-semibold mb-4">About Daraz</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Daraz Blog</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Digital Payments</a></li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-semibold mb-4">Payment Methods</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white rounded p-2 text-center">
                <span className="text-gray-800 text-xs font-medium">VISA</span>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <span className="text-gray-800 text-xs font-medium">MC</span>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <span className="text-gray-800 text-xs font-medium">eSewa</span>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <span className="text-gray-800 text-xs font-medium">Khalti</span>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <span className="text-gray-800 text-xs font-medium">COD</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <Facebook className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Instagram className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer" />
              <Youtube className="w-6 h-6 text-red-400 hover:text-red-300 cursor-pointer" />
            </div>
            <div className="text-sm text-gray-300">
              <p className="mb-2">Get updates on deals & offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-700 text-white px-3 py-2 rounded-l flex-1 text-sm"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 Daraz Nepal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};