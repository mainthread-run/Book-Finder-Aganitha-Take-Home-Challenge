import React, { useState, useCallback, useMemo } from "react";
import HeroSearch from "../components/HeroSearch";
import WelcomeSection from "../components/WelcomeSection";
import BookCard from "../components/BookCard";
import BookDetailModal from "../components/BookDetailModal";
import { useBooks } from "../hooks/useBooks";
import { Loader2, AlertCircle, BookOpen } from "lucide-react";

const Home = () => {
  const { books, loading, error, searchBooks, hasSearched } = useBooks();
  const [selectedBook, setSelectedBook] = useState(null);

  // Memoize handlers to prevent unnecessary re-renders
  const handleSearch = useCallback(
    (query) => {
      searchBooks(query);
    },
    [searchBooks]
  );

  const handleBookSelect = useCallback((book) => {
    setSelectedBook(book);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedBook(null);
  }, []);

  // Calculate if we should show the welcome section
  const showWelcome = useMemo(() => {
    return !loading && !hasSearched && books.length === 0;
  }, [loading, hasSearched, books.length]);

  // Calculate if we should show empty state
  const showEmptyState = useMemo(() => {
    return !loading && hasSearched && books.length === 0 && !error;
  }, [loading, hasSearched, books.length, error]);

  return (
    <main className="flex-grow w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Search Section */}
      <HeroSearch onSearch={handleSearch} isLoading={loading} />

      {/* Welcome Section - Only show when no search has been made */}
      {showWelcome && <WelcomeSection onQuickSearch={handleSearch} />}

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <Loader2 className="animate-spin w-12 h-12 text-indigo-600 mb-4" />
          <p className="text-gray-600 text-lg font-medium">
            Searching for books...
          </p>
          <p className="text-gray-500 text-sm mt-2">
            This may take a few seconds
          </p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="max-w-2xl mx-auto mt-10 px-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-red-800 font-semibold mb-1">
                Oops! Something went wrong
              </h3>
              <p className="text-red-700">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-3 text-sm text-red-600 hover:text-red-800 underline"
              >
                Try refreshing the page
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Empty State - After search but no results */}
      {showEmptyState && (
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="bg-white rounded-full p-8 shadow-lg mb-6">
            <BookOpen className="w-20 h-20 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            No books found
          </h3>
          <p className="text-gray-600 text-center max-w-md mb-6">
            We couldn't find any books matching your search. Try different
            keywords or check your spelling.
          </p>
          <button
            onClick={() => handleSearch("Harry Potter")}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors font-medium"
          >
            Try "Harry Potter"
          </button>
        </div>
      )}

      {/* Books Grid - Success State */}
      {!loading && !error && books.length > 0 && (
        <section className="px-4 sm:px-6 py-10 max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">
              Explore Books
            </h2>
            <p className="text-center text-gray-600">
              Found{" "}
              <span className="font-semibold text-indigo-600">
                {books.length}
              </span>{" "}
              books
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {books.map((book, idx) => (
              <div
                key={book.key || idx}
                className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-xl"
              >
                <BookCard book={book} onSelect={handleBookSelect} />
              </div>
            ))}
          </div>

          {/* Load More Button (if needed) */}
          {books.length >= 24 && (
            <div className="flex justify-center mt-10">
              <button className="px-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-all font-semibold shadow-md">
                Load More Books
              </button>
            </div>
          )}
        </section>
      )}

      {/* Book Detail Modal */}
      {selectedBook && (
        <BookDetailModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </main>
  );
};

export default Home;
