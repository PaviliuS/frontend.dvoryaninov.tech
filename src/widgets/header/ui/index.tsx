"use client";

import { LocaleButton } from "@/features/locale";
import { ThemeButton } from "@/features/theme";

import { DialogModule } from "./modules/dialog";
import { LogoModule } from "./modules/logo";
import { NavbarModule } from "./modules/navbar";

export function Header() {
  return (
    <header className="-top-1 fixed left-0 z-[80] flex w-full min-w-[375px] bg-gradient-to-b from-background to-transparent py-4">
      <div className="container px-3">
        <div className="flex w-full flex-row items-center gap-8 rounded-base border border-primary/10 bg-background px-4 py-2 md:gap-10 lg:gap-12">
          <div className="flex">
            <LogoModule />
          </div>
          <div className="hidden md:flex">
            <NavbarModule />
          </div>
          <div className="ml-auto flex translate-x-2.5 flex-row gap-2">
            <LocaleButton />
            <ThemeButton />
            <DialogModule />
          </div>
        </div>
      </div>
    </header>
  );
}
