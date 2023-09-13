/* eslint-disable no-unused-vars */
type OrderedBook = {
    bookId: string;
    quantity: string;
  };

  enum Status {
    PENDING = 'PENDING',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED', 
  }
  
  export type IOrder = {
    userId: string; 
    orderedBooks: OrderedBook[];
    status: Status;
  };
  

