"use client";

interface TitleProps {
  title: string;
  description?: string;
}
export function Title({ title, description = "" }: TitleProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-balance break-words font-medium text-[28px] leading-tight md:text-[40px]">
        {title}
      </h2>
      {description ? (
        <p className="text-balance break-words text-base text-primary/80 lg:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
