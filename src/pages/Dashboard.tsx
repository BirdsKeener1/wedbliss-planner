import { motion } from "framer-motion";
import { 
  Crown, 
  Users, 
  Calendar, 
  Gift, 
  TrendingUp, 
  Bell, 
  Heart,
  Plus,
  Search,
  Filter,
  MoreVertical,
  MapPin,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Events",
      value: "8",
      change: "+12%",
      icon: Calendar,
      color: "text-emerald"
    },
    {
      title: "Total Guests",
      value: "1,247",
      change: "+8%",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Total Revenue",
      value: "$45,230",
      change: "+23%",
      icon: Gift,
      color: "text-sunset"
    },
    {
      title: "Success Rate",
      value: "98.5%",
      change: "+2%",
      icon: TrendingUp,
      color: "text-royal-purple"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Ahmed & Fatima Wedding",
      date: "Dec 15, 2024",
      venue: "Pearl Continental Hotel",
      guests: 350,
      status: "Planning",
      progress: 75,
      statusColor: "bg-emerald/20 text-emerald"
    },
    {
      id: 2,
      title: "Hassan & Zara Nikah",
      date: "Jan 8, 2025",
      venue: "Masjid Al-Noor",
      guests: 150,
      status: "Confirmed",
      progress: 100,
      statusColor: "bg-primary/20 text-primary"
    },
    {
      id: 3,
      title: "Sarah & Omar Mehndi",
      date: "Feb 20, 2025",
      venue: "Royal Gardens",
      guests: 200,
      status: "Planning",
      progress: 45,
      statusColor: "bg-sunset/20 text-sunset"
    },
  ];

  const recentActivity = [
    {
      action: "New guest RSVP",
      event: "Ahmed & Fatima Wedding",
      time: "2 minutes ago",
      icon: Users
    },
    {
      action: "Payment received",
      event: "Hassan & Zara Nikah",
      time: "1 hour ago",
      icon: Gift
    },
    {
      action: "Menu updated",
      event: "Sarah & Omar Mehndi",
      time: "3 hours ago",
      icon: Calendar
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-primary" />
              <span className="text-2xl font-playfair font-bold text-primary">WedBliss</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">AA</span>
              </div>
              <span className="font-medium">Ahmed Ali</span>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Welcome Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-playfair font-bold text-foreground mb-2">
            Welcome back, Ahmed! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your wedding events today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-gradient-elegant border-border/50 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className={`text-sm ${stat.color} flex items-center`}>
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.change}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Events Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-playfair font-bold text-foreground">
                  Active Events
                </h2>
                <Button variant="elegant" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Event
                </Button>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search events..." 
                    className="pl-10 bg-background/50"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                            <Heart className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-playfair font-semibold text-foreground">
                              {event.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {event.date}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {event.venue}
                              </div>
                              <div className="flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                {event.guests} guests
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={event.statusColor}>
                            {event.status}
                          </Badge>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium text-foreground">{event.progress}%</span>
                        </div>
                        <Progress value={event.progress} className="h-2" />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Activity Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Recent Activity
              </h2>
              
              <Card className="p-6 bg-gradient-elegant border-border/50 shadow-soft">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card/50 transition-colors">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">
                            {activity.action}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.event}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {activity.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Card>

              <Card className="mt-6 p-6 bg-gradient-hero">
                <div className="text-center">
                  <Crown className="h-12 w-12 text-primary-foreground mx-auto mb-3" />
                  <h3 className="font-playfair font-bold text-primary-foreground mb-2">
                    Upgrade to Pro
                  </h3>
                  <p className="text-primary-foreground/90 text-sm mb-4">
                    Get access to premium features and unlimited events
                  </p>
                  <Button variant="glass" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;