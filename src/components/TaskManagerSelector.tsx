import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Home, ArrowLeft, Sparkles, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TaskManagerSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-secondary py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Choose Your Task Manager Type
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select the type of task manager that best fits your needs. You can always switch between them later.
          </p>
        </div>

        {/* Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Professional Option */}
          <Card className="glass-card p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-productive-purple/30 group cursor-pointer hover-lift animate-slide-in-left"
                onClick={() => navigate('/professional-setup')}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-productive-purple/10 rounded-full mb-6 group-hover:bg-productive-purple/20 transition-colors group-hover:scale-110 duration-300">
                <Briefcase className="text-productive-purple" size={32} />
              </div>
              
              <Badge variant="secondary" className="mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Sparkles className="mr-1" size={12} />
                AI-Powered
              </Badge>
              
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Perfect for work projects, business goals, and professional development. 
                Includes AI-powered scheduling and advanced productivity features.
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground mb-8">
                <div className="flex items-center justify-center">
                  <Users className="mr-2" size={14} />
                  Team collaboration features
                </div>
                <div className="flex items-center justify-center">
                  <Sparkles className="mr-2" size={14} />
                  AI schedule optimization
                </div>
              </div>
              
              <Button variant="productivity" size="lg" className="w-full group-hover:scale-105 transition-transform">
                Choose Professional
              </Button>
            </div>
          </Card>

          {/* Personal Option */}
          <Card className="glass-card p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-productive-blue/30 group cursor-pointer hover-lift animate-slide-in-right"
                onClick={() => navigate('/personal-setup')}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-productive-blue/10 rounded-full mb-6 group-hover:bg-productive-blue/20 transition-colors group-hover:scale-110 duration-300">
                <Home className="text-productive-blue" size={32} />
              </div>
              
              <Badge variant="secondary" className="mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Coming Soon
              </Badge>
              
              <h3 className="text-2xl font-bold mb-4">Personal</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ideal for personal goals, daily habits, and life organization. 
                Simple yet powerful tools to manage your personal productivity.
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground mb-8">
                <div className="flex items-center justify-center">
                  <Home className="mr-2" size={14} />
                  Personal goal tracking
                </div>
                <div className="flex items-center justify-center">
                  <Sparkles className="mr-2" size={14} />
                  Habit formation tools
                </div>
              </div>
              
              <Button variant="outline" size="lg" className="w-full" disabled>
                Coming Soon
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TaskManagerSelector;