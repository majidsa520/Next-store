import { twMerge, ClassNameValue } from "tailwind-merge";
import clsx from "clsx";

export function cn(...classes: ClassNameValue[]) {
  return twMerge(clsx(classes));
}
