import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AddBookPage = () => {
  const [bookData, setBookData] = useState({
    isbn: "",
    title: "",
    author: "",
    yearOfPublication: "",
    publisher: "",
    imageUrlS: "",
    imageUrlM: "",
    imageUrlL: "",
    bookRating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/add_book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        throw new Error('Failed to add book.');
      }

      setBookData({
        isbn: "",
        title: "",
        author: "",
        yearOfPublication: "",
        publisher: "",
        imageUrlS: "",
        imageUrlM: "",
        imageUrlL: "",
        bookRating: "",
      });
      alert('Book added successfully.');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add book.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4">Add New Book</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="isbn" className="block text-lg font-medium text-gray-700">
                  ISBN:
                </label>
                <input
                  type="text"
                  id="isbn"
                  name="isbn"
                  value={bookData.isbn}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-lg font-medium text-gray-700">
                  Book Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={bookData.title}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="author" className="block text-lg font-medium text-gray-700">
                  Book Author:
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={bookData.author}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="yearOfPublication" className="block text-lg font-medium text-gray-700">
                  Year of Publication:
                </label>
                <input
                  type="text"
                  id="yearOfPublication"
                  name="yearOfPublication"
                  value={bookData.yearOfPublication}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="publisher" className="block text-lg font-medium text-gray-700">
                  Publisher:
                </label>
                <input
                  type="text"
                  id="publisher"
                  name="publisher"
                  value={bookData.publisher}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="imageUrlS" className="block text-lg font-medium text-gray-700">
                  Image URL S:
                </label>
                <input
                  type="text"
                  id="imageUrlS"
                  name="imageUrlS"
                  value={bookData.imageUrlS}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="imageUrlM" className="block text-lg font-medium text-gray-700">
                  Image URL M:
                </label>
                <input
                  type="text"
                  id="imageUrlM"
                  name="imageUrlM"
                  value={bookData.imageUrlM}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="imageUrlL" className="block text-lg font-medium text-gray-700">
                  Image URL L:
                </label>
                <input
                  type="text"
                  id="imageUrlL"
                  name="imageUrlL"
                  value={bookData.imageUrlL}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="bookRating" className="block text-lg font-medium text-gray-700">
                  Book Rating:
                </label>
                <input
                  type="text"
                  id="bookRating"
                  name="bookRating"
                  value={bookData.bookRating}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBookPage;
