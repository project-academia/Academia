import { Card, Button } from 'flowbite-react';
import Navbar from '../../components/navbar';

export default function StudentDashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
        <p className="text-lg mb-8">Welcome to your student dashboard!</p>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <Card className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Assignments Due</h3>
            <p className="text-3xl font-bold text-blue-600">3</p>
            <Button color="light" className="mt-4">View Assignments</Button>
          </Card>
          <Card className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Upcoming Exams</h3>
            <p className="text-3xl font-bold text-red-600">2</p>
            <Button color="light" className="mt-4">View Exams</Button>
          </Card>
          <Card className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Messages</h3>
            <p className="text-3xl font-bold text-green-600">5</p>
            <Button color="light" className="mt-4">View Messages</Button>
          </Card>
          <Card className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Study Groups</h3>
            <p className="text-3xl font-bold text-purple-600">1</p>
            <Button color="light" className="mt-4">Join Groups</Button>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Completed "Math Homework" - 2 hours ago</li>
            <li>Submitted "History Assignment" - 5 hours ago</li>
            <li>Joined "Physics Study Group" - 1 day ago</li>
            <li>Scheduled "Biology Lab Exam" - 2 days ago</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
