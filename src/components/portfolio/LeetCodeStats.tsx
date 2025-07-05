
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Zap, Award } from "lucide-react";
import { ContributionChart } from "./ContributionChart";

export const LeetCodeStats = () => {
  const stats = [
    {
      title: "Problems Solved",
      value: "547",
      icon: <Target className="h-4 w-4 text-muted-foreground" />,
      change: "+12 this week"
    },
    {
      title: "Contest Rating",
      value: "1,847",
      icon: <Trophy className="h-4 w-4 text-muted-foreground" />,
      change: "Top 15%"
    },
    {
      title: "Streak",
      value: "45 days",
      icon: <Zap className="h-4 w-4 text-muted-foreground" />,
      change: "Current"
    },
    {
      title: "Badges",
      value: "23",
      icon: <Award className="h-4 w-4 text-muted-foreground" />,
      change: "+2 this month"
    }
  ];

  const difficultyStats = [
    { level: "Easy", solved: 187, total: 300, color: "bg-green-500" },
    { level: "Medium", solved: 298, total: 400, color: "bg-yellow-500" },
    { level: "Hard", solved: 62, total: 150, color: "bg-red-500" }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            LeetCode Statistics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Problem Difficulty Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {difficultyStats.map((difficulty, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{difficulty.level}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {difficulty.solved}/{difficulty.total}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`${difficulty.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${(difficulty.solved / difficulty.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                      🏆
                    </div>
                    <div>
                      <p className="font-medium">Weekly Contest 387</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Ranked 234th globally</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      🎯
                    </div>
                    <div>
                      <p className="font-medium">Dynamic Programming Master</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Solved 100 DP problems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      ⚡
                    </div>
                    <div>
                      <p className="font-medium">30-Day Streak</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Consistent daily practice</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <ContributionChart 
            title="LeetCode Problem Solving Activity"
            data={[]}
            type="leetcode"
          />
        </div>
      </div>
    </section>
  );
};