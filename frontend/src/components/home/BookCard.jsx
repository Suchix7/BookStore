// components/home/BookCard.jsx
import React from 'react';

const BookCard = ({ books }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {books.map((book) => (
                <div key={book._id} className="border border-slate-600 rounded-md p-4">
                    <h2 className="text-xl font-bold">{book.title}</h2>
                    <p className="text-gray-600">{book.author}</p>
                    <p className="text-gray-400">Year: {book.publishYear}</p>
                    <div className="mt-4 flex justify-between">
                        <Link to={`/books/details/${book._id}`}>
                            <BsInfoCircle className="text-2xl text-green-800" />
                        </Link>
                        <Link to={`/books/edit/${book._id}`}>
                            <AiOutlineEdit className="text-2xl text-yellow-600" />
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                            <MdOutlineDelete className="text-2xl text-red-600" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookCard;
