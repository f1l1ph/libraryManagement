import { useState } from "react";
import "./App.css";
import AddBookComponent from "./Components/AddBookComponent";
import BOrderList, { BorrowOrder } from "./Components/BOrderList";
import BookViewComponent from "./Components/BookViewComponent";
import useBooks from "./Hooks/UseBooks";
import ShowOrders from "./Components/ShowOrders";

function App() {
  const { books, error } = useBooks();
  const [orders, setOrders] = useState<BorrowOrder[]>([]);

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
        <BOrderList setOrders={setOrders} />
      </div>

      <div>
        <ul className="flex flex-wrap mr-auto ml-auto justify-center">
          {orders?.map((order) => (
            <li key={order.id} className="p-4">
              <ShowOrders order={order} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
