import React from 'react';
import { 
  BarChart3, 
  Users, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Settings,
  ArrowUpRight, 
  ArrowDownRight,
  Activity,

  Map,
  Database
} from 'lucide-react';
import { recentVotes, districtData } from '../data/mockData';

const AdminDashboard = ({ stats, electionTitle }) => {
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">
          Monitor and manage the {electionTitle} in real-time
        </p>
      </div>

      {/* Status banner */}
      <div className={`mb-6 p-4 rounded-lg ${
        stats.electionStatus === 'active' 
          ? 'bg-green-100 border-l-4 border-green-500' 
          : stats.electionStatus === 'upcoming'
            ? 'bg-blue-100 border-l-4 border-blue-500'
            : 'bg-gray-100 border-l-4 border-gray-500'
      }`}>
        <div className="flex items-center">
          {stats.electionStatus === 'active' ? (
            <CheckCircle size={24} className="text-green-600 mr-3" />
          ) : stats.electionStatus === 'upcoming' ? (
            <Clock size={24} className="text-blue-600 mr-3" />
          ) : (
            <AlertTriangle size={24} className="text-gray-600 mr-3" />
          )}
          <div>
            <h2 className="font-bold text-lg">
              Election Status: {stats.electionStatus.charAt(0).toUpperCase() + stats.electionStatus.slice(1)}
            </h2>
            <p className="text-sm">
              {stats.electionStatus === 'active' 
                ? 'Voting is currently open and blockchain is recording votes.' 
                : stats.electionStatus === 'upcoming'
                  ? 'Election is scheduled but has not started yet.'
                  : 'Election has ended. Results are finalized.'}
            </p>
          </div>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-500 text-sm font-medium">Total Voters</h3>
            <div className="p-2 bg-blue-100 rounded-full">
              <Users size={20} className="text-blue-600" />
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-2xl font-bold">{stats.totalVoters.toLocaleString()}</p>
            <p className="text-xs text-gray-500 ml-2 mb-1">eligible voters</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-500 text-sm font-medium">Registered Voters</h3>
            <div className="p-2 bg-green-100 rounded-full">
              <CheckCircle size={20} className="text-green-600" />
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-2xl font-bold">{stats.registeredVoters.toLocaleString()}</p>
            <div className="flex items-center ml-2 mb-1">
              <p className="text-xs text-gray-500 mr-1">
                ({((stats.registeredVoters / stats.totalVoters) * 100).toFixed(1)}%)
              </p>
              <ArrowUpRight size={14} className="text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-500 text-sm font-medium">Votes Cast</h3>
            <div className="p-2 bg-purple-100 rounded-full">
              <Activity size={20} className="text-purple-600" />
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-2xl font-bold">{stats.votesSubmitted.toLocaleString()}</p>
            <div className="flex items-center ml-2 mb-1">
              <p className="text-xs text-gray-500 mr-1">
                ({((stats.votesSubmitted / stats.registeredVoters) * 100).toFixed(1)}%)
              </p>
              <ArrowUpRight size={14} className="text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-gray-500 text-sm font-medium">Participation Rate</h3>
            <div className="p-2 bg-yellow-100 rounded-full">
              <Activity size={20} className="text-yellow-600" />
            </div>
          </div>
          <div className="flex items-end">
            <p className="text-2xl font-bold">{stats.participationRate}%</p>
            <div className="flex items-center ml-2 mb-1">
              <p className="text-xs text-gray-500 mr-1">
                (target: 75%)
              </p>
              <ArrowDownRight size={14} className="text-red-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Recent transactions */}
        <div className="bg-white rounded-lg shadow col-span-2">
          <div className="border-b px-4 py-3">
            <h3 className="font-medium flex items-center">
              <Database size={18} className="mr-2 text-blue-600" />
              Recent Blockchain Transactions
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    District
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction Hash
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentVotes.map((vote) => (
                  <tr key={vote.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(vote.time)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {vote.district}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">
                      {vote.hash}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right text-sm">
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              View All Transactions →
            </button>
          </div>
        </div>

        {/* District participation */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b px-4 py-3">
            <h3 className="font-medium flex items-center">
              <Map size={18} className="mr-2 text-blue-600" />
              District Participation
            </h3>
          </div>
          <div className="p-4">
            {districtData.map((district) => (
              <div key={district.id} className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{district.name}</span>
                  <span className="text-sm text-gray-600">{district.participationRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      district.participationRate > 75 ? 'bg-green-600' : 
                      district.participationRate > 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${district.participationRate}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{district.votesSubmitted} votes</span>
                  <span>{district.registeredVoters} registered</span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right text-sm">
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              View Detailed Map →
            </button>
          </div>
        </div>
      </div>

      {/* Admin actions */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b px-4 py-3">
          <h3 className="font-medium">Quick Actions</h3>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors">
            <BarChart3 size={18} className="mr-2 text-blue-600" />
            <span>Generate Reports</span>
          </button>
          <button className="flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors">
            <AlertTriangle size={18} className="mr-2 text-yellow-600" />
            <span>Verify Blockchain</span>
          </button>
          <button className="flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors">
            <Settings size={18} className="mr-2 text-gray-600" />
            <span>System Settings</span>
          </button>
        </div>
      </div>

      {/* Blockchain status */}
      <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium">Blockchain Status: Operational</span>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-mono">Latest Block: #723401</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;