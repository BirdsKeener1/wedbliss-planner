import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Crown, Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-elegant flex items-center justify-center p-6">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-primary/20"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="h-16 w-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-blush/30"
          animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Crown className="h-12 w-12" />
        </motion.div>
      </div>

      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Crown className="h-12 w-12 text-primary" />
            <span className="text-3xl font-playfair font-bold text-primary">WedBliss</span>
          </div>

          <h1 className="text-8xl md:text-9xl font-playfair font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off like wedding guests at cocktail hour.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="elegant" size="lg" onClick={() => window.location.href = "/"}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return Home
            </Button>
            <Button variant="champagne" size="lg">
              Contact Support
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
