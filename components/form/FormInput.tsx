import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
};

export default function FormInput({
  name,
  type,
  label = "",
  placeholder,
  defaultValue,
}: FormInputProps) {
  return (
    <div className="">
      <Label htmlFor={name} className="mb-2 capitalize">
        {label || name}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        className=""
      />
    </div>
  );
}
