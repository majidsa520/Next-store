import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
type TextareaInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  className?: string;
};
export default function TextareaInput({
  name,
  label,
  defaultValue = "",
  className = "",
}: TextareaInputProps) {
  return (
    <div className={cn(className)}>
      <Label htmlFor={name} className="mb-2 capitalize">
        {label || name}
      </Label>
      <Textarea
        name={name}
        rows={5}
        defaultValue={defaultValue}
        required
        className="leading-loose"
      />
    </div>
  );
}
