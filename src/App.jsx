// // import React, { useState } from "react";
// import './App.css';
// import React, { useState, useEffect } from "react";
// import {
//   Search,
//   X,
//   Loader2,
//   BookOpen,
//   Star,
//   Clock,
//   Globe,
//   ShoppingCart,
//   Heart,
//   Share2,
//   ChevronRight,
//   Menu,
// } from "lucide-react";

// // Navigation Bar
// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-40">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-4 sm:gap-8">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-amber-500 to-orange-600 rounded flex items-center justify-center">
//                 <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//               </div>
//               <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                 ReadScape
//               </span>
//             </div>
//             <div className="hidden lg:flex items-center gap-6 text-sm">
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
//               >
//                 Browse
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
//               >
//                 Bestsellers
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
//               >
//                 New Releases
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
//               >
//                 Collections
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center gap-2 sm:gap-4">
//             <button
//               className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               aria-label="Wishlist"
//             >
//               <Heart className="w-5 h-5 text-gray-600" />
//             </button>
//             <button
//               className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               aria-label="Cart"
//             >
//               <ShoppingCart className="w-5 h-5 text-gray-600" />
//             </button>
//             <button
//               className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-label="Menu"
//             >
//               <Menu className="w-5 h-5 text-gray-600" />
//             </button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
//             <div className="flex flex-col gap-3">
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors py-2"
//               >
//                 Browse
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors py-2"
//               >
//                 Bestsellers
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors py-2"
//               >
//                 New Releases
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors py-2"
//               >
//                 Collections
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// // Hero Search Section
// const HeroSearch = ({ onSearch, loading }) => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     if (query.trim()) {
//       onSearch(query);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-b border-amber-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
//         <div className="max-w-3xl mx-auto text-center">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
//             Find Your Next <span className="text-amber-600">Great Read</span>
//           </h1>
//           <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
//             Explore millions of books from the world's largest library
//             collection
//           </p>

//           <div className="relative max-w-2xl mx-auto px-4">
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="Search for books, authors, ISBN..."
//               className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-14 text-base sm:text-lg rounded-full border-2 border-amber-200 focus:border-amber-400 focus:outline-none shadow-lg bg-white transition-all"
//               disabled={loading}
//             />
//             <button
//               onClick={handleSearch}
//               disabled={loading || !query.trim()}
//               className="absolute right-6 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center shadow-md"
//               aria-label="Search"
//             >
//               {loading ? (
//                 <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
//               ) : (
//                 <Search className="w-4 h-4 sm:w-5 sm:h-5" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Book Card with Real Book Feel
// const BookCard = ({ book, onClick }) => {
//   const [imgError, setImgError] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const coverUrl = book.cover_i
//     ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
//     : null;

//   const authors = book.author_name
//     ? book.author_name.slice(0, 2).join(", ")
//     : "Unknown Author";

//   const rating = (3.5 + Math.random() * 1.5).toFixed(1);

//   return (
//     <div
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="group cursor-pointer"
//     >
//       <div className="relative mb-3 sm:mb-4">
//         <div
//           className={`relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
//             isHovered ? "shadow-2xl scale-105" : ""
//           }`}
//         >
//           {coverUrl && !imgError ? (
//             <img
//               src={coverUrl}
//               alt={book.title}
//               className="w-full h-64 sm:h-72 md:h-80 object-cover"
//               onError={() => setImgError(true)}
//               loading="lazy"
//             />
//           ) : (
//             <div className="w-full h-64 sm:h-72 md:h-80 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
//               <BookOpen className="w-16 sm:w-20 h-16 sm:h-20 text-amber-300" />
//             </div>
//           )}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//           <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
//             <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
//               View Details
//             </button>
//           </div>
//         </div>
//         {isHovered && (
//           <button
//             className="absolute top-2 sm:top-3 right-2 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors"
//             onClick={(e) => {
//               e.stopPropagation();
//             }}
//             aria-label="Add to wishlist"
//           >
//             <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-red-500" />
//           </button>
//         )}
//       </div>

