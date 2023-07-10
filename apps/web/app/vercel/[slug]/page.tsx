import { notFound } from "next/navigation";

export const dynamicParams = true;

export function generateStaticParams() {
  const slugs = [{ slug: "one" }, { slug: "two" }, { slug: "three" }];
  return slugs;
}

export default function Page({ params }: { params: { slug: string } }) {
  notFound();
  return <h1>Slug: {params.slug}</h1>;
}
