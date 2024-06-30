import { useState } from "react";
import { Book } from "../Hooks/UseBooks";
import apiClient from "../Services/api-client";

interface Props {
  book: Book;
}

const BookViewComponent = ({ book }: Props) => {
  const isAvailable = book.activeBorrowOrder === null;

  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const returnBook = () => {
    apiClient
      .put("BorrowOrder/ReturnBook/" + book.activeBorrowOrder.id)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        setError(err.message);
      });

    return () => {};
  };

  const borrowBook = () => {
    var openDate = "2024-06-27T16:00:50.32+02:00";
    var closeDate = "2025-06-27T16:00:50.32+02:00";
    var bookId = book.id;

    apiClient
      .post("BorrowOrder/AddBorrowOrder", {
        order: { user, openDate, closeDate, bookId },
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const deleteBook = () => {
    apiClient
      .delete("Book/DeleteBook/" + book.id)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="card bg-primary text-primary-content w-96 shadow-xl">
      <div className="card-body">
        {error && <p className="text-red">{error}</p>}

        <div className="card-actions justify-end">
          <button
            className="btn btn-error btn-square btn-sm"
            onClick={deleteBook}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <h2 className="card-title text-2xl">{book.name}</h2>
        <p>id: {book.id}</p>
        <p>author: {book.author}</p>
        <p className="font-bold">
          Available: {isAvailable && "true"}
          {!isAvailable && "false"}
        </p>
        {!isAvailable && (
          <>
            <p>user: {book.activeBorrowOrder.user}</p>
            <button className="btn btn-secondary" onClick={returnBook}>
              Return book
            </button>
          </>
        )}
        {isAvailable && (
          <>
            <input
              type="text"
              placeholder="Type your username"
              className="input input-bordered w-full max-w-xs text-primary"
              onChange={(e) => setUser(e.target.value)}
            />
            <button className="btn btn-accent" onClick={borrowBook}>
              Borrow book
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BookViewComponent;
