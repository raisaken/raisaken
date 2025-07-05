
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ResponsiveContainer, XAxis, YAxis, Tooltip, Cell, Calendar } from "recharts";

interface ContributionData {
  date: string;
  count: number;
  level: number;
}

interface ContributionChartProps {
  title: string;
  data: ContributionData[];
  type: "github" | "leetcode";
}

export const ContributionChart = ({ title, data, type }: ContributionChartProps) => {
  // Generate mock data for the last 365 days
  const generateMockData = (): ContributionData[] => {
    const mockData: ContributionData[] = [];
    const today = new Date();
    
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Generate random contribution count with some pattern
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      
      let count = 0;
      if (!isWeekend && Math.random() > 0.3) {
        count = Math.floor(Math.random() * (type === "github" ? 15 : 8)) + 1;
      } else if (isWeekend && Math.random() > 0.7) {
        count = Math.floor(Math.random() * (type === "github" ? 8 : 4)) + 1;
      }
      
      let level = 0;
      if (count > 0) {
        if (type === "github") {
          level = count <= 3 ? 1 : count <= 6 ? 2 : count <= 9 ? 3 : 4;
        } else {
          level = count <= 2 ? 1 : count <= 4 ? 2 : count <= 6 ? 3 : 4;
        }
      }
      
      mockData.push({
        date: date.toISOString().split('T')[0],
        count,
        level
      });
    }
    
    return mockData;
  };

  const contributionData = data.length > 0 ? data : generateMockData();
  
  // Get color based on contribution level
  const getColor = (level: number) => {
    if (type === "github") {
      const colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
      return colors[level] || colors[0];
    } else {
      const colors = ["#ebedf0", "#ffa116", "#ff8c00", "#ff6b00", "#ff4500"];
      return colors[level] || colors[0];
    }
  };

  // Create grid for contribution squares (similar to GitHub)
  const createContributionGrid = () => {
    const weeks: ContributionData[][] = [];
    let currentWeek: ContributionData[] = [];
    
    contributionData.forEach((day, index) => {
      const date = new Date(day.date);
      const dayOfWeek = date.getDay();
      
      if (index === 0) {
        // Fill empty days at the beginning of the first week
        for (let i = 0; i < dayOfWeek; i++) {
          currentWeek.push({ date: "", count: 0, level: 0 });
        }
      }
      
      currentWeek.push(day);
      
      if (dayOfWeek === 6 || index === contributionData.length - 1) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    });

    return weeks;
  };

  const weeks = createContributionGrid();
  const totalContributions = contributionData.reduce((sum, day) => sum + day.count, 0);
  const currentStreak = calculateCurrentStreak(contributionData);
  const longestStreak = calculateLongestStreak(contributionData);

  function calculateCurrentStreak(data: ContributionData[]): number {
    let streak = 0;
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].count > 0) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  }

  function calculateLongestStreak(data: ContributionData[]): number {
    let maxStreak = 0;
    let currentStreak = 0;
    
    data.forEach(day => {
      if (day.count > 0) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });
    
    return maxStreak;
  }

  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <div className="text-sm text-muted-foreground">
            {totalContributions} contributions in the last year
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {totalContributions}
              </div>
              <div className="text-sm text-muted-foreground">Total</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {currentStreak}
              </div>
              <div className="text-sm text-muted-foreground">Current Streak</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {longestStreak}
              </div>
              <div className="text-sm text-muted-foreground">Longest Streak</div>
            </div>
          </div>

          {/* Contribution Grid */}
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              {/* Month labels */}
              <div className="flex mb-2 ml-8">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="flex-1 text-xs text-muted-foreground text-center min-w-[43px]">
                    {monthLabels[i]}
                  </div>
                ))}
              </div>
              
              <div className="flex">
                {/* Day labels */}
                <div className="flex flex-col justify-between pr-2 text-xs text-muted-foreground h-[105px]">
                  {dayLabels.map((day, i) => (
                    <div key={i} className={`h-[11px] leading-[11px] ${i % 2 === 0 ? '' : 'opacity-0'}`}>
                      {i % 2 === 0 ? day : ''}
                    </div>
                  ))}
                </div>
                
                {/* Contribution squares */}
                <div className="flex gap-[3px]">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                      {week.map((day, dayIndex) => (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className="w-[11px] h-[11px] rounded-sm border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                          style={{ backgroundColor: getColor(day.level) }}
                          title={day.date ? `${day.count} contributions on ${day.date}` : ''}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-end mt-2 gap-2 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map(level => (
                    <div
                      key={level}
                      className="w-[11px] h-[11px] rounded-sm border border-gray-200 dark:border-gray-700"
                      style={{ backgroundColor: getColor(level) }}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
