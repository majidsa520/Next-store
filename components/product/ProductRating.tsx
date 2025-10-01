import { FaStar } from "react-icons/fa";

export default function ProductRating({ productId }: { productId: number }) {
  const rating = 4.2;
  const count = 25;
  const className = `flex gap-1 items-center mt-1 mb-4`;
  const countValue = `(${count}) reviews`;
  return (
    <div className={className}>
      <FaStar className="size-3" />
      {rating} {countValue}
    </div>
  );
}
