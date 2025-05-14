"use client";

interface JumbotronProps {
  title: string;
  subTitle?: string;
  description?: string;
}
export function Jumbotron({
  title,
  subTitle = "",
  description = "",
}: JumbotronProps) {
  return (
    <div className="relative flex w-full flex-col gap-8">
      <div className="flex w-full flex-col">
        <h1 className="text-balance break-words font-medium text-[28px] leading-tight sm:text-[40px] md:text-[50px] lg:text-[60px]">
          {title}
        </h1>
        {subTitle ? (
          <p className="text-balance break-words font-medium text-[28px] text-purple leading-tight sm:text-[40px] md:text-[50px] lg:text-[60px]">
            {subTitle}
          </p>
        ) : null}
      </div>
      {description ? (
        <p className="flex w-full text-balance break-words text-base text-primary/80 lg:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
