import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const name = "price";
type PriceInputProps = {
  defaultValue?: number;
  label?: string;
};
export default function PriceInput({
  defaultValue = 100,
  label,
}: PriceInputProps) {
  return (
    <div className="">
      <Label htmlFor={name} className="mb-2 capitalize">
        {label || name}
      </Label>
      <Input
        name={name}
        type="number"
        id={name}
        defaultValue={defaultValue}
        min={0}
      />
    </div>
  );
}
