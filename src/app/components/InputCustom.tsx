import { Input } from "@nextui-org/react";

type TInputCustomProps = {
    label: string;
    type: string;
    value?: string;
    onChange: (value: string) => void;
  };
  
export default function InputCustom({ label, type, value, onChange }: TInputCustomProps) {
    return (
      <Input
        isClearable
        height={5}
        type={type}
        value={value || ""}
        variant="bordered"
        labelPlacement="outside"
        className=""
        label={<p className="text-black font-semibold">{label}</p>}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  