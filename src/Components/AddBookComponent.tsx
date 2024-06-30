import { useState } from "react";
import apiClient from "../Services/api-client";

const AddBookComponent = () => {
  const [author, setAuthor] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const addBook = () => {
    apiClient
      .post("Book/AddBook/", { name, author })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        setError(err.message);
      });

    return () => {};
  };

  return (
    <div className="card bg-accent w-96 shadow-xl">
      <div className="card-body">
        {error && <p className="text-black">{error}</p>}

        <input
          type="text"
          placeholder="Book name"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book author"
          className="input input-bordered w-full max-w-xs "
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="btn btn-secondary" onClick={addBook}>
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddBookComponent;
