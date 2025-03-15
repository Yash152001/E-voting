import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import VotingBooth from './components/VotingBooth';
import ElectionResults from './components/ElectionResults';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import { candidates, currentElection, currentVoter, adminStats } from './data/mockData';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState('vote');
  const [voter, setVoter] = useState(currentVoter);

  const handleLogin = (voterId, password) => {
    // In a real app, this would authenticate against a blockchain wallet
    if (voterId === 'voter-123' && password === 'password123') {
      setIsAuthenticated(true);
      setIsAdmin(false);
    } else if (voterId === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      setIsAdmin(true);
      setCurrentPage('admin');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    setCurrentPage('vote');
  };

  const handleVoteSubmit = (candidateId) => {
    // In a real app, this would submit the vote to the blockchain
    console.log(`Vote submitted for candidate: ${candidateId}`);
    
    // Update voter status
    setVoter({
      ...voter,
      hasVoted: true
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isAuthenticated={isAuthenticated}
        isAdmin={isAdmin}
        handleLogout={handleLogout}
      />
      
      <main className="flex-grow py-4 px-4">
        {!isAuthenticated ? (
          <Login onLogin={handleLogin} />
        ) : (
          <div className="container mx-auto">
            {currentPage === 'vote' ? (
              <VotingBooth 
                candidates={candidates}
                voter={voter}
                election={currentElection}
                onVoteSubmit={handleVoteSubmit}
              />
            ) : currentPage === 'results' ? (
              <ElectionResults 
                candidates={candidates}
                electionTitle={currentElection.title}
              />
            ) : (
              <AdminDashboard 
                stats={adminStats}
                electionTitle={currentElection.title}
              />
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;