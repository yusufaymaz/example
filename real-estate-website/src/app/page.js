import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties"; 
import CallToAction from "@/components/CallToAction";
import ShowcaseImage from "@/components/ShowcaseImage";
import FAQ from "@/components/FAQ";
import Testimonials from '@/components/Testimonials';
import ScrollingGallery from '@/components/ScrollingGallery';
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />

        <CallToAction />
        <ShowcaseImage /> 
        <Properties /> 
        <FAQ />
        <Testimonials />
        <ScrollingGallery />
        <Footer /> 
      </main>

      
    </>
  );
}

