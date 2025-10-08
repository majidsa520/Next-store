import CreateProductForm from "@/app/admin/products/create/CreateProductForm";

export default function CreateProductPage() {
  return (
    <section className="">
      <h1 className="mb-8 text-2xl font-semibold capitalize">create product</h1>
      <div className="rounded-md border p-8">
        <CreateProductForm />
      </div>
    </section>
  );
}
