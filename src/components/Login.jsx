import React, { useState } from 'react';
import { KeyRound, User, ShieldCheck } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [voterId, setVoterId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!voterId || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    // In a real app, this would validate against a blockchain wallet or identity system
    onLogin(voterId, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <ShieldCheck size={40} className="text-blue-600" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Secure Voting Portal</h2>
          <p className="mt-2 text-sm text-gray-600">
            Authenticate to access the blockchain-secured voting system
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="voter-id" className="sr-only">Voter ID</label>
              <div className="flex items-center">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  <User size={18} />
                </span>
                <input
                  id="voter-id"
                  name="voterId"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Voter ID"
                  value={voterId}
                  onChange={(e) => setVoterId(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="sr-only">Password or Private Key</label>
              <div className="flex items-center">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  <KeyRound size={18} />
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password or Private Key"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <KeyRound size={18} className="text-blue-300 group-hover:text-blue-400" />
              </span>
              Authenticate
            </button>
          </div>
          
          <div className="text-center text-sm text-gray-600">
            <p>Demo credentials:</p>
            <p>Voter: voter-123 / password123</p>
            <p>Admin: admin / admin123</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;