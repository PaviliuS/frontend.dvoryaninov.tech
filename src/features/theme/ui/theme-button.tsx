"use client";

import { Button } from "@/shared/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useIsClient } from "usehooks-ts";
import { useUpdateTheme } from "../hooks/use-update-theme";

interface ThemeButtonProps {
  className?: string;
}
export function ThemeButton({ className = "" }: ThemeButtonProps) {
  const t = useTranslations("config");

  const isClient = useIsClient();

  const { isLight, updateTheme, isDark } = useUpdateTheme();

  return (
    <Button
      title={t("changeTheme")}
      size={"icon-base"}
      rounded={"sm"}
      variant="link"
      onClick={() => {
        updateTheme(isDark ? "light" : "dark");
      }}
      className={className}
    >
      {isDark && isClient ? <Moon className="size-5" /> : null}
      {isLight && isClient ? <Sun className="size-5" /> : null}
      {!isClient ? (
        <div className="size-5 animate-pulse rounded-base bg-primary/5" />
      ) : null}
    </Button>
  );
}
