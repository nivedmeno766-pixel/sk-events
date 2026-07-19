import { prisma } from "@/lib/prisma";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import ScrollToTop from "@/components/ScrollToTop";

export default async function Home() {
  const settings = await prisma.websiteSettings.findUnique({
    where: {
      id: "main",
    },
  });

  return (
    <>
      <Navbar />

      <main>
        <Hero settings={settings} />
        <About />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Contact settings={settings} />
      </main>

      <Footer settings={settings} />
      <FloatingWhatsapp settings={settings} />
      <ScrollToTop />
    </>
  );
}