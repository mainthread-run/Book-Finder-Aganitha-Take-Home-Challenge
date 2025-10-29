import React from "react";
import { ChevronRight } from "lucide-react";
// Welcome/Empty State
const WelcomeSection = ({ onSuggestionClick }) => {
  const categories = [
    { name: "Fiction", books: "2.3M+" },
    { name: "Mystery", books: "890K+" },
    { name: "Romance", books: "1.5M+" },
    { name: "Science Fiction", books: "650K+" },
    { name: "Biography", books: "420K+" },
    { name: "History", books: "980K+" },
  ];

  const trending = ["Harry Potter", "The Hobbit", "1984", "Dune", "To Kill a Mockingbird", "Pride and Prejudice"];

  return (
    <div className="py-8 sm:py-12">
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="p-4 sm:p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl hover:shadow-lg transition-all border-2 border-amber-100 hover:border-amber-300 group"
            >
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-amber-600 text-sm sm:text-base">{cat.name}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{cat.books} books</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Trending Searches</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {trending.map((term) => (
            <button
              key={term}
              onClick={() => onSuggestionClick(term)}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-gray-200 rounded-full hover:border-amber-400 hover:bg-amber-50 transition-all text-gray-700 font-medium flex items-center gap-2 group text-sm sm:text-base"
            >
              {term}
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-amber-600" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


export default WelcomeSection;
