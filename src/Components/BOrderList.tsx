import { useState } from "react";
import apiClient from "../Services/api-client";

interface Props {
  setOrders: (orders: BorrowOrder[]) => void;
}

export interface BorrowOrder {
  id: number;
  user: string;
  isActive: boolean;
  openDate: string;
  closeDate: string;
  bookId: number;
}

const BOrderList = ({ setOrders }: Props) => {
  const [bookId, setBookId] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const GetBOrders = () => {
    apiClient
      .get("BorrowOrder/GetBorrowOrderByBookId/" + bookId)
      .then((res) => {
        setOrders(res.data);
        //window.location.reload();
      })
      .catch((err) => {
        setError(err.message);
      });

    return () => {};
  };

  return (
    <>
      <div className="card bg-primary w-96 shadow-xl text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-xl"> Get borrow orders by book Id</h2>
          {error && <p className="text-red">{error}</p>}
          <div className="join">
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs text-primary join-item"
              onChange={(e) => setBookId(parseInt(e.target.value))}
            />
            <button className="btn btn-accent join-item" onClick={GetBOrders}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BOrderList;
