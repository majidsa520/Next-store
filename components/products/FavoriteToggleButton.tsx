"use client";
import { Button } from "@/components/ui/button";
import type { MouseEvent } from "react";
import { FaHeart } from "react-icons/fa";

export default function FavoriteToggleButton({
  productId,
}: {
  productId: number;
}) {
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();
  }
  return (
    <Button
      size="icon"
      variant="outline"
      className="cursor-pointer rounded p-2"
      onClick={handleClick}
    >
      <FaHeart />
    </Button>
  );
}
