import Image from "next/image";
import Hero from "./components/Hero";
import ProductData from "./components/ProductData";
import Testimonial from "./components/Testimonial";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductData />
      <Testimonial />
      <Footer />

    </main>
  );
}
