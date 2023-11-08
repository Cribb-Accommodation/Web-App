import PreviewListing from "@/components/LandingPage/featuredAccomodations";
import Footer from "@/components/LandingPage/footer";
import Getstarted from "@/components/LandingPage/getstarted";
import Hero from "@/components/LandingPage/hero";
import Services from "@/components/LandingPage/services";

export default function Home() {
  return (
    <main className="h-screen leading-[normal]">
      <Hero />
      <PreviewListing />
      <Services />
      <Getstarted />
      <Footer />
    </main>
  );
}
