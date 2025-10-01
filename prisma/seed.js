import products from "./products.json" with { type: "json" };
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  // for (const product in products) {
  //   await prisma.product.create()
  // }
  await prisma.product.createMany({ data: products });
}
// console.log(products);
main()
  .catch((e) => {
    console.log(e);
  })
  .finally(() => prisma.$disconnect());
