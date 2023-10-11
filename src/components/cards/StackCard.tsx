interface StackCardProps {
  name: string;
  icon: JSX.Element;
}

export default function StackCard({ name, icon }: StackCardProps) {
  return (
    <div className="px-2">
      <div className="flex w-full space-x-2 rounded-full px-4 py-2 shadow-md">
        <div className="h-6 w-6">{icon}</div>
        <div className="whitespace-nowrap">{name}</div>
      </div>
    </div>
  );
}
