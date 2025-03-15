import React, { useState } from 'react';
import { Vote, Check as VoteCheck, LogOut, BarChart3, Menu, X, Shield, User, Settings } from 'lucide-react';

const Header = ({ 
  currentPage, 
  setCurrentPage, 
  isAuthenticated,
  isAdmin,
  handleLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Vote size={28} className="text-blue-300" />
            <h1 className="text-xl font-bold">BlockVote</h1>
          </div>
          
          {isAuthenticated && (
            <nav className="hidden md:flex space-x-4">
              <button 
                onClick={() => setCurrentPage('vote')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md ${
                  currentPage === 'vote' ? 'bg-blue-700' : 'hover:bg-blue-800'
                }`}
              >
                <Vote size={18} />
                <span>Cast Vote</span>
              </button>
              
              <button 
                onClick={() => setCurrentPage('results')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md ${
                  currentPage === 'results' ? 'bg-blue-700' : 'hover:bg-blue-800'
                }`}
              >
                <VoteCheck size={18} />
                <span>Results</span>
              </button>

              {isAdmin && (
                <button 
                  onClick={() => setCurrentPage('admin')}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md ${
                    currentPage === 'admin' ? 'bg-blue-700' : 'hover:bg-blue-800'
                  }`}
                >
                  <BarChart3 size={18} />
                  <span>Admin</span>
                </button>
              )}
              
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-blue-800"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </nav>
          )}
          
          {isAuthenticated && (
            <div className="md:hidden">
              <button 
                className="p-2 rounded-md hover:bg-blue-800"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {isAuthenticated && mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-2">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => handleNavigation('vote')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                  currentPage === 'vote' ? 'bg-blue-700' : 'hover:bg-blue-800'
                }`}
              >
                <Vote size={18} />
                <span>Cast Vote</span>
              </button>
              
              <button 
                onClick={() => handleNavigation('results')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                  currentPage === 'results' ? 'bg-blue-700' : 'hover:bg-blue-800'
                }`}
              >
                <VoteCheck size={18} />
                <span>Results</span>
              </button>

              {isAdmin && (
                <button 
                  onClick={() => handleNavigation('admin')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                    currentPage === 'admin' ? 'bg-blue-700' : 'hover:bg-blue-800'
                  }`}
                >
                  <BarChart3 size={18} />
                  <span>Admin Dashboard</span>
                </button>
              )}
              
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-blue-800"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Admin navbar - only shown when on admin page */}
      {isAuthenticated && isAdmin && currentPage === 'admin' && (
        <div className="bg-blue-800 py-2 px-4">
          <div className="container mx-auto">
            <div className="flex overflow-x-auto hide-scrollbar space-x-4 text-sm">
              <button 
                onClick={() => setCurrentPage('admin')}
                className="flex items-center space-x-1 px-3 py-1 rounded-md bg-blue-700 whitespace-nowrap"
              >
                <BarChart3 size={16} />
                <span>Dashboard</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
                <User size={16} />
                <span>Voters</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
                <Vote size={16} />
                <span>Candidates</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
                <Shield size={16} />
                <span>Security</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 rounded-md hover:bg-blue-700 whitespace-nowrap">
                <Settings size={16} />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;