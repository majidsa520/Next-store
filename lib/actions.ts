import { auth } from "@clerk/nextjs/server";
import db from "./db";
import { redirect } from "next/navigation";
export async function getFeaturedProducts() {
  const products = await db.product.findMany({ where: { featured: true } });
  return products;
}
export async function getAllProducts({ search = "" }: { search?: string }) {
  const products = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
}
export async function getSingleProduct(productId: number) {
  const product = await db.product.findUnique({
    where: { id: Number(productId) },
  });
  if (!product) redirect("/products");
  return product;
}
