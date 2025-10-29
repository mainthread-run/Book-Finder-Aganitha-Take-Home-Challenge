import React from "react";
import { useState } from "react";
import { BookOpen, Heart, ShoppingCart, Menu } from "lucide-react";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-amber-500 to-orange-600 rounded flex items-center justify-center">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                ReadScape
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                Browse
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                Bestsellers
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                New Releases
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                Collections
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors py-2"
              >
                Browse
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors py-2"
              >
                Bestsellers
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors py-2"
              >
                New Releases
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors py-2"
              >
                Collections
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;
