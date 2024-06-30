import "./App.css";
import AddBookComponent from "./Components/AddBookComponent";
import BOrderList from "./Components/BOrderList";
import BookViewComponent from "./Components/BookViewComponent";
import useBooks from "./Hooks/UseBooks";

function App() {
  const { books, error } = useBooks();

  return (
    <>
      <div className="flex justify-center items-center p-4">
        <AddBookComponent></AddBookComponent>
      </div>
      {error && <p>{error}</p>}

      <ul className="flex flex-wrap mr-auto ml-auto justify-center">
        {books?.map((book) => (
          <li key={book.id} className="p-4">
            <BookViewComponent book={book} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center p-4">
        <BOrderList />
      </div>
    </>
  );
}

export default App;
