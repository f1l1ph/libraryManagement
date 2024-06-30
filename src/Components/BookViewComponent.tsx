import { Book } from "../Hooks/UseBooks";

interface Props {
  book: Book;
}

const BookViewComponent = ({ book }: Props) => {
  const isAvailable = book.activeBorrowOrder === null;

  return (
    <div className="card bg-primary text-primary-content w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{book.name}</h2>
        <p>id: {book.id}</p>
        <p>author: {book.author}</p>
        <p>
          Available: {isAvailable && "true"}
          {!isAvailable && "false"}
        </p>
        {!isAvailable && (
          <>
            <p>user: {book.activeBorrowOrder.user}</p>
            <button className="btn btn-secondary">return book</button>
          </>
        )}
        {isAvailable && <button className="btn btn-accent">borrow book</button>}
      </div>
    </div>
  );
};

export default BookViewComponent;