//       <div className="px-1">
//         <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 leading-snug text-sm sm:text-base">
//           {book.title}
//         </h3>
//         <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-1">
//           {authors}
//         </p>
//         <div className="flex items-center gap-2 text-xs sm:text-sm">
//           <div className="flex items-center gap-1">
//             <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
//             <span className="font-semibold text-gray-900">{rating}</span>
//           </div>
//           <span className="text-gray-500">•</span>
//           <span className="text-gray-500">
//             {book.first_publish_year || "N/A"}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Detailed Book Modal
// const BookDetailModal = ({ book, onClose }) => {
//   const [imgError, setImgError] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, []);

//   const coverUrl = book.cover_i
//     ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
//     : null;

//   const authors = book.author_name || ["Unknown Author"];
//   const rating = (3.5 + Math.random() * 1.5).toFixed(1);
//   const reviews = Math.floor(Math.random() * 5000) + 100;

//   const generateDescription = () => {
//     const subjects = book.subject
//       ? book.subject.slice(0, 3).join(", ")
//       : "various themes";
//     return `"${book.title}" is a captivating work that explores ${subjects}. ${
//       authors[0]
//     } masterfully weaves a narrative that has resonated with readers worldwide. Published in ${
//       book.first_publish_year || "the past"
//     }, this ${
//       book.number_of_pages_median ? book.number_of_pages_median + "-page" : ""
//     } book has become a significant contribution to literature. Through compelling storytelling and rich character development, the author invites readers into a world that challenges perspectives and ignites imagination. Whether you're a longtime fan or discovering this work for the first time, "${
//       book.title
//     }" promises an unforgettable reading experience.`;
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start sm:items-center justify-center z-50 overflow-y-auto p-0 sm:p-4"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-none sm:rounded-2xl max-w-6xl w-full min-h-screen sm:min-h-0 sm:my-8 shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="relative">
//           <button
//             onClick={onClose}
//             className="sticky sm:absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-20 ml-auto mr-4 sm:mr-0 mt-4 sm:mt-0"
//             aria-label="Close"
//           >
//             <X className="w-5 h-5 text-gray-700" />
//           </button>

//           <div className="grid md:grid-cols-5 gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8">
//             <div className="md:col-span-2">
//               <div className="md:sticky md:top-8">
//                 {coverUrl && !imgError ? (
//                   <img
//                     src={coverUrl}
//                     alt={book.title}
//                     className="w-full max-w-sm mx-auto md:max-w-none rounded-xl shadow-2xl"
//                     onError={() => setImgError(true)}
//                   />
//                 ) : (
//                   <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl aspect-[2/3] flex items-center justify-center max-w-sm mx-auto md:max-w-none">
//                     <BookOpen className="w-20 sm:w-24 h-20 sm:h-24 text-amber-300" />
//                   </div>
//                 )}

//                 <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 max-w-sm mx-auto md:max-w-none">
//                   <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 sm:py-3.5 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
//                     <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
//                     Add to Cart
//                   </button>
//                   <button className="w-full bg-gray-100 text-gray-900 py-3 sm:py-3.5 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
//                     <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
//                     Add to Wishlist
//                   </button>
//                   <button className="w-full bg-gray-100 text-gray-900 py-3 sm:py-3.5 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
//                     <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
//                     Share
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="md:col-span-3">
//               <div className="mb-4 sm:mb-6">
//                 <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
//                   {book.title}
//                 </h1>
//                 <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//                   {authors.map((author, idx) => (
//                     <a
//                       key={idx}
//                       href="#"
//                       className="text-base sm:text-lg text-amber-600 hover:text-amber-700 font-medium transition-colors"
//                     >
//                       {author}
//                     </a>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
//                   <div className="flex items-center gap-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`w-4 h-4 sm:w-5 sm:h-5 ${
//                           i < Math.floor(rating)
//                             ? "fill-amber-400 text-amber-400"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                   <span className="text-base sm:text-lg font-semibold text-gray-900">
//                     {rating}
//                   </span>
//                   <span className="text-sm sm:text-base text-gray-500">
//                     ({reviews.toLocaleString()} reviews)
//                   </span>
//                 </div>
//               </div>

//               <div className="mb-6 sm:mb-8">
//                 <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
//                   About This Book
//                 </h2>
//                 <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
//                   {generateDescription()}
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
//                 {book.first_publish_year && (
//                   <div>
//                     <div className="flex items-center gap-2 text-gray-500 mb-1">
//                       <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
//                       <span className="text-xs sm:text-sm font-medium">
//                         Publication Year
//                       </span>
//                     </div>
//                     <p className="text-gray-900 font-semibold text-base sm:text-lg">
//                       {book.first_publish_year}
//                     </p>
//                   </div>
//                 )}

