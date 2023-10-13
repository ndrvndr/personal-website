import clsx from "clsx";

export default function InputForm({
  id,
  label,
  placeholder,
  type,
}: InputFormProps) {
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
          "mt-2 w-full px-2 py-3",
          "secondary text-sm",
          "rounded-md bg-transparent",
          "placeholder:text-sm placeholder:text-neutral-500",
          "border__color",
          "focus:outline-none",
          "md:text-base md:placeholder:text-base",
        )}
      />
    </div>
  );
}

interface InputFormProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}
