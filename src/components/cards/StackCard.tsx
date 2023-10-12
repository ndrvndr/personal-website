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
          "flex items-center gap-2 rounded-full",
          "border border-solid",
          "border-primary-gradient dark:border-secondary-gradient",
          "dark:border-opacity-50",
          "shadow-lg shadow-primary-gradient",
          "dark:shadow-secondary-gradient",
        )}
      >
        <div className="h-6 w-6">{icon}</div>
        <div className="whitespace-nowrap">{name}</div>
      </div>
    </div>
  );
}
