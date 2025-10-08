import { z, ZodSchema } from "zod";
// Zod Validation Function
export function validateSchema<T>(data: unknown, schema: ZodSchema<T>): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join("\n"));
  }
  return result.data;
}

// Product Validation
export const productSchema = z.object({
  name: z
    .string({ message: "name must be string" })
    .min(4, { message: "Name must be at least 4 characters" }),
  company: z
    .string({ message: "company must be string" })
    .min(3, { message: "Company Name must be at least 4 characters" }),
  description: z
    .string({ message: "description must be string" })
    .refine(
      (data) => data.split(" ").length < 10 || data.split(" ").length > 4,
      { message: "Description must be between 4 and 10 words" },
    ),
  price: z.coerce
    .number({ message: "Please enter a valid number for price" })
    .min(1, { message: "Minimum price is 1" }),
  image: validateImageFile(),
  featured: z.coerce.boolean({ message: "featured field must be boolean" }),
});

// Image Validation:
export const imageSchema = z.object({
  image: validateImageFile(),
});
function validateImageFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File, { message: "Please upload a valid file" })
    .refine((file) => !file || file.size <= maxUploadSize, {
      message: `File size must be less than ${maxUploadSize}MB`,
    })
    .refine(
      (file) =>
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type)),
      {
        message: "Please enter a valid image format",
      },
    );
}
