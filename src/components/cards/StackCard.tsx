import clsx from "clsx";

interface StackCardProps {
  name: string;
  icon: JSX.Element;
}

export default function StackCard({ name, icon }: StackCardProps) {
  return (
    <div className="px-2">
      <div
        className={clsx(
          "w-full px-4 py-2",
          "text-sm font-medium md:text-base",
          "flex items-center gap-2",
          "rounded-md border-t border-solid",
          "border-primary-gradient dark:border-secondary-gradient",
          "dark:border-opacity-50",
          "shadow-md shadow-primary-gradient",
          "dark:shadow-secondary-gradient",
        )}
      >
        {icon}
        {name}
      </div>
    </div>
  );
}
