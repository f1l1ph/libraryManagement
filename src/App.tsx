import "./App.css";
import BookViewComponent from "./Components/BookViewComponent";
import useBooks from "./Hooks/UseBooks";

function App() {
  const { books, error } = useBooks();

  return (
    <>
      {error && <p>{error}</p>}

      <ul className="p-4">
        {books?.map((book) => (
          <li key={book.id} className="p-4">
            <BookViewComponent book={book} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
