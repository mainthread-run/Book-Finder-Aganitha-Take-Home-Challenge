import React, { useState, useEffect, useMemo } from "react";
import {
  X,
  BookOpen,
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Clock,
  Globe,
} from "lucide-react";

const BookDetailModal = ({ book, onClose }) => {
  const [imgError, setImgError] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : null;

  const authors = book.author_name || ["Unknown Author"];

  // Stable rating for same book
  const rating = useMemo(() => {
    if (!book.key) return "4.0";
    const hash = book.key
      .split("")
      .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const normalized = Math.abs(hash % 15) / 10;
    return (3.5 + normalized).toFixed(1);
  }, [book.key]);

  const reviews = Math.floor(Math.random() * 5000) + 100;

  const generateDescription = () => {
    const subjects = book.subject
      ? book.subject.slice(0, 2).join(", ")
      : "various themes";
    return `"${book.title}" explores ${subjects}. ${
      authors[0]
    } delivers an engaging narrative published in ${
      book.first_publish_year || "an unknown year"
    } that captures readers’ imagination.`;
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 p-3"
      onClick={onClose}
    >
      <div
        className="relative bg-white/95 rounded-3xl shadow-2xl w-full max-w-2xl sm:max-w-3xl transform transition-all scale-100 animate-fadeIn overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 bg-white border border-gray-200 rounded-full p-2 hover:bg-gray-100 hover:scale-105 transition-all shadow-sm z-10"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row gap-6 md:p-6 max-h-[85vh] overflow-y-auto">
          {/* Mobile Top Image */}
          <div className="block md:hidden">
            {coverUrl && !imgError ? (
              <img
                src={coverUrl}
                alt={book.title}
                className="w-full h-64 object-cover shadow-md"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-64 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-amber-400" />
              </div>
            )}
          </div>

          {/* Desktop Left Section */}
          <div className="hidden md:flex flex-col items-center space-y-3 flex-shrink-0">
            {coverUrl && !imgError ? (
              <img
                src={coverUrl}
                alt={book.title}
                className="rounded-xl w-44 sm:w-56 object-cover shadow-md hover:shadow-amber-200 transition-shadow"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-44 sm:w-56 aspect-[2/3] bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-amber-400" />
              </div>
            )}

            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:scale-105 transition-all shadow-md">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-amber-600 hover:scale-105 transition-all shadow-md">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-blue-600 hover:scale-105 transition-all shadow-md">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Section (Details) */}
          <div className="flex flex-col gap-3 text-gray-800 px-4 pb-5 md:px-0 md:pb-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-1 leading-snug">
                {book.title}
              </h1>
              <p className="text-amber-600 font-medium text-base">
                {authors.join(", ")}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm font-semibold">{rating}</span>
              <span className="text-xs text-gray-500">
                ({reviews.toLocaleString()} reviews)
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {generateDescription()}
            </p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {book.first_publish_year && (
                <div className="text-sm">
                  <p className="text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4 text-amber-500" /> Published
                  </p>
                  <p className="font-medium">{book.first_publish_year}</p>
                </div>
              )}
              {book.language?.length > 0 && (
                <div className="text-sm">
                  <p className="text-gray-500 flex items-center gap-1">
                    <Globe className="w-4 h-4 text-amber-500" /> Language
                  </p>
                  <p className="font-medium uppercase">{book.language[0]}</p>
                </div>
              )}
              {book.number_of_pages_median && (
                <div className="text-sm">
                  <p className="text-gray-500 flex items-center gap-1">
                    <BookOpen className="w-4 h-4 text-amber-500" /> Pages
                  </p>
                  <p className="font-medium">{book.number_of_pages_median}</p>
                </div>
              )}
              {book.publisher?.length > 0 && (
                <div className="text-sm">
                  <p className="text-gray-500">Publisher</p>
                  <p className="font-medium line-clamp-1">
                    {book.publisher[0]}
                  </p>
                </div>
              )}
            </div>

            {/* Subjects */}
            {book.subject?.length > 0 && (
              <div className="mt-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-1">
                  {book.subject.slice(0, 6).map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100 text-xs font-medium hover:bg-amber-100 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Open Library Link */}
            {book.key && (
              <a
                href={`https://openlibrary.org${book.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
              >
                <Globe className="w-4 h-4" />
                View on Open Library
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
