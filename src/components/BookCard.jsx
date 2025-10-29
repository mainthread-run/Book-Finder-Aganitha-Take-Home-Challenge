import React from "react";
import { useState } from "react";
import { BookOpen, Heart, Star } from "lucide-react";
// import 
// Book Card with Real Book Feel
const BookCard = ({ book, onClick }) => {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : null;

  const authors = book.author_name
    ? book.author_name.slice(0, 2).join(", ")
    : "Unknown Author";
  
  const rating = (3.5 + Math.random() * 1.5).toFixed(1);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative mb-3 sm:mb-4">
        <div
          className={`relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
            isHovered ? "shadow-2xl scale-105" : ""
          }`}
        >
          {coverUrl && !imgError ? (
            <img
              src={coverUrl}
              alt={book.title}
              className="w-full h-64 sm:h-72 md:h-80 object-cover"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-64 sm:h-72 md:h-80 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <BookOpen className="w-16 sm:w-20 h-16 sm:h-20 text-amber-300" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
            <button
              onClick={() => onSelect(book)}
              className="w-full bg-white text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              View Details
            </button>
          </div>
        </div>
        {isHovered && (
          <button
            className="absolute top-2 sm:top-3 right-2 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
            }}
            aria-label="Add to wishlist"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-red-500" />
          </button>
        )}
      </div>

      <div className="px-1">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 leading-snug text-sm sm:text-base">
          {book.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-1">
          {authors}
        </p>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-gray-900">{rating}</span>
          </div>
          <span className="text-gray-500">•</span>
          <span className="text-gray-500">
            {book.first_publish_year || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
