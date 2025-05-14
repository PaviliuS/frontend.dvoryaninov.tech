import { cn } from "@/shared/utils/cn";

interface SkillItemProps {
  name: string;
  className?: string;
}
export function SkillItem({ name, className }: SkillItemProps) {
  return (
    <div
      className={cn(
        "flex max-w-full shrink-0 items-center rounded-base border border-primary/10 px-4 py-2",
        className,
      )}
    >
      <p className="w-full truncate text-base text-primary/80 lg:text-lg">
        {name}
      </p>
    </div>
  );
}
