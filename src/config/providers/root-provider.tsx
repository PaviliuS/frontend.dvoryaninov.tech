import "@/config/styles/globals.css";

import type { ReactNode } from "react";

import localFont from "next/font/local";

import { LocaleProvider } from "./locale-provider";
import { ThemeProvider } from "./theme-provider";

const roboto = localFont({
  src: "../../../public/fonts/Roboto-Variable.ttf",
  variable: "--font-roboto",
});

type RootProviderProps = {
  children: ReactNode;
  locale: string;
};
export function RootProvider({ children, locale }: RootProviderProps) {
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${roboto.variable}`}
    >
      <body>
        <LocaleProvider locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
