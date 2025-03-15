const Candidate = {
    id: '',
    name: '',
    party: '',
    position: '',
    imageUrl: ''
  };
  
  const Voter = {
    id: '',
    name: '',
    hasVoted: false
  };
  
  const Election = {
    id: '',
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    isActive: false
  };
  
  const Vote = {
    voterId: '',
    candidateId: '',
    timestamp: '',
    transactionHash: ''
  };
  
  const AdminStats = {
    totalVoters: 0,
    registeredVoters: 0,
    votesSubmitted: 0,
    participationRate: 0,
    electionStatus: 'upcoming' // or 'active' or 'completed'
  };