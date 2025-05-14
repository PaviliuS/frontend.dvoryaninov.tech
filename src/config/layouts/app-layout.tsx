import type { ReactNode } from "react";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

interface AppLayoutProps {
  children: ReactNode;
}
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex w-full flex-1 flex-col">{children}</main>
      <Footer />
    </>
  );
}
