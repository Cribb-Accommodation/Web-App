import PreviewListing from "@/components/featuredAccomodations";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="h-screen leading-[normal]">
      <Hero />
      <PreviewListing />
      <Services />
      <Footer />
    </main>
  );
}
