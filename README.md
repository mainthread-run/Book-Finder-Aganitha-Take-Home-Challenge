# 📚 Book Finder — Aganitha Take-Home Challenge
# https://jwrlys-5173.csb.app/
👩‍💻 Candidate: Pallavi Bhasme   contact: 9637841265

🆔 Candidate ID: (https://www.naukri.com/mnjuser/profile?id=&altresid)
💼 Role: Full Stack Developer (Take-Home Challenge)
🏢 Submitted to: Aganitha Cognitive Solutions

🎯 Overview

Book Finder is a responsive web application that helps users explore books using the Open Library API.
It’s designed for Alex, a college student who wants a simple and visually engaging way to discover books by title — anytime, anywhere.

🌐 Live Demo & Resources

🔗 Deployed Application: [Your CodeSandbox or Vercel Link Here]
💬 ChatGPT Collaboration: [Your ChatGPT Conversation Link]

✨ Features
🔍 Core Functionality

✅ Book Search: Query millions of books by title from Open Library.

✅ Instant Results: Displays up to 24 matching books per search.

✅ Detailed Modal: View full book details, authors, and subjects.

✅ Dynamic Covers: Shows book images or a clean fallback icon.

✅ Comprehensive Info: Publisher, year, language, pages, and tags.

💎 User Experience

✅ Responsive Layout: Fully optimized for mobile, tablet, and desktop.

✅ Loading Feedback: Elegant spinners during API requests.

✅ Error States: Clear messages for empty searches or network errors.

✅ Empty Search Suggestions: Prompts users with quick options.

✅ Smooth Animations: Fade-ins, hover effects, and transitions.

✅ Keyboard Support: Press Enter to search instantly.

⚙️ Technical Highlights

✅ Modern Stack: React 18 + Tailwind CSS + Lucide Icons.

✅ API Error Handling: Graceful fallback on failed requests.

✅ Optimized Rendering: Key-based list rendering and memoization.

✅ Clean Architecture: Modular and maintainable React components.

✅ Accessible UI: Semantic HTML and proper ARIA attributes.

🛠️ Tech Stack
Technology	Purpose
React 18	Component-based frontend framework
Tailwind CSS	Utility-first styling for responsive layouts
Lucide React	Modern open-source icon set
Open Library API	Public data source for book metadata
Vercel / CodeSandbox	Hosting and deployment
📁 Project Structure
book-finder/
├── src/
│   ├── App.jsx               # Root component
│   ├── components/           # Reusable UI components
│   ├── hooks/                # Custom hooks (useBooks)
│   ├── index.js              # React entry point
│   └── index.css             # Tailwind imports
├── public/
│   └── index.html            # Base HTML template
├── package.json              # Dependencies and scripts
└── README.md                 # Documentation (this file)

🔌 API Integration
Endpoint
https://openlibrary.org/search.json?title={query}&limit=24

Example Response
{
  "docs": [
    {
      "title": "Harry Potter and the Sorcerer's Stone",
      "author_name": ["J.K. Rowling"],
      "first_publish_year": 1997,
      "cover_i": 12345,
      "publisher": ["Scholastic Inc."],
      "subject": ["Magic", "Fantasy", "Wizards"],
      "number_of_pages_median": 309,
      "language": ["eng"]
    }
  ]
}

Data Handling

Cover Image: https://covers.openlibrary.org/b/id/{cover_i}-M.jpg

Fallback: Displays a book icon for missing covers

Error Safety: Graceful null-checks for all fields

Resilience: Friendly message on failed network calls

🚀 Getting Started
Prerequisites

Node.js ≥ 14

npm or yarn

Installation Steps
# 1. Clone the repo
git clone <[your-repo-url](https://github.com/mainthread-run/Book-Finder-Aganitha-Take-Home-Challenge.git)>
cd book-finder

# 2. Install dependencies
npm install

# 3. Run locally
npm start


Open in your browser at http://localhost:3000

Production Build
npm run build

🧍‍♂️ User Persona — Alex

Name: Alex
Occupation: College Student
Need: Quick, reliable book search for study and leisure.

How Book Finder Helps

⚡ Instant, relevant book search

📖 Recognizable covers for easier discovery

🧠 Key metadata for research and projects

📱 Fully mobile-friendly for on-the-go use

🚫 No login or setup required

✨ Clean, minimal UI — just books

🎨 Design System
Element	Description
Primary Gradient	From purple-600 to blue-600
Accent	Soft pink and amber for warmth
Background	Subtle gradient from-purple-50 via-blue-50 to-pink-50
Cards	White with rounded corners and drop shadows
Typography	Hierarchical, clean sans-serif with gray text tones

Layout is based on a responsive grid (1–5 columns), ensuring consistent spacing and alignment.

🧪 Testing Scenarios

✅ Valid search terms (Harry Potter)
✅ No-result search (xyzabc123)
✅ Empty input validation
✅ Network disconnection simulation
✅ Modal open/close (X button or outside click)
✅ Image fallback handling
✅ Enter key triggers search
✅ Tested across mobile, tablet, and desktop breakpoints
✅ Smooth loading and transition states

🚧 Limitations & Future Enhancements
Current Limitations

Displays up to 24 results per query

Title-only search (no author/ISBN)

No bookmarks or history persistence

Future Enhancements

🔎 Advanced filters (author, year, subject)

🔁 Pagination or infinite scroll

💖 Save favorites (localStorage)

🌗 Dark mode support

🌍 Multi-language interface

📤 Social sharing

📚 Read-online integration

🧩 Development Process

Requirement Analysis — Mapped user goals and project constraints

API Research — Studied Open Library’s query structure

UI/UX Design — Wireframed responsive layouts

Componentization — Built modular, reusable React components

Implementation — Incrementally developed with live testing

Debugging — Used console + ChatGPT to troubleshoot

Polish — Added transitions, accessibility, and documentation

🤖 ChatGPT Collaboration

Planned structure & architecture

Solved key integration bugs

Improved styling and responsiveness

Crafted final README & submission assets

📬 Submission Details

👩‍💻 Candidate: Pallavi
🆔 Candidate ID: Naukri1025
📅 Submission Date: [29/10/2025]
📧 Email: pallavibhsme13@gmail.com

Submission Checklist

✅ Working deployed app

✅ Clean, readable code

✅ Comprehensive README

✅ ChatGPT collaboration link

✅ Candidate ID present

🙏 Acknowledgments

Open Library — Free and open book data

Lucide React — Modern icon system

Tailwind CSS — Clean, responsive styling

Aganitha Cognitive Solutions — For this opportunity

📜 License

This project was developed as part of a take-home challenge for Aganitha Cognitive Solutions.
Built with ❤️ using React & Tailwind.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
