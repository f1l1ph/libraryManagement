export interface BOrder {
  id: number;
  User: string;
  IsActive: boolean;
  OpenDate: string;
  CloseDate: string;
  BookId: number;
}

export interface Book {
  id: number;
  Name: string;
  Author: string;
  ActiveBorrowOrder: BOrder;
  BorrowOrders: BOrder[];
}
