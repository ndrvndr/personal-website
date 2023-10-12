import clsx from "clsx";

export default function Textarea({ id, label, placeholder }: TextareaProps) {
  return (
    <div className="mt-4">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        rows={5}
        cols={5}
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

interface TextareaProps {
  id: string;
  label: string;
  placeholder: string;
}
