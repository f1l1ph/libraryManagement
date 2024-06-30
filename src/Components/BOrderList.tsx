import { useState } from "react";

const BOrderList = () => {
  const [bookId, setBookId] = useState<number>(0);

  const getBorrowOrders = () => {};

  return (
    <>
      <div className="card bg-primary w-96 shadow-xl text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-xl"> Get borrow orders by book Id</h2>
          <div className="join">
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs text-primary join-item"
              onChange={(e) => setBookId(parseInt(e.target.value))}
            />
            <button
              className="btn btn-accent join-item"
              onClick={getBorrowOrders}
            >
              Submit
            </button>

            <p>{bookId}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BOrderList;
