export default function ProductsPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return <div className="">ProductsPage:{searchParams.message}</div>;
}
