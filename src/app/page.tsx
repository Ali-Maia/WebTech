import AboutUs from "@/components/about-us";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}