//                 {book.number_of_pages_median && (
//                   <div>
//                     <div className="flex items-center gap-2 text-gray-500 mb-1">
//                       <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
//                       <span className="text-xs sm:text-sm font-medium">
//                         Pages
//                       </span>
//                     </div>
//                     <p className="text-gray-900 font-semibold text-base sm:text-lg">
//                       {book.number_of_pages_median}
//                     </p>
//                   </div>
//                 )}

//                 {book.language && book.language.length > 0 && (
//                   <div>
//                     <div className="flex items-center gap-2 text-gray-500 mb-1">
//                       <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
//                       <span className="text-xs sm:text-sm font-medium">
//                         Language
//                       </span>
//                     </div>
//                     <p className="text-gray-900 font-semibold text-sm sm:text-base">
//                       {book.language[0].toUpperCase()}
//                     </p>
//                   </div>
//                 )}

//                 {book.publisher && book.publisher.length > 0 && (
//                   <div>
//                     <div className="flex items-center gap-2 text-gray-500 mb-1">
//                       <span className="text-xs sm:text-sm font-medium">
//                         Publisher
//                       </span>
//                     </div>
//                     <p className="text-gray-900 font-semibold line-clamp-1 text-sm sm:text-base">
//                       {book.publisher[0]}
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {book.subject && book.subject.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
//                     Genres & Categories
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {book.subject.slice(0, 12).map((subject, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-50 text-amber-700 rounded-full text-xs sm:text-sm font-medium border border-amber-200 hover:bg-amber-100 transition-colors cursor-pointer"
//                       >
//                         {subject}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {book.isbn && book.isbn.length > 0 && (
//                 <div className="pt-4 sm:pt-6 border-t border-gray-200">
//                   <p className="text-xs sm:text-sm text-gray-500">
//                     <span className="font-medium">ISBN:</span> {book.isbn[0]}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Welcome/Empty State
// const WelcomeSection = ({ onSuggestionClick }) => {
//   const categories = [
//     { name: "Fiction", books: "2.3M+" },
//     { name: "Mystery", books: "890K+" },
//     { name: "Romance", books: "1.5M+" },
//     { name: "Science Fiction", books: "650K+" },
//     { name: "Biography", books: "420K+" },
//     { name: "History", books: "980K+" },
//   ];

//   const trending = [
//     "Harry Potter",
//     "The Hobbit",
//     "1984",
//     "Dune",
//     "To Kill a Mockingbird",
//     "Pride and Prejudice",
//   ];

//   return (
//     <div className="py-8 sm:py-12">
//       <div className="mb-12 sm:mb-16">
//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
//           Browse by Category
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
//           {categories.map((cat) => (
//             <button
//               key={cat.name}
//               className="p-4 sm:p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl hover:shadow-lg transition-all border-2 border-amber-100 hover:border-amber-300 group"
//             >
//               <h3 className="font-bold text-gray-900 mb-1 group-hover:text-amber-600 text-sm sm:text-base">
//                 {cat.name}
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-600">
//                 {cat.books} books
//               </p>
//             </button>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
//           Trending Searches
//         </h2>
//         <div className="flex flex-wrap gap-2 sm:gap-3">
//           {trending.map((term) => (
//             <button
//               key={term}
//               onClick={() => onSuggestionClick(term)}
//               className="px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-gray-200 rounded-full hover:border-amber-400 hover:bg-amber-50 transition-all text-gray-700 font-medium flex items-center gap-2 group text-sm sm:text-base"
//             >
//               {term}
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-amber-600" />
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main App
// const App = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [hasSearched, setHasSearched] = useState(false);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [lastQuery, setLastQuery] = useState("");

//   const searchBooks = async (query) => {
//     const trimmedQuery = query?.trim();
//     if (!trimmedQuery) {
//       setError("Please enter a search term");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setHasSearched(true);
//     setBooks([]);
//     setLastQuery(trimmedQuery);

//     try {
//       const response = await fetch(
//         `https://openlibrary.org/search.json?title=${encodeURIComponent(
//           trimmedQuery
//         )}&limit=24`
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP ${response.status}`);
//       }

//       const data = await response.json();

//       if (data.docs && data.docs.length > 0) {
//         setBooks(data.docs);
//         setError("");
//       } else {
//         setBooks([]);
//         setError(`No books found for "${trimmedQuery}"`);
//       }
//     } catch (err) {
//       setError(`Failed to search: ${err.message}`);
//       setBooks([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <HeroSearch onSearch={searchBooks} loading={loading} />

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
//         {loading && (
//           <div className="flex flex-col items-center justify-center py-24 sm:py-32">
//             <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 text-amber-600 animate-spin mb-4 sm:mb-6" />
//             <p className="text-gray-600 text-base sm:text-lg font-medium">
//               Searching our library...
//             </p>
//           </div>
//         )}

//         {!loading && books.length > 0 && (
//           <>
//             <div className="mb-6 sm:mb-8">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
//                 Search Results for "{lastQuery}"
//               </h2>
//               <p className="text-sm sm:text-base text-gray-600 mt-1">
//                 {books.length} books found
//               </p>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
//               {books.map((book, idx) => (
//                 <BookCard
//                   key={`${book.key}-${idx}`}
//                   book={book}
//                   onClick={() => setSelectedBook(book)}
//                 />
//               ))}
//             </div>
//           </>
//         )}

//         {!loading && !hasSearched && (
//           <WelcomeSection onSuggestionClick={searchBooks} />
//         )}

//         {error && !loading && (
//           <div className="text-center py-12 sm:py-16">
//             <p className="text-gray-600 text-base sm:text-lg">{error}</p>
//           </div>
//         )}
//       </main>

//       {selectedBook && (
//         <BookDetailModal
//           book={selectedBook}
//           onClose={() => setSelectedBook(null)}
//         />
//       )}

//       <footer className="bg-gray-900 text-white mt-12 sm:mt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//           <div className="text-center">
//             <p className="text-gray-400 text-sm sm:text-base">
//               Powered by Open Library • ReadScape © 2025
//             </p>
//             <p className="text-gray-500 text-xs sm:text-sm mt-2">
//               Candidate ID: Naukri1025 | Aganitha Cognitive Solutions
//             </p>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         .line-clamp-1 {
//           display: -webkit-box;
//           -webkit-line-clamp: 1;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import HeroSearch from "./components/HeroSearch";
import BookCard from "./components/BookCard";
import BookDetailModal from "./components/BookDetailModal";
import WelcomeSection from "./components/WelcomeSection";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [lastQuery, setLastQuery] = useState("");

  const searchBooks = async (query) => {
    const trimmedQuery = query?.trim();
    if (!trimmedQuery) {
      setError("Please enter a search term");
      return;
    }

    setLoading(true);
    setError("");
    setHasSearched(true);
    setBooks([]);
    setLastQuery(trimmedQuery);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(
          trimmedQuery
        )}&limit=24`
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      if (data.docs && data.docs.length > 0) {
        setBooks(data.docs);
        setError("");
      } else {
        setBooks([]);
        setError(`No books found for "${trimmedQuery}"`);
      }
    } catch (err) {
      setError(`Failed to search: ${err.message}`);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSearch onSearch={searchBooks} loading={loading} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 sm:py-32">
            <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 text-amber-600 animate-spin mb-4 sm:mb-6" />
            <p className="text-gray-600 text-base sm:text-lg font-medium">
              Searching our library...
            </p>
          </div>
        )}

        {!loading && books.length > 0 && (
          <>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Search Results for "{lastQuery}"
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                {books.length} books found
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
              {books.map((book, idx) => (
                <BookCard
                  key={`${book.key}-${idx}`}
                  book={book}
                  onClick={() => setSelectedBook(book)}
                />
              ))}
            </div>
          </>
        )}

        {!loading && !hasSearched && (
          <WelcomeSection onSuggestionClick={searchBooks} />
        )}

        {error && !loading && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-gray-600 text-base sm:text-lg">{error}</p>
          </div>
        )}
      </main>

      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}

      <footer className="bg-gray-900 text-white mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              Powered by Open Library • ReadScape © 2025
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              Candidate ID: Naukri1025 | Aganitha Cognitive Solutions
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default App;