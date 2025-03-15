import React, { useState } from 'react';
import { Check, AlertTriangle } from 'lucide-react';

const VotingBooth = ({ 
  candidates, 
  voter, 
  election,
  onVoteSubmit 
}) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVoteSubmit = () => {
    if (!selectedCandidate) return;
    
    setIsSubmitting(true);
    
    // Simulate blockchain transaction time
    setTimeout(() => {
      onVoteSubmit(selectedCandidate);
      setIsSubmitting(false);
      setShowConfirmation(false);
    }, 2000);
  };

  if (voter.hasVoted) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Vote Has Been Cast</h2>
          <p className="text-gray-600 mb-4">
            Thank you for participating in the democratic process. Your vote has been securely recorded on the blockchain.
          </p>
          <div className="bg-blue-50 p-4 rounded-md inline-block">
            <p className="text-sm text-blue-800">
              Your vote is anonymous and tamper-proof. The blockchain ensures the integrity of the election.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!election.isActive) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <AlertTriangle size={32} className="text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Election Not Active</h2>
          <p className="text-gray-600">
            This election is not currently active. Voting is only available between{' '}
            {new Date(election.startDate).toLocaleDateString()} and{' '}
            {new Date(election.endDate).toLocaleDateString()}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{election.title}</h2>
        <p className="text-gray-600">{election.description}</p>
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Instructions:</span> Select your preferred candidate and confirm your choice. 
            Once submitted, your vote will be securely recorded on the blockchain and cannot be changed.
          </p>
        </div>
      </div>

      {showConfirmation ? (
        <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
          <h3 className="text-xl font-bold text-center mb-4">Confirm Your Vote</h3>
          
          {selectedCandidate && (
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 overflow-hidden rounded-full mr-4">
                <img 
                  src={candidates.find(c => c.id === selectedCandidate)?.imageUrl} 
                  alt={candidates.find(c => c.id === selectedCandidate)?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-bold">{candidates.find(c => c.id === selectedCandidate)?.name}</p>
                <p className="text-gray-600">{candidates.find(c => c.id === selectedCandidate)?.party}</p>
              </div>
            </div>
          )}
          
          <div className="bg-yellow-50 p-4 rounded-md mb-6">
            <p className="text-sm text-yellow-800">
              <AlertTriangle size={16} className="inline mr-1" />
              This action cannot be undone. Your vote will be permanently recorded on the blockchain.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setShowConfirmation(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
              disabled={isSubmitting}
            >
              Go Back
            </button>
            <button
              onClick={handleVoteSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Confirm Vote'
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {candidates.map((candidate) => (
            <div 
              key={candidate.id}
              onClick={() => setSelectedCandidate(candidate.id)}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedCandidate === candidate.id 
                  ? 'border-blue-500 bg-blue-50 shadow-md' 
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center">
                <div className="w-16 h-16 overflow-hidden rounded-full mr-4">
                  <img 
                    src={candidate.imageUrl} 
                    alt={candidate.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{candidate.name}</h3>
                  <p className="text-gray-600">{candidate.party}</p>
                  <p className="text-sm text-gray-500">{candidate.position}</p>
                </div>
                {selectedCandidate === candidate.id && (
                  <div className="ml-auto">
                    <div className="bg-blue-500 text-white rounded-full p-1">
                      <Check size={20} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedCandidate && !showConfirmation && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowConfirmation(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Continue to Confirm Vote
          </button>
        </div>
      )}
    </div>
  );
};

export default VotingBooth;