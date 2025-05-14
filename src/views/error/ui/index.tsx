"use client";

import { useHasHistory } from "@/shared/hooks/utils/use-has-history";
import { Link } from "@/shared/i18n/routing";
import { Button, buttonVariants } from "@/shared/ui/button";
import { Title } from "@/shared/ui/modules/title";
import { cn } from "@/shared/utils/cn";
import { useRouter } from "next/navigation";

interface NotFoundViewProps {
  title: string;
  description: string;
  button: string;
}
export function NotFoundView({
  title,
  description,
  button,
}: NotFoundViewProps) {
  const { back } = useRouter();

  const hasHistory = useHasHistory();

  return (
    <div className="fade-in flex w-full animate-in flex-col pt-[180px] pb-[100px] lg:pt-[220px]">
      <section>
        <div className="container">
          <div className="flex w-full flex-col gap-8">
            <Title title={title} description={description} />
            {hasHistory ? (
              <Button
                variant="ghost"
                onClick={() => {
                  back();
                }}
                className="w-[180px]"
              >
                {button}
              </Button>
            ) : (
              <Link
                href={"/"}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-[180px]"
                )}
              >
                {button}
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
