import { useEffect, useState } from "react";

export default function useLocalStorageState(
  field: string,
  initialState: boolean,
) {
  const [state, setState] = useState(() => {
    const value = localStorage.getItem(field);
    return value ? JSON.parse(value) : initialState;
  });
  useEffect(() => {
    localStorage.setItem(field, JSON.stringify(state));
  }, [state, field]);
  return [state, setState];
}
