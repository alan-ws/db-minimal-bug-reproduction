export const dynamicParams = true;

export function generateStaticParams() {
  const slugs = [{slug: 'one'},{slug: 'two'},{slug: 'three'}]
  return slugs;
}

export default function Page({ params }: any) {
  return <h1>Slug: {params.slug}</h1>;
}
