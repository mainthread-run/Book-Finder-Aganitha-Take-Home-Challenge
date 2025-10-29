export const fetchBooks = async (title) => {
  const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(
    title
  )}&limit=24`;
  const response = await fetch(url);

  if (!response.ok) throw new Error("Network Error");

  const data = await response.json();
  return data;
};
