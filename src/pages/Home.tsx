import { motion } from "framer-motion";
import { Heart, Sparkles, Users, Calendar, Gift, Crown, Camera, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/wedding-hero.jpg";

const FloatingElement = ({ children, delay = 0, className = "" }: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

const services = [
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Complete wedding planning from start to finish with our elegant management system.",
    color: "text-emerald"
  },
  {
    icon: Users,
    title: "Guest Management",
    description: "Seamlessly manage your guest list, RSVPs, and seating arrangements.",
    color: "text-royal-purple"
  },
  {
    icon: Gift,
    title: "Payment Tracking",
    description: "Track gifts and payments with integrated QR codes and mobile payments.",
    color: "text-sunset"
  },
  {
    icon: Crown,
    title: "Wedding Cards",
    description: "Design beautiful digital wedding invitations with our elegant templates.",
    color: "text-primary"
  }
];

const testimonials = [
  {
    name: "Sarah & Ahmed",
    quote: "WedBliss made our wedding planning effortless and beautiful. The guest management system was a lifesaver!",
    role: "Happy Couple"
  },
  {
    name: "Fatima Khan",
    quote: "As a wedding planner, this platform has revolutionized how I manage events. My clients love the digital experience.",
    role: "Wedding Planner"
  },
  {
    name: "Hassan & Zara",
    quote: "The payment tracking and QR system made our mehndi and nikah celebrations seamless for all our guests.",
    role: "Satisfied Clients"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Crown className="h-8 w-8 text-primary" />
            <span className="text-2xl font-playfair font-bold text-primary">WedBliss</span>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex space-x-8 font-inter"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="ghost" size="sm" onClick={() => window.location.href = "/login"}>
              Login
            </Button>
            <Button variant="elegant" size="sm" onClick={() => window.location.href = "/register"}>
              Get Started
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Elegant wedding celebration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        </div>

        {/* Floating Elements */}
        <FloatingElement delay={0} className="top-20 left-10 text-primary opacity-20">
          <Heart className="h-12 w-12" />
        </FloatingElement>
        <FloatingElement delay={2} className="top-32 right-16 text-blush opacity-30">
          <Sparkles className="h-8 w-8" />
        </FloatingElement>
        <FloatingElement delay={4} className="bottom-40 left-20 text-sunset opacity-25">
          <Crown className="h-10 w-10" />
        </FloatingElement>
        <FloatingElement delay={1} className="top-40 right-32 text-lavender opacity-20">
          <Music className="h-6 w-6" />
        </FloatingElement>
        <FloatingElement delay={3} className="bottom-60 right-10 text-emerald opacity-30">
          <Camera className="h-8 w-8" />
        </FloatingElement>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-6 leading-tight">
              Your Dream Wedding,{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Perfectly Managed
              </span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Elegant wedding planning platform with seamless guest management, 
            digital invitations, and payment tracking for your perfect celebration.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              variant="elegant" 
              size="xl" 
              className="min-w-[200px]"
              onClick={() => window.location.href = "/register"}
            >
              <Crown className="mr-2 h-5 w-5" />
              Start Planning
            </Button>
            <Button variant="glass" size="xl" className="min-w-[200px]">
              Watch Demo
            </Button>
          </motion.div>

          <motion.div 
            className="mt-12 flex justify-center items-center space-x-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm">Happy Couples</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50,000+</div>
              <div className="text-sm">Guests Managed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-champagne/20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Our Wedding Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create the perfect wedding celebration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4`}>
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Love Stories & Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from couples who made their dream weddings reality with WedBliss
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-elegant border-border/50 shadow-soft">
                  <div className="text-center">
                    <div className="mb-4">
                      <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                    </div>
                    <p className="text-foreground italic mb-4 font-inter">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="font-playfair font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-foreground mb-4">
              Ready to Plan Your Perfect Wedding?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of couples who chose WedBliss for their special day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => window.location.href = "/register"}
              >
                <Crown className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              <Button variant="champagne" size="xl">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="h-6 w-6 text-primary" />
                <span className="text-xl font-playfair font-bold">WedBliss</span>
              </div>
              <p className="text-primary-foreground/80">
                Making dream weddings a beautiful reality with elegant planning tools.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Event Planning</li>
                <li>Guest Management</li>
                <li>Digital Invitations</li>
                <li>Payment Tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>About Us</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 WedBliss. All rights reserved. Made with ❤️ for beautiful weddings.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;