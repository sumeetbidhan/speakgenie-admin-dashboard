import React from 'react';
import { Users, GraduationCap, BarChart3, Trophy, Eye, Star, Flame } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard: React.FC = () => {
  // Mock data for charts
  const enrollmentData = [
    { name: 'Class 1', students: 36 },
    { name: 'Class 2', students: 32 },
    { name: 'Class 3', students: 28 },
    { name: 'Class 4', students: 25 },
    { name: 'Class 5', students: 22 },
    { name: 'Class 6', students: 20 },
    { name: 'Class 7', students: 18 },
    { name: 'Class 8', students: 15 },
  ];

  const performanceData = [
    { name: 'Excellent (90-100%)', value: 45, color: '#22c55e' },
    { name: 'Good (80-89%)', value: 35, color: '#3b82f6' },
    { name: 'Average (70-79%)', value: 15, color: '#f59e0b' },
    { name: 'Needs Improvement', value: 5, color: '#ef4444' },
  ];

  const topStudents = [
    { id: 1, name: 'Ahan Kumar', class: 'Class 8', points: 830, accuracy: 96, streak: 15, lessons: 68, rank: 1 },
    { id: 2, name: 'Hvff', class: 'Class 7', points: 295, accuracy: 94, streak: 12, lessons: 12, rank: 2 },
    { id: 3, name: 'Flower Girl', class: 'Class 6', points: 190, accuracy: 93, streak: 8, lessons: 8, rank: 3 },
    { id: 4, name: '12 June Child Test', class: 'Class 5', points: 165, accuracy: 92, streak: 6, lessons: 6, rank: 4 },
    { id: 5, name: 'Hcdff', class: 'Class 4', points: 160, accuracy: 91, streak: 5, lessons: 5, rank: 5 },
    { id: 6, name: 'Eva', class: 'Class 3', points: 145, accuracy: 90, streak: 4, lessons: 4, rank: 6 },
    { id: 7, name: 'Alex Thompson', class: 'Class 2', points: 118, accuracy: 85, streak: 3, lessons: 3, rank: 7 },
    { id: 8, name: 'Maya Singh', class: 'Class 1', points: 115, accuracy: 84, streak: 2, lessons: 2, rank: 8 },
    { id: 9, name: 'Rahul Kumar', class: 'Class 8', points: 110, accuracy: 83, streak: 3, lessons: 4, rank: 9 },
    { id: 10, name: 'Priya Sharma', class: 'Class 7', points: 105, accuracy: 82, streak: 2, lessons: 3, rank: 10 },
  ];

  const allStudents = [
    { id: 1, name: 'Ahan Kumar', class: 'Class 8', accuracy: 96, xp: 830 },
    { id: 2, name: 'Hvff', class: 'Class 7', accuracy: 94, xp: 295 },
    { id: 3, name: 'Flower Girl', class: 'Class 6', accuracy: 93, xp: 190 },
    { id: 4, name: '12 June Child Test', class: 'Class 5', accuracy: 92, xp: 165 },
    { id: 5, name: 'Hcdff', class: 'Class 4', accuracy: 91, xp: 160 },
    { id: 6, name: 'Eva', class: 'Class 3', accuracy: 90, xp: 145 },
    { id: 7, name: 'Alex Thompson', class: 'Class 2', accuracy: 85, xp: 118 },
    { id: 8, name: 'Maya Singh', class: 'Class 1', accuracy: 84, xp: 115 },
    { id: 9, name: 'Rahul Kumar', class: 'Class 8', accuracy: 83, xp: 110 },
    { id: 10, name: 'Priya Sharma', class: 'Class 7', accuracy: 82, xp: 105 },
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-500';
    if (rank === 2) return 'bg-gray-400';
    if (rank === 3) return 'bg-orange-500';
    return 'bg-primary-500';
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-4 h-4 text-yellow-600" />;
    if (rank === 2) return <Trophy className="w-4 h-4 text-gray-600" />;
    if (rank === 3) return <Trophy className="w-4 h-4 text-orange-600" />;
    return <Star className="w-4 h-4 text-primary-600" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Greenwood Elementary School</h1>
          <p className="text-gray-600 mt-1">Welcome back, School Admin! Here's your school's overview.</p>
        </div>
        <div className="text-right text-sm text-gray-500">
          <p>CBSE Board • Last updated: 12/08/2025, 15:46:57</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-3xl font-bold text-gray-900">245</p>
              <p className="text-sm text-green-600">+12% from last month</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Classes</p>
              <p className="text-3xl font-bold text-gray-900">8</p>
              <p className="text-sm text-green-600">+8% from last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Performance</p>
              <p className="text-3xl font-bold text-gray-900">86.2%</p>
              <p className="text-sm text-green-600">+5% from last month</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Top Performer</p>
              <p className="text-3xl font-bold text-gray-900">830 pts</p>
              <p className="text-sm text-gray-600">Ahan K. Class 8</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="chart-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Class-wise Student Enrollment</h3>
          <p className="text-gray-600 mb-4">Student distribution across different grades</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Distribution</h3>
          <p className="text-gray-600 mb-4">Overall accuracy breakdown across all students</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={performanceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {performanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 mt-4">
            {performanceData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* School Leaderboard */}
      <div className="chart-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">School Leaderboard - Top 10 Champions</h3>
        <p className="text-gray-600 mb-6">Our highest performing students this month with points and achievements</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {topStudents.map((student) => (
            <div key={student.id} className="student-card text-center">
              <div className="relative inline-block mb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {student.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className={`absolute -top-1 -right-1 w-6 h-6 ${getRankColor(student.rank)} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                  #{student.rank}
                </div>
                <div className="absolute -bottom-1 -right-1">
                  {getRankIcon(student.rank)}
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-1">{student.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{student.class}</p>
              <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                {student.points} pts
              </div>
              <p className="text-sm text-gray-600 mb-2">{student.accuracy}% Accuracy</p>
              <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-3">
                <Flame className="w-4 h-4 text-orange-500" />
                <span>{student.lessons} {student.streak} day streak</span>
              </div>
              <button className="btn-primary w-full text-sm">View Profile</button>
            </div>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">Top Scorer</h4>
            <p className="text-sm text-gray-600">Ahan Kumar - 830 pts</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <Flame className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">Longest Streak</h4>
            <p className="text-sm text-gray-600">Ahan Kumar - 15 days</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">Most Lessons</h4>
            <p className="text-sm text-gray-600">Ahan Kumar - 68 lessons</p>
          </div>
        </div>
      </div>

      {/* All Students */}
      <div className="chart-card">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">All Students</h3>
            <p className="text-gray-600">Complete student directory with performance details</p>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search students..."
              className="input-field w-64"
            />
            <select className="dropdown w-32">
              <option>All Classes</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {allStudents.map((student) => (
            <div key={student.id} className="student-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  {student.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 truncate">{student.name}</h4>
                  <p className="text-sm text-gray-600">{student.class}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Accuracy:</span>
                  <span className="font-semibold text-gray-900">{student.accuracy}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">XP:</span>
                  <span className="font-semibold text-primary-600">{student.xp} XP</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-secondary">
            Load More Students (233 remaining)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 