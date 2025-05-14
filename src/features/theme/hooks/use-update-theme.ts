"use client";

import { useTheme } from "next-themes";

export const useUpdateTheme = () => {
  const { theme, setTheme } = useTheme();

  const isLight = theme === "light";
  const isDark = theme === "dark";
  const isSystem = theme === "system";

  const updateTheme = (value: "light" | "system" | "dark") => {
    setTheme(value);
  };

  return { theme, isLight, isDark, isSystem, updateTheme };
};
