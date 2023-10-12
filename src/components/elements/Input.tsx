import clsx from "clsx";

export default function InputForm({
  id,
  label,
  placeholder,
  type,
}: InputFormProps) {
  return (
    <div className="mt-4">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "mt-2 w-full p-2",
          "rounded-md bg-transparent",
          "placeholder:text-sm",
          "placeholder:opacity-50",
          "border-2 border-solid border-gray-200",
          "dark:border-[#262626]",
          "focus:outline-none",
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
