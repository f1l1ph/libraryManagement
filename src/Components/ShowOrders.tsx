import { BorrowOrder } from "./BOrderList";

interface Props {
  order: BorrowOrder;
}

const ShowOrders = ({ order }: Props) => {
  return (
    <div className="card bg-neutral text-neutral-content w-96">
      <div className="card-body items-center text-center">
        <h2 className="card-title">user: {order.user}</h2>
        <p>
          {order.isActive && "active"}
          {!order.isActive && "inactive"}
        </p>
      </div>
    </div>
  );
};

export default ShowOrders;
