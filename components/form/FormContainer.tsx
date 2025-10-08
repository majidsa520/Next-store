"use client";
import type { ActionFunction } from "@/lib/types";
import { useActionState, useEffect, type ReactNode } from "react";
// the useFormState hook from react-dom has replaced with useActionState from react
// import { useFormState } from "react-dom";
import { toast } from "sonner";

const initialState = { message: "", success: false };

export default function FormContainer({
  children,
  action,
}: {
  children?: ReactNode;
  action: ActionFunction;
}) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) toast(state.message);
  }, [state]);
  return <form action={formAction}>{children}</form>;
}
