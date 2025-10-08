"use server";
import { auth, currentUser } from "@clerk/nextjs/server";
import db from "./db";
import { imageSchema, productSchema, validateSchema } from "@/lib/schemas";
import { redirect } from "next/navigation";
import { uploadImage } from "@/lib/supabase";
type ProductActionMessage = {
  message: string;
  success: boolean;
};
async function getAuthUser() {
  const user = await currentUser();
  if (!user) redirect("/");
  return user;
}
function renderError(error: unknown): ProductActionMessage {
  return {
    message: error instanceof Error ? error.message : "An error occured",
    success: false,
  };
}
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
export async function createProductAction(
  prevState: any,
  formData: FormData,
): Promise<ProductActionMessage> {
  // getting userId to bind it to product info

  const { id: userId } = await getAuthUser();
  const rawData = Object.fromEntries(formData);
  try {
    // validating form data with provided schema in zod
    const validatedData = validateSchema(rawData, productSchema);

    // getting image file
    const file = formData.get("image") as File;

    // validating image
    const validatedFile = validateSchema({ image: file }, imageSchema).image;

    // uploading image to supabase server
    const image = await uploadImage(validatedFile);

    // inserting product to db
    const { id } = await db.product.create({
      data: {
        ...validatedData,
        image,
        clerkId: userId,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/admin/products?message=Product%20successfully%20created");
}
