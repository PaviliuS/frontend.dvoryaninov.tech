"use client";

import { ContactList } from "@/models/contacts";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { LogoModule } from "./logo";
import { NavbarModule } from "./navbar";

export function DialogModule() {
  const t = useTranslations();

  const [open, setOpen] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 768) {
      setOpen(false);
    }
  }, [width]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          title={t("config.openMenu")}
          size="icon-base"
          rounded={"sm"}
          variant="link"
          onClick={() => {
            setOpen(!open);
          }}
          className="flex md:hidden"
        >
          <Menu className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="scrollbar-hidden bottom-4 max-h-[calc(100%-32px)] overflow-y-auto overflow-x-hidden">
        <div className="hidden">
          <DialogTitle>{t("metadata.title")}</DialogTitle>
          <DialogDescription>{t("metadata.description")}</DialogDescription>
        </div>
        <div className="container">
          <div className="flex w-full flex-col">
            <div className="flex w-full flex-row items-center justify-between gap-3 py-2">
              <LogoModule />
              <Button
                title={t("config.hideMenu")}
                size="icon-base"
                rounded={"sm"}
                onClick={() => {
                  setOpen(!open);
                }}
                variant="link"
                className="flex translate-x-2.5 md:hidden"
              >
                <X className="size-5" />
              </Button>
            </div>
            <div className="flex w-full border-primary/10 border-y py-4">
              <NavbarModule
                onClick={() => {
                  setOpen(false);
                }}
              />
            </div>
            <ContactList size="sm" className="py-4" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
