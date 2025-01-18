import Layout from "@/components/Layout";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/hello");
  const thing = await data.json();
  console.log("%c thing", "color: orange", thing);

  return <Layout>Landing</Layout>;
}
