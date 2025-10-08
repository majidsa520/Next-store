import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
type CheckboxInputProps = {
  label?: string;
  name: string;
  defaultChecked?: boolean;
  className?: string;
};
export default function CheckBoxInput({
  name,
  label,
  defaultChecked = false,
  className = "",
}: CheckboxInputProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Checkbox name={name} id={name} defaultChecked={defaultChecked} />
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
    </div>
  );
}
