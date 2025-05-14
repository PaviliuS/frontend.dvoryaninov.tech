const staticPaths = ["/ru/home/", "/en/home/"];

export default async function sitemap() {
  return [...staticPaths].map((item) => ({
    url: process.env.NEXT_PUBLIC_URL + item,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
  }));
}
