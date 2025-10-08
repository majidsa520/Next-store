"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import { LoaderIcon } from "lucide-react";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};
export default function SubmitButton({
  className = "",
  text = "Submit",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button className={cn("w-auto justify-self-start", className)} size={size}>
      {pending ? (
        <>
          <ReloadIcon className="size-4 animate-spin" />
          <span>Please wait</span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </Button>
  );
}
