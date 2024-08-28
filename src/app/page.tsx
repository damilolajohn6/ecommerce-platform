import Hero from "./components/Hero";
import NewestProduct from "./components/NewestProduct";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <NewestProduct />
    </div>
  );
}
