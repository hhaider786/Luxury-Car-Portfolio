import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Fleet />
      <Features />
      <Services />
      <Booking />
      <Testimonials />
      <About />
      <Footer />
    </main>
  );
}
