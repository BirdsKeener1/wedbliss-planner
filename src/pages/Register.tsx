import { motion } from "framer-motion";
import { Crown, Heart, User, Mail, Lock, Phone, Upload, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    location: "",
    cnic: null as File | null,
    termsAccepted: false,
  });

  const steps = [
    { title: "Personal Info", icon: User },
    { title: "Business Details", icon: Crown },
    { title: "Verification", icon: Upload },
  ];

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const progress = (currentStep / 3) * 100;

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

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg"
      >
        <Card className="p-8 bg-card/80 backdrop-blur-md border-border/50 shadow-elegant">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div 
              className="flex items-center justify-center space-x-2 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Crown className="h-8 w-8 text-primary" />
              <span className="text-2xl font-playfair font-bold text-primary">WedBliss</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-3xl font-playfair font-bold text-foreground mb-2">
                Join WedBliss
              </h1>
              <p className="text-muted-foreground">
                Start creating beautiful wedding experiences
              </p>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = currentStep === index + 1;
                const isCompleted = currentStep > index + 1;
                
                return (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center space-y-2 ${
                      isActive ? 'text-primary' : isCompleted ? 'text-primary/70' : 'text-muted-foreground'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                      isActive ? 'border-primary bg-primary text-primary-foreground' : 
                      isCompleted ? 'border-primary bg-primary/20' : 'border-muted'
                    }`}>
                      <StepIcon className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-medium">{step.title}</span>
                  </div>
                );
              })}
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Form Steps */}
          <form className="space-y-6">
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="mt-1"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="mt-1"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      placeholder="+92 300 1234567"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a strong password"
                      className="pl-10"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="businessName">Business/Wedding Planner Name</Label>
                  <div className="relative mt-1">
                    <Crown className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="businessName"
                      placeholder="Dream Weddings Co."
                      className="pl-10"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Business Location</Label>
                  <div className="relative mt-1">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="Karachi, Pakistan"
                      className="pl-10"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div className="p-4 bg-champagne/20 rounded-lg border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">Business Type</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="businessType" value="wedding-planner" className="text-primary" />
                      <span>Wedding Planner</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="businessType" value="individual" className="text-primary" />
                      <span>Individual/Personal Use</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="businessType" value="venue" className="text-primary" />
                      <span>Wedding Venue</span>
                    </label>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="cnic">CNIC Upload (for verification)</Label>
                  <div className="mt-1 border-2 border-dashed border-border/50 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop your CNIC or click to upload
                    </p>
                    <Button variant="outline" size="sm" type="button">
                      Choose File
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, termsAccepted: checked as boolean })
                    }
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-5">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </Label>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-foreground">
                    <strong>Verification Process:</strong> After submitting your registration, 
                    our team will review your documents within 24-48 hours. You'll receive 
                    an email confirmation once your account is approved.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              {currentStep > 1 ? (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={prevStep}
                >
                  Previous
                </Button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <Button 
                  type="button" 
                  variant="elegant" 
                  onClick={nextStep}
                >
                  Next Step
                </Button>
              ) : (
                <Button 
                  type="submit" 
                  variant="elegant"
                  disabled={!formData.termsAccepted}
                >
                  Create Account
                </Button>
              )}
            </div>
          </form>

          <div className="mt-6 text-center">
            <span className="text-muted-foreground">Already have an account? </span>
            <a 
              href="/login" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Sign In
            </a>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;