import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const name = "image";

export default function ImageInput() {
  return (
    <div className="">
      <Label htmlFor={name} className="mb-2 capitalize">
        Image
      </Label>
      <Input type="file" id={name} name={name} required accept="image/*" />
    </div>
  );
}
