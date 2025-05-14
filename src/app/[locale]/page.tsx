import { redirect } from "next/navigation";

export const revalidate = 600;
export const dynamic = "force-static";

export async function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}

export default async function Page() {
  redirect("/home");
}
