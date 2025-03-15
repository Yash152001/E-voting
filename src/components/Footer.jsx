import React from 'react';
import { Shield, FileText, HelpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield size={20} className="mr-2 text-blue-400" />
              BlockVote
            </h3>
            <p className="text-gray-400 text-sm">
              A secure, transparent, and tamper-proof e-voting system powered by blockchain technology.
              Ensuring the integrity of democratic processes through cryptographic security.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 flex items-center">
                  <FileText size={16} className="mr-2" />
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 flex items-center">
                  <Shield size={16} className="mr-2" />
                  Security Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 flex items-center">
                  <HelpCircle size={16} className="mr-2" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Blockchain Verification</h3>
            <p className="text-gray-400 text-sm mb-2">
              Verify the integrity of the election by accessing the public blockchain:
            </p>
            <div className="bg-gray-700 p-2 rounded text-xs font-mono text-gray-300 overflow-x-auto">
              explorer.blockchain.org/election/2025-general
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BlockVote. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;