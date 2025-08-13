import React, { useState } from 'react';
import { Trophy, Search, Filter, Flame, Star, Flower, Eye, Crown } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedMonth, setSelectedMonth] = useState('This Month');

  const topStudents = [
    { id: 1, name: 'Ahan Kumar', class: 'Class 8', points: 830, accuracy: 96, lessons: 15, rank: 1, avatar: 'AK' },
    { id: 2, name: 'Hvff', class: 'Class 7', points: 295, accuracy: 94, lessons: 12, rank: 2, avatar: 'HV' },
    { id: 3, name: 'Flower Girl', class: 'Class 6', points: 190, accuracy: 93, lessons: 8, rank: 3, avatar: 'FG' },
    { id: 4, name: '12 June Child Test', class: 'Class 5', points: 165, accuracy: 92, lessons: 6, rank: 4, avatar: '12' },
    { id: 5, name: 'Hcdff', class: 'Class 4', points: 160, accuracy: 91, lessons: 5, rank: 5, avatar: 'HC' },
    { id: 6, name: 'Eva', class: 'Class 3', points: 145, accuracy: 90, lessons: 4, rank: 6, avatar: 'EV' },
    { id: 7, name: 'Alex Thompson', class: 'Class 2', points: 118, accuracy: 85, lessons: 3, rank: 7, avatar: 'AT' },
    { id: 8, name: 'Maya Singh', class: 'Class 1', points: 115, accuracy: 84, lessons: 2, rank: 8, avatar: 'MS' },
    { id: 9, name: 'Rahul Kumar', class: 'Class 8', points: 110, accuracy: 83, lessons: 3, rank: 9, avatar: 'RK' },
    { id: 10, name: 'Priya Sharma', class: 'Class 7', points: 105, accuracy: 82, lessons: 2, rank: 10, avatar: 'PS' },
    { id: 11, name: 'Alex Thompson', class: 'Class 2', points: 118, accuracy: 85, lessons: 3, rank: 11, avatar: 'AT' },
    { id: 12, name: 'Maya Singh', class: 'Class 1', points: 115, accuracy: 84, lessons: 2, rank: 12, avatar: 'MS' },
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-500';
    if (rank === 2) return 'bg-gray-400';
    if (rank === 3) return 'bg-orange-500';
    return 'bg-primary-500';
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-4 h-4 text-yellow-600" />;
    if (rank === 2) return <Trophy className="w-4 h-4 text-gray-600" />;
    if (rank === 3) return <Trophy className="w-4 h-4 text-orange-600" />;
    return <Star className="w-4 h-4 text-primary-600" />;
  };

  const getStudentIcon = (rank: number) => {
    if (rank === 1) return <Flame className="w-4 h-4 text-orange-500" />;
    if (rank === 3) return <Flower className="w-4 h-4 text-red-500" />;
    return <Star className="w-4 h-4 text-yellow-500" />;
  };

  const filteredStudents = topStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedClass === 'All Classes' || student.class === selectedClass)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 lg:p-6">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-600" />
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">School Leaderboard</h1>
        </div>
        <p className="text-gray-600 text-sm lg:text-base">Celebrating our top performers and encouraging healthy competition.</p>
      </div>

      {/* Champions Podium */}
      <div className="chart-card">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-600" />
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Champions Podium</h2>
        </div>
        <p className="text-gray-600 mb-6 text-sm lg:text-base">This month's top 3 achievers.</p>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-4 lg:gap-8 mb-8">
          {/* 2nd Place */}
          <div className="text-center order-2 lg:order-1">
            <div className="relative mb-3">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-base lg:text-lg mb-2">
                {topStudents[1].avatar}
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 lg:w-6 lg:h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                2
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{topStudents[1].name}</h3>
            <p className="text-sm text-gray-600">{topStudents[1].class}</p>
            <div className="bg-gray-100 text-gray-700 px-2 py-1 lg:px-3 lg:py-1 rounded-lg text-xs lg:text-sm font-medium mt-2">
              {topStudents[1].points} pts
            </div>
          </div>

          {/* 1st Place */}
          <div className="text-center order-1 lg:order-2">
            <div className="relative mb-3">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-xl mb-2">
                {topStudents[0].avatar}
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 lg:w-6 lg:h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                1
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{topStudents[0].name}</h3>
            <p className="text-sm text-gray-600">{topStudents[0].class}</p>
            <div className="bg-yellow-100 text-yellow-700 px-2 py-1 lg:px-3 lg:py-1 rounded-lg text-xs lg:text-sm font-medium mt-2">
              {topStudents[0].points} pts
            </div>
            <div className="flex justify-center gap-2 mt-2">
              <Flame className="w-3 h-3 lg:w-4 lg:h-4 text-orange-500" />
              <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-500" />
            </div>
          </div>

          {/* 3rd Place */}
          <div className="text-center order-3">
            <div className="relative mb-3">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-200 rounded-full flex items-center justify-center text-orange-600 font-bold text-base lg:text-lg mb-2">
                {topStudents[2].avatar}
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 lg:w-6 lg:h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{topStudents[2].name}</h3>
            <p className="text-sm text-gray-600">{topStudents[2].class}</p>
            <div className="bg-orange-100 text-orange-700 px-2 py-1 lg:px-3 lg:py-1 rounded-lg text-xs lg:text-sm font-medium mt-2">
              {topStudents[2].points} pts
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="chart-card">
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 lg:w-5 lg:h-5" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10 w-full text-sm lg:text-base"
            />
          </div>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="dropdown w-full lg:w-32 text-sm lg:text-base"
          >
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
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="dropdown w-full lg:w-32 text-sm lg:text-base"
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>
          <button className="btn-secondary flex items-center gap-2 justify-center lg:justify-start text-sm lg:text-base">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Complete Rankings */}
      <div className="chart-card">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-5 h-5 lg:w-6 lg:h-6 text-primary-600" />
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Complete Rankings</h2>
        </div>
        <p className="text-gray-600 mb-6 text-sm lg:text-base">All students ranked by points earned this month.</p>
        
        <div className="space-y-3">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className={`flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg border transition-colors duration-200 ${
                student.rank <= 3 
                  ? student.rank === 1 
                    ? 'bg-yellow-50 border-yellow-200' 
                    : student.rank === 2 
                      ? 'bg-gray-50 border-gray-200'
                      : 'bg-orange-50 border-orange-200'
                  : 'bg-white border-gray-100 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3 w-full lg:w-auto">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-base">
                    {student.avatar}
                  </div>
                  <div className={`absolute -top-1 -right-1 w-4 h-4 lg:w-5 lg:h-5 ${getRankColor(student.rank)} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                    {student.rank}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 text-sm lg:text-base truncate">{student.name}</h3>
                    {getStudentIcon(student.rank)}
                  </div>
                  <p className="text-sm text-gray-600">{student.class}</p>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4 w-full lg:w-auto">
                <div className="text-left lg:text-right">
                  <div className="font-semibold text-gray-900 text-sm lg:text-base">{student.points} points</div>
                  <div className="text-sm text-gray-600">{student.accuracy}%</div>
                </div>
                
                <div className="text-left lg:text-center min-w-[40px] lg:min-w-[60px]">
                  <div className="text-sm text-gray-600">{student.lessons}</div>
                </div>
                
                <button className="btn-primary text-xs lg:text-sm px-3 py-1 lg:px-3 lg:py-1 w-full lg:w-auto">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 lg:p-4 text-center">
          <Trophy className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Current Champion</h4>
          <p className="text-sm text-gray-600">{topStudents[0].name}</p>
          <p className="text-sm text-gray-600">{topStudents[0].points} points</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 lg:p-4 text-center">
          <Flame className="w-6 h-6 lg:w-8 lg:h-8 text-green-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Longest Streak</h4>
          <p className="text-sm text-gray-600">{topStudents[0].name}</p>
          <p className="text-sm text-gray-600">{topStudents[0].lessons} days</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 lg:p-4 text-center">
          <Star className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Most Active</h4>
          <p className="text-sm text-gray-600">{topStudents[0].name}</p>
          <p className="text-sm text-gray-600">{topStudents[0].lessons} lessons</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 lg:p-4 text-center">
          <Trophy className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Highest Accuracy</h4>
          <p className="text-sm text-gray-600">{topStudents[0].name}</p>
          <p className="text-sm text-gray-600">{topStudents[0].accuracy}%</p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard; 