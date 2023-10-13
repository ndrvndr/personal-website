import clsx from "clsx";

export default function Textarea({ id, label, placeholder }: TextareaProps) {
  return (
    <div className="mt-4">
      <label htmlFor={id} className="text-sm md:text-base">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        rows={4}
        cols={4}
        className={clsx(
          "mt-2 w-full p-2",
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

interface TextareaProps {
  id: string;
  label: string;
  placeholder: string;
}
