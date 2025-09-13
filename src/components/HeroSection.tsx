import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, MapPin } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={campusHero} 
          alt="Modern university campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary-glow/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Intelligent Campus
          <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            Information System
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Your AI-powered assistant for all campus-related queries and services. 
          Get instant answers about schedules, facilities, events, and more.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="xl" className="group">
            <MessageCircle className="group-hover:scale-110 transition-transform" />
            Start Chatting
          </Button>
          <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Calendar className="mr-2" />
            View Services
          </Button>
        </div>
        
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <MessageCircle className="w-12 h-12 mb-4 mx-auto text-white" />
            <h3 className="text-xl font-semibold mb-2">AI Chat Assistant</h3>
            <p className="text-white/80">Get instant answers to your campus questions 24/7</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Calendar className="w-12 h-12 mb-4 mx-auto text-white" />
            <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
            <p className="text-white/80">Access academic schedules and facility timings instantly</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <MapPin className="w-12 h-12 mb-4 mx-auto text-white" />
            <h3 className="text-xl font-semibold mb-2">Campus Navigation</h3>
            <p className="text-white/80">Find dining, library resources, and administrative services</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;