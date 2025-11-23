import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ExternalLink, Bot, Clipboard, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProfessionalSetup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [schedule, setSchedule] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const aiTools = [
    {
      name: "ChatGPT",
      url: "https://chat.openai.com",
      description: "Ask ChatGPT to create a detailed work schedule for your goals"
    },
    {
      name: "Claude",
      url: "https://claude.ai",
      description: "Get Claude to design a comprehensive productivity plan"
    },
    {
      name: "Gemini",
      url: "https://gemini.google.com",
      description: "Use Gemini to generate structured task schedules"
    }
  ];

  const handleBuildSchedule = async () => {
    if (!schedule.trim()) {
      toast.error("Please paste your schedule before proceeding");
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/dashboard', { state: { schedule } });
    }, 3000);
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-secondary py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/task-manager')}
            className="mb-8 text-muted-foreground hover:text-foreground animate-fade-in"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Selection
          </Button>

          <div className="text-center mb-12 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">
              <Bot className="mr-1" size={12} />
              Step 1 of 2
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Create Your AI Schedule
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Use any AI tool to create a detailed schedule, then return here to build your productive workspace.
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {aiTools.map((tool, index) => (
              <Card key={index} className="glass-card p-6 hover:shadow-lg transition-all duration-300 hover-lift animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(tool.url, '_blank')}
                    className="hover:scale-105 transition-transform"
                  >
                    Open {tool.name}
                    <ExternalLink className="ml-2" size={14} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <Card className="glass-card p-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-semibold mb-4">💡 Pro Tip:</h3>
            <p className="text-muted-foreground mb-4">
              Ask the AI to create a detailed schedule with:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Specific tasks and time allocations</li>
              <li>Priority levels for each task</li>
              <li>Break times and focus sessions</li>
              <li>Weekly goals and milestones</li>
            </ul>
          </Card>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button 
              variant="productivity" 
              size="lg"
              onClick={() => setStep(2)}
              className="hover:scale-105 transition-transform"
            >
              I've Created My Schedule
              <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-secondary py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => setStep(1)}
          className="mb-8 text-muted-foreground hover:text-foreground animate-fade-in"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to AI Tools
        </Button>

        <div className="text-center mb-12 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4">
            <Clipboard className="mr-1" size={12} />
            Step 2 of 2
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Paste Your Schedule
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Copy the schedule from your AI tool and paste it below. We'll transform it into an interactive workspace.
          </p>
        </div>

        <Card className="glass-card p-8 animate-scale-in">
          <div className="space-y-6">
            <div>
              <Label htmlFor="schedule" className="text-lg font-semibold">
                Your AI-Generated Schedule
              </Label>
              <p className="text-muted-foreground text-sm mt-1 mb-4">
                Paste the complete schedule here. Include all tasks, timings, and priorities.
              </p>
              <Textarea
                id="schedule"
                placeholder="Paste your AI-generated schedule here...

Example:
**Monday - Project Planning Day**
9:00 AM - 10:30 AM: Review project requirements (High Priority)
10:30 AM - 10:45 AM: Break
10:45 AM - 12:00 PM: Create project timeline
..."
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                className="min-h-[300px] text-sm transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleBuildSchedule}
                disabled={isProcessing}
                className="min-w-[200px] hover:scale-105 transition-transform"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={20} />
                    Building...
                  </>
                ) : (
                  "Build Schedule"
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfessionalSetup;