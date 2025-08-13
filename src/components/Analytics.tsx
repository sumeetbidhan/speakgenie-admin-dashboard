import React from 'react';
import { BarChart3, Clock, BookOpen, Users, TrendingUp, Target, Zap, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, ComposedChart, Area } from 'recharts';

const Analytics: React.FC = () => {
  // Mock data for charts
  const skillPerformanceData = [
    { skill: 'Vocabulary', performance: 82, improvement: 5, color: '#3b82f6' },
    { skill: 'Grammar', performance: 78, improvement: 8, color: '#22c55e' },
    { skill: 'Pronunciation', performance: 76, improvement: 12, color: '#f59e0b' },
    { skill: 'Listening', performance: 85, improvement: 3, color: '#8b5cf6' },
    { skill: 'Speaking', performance: 74, improvement: 15, color: '#ef4444' },
  ];

  const engagementData = [
    { month: 'Jan', learningHours: 42, lessons: 24 },
    { month: 'Feb', learningHours: 38, lessons: 22 },
    { month: 'Mar', learningHours: 45, lessons: 26 },
    { month: 'Apr', learningHours: 41, lessons: 23 },
    { month: 'May', learningHours: 48, lessons: 28 },
  ];

  const performanceDistributionData = [
    { name: 'Excellent (85-100%)', value: 60, color: '#22c55e' },
    { name: 'Good (70-84%)', value: 30, color: '#f59e0b' },
    { name: 'Needs Improvement (<70%)', value: 10, color: '#ef4444' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="w-8 h-8 text-primary-600" />
        <h1 className="text-2xl font-bold text-gray-900">Analytics & Reports</h1>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Learning Hours</p>
              <p className="text-3xl font-bold text-primary-600">2,847</p>
              <p className="text-sm text-green-600">+12% from last month</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Lessons Completed</p>
              <p className="text-3xl font-bold text-primary-600">1,892</p>
              <p className="text-sm text-green-600">+18% from last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Session Time</p>
              <p className="text-3xl font-bold text-primary-600">24 min</p>
              <p className="text-sm text-green-600">+8% from last month</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Students</p>
              <p className="text-3xl font-bold text-primary-600">1,156</p>
              <p className="text-sm text-green-600">+5% from last month</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Distribution */}
        <div className="chart-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Performance Distribution</h3>
          <p className="text-gray-600 mb-4">Overall accuracy breakdown across all students.</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={performanceDistributionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {performanceDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 mt-4">
            {performanceDistributionData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Area Performance */}
        <div className="chart-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Average Performance by Skill Area</h3>
          <p className="text-gray-600 mb-4">Individual skill performance metrics and improvements.</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={skillPerformanceData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="skill" type="category" width={80} />
              <Tooltip />
              <Bar dataKey="performance" radius={[0, 4, 4, 0]}>
                {skillPerformanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Month-over-Month Improvement */}
      <div className="chart-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Month-over-Month Improvement</h3>
        <div className="space-y-3">
          {skillPerformanceData.map((skill, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-900">{skill.skill}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-semibold">+{skill.improvement}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Engagement Trends */}
      <div className="chart-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Engagement Trends</h3>
        <p className="text-gray-600 mb-4">Monthly engagement patterns and learning time.</p>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Area 
              yAxisId="left" 
              type="monotone" 
              dataKey="learningHours" 
              fill="#3b82f6" 
              fillOpacity={0.3} 
              stroke="#3b82f6" 
            />
            <Bar yAxisId="right" dataKey="lessons" fill="#22c55e" radius={[4, 4, 0, 0]} />
          </ComposedChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-8 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary-600 rounded"></div>
            <span className="text-sm text-gray-600">Learning Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-600 rounded"></div>
            <span className="text-sm text-gray-600">Lessons Completed</span>
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="chart-card text-center">
          <Target className="w-12 h-12 text-primary-600 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Overall Accuracy</h4>
          <p className="text-3xl font-bold text-primary-600">86.2%</p>
          <p className="text-sm text-green-600">+5% from last month</p>
        </div>

        <div className="chart-card text-center">
          <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Average Streak</h4>
          <p className="text-3xl font-bold text-yellow-600">8.5 days</p>
          <p className="text-sm text-green-600">+2 days from last month</p>
        </div>

        <div className="chart-card text-center">
          <Activity className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Engagement Rate</h4>
          <p className="text-3xl font-bold text-green-600">78.4%</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 