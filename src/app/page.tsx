
import { FooterComponent } from "@/components/footer/Footer";
import ContactUs from "@/components/home/ContactUs";
import Feature from "@/components/home/Feature";
import GettingStated from "@/components/home/GettingStated";
import HeroSection from "@/components/home/HeroSection";
import WhyChoose from "@/components/home/WhyChoose";
import HeroScrollDemo from "@/components/home/HeroScrollDemo";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {

  return (
    <main className="bg-backgroundWhiteSmoke dark:bg-blend-darken w-full ">
      <Navigation/>
       <HeroSection/>
      <HeroScrollDemo/>
      <GettingStated/>
      <WhyChoose/>
      <Feature/>
      <ContactUs/> 
      <FooterComponent/>
    </main>
  );
}
