import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import ChatInterface from "@/components/ChatInterface";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesGrid />
      <ChatInterface />
      <Footer />
    </div>
  );
};

export default Index;
