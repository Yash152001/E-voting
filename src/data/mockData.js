// import { Candidate, Election, Voter, AdminStats } from '../types';

export const candidates = [
    {
      id: '1',
      name: 'Krishnakanth Gupta',
      party: 'Chill Guy Party',
      position: 'President',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: '2',
      name: 'Anis Khan',
      party: 'Sanam Teri Kasam Party',
      position: 'President',
      imageUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: '3',
      name: 'Anurag Gautam',
      party: 'Indore Party',
      position: 'President',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: '4',
      name: 'Naman Gupta',
      party: 'Gym Party',
      position: 'President',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
  ];
  
  export const currentElection = {
    id: '2025-general',
    title: 'General Election 2025',
    description: 'National presidential election secured by blockchain technology',
    startDate: '2025-11-01T00:00:00Z',
    endDate: '2025-11-08T23:59:59Z',
    isActive: true
  };
  
  export const currentVoter = {
    id: 'voter-123',
    name: 'Sam Wilson',
    hasVoted: false
  };
  
  export const adminStats = {
    totalVoters: 12500,
    registeredVoters: 8750,
    votesSubmitted: 6240,
    participationRate: 71.3,
    electionStatus: 'active'
  };
  
  export const recentVotes = [
    { id: 'tx-1', time: '2025-11-05T14:32:45Z', district: 'District 5', hash: '0x8f4e56a1b7...d2e1f0' },
    { id: 'tx-2', time: '2025-11-05T14:30:12Z', district: 'District 3', hash: '0x7a3b5c9d8...e7f6a5' },
    { id: 'tx-3', time: '2025-11-05T14:28:55Z', district: 'District 1', hash: '0x2e3f4a5b6...c9d8e7' },
    { id: 'tx-4', time: '2025-11-05T14:25:33Z', district: 'District 7', hash: '0x1a2b3c4d5...e6f7a8' },
    { id: 'tx-5', time: '2025-11-05T14:22:18Z', district: 'District 2', hash: '0x9a8b7c6d5...e4f3a2' }
  ];
  
  export const districtData = [
    { id: 1, name: 'District 1', registeredVoters: 1850, votesSubmitted: 1243, participationRate: 67.2 },
    { id: 2, name: 'District 2', registeredVoters: 2100, votesSubmitted: 1678, participationRate: 79.9 },
    { id: 3, name: 'District 3', registeredVoters: 1560, votesSubmitted: 982, participationRate: 63.0 },
    { id: 4, name: 'District 4', registeredVoters: 1240, votesSubmitted: 875, participationRate: 70.6 },
    { id: 5, name: 'District 5', registeredVoters: 1980, votesSubmitted: 1462, participationRate: 73.8 }
  ];