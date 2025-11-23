import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, CheckCircle, Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const schedule = location.state?.schedule || "";
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [currentTask, setCurrentTask] = useState("Focus Session");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime(time => time - 1);
      }, 1000);
    } else if (pomodoroTime === 0) {
      setIsRunning(false);
      // Reset timer
      setPomodoroTime(25 * 60);
    }
    return () => clearInterval(interval);
  }, [isRunning, pomodoroTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const tasks = [
    { id: 1, title: "Review project requirements", time: "9:00 AM - 10:30 AM", priority: "High", completed: false },
    { id: 2, title: "Create project timeline", time: "10:45 AM - 12:00 PM", priority: "Medium", completed: false },
    { id: 3, title: "Team standup meeting", time: "2:00 PM - 2:30 PM", priority: "High", completed: false },
    { id: 4, title: "Code review session", time: "3:00 PM - 4:00 PM", priority: "Medium", completed: false },
  ];

  if (!schedule) {
    return (
      <div className="min-h-screen bg-gradient-secondary flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">No Schedule Found</h2>
          <p className="text-muted-foreground mb-6">
            Please create a schedule first to access your dashboard.
          </p>
          <Button onClick={() => navigate('/professional-setup')}>
            Create Schedule
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-secondary py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/professional-setup')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Setup
          </Button>
          
          <h1 className="text-3xl font-bold gradient-text">Your Productive Workspace</h1>
          <div /> {/* Spacer */}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Schedule */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card p-6 animate-slide-in-left hover-lift">
              <h2 className="text-2xl font-bold mb-6">Today's Schedule</h2>
              <div className="space-y-4">
                {tasks.map((task, index) => (
                  <div 
                    key={task.id} 
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-all duration-300 hover:shadow-md animate-fade-in hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="text-muted-foreground hover:text-productive-success cursor-pointer transition-colors hover:scale-110" size={20} />
                      <div>
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-sm text-muted-foreground">{task.time}</p>
                      </div>
                    </div>
                    <Badge variant={task.priority === 'High' ? 'destructive' : 'secondary'}>
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6 animate-scale-in hover-lift" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold mb-4">Your AI Schedule</h3>
              <div className="bg-muted/30 p-4 rounded-lg backdrop-blur-sm">
                <pre className="text-sm whitespace-pre-wrap text-muted-foreground">
                  {schedule.slice(0, 500)}...
                </pre>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pomodoro Timer */}
            <Card className="glass-card p-6 text-center animate-slide-in-right hover-lift">
              <h3 className="text-lg font-semibold mb-4">Pomodoro Timer</h3>
              <div className="text-4xl font-bold text-productive-purple mb-4 animate-glow">
                {formatTime(pomodoroTime)}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{currentTask}</p>
              <Button 
                variant={isRunning ? "outline" : "productivity"}
                onClick={() => setIsRunning(!isRunning)}
                className="w-full hover:scale-105 transition-transform"
              >
                {isRunning ? (
                  <>
                    <Pause className="mr-2" size={16} />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-2" size={16} />
                    Start Focus
                  </>
                )}
              </Button>
            </Card>

            {/* Performance Stats */}
            <Card className="glass-card p-6 animate-fade-in hover-lift" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold mb-4">Today's Progress</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tasks Completed</span>
                  <span className="font-semibold">0/4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus Time</span>
                  <span className="font-semibold">0h 0m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Productivity Score</span>
                  <span className="font-semibold">0%</span>
                </div>
              </div>
            </Card>

            {/* Focus Tips */}
            <Card className="glass-card p-6 animate-fade-in hover-lift" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-semibold mb-4">Focus Tips</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Use the Pomodoro technique: 25 min work, 5 min break</p>
                <p>• Eliminate distractions during focus sessions</p>
                <p>• Take longer breaks every 4 pomodoros</p>
                <p>• Stay hydrated and take care of yourself</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;