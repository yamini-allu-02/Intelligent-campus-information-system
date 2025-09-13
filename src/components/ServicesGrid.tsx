import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Utensils, 
  BookOpen, 
  FileText,
  Users,
  GraduationCap,
  ChevronRight
} from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Academic Schedules",
    description: "View class timetables, exam schedules, and academic calendar",
    features: ["Class Timetables", "Exam Dates", "Academic Calendar", "Course Registration"],
  },
  {
    icon: Clock,
    title: "Facility Timings",
    description: "Check opening hours for all campus facilities",
    features: ["Library Hours", "Lab Access", "Office Hours", "Recreation Centers"],
  },
  {
    icon: MapPin,
    title: "Campus Events",
    description: "Stay updated with all campus activities and events",
    features: ["Student Events", "Workshops", "Seminars", "Cultural Programs"],
  },
  {
    icon: Utensils,
    title: "Dining Services",
    description: "Find dining options, menus, and meal plan information",
    features: ["Cafeteria Menus", "Meal Plans", "Dietary Options", "Food Locations"],
  },
  {
    icon: BookOpen,
    title: "Library Resources",
    description: "Access library catalog, booking systems, and study spaces",
    features: ["Book Catalog", "Study Rooms", "Digital Resources", "Research Help"],
  },
  {
    icon: FileText,
    title: "Administrative Services",
    description: "Get help with forms, procedures, and administrative tasks",
    features: ["Student Records", "Financial Aid", "Registration", "Transcripts"],
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive information modules to help you navigate campus life efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 mr-2 text-primary/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                >
                  Explore Service
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">AI Assistance</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Campus Services</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;