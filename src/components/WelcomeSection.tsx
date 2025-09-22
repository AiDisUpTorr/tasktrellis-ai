import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote, ArrowRight, CheckCircle, Target } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const WelcomeSection = () => {
  const inspirationalQuotes = [
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones."
  ];

  const randomQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Main Heading */}
        <div className="mb-8 animate-float">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Welcome To Your
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text bg-white">
            PRODUCTIVE SPACE
          </h2>
        </div>

        {/* Inspirational Quote */}
        <Card className="glass-effect p-6 mb-12 max-w-2xl">
          <div className="flex items-start space-x-4">
            <Quote className="text-white/80 mt-1 flex-shrink-0" size={24} />
            <p className="text-white/90 text-lg italic leading-relaxed">
              {randomQuote}
            </p>
          </div>
        </Card>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl">
          <Card className="glass-effect p-6 text-center">
            <Target className="text-white mx-auto mb-4" size={32} />
            <h3 className="text-white font-semibold mb-2">Smart Scheduling</h3>
            <p className="text-white/80 text-sm">AI-powered schedule creation and optimization</p>
          </Card>
          
          <Card className="glass-effect p-6 text-center">
            <CheckCircle className="text-white mx-auto mb-4" size={32} />
            <h3 className="text-white font-semibold mb-2">Task Management</h3>
            <p className="text-white/80 text-sm">Professional and personal task organization</p>
          </Card>
          
          <Card className="glass-effect p-6 text-center">
            <Quote className="text-white mx-auto mb-4" size={32} />
            <h3 className="text-white font-semibold mb-2">Focus Techniques</h3>
            <p className="text-white/80 text-sm">Pomodoro and distraction-free workspace</p>
          </Card>
        </div>

        {/* CTA Button */}
        <Button 
          variant="hero" 
          size="xl" 
          className="group"
          onClick={() => window.location.href = '/task-manager'}
        >
          Create Task Manager
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default WelcomeSection;