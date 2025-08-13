import React, { useState } from 'react';
import { Users, Search, Filter, Plus, Eye, Edit, Trash2, Mail, Phone, MapPin, Calendar, GraduationCap } from 'lucide-react';

const Students: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedStatus, setSelectedStatus] = useState('All Students');

  const students = [
    { id: 1, name: 'Ahan Kumar', class: 'Class 8', email: 'ahan.kumar@school.com', phone: '+1-555-0123', status: 'Active', joinDate: '2023-09-01', performance: 96, lessons: 68 },
    { id: 2, name: 'Hvff', class: 'Class 7', email: 'hvff@school.com', phone: '+1-555-0124', status: 'Active', joinDate: '2023-09-01', performance: 94, lessons: 12 },
    { id: 3, name: 'Flower Girl', class: 'Class 6', email: 'flower.girl@school.com', phone: '+1-555-0125', status: 'Active', joinDate: '2023-09-01', performance: 93, lessons: 8 },
    { id: 4, name: '12 June Child Test', class: 'Class 5', email: 'test@school.com', phone: '+1-555-0126', status: 'Active', joinDate: '2023-09-01', performance: 92, lessons: 6 },
    { id: 5, name: 'Hcdff', class: 'Class 4', email: 'hcdff@school.com', phone: '+1-555-0127', status: 'Active', joinDate: '2023-09-01', performance: 91, lessons: 5 },
    { id: 6, name: 'Eva', class: 'Class 3', email: 'eva@school.com', phone: '+1-555-0128', status: 'Active', joinDate: '2023-09-01', performance: 90, lessons: 4 },
    { id: 7, name: 'Alex Thompson', class: 'Class 2', email: 'alex.thompson@school.com', phone: '+1-555-0129', status: 'Active', joinDate: '2023-09-01', performance: 85, lessons: 3 },
    { id: 8, name: 'Maya Singh', class: 'Class 1', email: 'maya.singh@school.com', phone: '+1-555-0130', status: 'Active', joinDate: '2023-09-01', performance: 84, lessons: 2 },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedClass === 'All Classes' || student.class === selectedClass) &&
    (selectedStatus === 'All Students' || student.status === selectedStatus)
  );

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return 'text-green-600';
    if (performance >= 80) return 'text-blue-600';
    if (performance >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceBg = (performance: number) => {
    if (performance >= 90) return 'bg-green-100';
    if (performance >= 80) return 'bg-blue-100';
    if (performance >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Users className="w-8 h-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Students</h1>
            <p className="text-gray-600">Manage student information and performance</p>
          </div>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Student
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="chart-card">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search students by name, email, or class..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10 w-full"
            />
          </div>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="dropdown w-32"
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
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="dropdown w-32"
          >
            <option>All Students</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Suspended</option>
          </select>
          <button className="btn-secondary flex items-center gap-2">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredStudents.map((student) => (
          <div key={student.id} className="student-card">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                {student.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Student Info */}
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{student.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <GraduationCap className="w-4 h-4" />
                  {student.class}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{student.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{student.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {new Date(student.joinDate).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="pt-3 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Performance</span>
                  <span className={`text-sm font-semibold ${getPerformanceColor(student.performance)}`}>
                    {student.performance}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getPerformanceBg(student.performance)}`}
                    style={{ width: `${student.performance}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">Lessons</span>
                  <span className="text-sm font-semibold text-primary-600">{student.lessons}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-3 border-t border-gray-100">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  student.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : student.status === 'Inactive'
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {student.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredStudents.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria.</p>
          <button className="btn-primary">Add New Student</button>
        </div>
      )}

      {/* Load More */}
      {filteredStudents.length > 0 && (
        <div className="text-center">
          <button className="btn-secondary">
            Load More Students (45 remaining)
          </button>
        </div>
      )}
    </div>
  );
};

export default Students; 