import clsx from "clsx";

export default function InputForm({
  id,
  label,
  placeholder,
  type,
  value,
}: InputFormProps) {
  const formattedValue = Array.isArray(value) ? value.join(" ") : value;

  return (
    <div className="mb-4 w-full">
      <label htmlFor={id} className="primary text-sm md:text-base">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "border__color",
          "secondary text-sm",
          "mt-2 w-full px-2 py-3",
          "rounded-md bg-transparent",
          "placeholder:text-sm placeholder:text-neutral-500",
          "focus:outline-none",
          "md:text-base md:placeholder:text-base",
        )}
        value={formattedValue}
      />
    </div>
  );
}

interface InputFormProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value?: string | string[];
}
