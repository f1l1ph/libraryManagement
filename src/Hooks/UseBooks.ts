import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface BOrder {
  id: number;
  user: string;
  isActive: boolean;
  openDate: string;
  closeDate: string;
  bookId: number;
}

export interface Book {
  id: number;
  name: string;
  author: string;
  activeBorrowOrder: BOrder;
  borrowOrders: BOrder[];
}

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<Book[]>("Book/GetBooks/", { signal: controller.signal })
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { books, error };
};

export default useBooks;
