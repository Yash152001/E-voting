import React, { useState, useEffect } from 'react';
import { BarChart, Clock, Users } from 'lucide-react';
import { recentVotes, districtData } from '../data/mockData';

const ElectionResults = ({ candidates, electionTitle }) => {
  // In a real app, these would come from blockchain data
  const [results, setResults] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching results from blockchain
    const fetchResults = () => {
      setIsLoading(true);

      // Mock data - in a real app this would be fetched from the blockchain
      setTimeout(() => {
        const mockResults = candidates.map(candidate => ({
          id: candidate.id,
          votes: Math.floor(Math.random() * 1000) + 100
        }));

        const total = mockResults.reduce((sum, item) => sum + item.votes, 0);

        setResults(mockResults);
        setTotalVotes(total);
        setIsLoading(false);
      }, 1500);
    };

    fetchResults();
  }, [candidates]);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mb-4"></div>
          <p className="text-gray-600">Loading election results from the blockchain...</p>
        </div>
      </div>
    );
  }

  // Sort candidates by votes (descending)
  const sortedResults = [...results].sort((a, b) => b.votes - a.votes);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          <BarChart size={24} className="inline-block mr-2 text-blue-600" />
          {electionTitle} Results
        </h2>

        <div className="flex flex-wrap gap-4 mt-4">
          <div className="bg-blue-50 p-3 rounded-md flex items-center">
            <Users size={20} className="text-blue-600 mr-2" />
            <div>
              <p className="text-sm text-blue-800">
                <span className="font-bold">{totalVotes.toLocaleString()}</span> Total Votes
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-3 rounded-md flex items-center">
            <Clock size={20} className="text-green-600 mr-2" />
            <div>
              <p className="text-sm text-green-800">
                <span className="font-bold">Last Updated:</span> {new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {sortedResults.map((result, index) => {
          const candidate = candidates.find(c => c.id === result.id);
          const percentage = ((result.votes / totalVotes) * 100).toFixed(1);

          return (
            <div key={result.id} className="border rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 overflow-hidden rounded-full mr-3">
                  <img 
                    src={candidate?.imageUrl} 
                    alt={candidate?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{candidate?.name}</h3>
                  <p className="text-gray-600">{candidate?.party}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-2xl font-bold text-blue-700">{percentage}%</p>
                  <p className="text-sm text-gray-500">{result.votes.toLocaleString()} votes</p>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    index === 0 ? 'bg-blue-600' : 
                    index === 1 ? 'bg-blue-400' : 'bg-blue-300'
                  }`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-md">
        <h3 className="font-bold mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Blockchain Verification
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          These results are secured and verified by blockchain technology. Each vote is recorded as an immutable transaction.
        </p>
        <div className="bg-white p-2 rounded border border-gray-300 font-mono text-xs text-gray-700 overflow-x-auto">
          <p>Block #723401 | Hash: 0x8f4e56a1b7c9d0e2f3a5b6c9d8e7f6a5b4c3d2e1f0</p>
          <p>Timestamp: {new Date().toISOString()} | Transactions: {totalVotes}</p>
        </div>
      </div>
    </div>
  );
};

export default ElectionResults;