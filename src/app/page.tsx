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
      <div className="absolute w-[200px] h-[226px] bg-[#7214FF] blur-[150px] left-0 top-[300px] -z-10" />
      <div className="absolute w-[200px] h-[226px] bg-[#00BFFF] blur-[180px] right-16 top-[600px] -z-10" />
      <div className="absolute w-[200px] h-[226px] bg-[#5e0dd9] blur-[220px] left-0 top-[1600px] -z-10" />
      <div className="absolute w-[200px] h-[226px] bg-[#94e4ff] blur-[150px] right-16 top-[2400px] -z-10" />
    </>
  );
}
